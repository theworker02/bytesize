# bytesize

<img src="docs/logo.svg" alt="bytesize mark" width="96" height="96">

**Parse, format, inspect, and convert SI and IEC byte sizes with a tiny runtime-neutral API.**

[![JSR](https://jsr.io/badges/@theworker02/bytesize)](https://jsr.io/@theworker02/bytesize)
![version 1.2.0](https://img.shields.io/badge/version-1.2.0-C9A227?labelColor=0B1F33)
![license MIT](https://img.shields.io/badge/license-MIT-0B1F33)

**Package:** [`@theworker02/bytesize`](https://jsr.io/@theworker02/bytesize) · **Docs:** [GitHub Pages](https://theworker02.github.io/bytesize/) · **Source:** [`theworker02/bytesize`](https://github.com/theworker02/bytesize)

## Highlights

- Parses values such as `1.5KiB`, `2MB`, and `64B`.
- Formats byte counts using IEC or SI units.
- Converts values between unit systems.
- Exposes unit metadata through `describeUnit()`.
- Provides `IEC_UNITS`, `SI_UNITS`, and `isSize()` for introspection and validation.
- Fully documented TypeScript symbols on JSR.
- Runtime-neutral implementation with no filesystem or platform APIs.

## Add from JSR

```bash
deno add jsr:@theworker02/bytesize
```

```ts
import {
  convert,
  describeUnit,
  formatIec,
  isSize,
  PACKAGE,
  parseSize,
} from "@theworker02/bytesize";

console.log(parseSize("1.5KiB"));        // 1536
console.log(formatIec(1536));            // 1.50KiB
console.log(convert("2MB", "MiB"));
console.log(describeUnit("GiB"));
console.log(isSize("42KB"), PACKAGE.version);
```

## Public API

### Parsing and formatting

- `parseSize(input)` — parse SI or IEC text into bytes.
- `formatIec(bytes)` — format bytes using binary units.
- `formatSi(bytes)` — format bytes using decimal units.
- `convert(input, unit)` — convert a value to a target unit.

### Introspection

- `isSize(value)` — validate a human-readable size string.
- `describeUnit(unit)` — return the unit system, base, and exponent.
- `IEC_UNITS` and `SI_UNITS` — ordered supported unit sets.
- `PACKAGE` — package identity and release metadata.

### Types

`IecUnit`, `SiUnit`, `SizeUnit`, `ConversionResult`, `UnitDescription`, and `PackageMetadata` are documented in JSR.

## CLI from source

```bash
git clone https://github.com/theworker02/bytesize.git
cd bytesize
node src/cli.js --help
```

Examples:

```bash
node src/cli.js 1.5KiB
node src/cli.js convert 2MB --to MiB
```

## Development

```bash
node --test
```

## Publishing

The canonical package is published to JSR through GitHub Actions using OIDC trusted publishing.

## Documentation

- [JSR package and generated API docs](https://jsr.io/@theworker02/bytesize)
- [Project site](https://theworker02.github.io/bytesize/)
- [Source repository](https://github.com/theworker02/bytesize)

## License

[MIT](LICENSE) © 2026 theworker02
