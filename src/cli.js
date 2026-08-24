#!/usr/bin/env node
const { parseSize, formatIec } = require("./index.js");
const { HELP, VERSION } = require("./help.js");

const args = process.argv.slice(2);
if (args.includes("-h") || args.includes("--help")) {
  process.stdout.write(HELP);
  process.exit(0);
}
if (args.includes("-v") || args.includes("--version")) {
  process.stdout.write(`${VERSION}\n`);
  process.exit(0);
}

const input = args.find((a) => !a.startsWith("-"));
if (!input) {
  process.stderr.write("usage: bytesize <1.5KiB|1536>\n");
  process.exit(1);
}
try {
  if (/^[0-9]+$/.test(input)) {
    process.stdout.write(`${formatIec(Number(input))}\n`);
  } else {
    process.stdout.write(`${parseSize(input)}\n`);
  }
} catch (err) {
  process.stderr.write(`${err.message}\n`);
  process.exit(1);
}
