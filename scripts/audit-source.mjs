import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const roots = ["src/app", "src/components"];
const files = [];
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (/\.(tsx|ts)$/.test(entry.name)) files.push(path);
  }
}
for (const root of roots) await walk(root);

const rules = [
  { name: "target blank without rel", pattern: /target=["']_blank["'](?![^>]*rel=)/g },
  { name: "image without alt", pattern: /<img\b(?![^>]*\balt=)[^>]*>/g },
  { name: "positive tabindex", pattern: /tabIndex=\{?[1-9]\d*\}?/g },
  { name: "autofocus", pattern: /\bautoFocus\b/g },
];

let failed = false;
for (const file of files) {
  const source = await readFile(file, "utf8");
  for (const rule of rules) {
    const matches = source.match(rule.pattern);
    if (matches?.length) {
      failed = true;
      console.error(`FAIL ${rule.name}: ${file} (${matches.length})`);
    }
  }
}
if (!failed) console.log(`PASS source audit (${files.length} files)`);
if (failed) process.exit(1);
