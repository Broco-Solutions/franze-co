import { readdir, readFile } from "node:fs/promises";

const source = await readFile(new URL("../src/data/products.ts", import.meta.url), "utf8");

export const productBlocks = source
  .split("  product({")
  .slice(1)
  .map((block) => block.split("\n  }),")[0]);

const stringField = (block, field) => {
  const match = block.match(new RegExp(`${field}: [\"']([^\"']+)[\"']`));
  if (!match) throw new Error(`Missing ${field} in catalog block`);
  return match[1];
};

const numberField = (block, field) => {
  const match = block.match(new RegExp(`${field}: (null|[0-9.]+)`));
  if (!match) throw new Error(`Missing ${field} in catalog block`);
  return match[1] === "null" ? null : Number(match[1]);
};

export const sourceProducts = await Promise.all(productBlocks.map(async (block) => {
  const imageBlock = block.match(/imageSourceUrls: \[([\s\S]*?)\]/)?.[1] ?? "";
  const imageSourceUrls = [...imageBlock.matchAll(/"(https:\/\/[^\"]+)"/g)].map((match) => match[1]);
  const slug = stringField(block, "slug");

  return {
    slug,
    name: stringField(block, "name"),
    sourceProductName: stringField(block, "sourceProductName"),
    category: stringField(block, "category"),
    price: numberField(block, "price"),
    compareAtPrice: numberField(block, "compareAtPrice"),
    sourceUrl: `https://modani.com/products/${slug}`,
    imageSourceUrls,
    localAssetPaths: (await readdir(new URL(`../public/products/${slug}/`, import.meta.url)))
      .filter((file) => file.endsWith(".webp"))
      .sort()
      .map((file) => `/products/${slug}/${file}`),
  };
}));
