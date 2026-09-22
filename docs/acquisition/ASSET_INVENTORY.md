# Asset inventory â€” bytesize

## Repository surfaces

| Asset | Location / notes |
|-------|------------------|
| Source tree | Repository root / language packages |
| Tests | `test/`, `tests/`, CI workflows if present |
| Docs | `README.md`, `docs/` |
| Diligence room | `docs/acquisition/` |
| License / notices | `LICENSE`, transition notices if present |
| Funding | `.github/FUNDING.yml` |
| CI | `.github/workflows/` if present |
| Branding | logos/assets folders if present |

## Capability highlights

- Parses values such as `1.5KiB`, `2MB`, and `64B`.
- Formats byte counts using IEC or SI units.
- Converts values between unit systems.
- Exposes unit metadata through `describeUnit()`.
- Provides `IEC_UNITS`, `SI_UNITS`, and `isSize()` for introspection and validation.
- Fully documented TypeScript symbols on JSR.
- Runtime-neutral implementation with no filesystem or platform APIs.
- `parseSize(input)` Ã¢â‚¬â€ parse SI or IEC text into bytes.
- `formatIec(bytes)` Ã¢â‚¬â€ format bytes using binary units.
- `formatSi(bytes)` Ã¢â‚¬â€ format bytes using decimal units.
- `convert(input, unit)` Ã¢â‚¬â€ convert a value to a target unit.
- `isSize(value)` Ã¢â‚¬â€ validate a human-readable size string.

## Usually excluded

Seller personal accounts, unrelated repos, and unreissued registry tokens â€” unless listed in the definitive agreement.

*Updated: 2026-09-22*
