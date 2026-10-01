import { readdir, readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
const files = await readdir(new URL("../public", import.meta.url), { recursive: true });
const images = files.filter((file) => /\.(avif|gif|jpe?g|png|svg|webp)$/i.test(file));
const hashes = new Set();
for (const file of images) hashes.add(createHash("sha256").update(await readFile(new URL(`../public/${file}`, import.meta.url))).digest("hex"));
console.log("Published products: 0");
console.log(`Visual assets: ${images.length}`);
console.log(`Unique visual hashes: ${hashes.size}`);
