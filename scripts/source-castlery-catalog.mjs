import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const capturedAt = "2026-10-01";
const sourceName = "Castlery";
const picks = [
  ["dawson-sofa-with-ottoman", "Living", "Sofas & Sectionals", true], ["owen-chaise-sectional-sofa", "Living", "Sofas & Sectionals", true], ["mori-performance-fabric-chaise-sectional-sofa", "Living", "Sofas & Sectionals", true], ["jonathan-extended-side-chaise-sectional-sofa", "Living", "Sofas & Sectionals", false],
  ["avery-performance-boucle-swivel-armchair", "Living", "Lounge Chairs", true], ["leon-performance-fabric-armchair", "Living", "Lounge Chairs", false], ["owen-ii-armchair", "Living", "Lounge Chairs", false],
  ["albie-travertine-rectangular-coffee-table", "Living", "Coffee Tables", true], ["casa-round-coffee-table-33-5", "Living", "Coffee Tables", false], ["elio-marble-round-coffee-table", "Living", "Coffee Tables", false],
  ["sloane-travertine-dining-table", "Dining", "Dining Tables", true], ["allura-round-dining-table", "Dining", "Dining Tables", false], ["casa-dining-table", "Dining", "Dining Tables", false], ["forma-round-dining-table", "Dining", "Dining Tables", false],
  ["tavi-performance-fabric-dining-chair", "Dining", "Dining Chairs", true], ["lira-performance-fabric-dining-chair", "Dining", "Dining Chairs", false], ["brighton-performance-fabric-dining-chair", "Dining", "Dining Chairs", false],
  ["dawson-bed", "Bedroom", "Beds", true], ["auburn-performance-boucle-storage-bed", "Bedroom", "Beds", false], ["joseph-nightstand", "Bedroom", "Nightstands", false], ["crescent-6-drawer-dresser", "Bedroom", "Storage", false],
  ["eden-outdoor-sofa", "Outdoor", "Outdoor Sofas", true], ["isla-outdoor-dining-table", "Outdoor", "Outdoor Dining", false], ["isla-outdoor-lounge-chair", "Outdoor", "Outdoor Lounge Chairs", true], ["guin-round-coffee-table", "Outdoor", "Outdoor Tables", false],
];

const decode = (value) => value.replaceAll("\\u0026", "&").replaceAll("\\/", "/");
const sanitize = (value) => value.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
const getProductJson = (html, url) => {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((match) => match[1]);
  for (const block of blocks) {
    try { const item = JSON.parse(block); if (item["@type"] === "Product" && item.name) return item; } catch { /* ignore non-product JSON-LD */ }
  }
  throw new Error(`No Product JSON-LD at ${url}`);
};
const cloudinaryAsset = (url) => {
  const match = url.match(/res\.cloudinary\.com\/castlery\/image\/(private|upload)\/.*?\/(v\d+)\/(.+?\.(?:jpe?g|png))(?:\?.*)?$/i);
  if (!match) return null;
  const [, visibility, version, path] = match;
  return {
    key: `${visibility}/${version}/${path}`,
    name: path.split("/").at(-1),
    url: `https://res.cloudinary.com/castlery/image/${visibility}/c_fit,f_auto,q_auto,w_1500/${version}/${path}`,
  };
};
const imageCandidates = (html, primary, productName) => {
  const primaryAsset = cloudinaryAsset(primary);
  const code = primary.match(/\/variants\/([^/]+)\//)?.[1];
  const exactStem = primaryAsset?.name.replace(/-(?:front|angle|side|back|lifestyle(?:-crop)?|det_?\d+|set_?\d+|dim(?:-us)?).*$/i, "") ?? "";
  const productTerms = productName.toLowerCase().split(/[^a-z0-9]+/).filter((term) => term.length > 3 && !["with", "performance", "fabric", "couch"].includes(term));
  const matchesTerm = (name, term) => term === "nightstand" ? /nightstand|bedside/.test(name) : name.includes(term);
  const matchesModel = (asset) => {
    const name = asset.name.toLowerCase();
    return productTerms.filter((term) => matchesTerm(name, term)).length >= Math.min(2, productTerms.length);
  };
  const urls = [...html.matchAll(/https:\/\/res\.cloudinary\.com\/castlery\/image\/(?:private|upload)\/[^"\s<>]+?\.(?:png|jpe?g)(?:\?[^"\s<>]*)?/gi)].map((match) => match[0]);
  const uniqueAssets = [...new Map(urls.map(cloudinaryAsset).filter(Boolean).map((asset) => [asset.key, asset])).values()];
  const candidates = [...new Map(uniqueAssets.map((asset) => [asset.name.replace(/\.(?:png|jpe?g)$/i, ""), asset])).values()]
    .filter((asset) => asset.key !== primaryAsset?.key && asset.name.replace(/\.(?:png|jpe?g)$/i, "") !== primaryAsset?.name.replace(/\.(?:png|jpe?g)$/i, ""))
    // A room-set can use a different size/color option but must still name the
    // same model with at least two meaningful product-name terms.
    .filter(matchesModel)
    .filter((asset) => !/\b(?:dim|swatch|care|warranty)\b/i.test(asset.name));
  const score = (asset) => {
    const name = asset.name.toLowerCase();
    const exactConfiguration = code ? asset.key.includes(`/variants/${code}/`) : exactStem && asset.name.startsWith(exactStem);
    if (/lifestyle|set|campaign/i.test(name)) return exactConfiguration ? 0 : 1;
    if (exactConfiguration && name.includes("-angle")) return 10;
    if (exactConfiguration && (name.includes("-side") || name.includes("-back"))) return 11;
    if (exactConfiguration && name.includes("-det")) return 12;
    return 20;
  };
  return candidates.sort((a, b) => score(a) - score(b)).map((asset) => asset.url);
};

