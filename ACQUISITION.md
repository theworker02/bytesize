# Acquisition Brief â€” bytesize

**Date:** 2026-09-22  
**Repository:** https://github.com/theworker02/bytesize  
**Default branch:** `main`  
**Primary language:** JavaScript  
**Status:** Diligence briefing only. **No acquisition has occurred** by virtue of this file.  
**License:** Proprietary â€” sale, written commercial license, or completed asset transfer required (see root `LICENSE`).  
**Valuation:** Not stated.  
**Contact:** GitHub [@theworker02](https://github.com/theworker02) Â· [thanks.dev/u/gh/theworker02](https://thanks.dev/u/gh/theworker02)

> Cloning or forking this repository does **not** grant production, redistribution, SaaS, OEM, or commercial rights.

---

## 1. Executive thesis

This project is **proprietary**. Production use, redistribution, and commercial deployment require a written commercial license or completed acquisition. See [LICENSE](./LICENSE) and [ACQUISITION.md](./ACQUISITION.md). Contact [@theworker02](https://github.com/theworker02). <img src="docs/logo.svg" alt="bytesize mark" width="96" height="96"> **Parse, format, inspect, and convert SI and IEC byte sizes with a tiny runtime-neutral API.**

**Why a buyer cares:** bytesize packages transferable product IP â€” source, docs, in-repo brand assets, and a diligence room under `docs/acquisition/` â€” under a clear proprietary posture so diligence can proceed without mistaking the repo for open source.

---

## 2. Product snapshot

| Item | Detail |
|------|--------|
| Product | bytesize |
| Repo | `theworker02/bytesize` |
| Language | JavaScript |
| Open source? | **No** â€” proprietary |
| Rightsholder | theworker02 |
| Diligence pack | `docs/acquisition/` |

### Capability highlights (from current materials)

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

---

## 3. Problem / opportunity

Teams evaluating bytesize typically need either (a) a commercial right to run or embed it, or (b) outright ownership of the Product IP for strategic build-out. Public GitHub visibility without a proprietary license creates false assumptions about free production use. This brief and the linked data room make the commercial path explicit.

---

## 4. What ships today

Honest maturity: treat repository contents, README claims, tests, and release tags as the source of truth. Do not assume production customers, ARR, filed patents, or SLAs unless separately evidenced in diligence.

Typical transferable surfaces:

- Source tree and build/test scripts present in-repo
- Documentation and design notes
- Acquisition / diligence markdown under `docs/acquisition/`
- Branding assets committed to the repository (if any)

---

## 5. Demo / evaluation path (buyer)

Minimal path (no secrets required unless README says otherwise):

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

Extended evaluation: `docs/acquisition/BUYER_EVALUATION.md`. Written NDA / evaluation grants may be required for private materials.

---

## 6. What a transaction typically includes

Subject to definitive schedules:

| Included (typical) | Excluded (typical) |
|--------------------|--------------------|
| Repo materials + asserted original IP | Seller personal accounts / unrelated repos |
| Docs + diligence room at closing | Third-party dependency source under separate licenses |
| In-repo brand marks as assigned | Secrets without rotation plan |
| Know-how captured in docs | Fabricated revenue, user, or adoption metrics |

---

## 7. Suggested deal structures

| Structure | When it fits |
|-----------|--------------|
| Non-exclusive commercial license | Deploy/run under seat or environment terms |
| Exclusive field-of-use license | Buyer wants exclusivity; seller may retain entity |
| Asset / IP assignment | Buyer wants ownership of Materials outright |
| OEM / redistribution | Separate agreement â€” not implied here |

Commercial terms (price, earnouts, escrow) are negotiated under NDA with counsel.

---

## 8. Buyer diligence checklist

- [ ] Confirm Rightsholder identity and authority to sell/license
- [ ] Inventory Materials (`docs/acquisition/ASSET_INVENTORY.md`)
- [ ] Review IP posture (`IP_PROVENANCE.md`) and dependencies (`DEPENDENCY_INVENTORY.md`)
- [ ] Run evaluation script (`BUYER_EVALUATION.md`)
- [ ] Review risks (`RISK_REGISTER.md`)
- [ ] Agree transfer scope (`TRANSFER_MANIFEST.md`) and handoff (`HANDOFF_CHECKLIST.md`)
- [ ] Supersede root `LICENSE` at closing via definitive agreement

---

## 9. Related documents

| Document | Purpose |
|----------|---------|
| `LICENSE` | Proprietary â€” no default grant |
| `docs/acquisition/README.md` | Data-room index |
| `docs/acquisition/EXECUTIVE_SUMMARY.md` | One-page thesis |
| `README.md` | Product overview |
| `SECURITY.md` | Vulnerability reporting |
| `COMMERCIAL.md` | Licensing contact path |
| `.github/FUNDING.yml` | Sponsors / thanks.dev |

---

## 10. Disclaimer

This package is informational and **does not** create a binding offer, grant of rights, or investment advice. Engage counsel for any transaction.

---

*Document version: 2.0.0 / 2026-09-22 Â· Classification: acquisition briefing*
