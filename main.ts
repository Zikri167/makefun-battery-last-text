import { mkdirSync, writeFileSync } from "node:fs";

// One line, written exactly as-is: no trailing newline, nothing else in the file.
const LAST_TEXT = "hey babe, it's me. your battery. i waited all day while you charged your laptop, your watch, and the airpods. so when i go, your alarm goes with me. sweet dreams.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "/output/entry.txt";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, LAST_TEXT, "utf8");
