const IEC = ["B", "KiB", "MiB", "GiB", "TiB", "PiB"];

function parseSize(input) {
  const match = String(input).trim().match(/^([0-9]*\.?[0-9]+)\s*([KMGTP]i?B|B)$/i);
  if (!match) throw new Error(`invalid size: ${input}`);
  const value = Number(match[1]);
  const unit = match[2];
  if (unit.toUpperCase() === "B") return Math.round(value);
  const iec = /iB$/i.test(unit);
  const order = { K: 1, M: 2, G: 3, T: 4, P: 5 }[unit[0].toUpperCase()];
  const base = iec ? 1024 : 1000;
  return Math.round(value * base ** order);
}

function formatIec(bytes) {
  let n = Number(bytes);
  if (!Number.isFinite(n) || n < 0) throw new Error(`invalid bytes: ${bytes}`);
  let idx = 0;
  while (n >= 1024 && idx < IEC.length - 1) {
    n /= 1024;
    idx += 1;
  }
  const digits = idx === 0 || Number.isInteger(n) ? 0 : 2;
  return `${n.toFixed(digits).replace(/\.00$/, "")}${IEC[idx]}`;
}

module.exports = { parseSize, formatIec };
