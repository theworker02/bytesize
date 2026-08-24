# bytesize

<img src="docs/logo.svg" alt="bytesize mark" width="96" height="96">

**Parse human sizes (1.5KiB, 2MB) into bytes, or format an integer byte count as IEC units.**

![version 1.00](https://img.shields.io/badge/version-1.00-C9A227?labelColor=0B1F33)
![branch main](https://img.shields.io/badge/branch-main-0B1F33?labelColor=C9A227)
![license MIT](https://img.shields.io/badge/license-MIT-0B1F33)
![node >=18](https://img.shields.io/badge/node-%3E%3D18-C9A227?labelColor=0B1F33)
![release 1.00](https://img.shields.io/github/v/release/theworker02/bytesize?display_name=release)

Package version **1.00** (`1.0.0`). Default branch is **`main`** — never `master`.

**Docs:** [GitHub Pages](https://theworker02.github.io/bytesize/) · **Source:** [`theworker02/bytesize`](https://github.com/theworker02/bytesize) · **Release 1.00:** [`v1.0.0`](https://github.com/theworker02/bytesize/releases/tag/v1.0.0)

## Why it exists

Scripts mix SI (MB = 1000^2) and IEC (MiB = 1024^2). bytesize makes the conversion explicit and reversible enough for CLI work.

## Who it is for

Authors of upload limits, artifact checks, and docs that need a single source of truth for size strings.

## Install

Requires Node.js 18 or newer. No extra npm dependencies.

### Global install from GitHub

```bash
npm install -g git+https://github.com/theworker02/bytesize.git
bytesize --help
```

### Clone and link locally

```bash
git clone https://github.com/theworker02/bytesize.git
cd bytesize
npm install -g .
```

### Run without installing (npx / node)

```bash
npx --yes git+https://github.com/theworker02/bytesize.git --help
node src/cli.js --help
```

## Quick start

```bash
bytesize 1.5KiB
bytesize 1536
```

Prints `1536` then `1.50KiB`.

## CLI reference

Synopsis:

```text
bytesize [options] <size-or-bytes>
```

| Flag / argument | Meaning |
| --- | --- |
| `-h, --help` | Print detailed usage and exit 0. |
| `-v, --version` | Print 1.0.0 and exit 0. |
| `<digits>` | Integer bytes → IEC string (KiB, MiB, ...). |
| `<n><unit>` | Parse to integer bytes. IEC units end in iB. SI units are KB/MB/GB (base 1000). |

Print the same text locally:

```bash
bytesize --help
bytesize --version
```

Expected version output:

```text
1.0.0
```

## Configuration

No configuration. Parse units: B, KB/MB/GB/TB/PB (SI), KiB/MiB/GiB/TiB/PiB (IEC). Format always uses IEC.

## Exit codes

| Code | Meaning |
| --- | --- |
| `0` | Parsed or formatted. |
| `1` | Missing argument or invalid size string. |

## Examples

### Success path

```bash
bytesize 2MB
bytesize 1048576
```

```text
2000000
1MiB
```

### Failure path

```bash
bytesize potato
```

```text
invalid size: potato
```

Exit code is 1.

## How to run tests

No extra packages. From the repository root:

```bash
npm test
# same as:
node --test
```

All tests must pass before you open a pull request against `main`.

## GitHub Pages

This repository ships a product site in `/docs`.

1. Open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Branch: **`main`**.
4. Folder: **`/docs`**.
5. Save, then wait for the Pages deployment.
6. Open [https://theworker02.github.io/bytesize/](https://theworker02.github.io/bytesize/).

Do not point Pages at `master`. The default branch is `main`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Open pull requests against **`main`**.

## Security

See [SECURITY.md](SECURITY.md). Please report vulnerabilities privately.

## License

[MIT](LICENSE) © 2026 theworker02

## Funding

- GitHub Sponsors: [theworker02](https://github.com/sponsors/theworker02)
- thanks.dev: [https://thanks.dev/u/gh/theworker02](https://thanks.dev/u/gh/theworker02)
