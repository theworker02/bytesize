# Buyer evaluation â€” bytesize

## Goal

In 15â€“45 minutes, verify the Product builds or runs as documented and that proprietary notices are present.

## Steps

1. Confirm root `LICENSE` is proprietary and `ACQUISITION.md` exists.
2. Skim `README.md` install/run claims.
3. Execute:

```
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
```bash
git clone https://github.com/theworker02/bytesize.git
cd bytesize
node src/cli.js --help
```
```bash
node src/cli.js 1.5KiB
node src/cli.js convert 2MB --to MiB
```
```bash
node --test
```
```

4. Run tests if present (`npm test`, `pytest`, `cargo test`, `go test ./...`, etc.).
5. Record README vs observed behavior gaps in workpapers.

## Pass criteria

- [ ] Clone succeeds
- [ ] Documented happy path works **or** failure is explained
- [ ] Minimal path needs no surprise secrets
- [ ] License notices intact

*Updated: 2026-09-22*
