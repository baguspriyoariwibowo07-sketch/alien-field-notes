// Alien Field Notes: The Two-Day Earth — make.fun entry by bagus-priyo.
// Writes a single-line alien tourist review of Earth (<= 200 characters).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

// A travel-review frame ("Four stars", "would orbit again") wrapped
// around three small, true observations of human behaviour.
const ENTRY =
  "Four stars. The locals apologise to furniture, queue for bean water, and wave at machines that cannot see them. Charming, would orbit again.";

const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";

// Count by Unicode code points, not UTF-16 units, so the count
// matches the sealed scorer even if the line gains non-ASCII
// characters later.
function codePointCount(text: string): number {
  return [...text].length;
}

function validateEntry(text: string): void {
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const count = codePointCount(text);
  if (count > MAX_CHARS) {
    throw new Error(`entry is ${count} chars, over the ${MAX_CHARS} limit`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
}

validateEntry(ENTRY);

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${codePointCount(ENTRY)} chars) to ${outputDir}`);
