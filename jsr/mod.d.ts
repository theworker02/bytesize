/**
 * Parse, format, inspect, and convert SI and IEC byte sizes.
 *
 * @module
 */

/** Supported IEC binary units. */
export type IecUnit = "B" | "KiB" | "MiB" | "GiB" | "TiB" | "PiB";

/** Supported SI decimal units. */
export type SiUnit = "B" | "KB" | "MB" | "GB" | "TB" | "PB";

/** Any unit understood by bytesize. */
export type SizeUnit = IecUnit | SiUnit;

/** Read-only package metadata exposed by bytesize. */
export interface PackageMetadata {
  /** JSR package name. */
  readonly name: "@theworker02/bytesize";
  /** Current package version. */
  readonly version: "1.2.0";
  /** Runtime portability classification. */
  readonly runtime: "universal";
  /** Canonical package registry. */
  readonly registry: "jsr";
}

/** Result returned by {@link convert}. */
export interface ConversionResult {
  /** Original value expressed as bytes. */
  bytes: number;
  /** Formatted target value including its unit. */
  text: string;
  /** Numeric target value when conversion is not to raw bytes. */
  value?: number;
  /** Target unit. */
  unit: string;
}

/** Metadata describing a byte-size unit. */
export interface UnitDescription {
  /** Unit name. */
  unit: string;
  /** Unit system. */
  system: "bytes" | "iec" | "si";
  /** Numeric base used by the unit. */
  base: 1 | 1000 | 1024;
  /** Exponent applied to the base. */
  power: number;
}

/** Package identity and release metadata. */
export const PACKAGE: PackageMetadata;

/** Ordered IEC unit names. */
export const IEC_UNITS: readonly IecUnit[];

/** Ordered SI unit names. */
export const SI_UNITS: readonly SiUnit[];

/** Return whether a value is a valid human-readable byte-size string. */
export function isSize(input: unknown): boolean;

/** Parse a human-readable SI or IEC byte-size string into an integer byte count. */
export function parseSize(input: string): number;

/** Format a byte count using IEC binary units such as KiB and MiB. */
export function formatIec(bytes: number): string;

/** Format a byte count using SI decimal units such as KB and MB. */
export function formatSi(bytes: number): string;

/** Convert a byte-size value to a requested SI or IEC unit. */
export function convert(input: string | number, to: SizeUnit | string): ConversionResult;

/** Describe a supported size unit, including its base and exponent. */
export function describeUnit(unit: SizeUnit | string): UnitDescription;
