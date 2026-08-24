const HELP = `bytesize 1.00 (1.0.0)

Usage:
  bytesize parse <size> [options]
  bytesize format <bytes> [options]
  bytesize convert <size-or-bytes> --to <unit> [options]
  bytesize <1.5KiB|2MB|1536>

Parse human sizes into bytes, or format an integer byte count.

IEC (base 1024): KiB MiB GiB TiB PiB
SI  (base 1000): KB MB GB TB PB

Subcommands:
  parse              Convert a size string to a byte count
  format             Format a byte count using --iec (default) or --si
  convert            Convert a size into another unit via --to

If the first argument is all digits, format it. Otherwise parse it.
That shorthand still works without a subcommand.

Options:
  -h, --help         Show this help and exit 0
  -V, -v, --version  Print 1.0.0 and exit 0
  --json             {"bytes","text",...}
  --si               SI units for format (KB, MB, ...)
  --iec              IEC units for format (default)
  --to <unit>        Target unit for convert (KiB, MB, B, ...)

Exit codes:
  0  parsed or formatted successfully
  1  invalid size, invalid unit, or missing argument

Examples:
  bytesize 1.5KiB
  bytesize 1536
  bytesize parse 2MB --json
  bytesize format 2000000 --si
  bytesize convert 1.5KiB --to B
`;

const VERSION = "1.0.0";
module.exports = { HELP, VERSION };
