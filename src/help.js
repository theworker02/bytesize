const HELP = "bytesize 1.00 (1.0.0)\n\nUsage:\n  bytesize <1.5KiB|2MB|1536>\n  bytesize --help\n  bytesize --version\n\nIf the argument is all digits, format as IEC.\nOtherwise parse a size string to bytes.\n\nIEC (base 1024): KiB MiB GiB TiB PiB\nSI  (base 1000): KB MB GB TB PB\n\nOptions:\n  -h, --help       Show this help\n  -v, --version    Print 1.0.0\n\nExamples:\n  bytesize 1.5KiB\n  bytesize 2MB\n  bytesize 1536\n";
const VERSION = "1.0.0";
module.exports = { HELP, VERSION };
