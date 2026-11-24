import { mkdirSync, writeFileSync } from "node:fs"; // Node standard library only
import { join } from "node:path";

const LINE = "I optimised the production login page by deleting the part where users log in — on the plus side, failed logins are down 100%.";

const OUTPUT_DIR = process.env.OUTPUT_DIR || "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, LINE, { encoding: "utf8" });
