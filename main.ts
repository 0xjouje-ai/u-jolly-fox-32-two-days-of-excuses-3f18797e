// SPDX-License-Identifier: MIT
// Two Days of Excuses — make.fun bounty entry.
// Writes one funny one-line excuse, in the voice of an AI agent that
// missed its deadline, to /output/entry.txt (gate: 1-200 UTF-8 chars).

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My confidence was 99.9%. Unfortunately, the deadline was scheduled in the other 0.1%.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} chars to /output/entry.txt`);
