import { createHash } from "node:crypto";
import { access, readdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const extensions = /\.(avif|gif|jpe?g|png|svg|webp)$/i;
const corporateBrocoAssets = new Set(["brand/Logo BS - Gradiente.svg", "brand/Logo BS - Negativo.svg"]);
const franzeRoot = resolve(new URL("../public", import.meta.url).pathname);
const nuvolaRoot = process.env.NUVOLA_HOME ? resolve(process.env.NUVOLA_HOME, "public") : resolve(franzeRoot, "../../nuvola-home/public");
await access(nuvolaRoot).catch(() => { throw new Error(`Nuvola checkout not found: ${nuvolaRoot}. Set NUVOLA_HOME to the repository root.`); });
async function inventory(root) { const files = await readdir(root, { recursive: true }); const map = new Map(); for (const file of files.filter((item) => extensions.test(item))) { const path = resolve(root, file); const hash = createHash("sha256").update(await readFile(path)).digest("hex"); map.set(hash, [...(map.get(hash) ?? []), file]); } return map; }
const [franze, nuvola] = await Promise.all([inventory(franzeRoot), inventory(nuvolaRoot)]);
const overlaps = [...franze].filter(([hash, franzePaths]) => nuvola.has(hash) && ![...franzePaths, ...nuvola.get(hash)].every((path) => corporateBrocoAssets.has(path)));
if (overlaps.length) { console.error(`Found ${overlaps.length} forbidden image hash overlap(s):`); for (const [hash, paths] of overlaps) { console.error(`SHA-256 ${hash}`); for (const path of paths) console.error(`  Franze: ${path}`); for (const path of nuvola.get(hash)) console.error(`  Nuvola: ${path}`); } process.exitCode = 1; } else console.log(`No forbidden visual overlaps. Franze: ${[...franze.values()].flat().length}; Nuvola: ${[...nuvola.values()].flat().length}. Allowed corporate Broco assets: ${[...corporateBrocoAssets].join(", ")}.`);
