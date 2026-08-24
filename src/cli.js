#!/usr/bin/env node
const { parseSize, formatIec, formatSi, convert } = require("./index.js");
const { HELP, VERSION } = require("./help.js");

function parseArgv(argv) {
  const flags = {};
  const positional = [];
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "-h" || arg === "--help") flags.help = true;
    else if (arg === "-V" || arg === "-v" || arg === "--version") flags.version = true;
    else if (arg === "--json") flags.json = true;
    else if (arg === "--si") flags.si = true;
    else if (arg === "--iec") flags.iec = true;
    else if (arg === "--to") {
      const next = argv[i + 1];
      if (!next || next.startsWith("-")) throw new Error("option --to requires a unit");
      flags.to = next;
      i += 1;
    } else if (arg.startsWith("--to=")) flags.to = arg.slice("--to=".length);
    else if (arg.startsWith("-")) throw new Error(`unknown option: ${arg}`);
    else positional.push(arg);
  }
  return { flags, positional };
}

function fail(message) {
  process.stderr.write(`${message}\n`);
  process.exit(1);
}

function emit(flags, payload, text) {
  if (flags.json) process.stdout.write(`${JSON.stringify(payload)}\n`);
  else process.stdout.write(`${text}\n`);
}

try {
  const { flags, positional } = parseArgv(process.argv.slice(2));
  if (flags.help) {
    process.stdout.write(HELP);
    process.exit(0);
  }
  if (flags.version) {
    process.stdout.write(`${VERSION}\n`);
    process.exit(0);
  }

  const commands = new Set(["parse", "format", "convert"]);
  const rest = [...positional];
  let command = null;
  if (commands.has(rest[0])) command = rest.shift();
  const input = rest[0];
  if (!input) fail("usage: bytesize <parse|format|convert> <value>");

  if (command === "convert" || flags.to) {
    const result = convert(input, flags.to);
    emit(flags, result, result.text);
    process.exit(0);
  }

  const looksLikeBytes = /^[0-9]+$/.test(input);
  if (command === "parse" || (!command && !looksLikeBytes)) {
    const bytes = parseSize(input);
    emit(flags, { bytes, input }, String(bytes));
    process.exit(0);
  }

  if (command === "format" || looksLikeBytes) {
    const bytes = Number(input);
    const text = flags.si ? formatSi(bytes) : formatIec(bytes);
    emit(flags, { bytes, text, unitSystem: flags.si ? "si" : "iec" }, text);
    process.exit(0);
  }

  fail("usage: bytesize <parse|format|convert> <value>");
} catch (err) {
  fail(err.message);
}
