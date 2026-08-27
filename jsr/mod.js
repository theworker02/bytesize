/* @ts-self-types="./mod.d.ts" */

const PACKAGE = Object.freeze({ name: "@theworker02/bytesize", version: "1.2.0", runtime: "universal", registry: "jsr" });
const IEC_UNITS = Object.freeze(["B", "KiB", "MiB", "GiB", "TiB", "PiB"]);
const SI_UNITS = Object.freeze(["B", "KB", "MB", "GB", "TB", "PB"]);

function isSize(input) {
  return /^([0-9]*\.?[0-9]+)\s*([KMGTP]i?B|B)$/i.test(String(input).trim());
}

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

function formatWith(bytes, units, base) {
  let n = Number(bytes);
  if (!Number.isFinite(n) || n < 0) throw new Error(`invalid bytes: ${bytes}`);
  let idx = 0;
  while (n >= base && idx < units.length - 1) {
    n /= base;
    idx += 1;
  }
  const digits = idx === 0 || Number.isInteger(n) ? 0 : 2;
  return `${n.toFixed(digits).replace(/\.00$/, "")}${units[idx]}`;
}

function formatIec(bytes) { return formatWith(bytes, IEC_UNITS, 1024); }
function formatSi(bytes) { return formatWith(bytes, SI_UNITS, 1000); }

function convert(input, to) {
  const bytes = typeof input === "number" || /^[0-9]+$/.test(String(input)) ? Number(input) : parseSize(input);
  const unit = String(to || "").trim();
  if (!unit) throw new Error("convert requires a target unit");
  if (unit.toUpperCase() === "B") return { bytes, text: `${bytes}B`, unit: "B" };
  const iec = /iB$/i.test(unit);
  const order = { K: 1, M: 2, G: 3, T: 4, P: 5 }[unit[0].toUpperCase()];
  if (!order) throw new Error(`invalid unit: ${unit}`);
  const base = iec ? 1024 : 1000;
  const value = bytes / base ** order;
  const text = Number.isInteger(value) ? String(value) : value.toFixed(6).replace(/0+$/, "").replace(/\.$/, "");
  return { bytes, text: `${text}${unit}`, value, unit };
}

function describeUnit(unit) {
  const normalized = String(unit);
  if (normalized === "B") return { unit: "B", system: "bytes", base: 1, power: 0 };
  const iecIndex = IEC_UNITS.indexOf(normalized);
  if (iecIndex > 0) return { unit: normalized, system: "iec", base: 1024, power: iecIndex };
  const siIndex = SI_UNITS.indexOf(normalized);
  if (siIndex > 0) return { unit: normalized, system: "si", base: 1000, power: siIndex };
  throw new Error(`invalid unit: ${unit}`);
}

export { PACKAGE, IEC_UNITS, SI_UNITS, isSize, parseSize, formatIec, formatSi, convert, describeUnit };