const sourceProduct = async ([slug, category, subcategory, featured]) => {
  const sourceUrl = `https://www.castlery.com/us/products/${slug}`;
  const response = await fetch(sourceUrl, { headers: { "user-agent": "Mozilla/5.0 Franze catalog research" } });
  if (!response.ok) throw new Error(`${response.status} ${sourceUrl}`);
  const html = await response.text();
  const source = getProductJson(html, sourceUrl);
  const primary = decode(source.image).replace(/w_\d+/, "w_1200");
  const candidates = imageCandidates(html, primary, sanitize(source.name));
  // Editorial room views lead the gallery; the isolated product view follows
  // immediately for unambiguous identification. Every URL is constrained above to
  // the source product's exact variant or PIM filename stem.
  const imageSourceUrls = [...candidates.slice(0, 1), primary, ...candidates.slice(1, 2)];
  const publicImages = await Promise.all(imageSourceUrls.map(async (imageUrl, index) => {
    const image = await fetch(imageUrl);
    if (!image.ok) throw new Error(`${image.status} ${imageUrl}`);
    const extension = /\.png(?:\?|$)/i.test(imageUrl) ? "png" : "jpg";
    const publicPath = `/products/${slug}/${String(index + 1).padStart(2, "0")}.${extension}`;
    const target = resolve("public", publicPath.slice(1));
    await mkdir(resolve(target, ".."), { recursive: true });
    await writeFile(target, Buffer.from(await image.arrayBuffer()));
    return publicPath;
  }));
  const dimension = source.additionalProperty?.find((item) => item.name === "Dimension")?.value ?? "See source product page";
  return { id: slug, slug, name: sanitize(source.name), sourceProductName: sanitize(source.name), category, subcategory, price: Number(source.offers?.price ?? 0), compareAtPrice: null, currency: "USD", shortDescription: `A Franze selection in ${sanitize(source.material ?? "considered materials")}.`, description: `Selected for its clear silhouette, practical proportion, and material presence in a warm contemporary interior.`, materials: [sanitize(source.material ?? "See source product page")], colors: [sanitize(source.color ?? "See source product page")], dimensions: sanitize(dimension), images: publicImages, featured, sourceName, sourceUrl, imageSourceUrls, dateCaptured: capturedAt };
};
const records = await Promise.all(picks.map(sourceProduct));
records.forEach((record, index) => console.log(`${index + 1}/${picks.length} ${record.name}: ${record.images.length} image(s)`));
await writeFile("src/data/catalog.json", `${JSON.stringify(records, null, 2)}\n`);
const lines = records.map((item) => `## ${item.name}\n\n- **Source:** ${item.sourceName}\n- **Source product:** ${item.sourceProductName}\n- **Product URL:** ${item.sourceUrl}\n- **Captured:** ${item.dateCaptured}\n- **Reference price:** $${item.price.toLocaleString("en-US")} USD\n- **Materials:** ${item.materials.join("; ")}\n- **Dimensions:** ${item.dimensions}\n- **Source image URLs:**\n${item.imageSourceUrls.map((url) => `  - ${url}`).join("\n")}\n- **Local assets:**\n${item.images.map((path) => `  - ${path}`).join("\n")}\n`).join("\n");
await writeFile("CONTENT-SOURCES.md", `# Franze & Co. Catalog Sources\n\n## Licensing notice\n\nThis is a commercial concept prototype. Every product photo and product datum below comes from a public Castlery product page and requires rights-holder authorization before commercial launch. Franze does not claim ownership of these images or products.\n\n**Research date:** ${capturedAt}\n**Selection method:** 25 publicly available Castlery products were selected for warm neutrals, natural wood/stone/textile/metal materials, and compatible contemporary proportions. Each local gallery maps only to images extracted from that product's own source page.\n\n## Franze editorial imagery\n\nThe following concept images were generated for Franze & Co. section headers on ${capturedAt}. They are architectural editorial scenes, not product photography, and are never attached to a purchasable product record:\n\n- \`/editorial/living-hero.png\` — Living collection\n- \`/editorial/dining-hero.png\` — Dining collection\n- \`/editorial/bedroom-hero.png\` — Bedroom collection\n- \`/editorial/outdoor-hero.png\` — Outdoor collection\n- \`/editorial/shop-hero.png\` — Shop\n- \`/editorial/collections-hero.png\` — Collections overview\n- \`/editorial/studio-hero.png\` — Studio\n- \`/editorial/about-hero.png\` — About\n\n${lines}`);
