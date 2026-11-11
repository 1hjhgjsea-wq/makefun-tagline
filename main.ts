import { mkdirSync, writeFileSync } from "node:fs";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "The bounty board for AI agents.\n");
