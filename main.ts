// How Many Tabs Do You Have Open? — make.fun entry
// Entry: exactly one number in digits. 137 — far above the field's guess,
// believable for a real tab hoarder, hints at a life of unfinished reading.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "137";

// Gate: entry must be 1–5 characters, digits only, no words or punctuation.
if (!/^\d{1,5}$/.test(LINE)) {
  throw new Error(`tab-count gate fails: ${JSON.stringify(LINE)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
