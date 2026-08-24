#!/usr/bin/env node
const { parseSize, formatIec } = require("./index.js");

const input = process.argv[2];
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
