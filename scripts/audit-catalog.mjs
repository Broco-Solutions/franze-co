import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import catalog from "../src/data/catalog.json" with { type: "json" };

const issues = [];
const seen = new Map();
const hashes = new Map();
for (const product of catalog) {
  for (const field of ["id", "slug", "name", "category", "subcategory", "sourceUrl", "sourceName", "dateCaptured"]) if (!product[field]) issues.push(`${product.slug}: missing ${field}`);
  if (!product.images?.length) issues.push(`${product.slug}: no local image`);
  if (!product.imageSourceUrls?.length) issues.push(`${product.slug}: no source image URL`);
  if (product.images.length !== product.imageSourceUrls.length) issues.push(`${product.slug}: local/source image mapping length differs`);
  for (const [field, value] of [["id", product.id], ["slug", product.slug], ["name", product.name]]) { const key = `${field}:${String(value).toLowerCase()}`; if (seen.has(key)) issues.push(`${product.slug}: duplicate ${key} (also ${seen.get(key)})`); seen.set(key, product.slug); }
  for (const [index, image] of (product.images ?? []).entries()) {
    if (!image.startsWith("/products/") || image.startsWith("http")) issues.push(`${product.slug}: external or invalid local image ${image}`);
    try { const file = await readFile(new URL(`../public${image}`, import.meta.url)); const hash = createHash("sha256").update(file).digest("hex"); const previous = hashes.get(hash); if (previous) issues.push(`${product.slug}: duplicate image ${image} also used by ${previous}`); hashes.set(hash, `${product.slug}:${image}`); } catch { issues.push(`${product.slug}: missing ${image}`); }
    if (!product.imageSourceUrls[index]?.startsWith("https://")) issues.push(`${product.slug}: invalid source URL for ${image}`);
  }
}
if (issues.length) { console.error(`Catalog audit failed (${issues.length} issue(s)):\n${issues.join("\n")}`); process.exitCode = 1; } else console.log(`Catalog audit passed: ${catalog.length} products, ${[...hashes].length} unique product images, ${new Set(catalog.map((product) => product.category)).size} categories.`);
