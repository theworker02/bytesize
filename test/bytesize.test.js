const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { spawnSync } = require("node:child_process");
const path = require("node:path");
const { parseSize, formatIec, formatSi, convert } = require("../src/index.js");

const cli = path.join(__dirname, "..", "src", "cli.js");

describe("bytesize", () => {
  it("parses IEC and SI units and formats IEC", () => {
    assert.equal(parseSize("1.5KiB"), 1536);
    assert.equal(parseSize("2MB"), 2000000);
    assert.equal(parseSize("1MiB"), 1048576);
    assert.equal(formatIec(1536), "1.50KiB");
    assert.equal(formatIec(1024), "1KiB");
    assert.equal(formatIec(512), "512B");
  });

  it("formats SI and converts units", () => {
    assert.equal(formatSi(2000000), "2MB");
    assert.equal(convert("1.5KiB", "B").text, "1536B");
    assert.equal(convert(1536, "KiB").text, "1.5KiB");
  });

  it("CLI parse/format/convert and error path", () => {
    const parsed = spawnSync(process.execPath, [cli, "parse", "2MB", "--json"], { encoding: "utf8" });
    assert.equal(parsed.status, 0);
    assert.equal(JSON.parse(parsed.stdout).bytes, 2000000);
    const si = spawnSync(process.execPath, [cli, "format", "2000000", "--si"], { encoding: "utf8" });
    assert.equal(si.status, 0);
    assert.equal(si.stdout.trim(), "2MB");
    const conv = spawnSync(process.execPath, [cli, "convert", "1KiB", "--to", "B"], { encoding: "utf8" });
    assert.equal(conv.status, 0);
    assert.equal(conv.stdout.trim(), "1024B");
    const bad = spawnSync(process.execPath, [cli, "nope"], { encoding: "utf8" });
    assert.equal(bad.status, 1);
    assert.match(bad.stderr, /invalid size/);
  });
});
