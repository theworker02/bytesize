/** Parse a human-readable SI or IEC byte-size string into an integer byte count. */
export function parseSize(input: string | number): number;

/** Format a byte count using IEC binary units such as KiB and MiB. */
export function formatIec(bytes: number): string;

/** Format a byte count using SI decimal units such as KB and MB. */
export function formatSi(bytes: number): string;

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

/** Convert a byte-size value to a requested SI or IEC unit. */
export function convert(input: string | number, to: string): ConversionResult;
