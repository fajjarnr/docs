# Docs Fajar

Documentation scaffold replacing [docs.fajjjar.my.id](https://docs.fajjjar.my.id). Design
system is specified in `DESIGN.md` (Signal Orange accent, Manrope prose, IBM Plex Mono for
technical strings); product facts live in `PRODUCT.md`.

## Stack

- Astro 7, static output
- Bun 1.4 as runtime and package manager
- Cloudflare Pages via Direct Upload (Wrangler)

## Commands

```sh
bun install          # install dependencies
bun run dev          # local dev server
bun run build        # static build to dist/
bun run preview      # preview the built output
bun run deploy       # wrangler pages deploy dist (needs login first)
```

## Deploy to Cloudflare Pages (pending owner go-ahead)

1. `bunx wrangler login` (one time, opens browser OAuth)
2. `bun run deploy`

Or connect the repository in the Cloudflare dashboard with build command `bun run build` and
output directory `dist`. Project name is `docs-fajar`, so the preview URL will be
`docs-fajar.pages.dev`.

`compatibility_date` in `wrangler.toml` is pinned to `2026-10-01`: newer dates fail with
"Compatibility date ... is in the future and unsupported" until Wrangler ships support.
