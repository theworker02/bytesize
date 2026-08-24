const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { parseSize, formatIec } = require("../src/index.js");

describe("bytesize", () => {
  it("parses IEC and SI units and formats IEC", () => {
    assert.equal(parseSize("1.5KiB"), 1536);
    assert.equal(parseSize("2MB"), 2000000);
    assert.equal(parseSize("1MiB"), 1048576);
    assert.equal(formatIec(1536), "1.50KiB");
    assert.equal(formatIec(1024), "1KiB");
    assert.equal(formatIec(512), "512B");
  });
});
