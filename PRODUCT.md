# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7.3.8 on Bun 1.4.0 (runtime and package manager, owner's choice; Bun-managed lockfile).
Static output with no Cloudflare adapter until an edge runtime is actually needed. Deploy
target decided by the owner: Cloudflare Pages via Direct Upload (Wrangler). The deploy itself
is on hold at the owner's instruction; `bun run deploy` runs `wrangler pages deploy dist`
against the project name `docs-fajar`, which needs `bunx wrangler login` first.

## Users

Inherited from the reference site being cloned (documentation.gravitee.io, audience confirmed by
its content structure): API developers and platform teams publishing, securing, and observing
APIs across gateways, plus technical writers maintaining versioned module docs. The clone
will serve the documentation audience of the owner's own product once real content replaces the
reference content. Both audiences read on desktop while working through a technical setup, and
skim for a specific endpoint or error on mobile.

## Product Purpose

A documentation site foundation for the owner's own product, modeled page-for-page on the
reference docs: a module-forward home, versioned section landings, three-column article pages,
and a dated changelog, with search, an assistant entry point, and versioning. Success means
a user completes a technical setup task by reading, without contacting support.

## Positioning

The mechanism a neighboring clone could not copy: a token-level design system measured from a
live versioned Gravitee documentation site (colors, type scale, shell dimensions, component
behavior) rather than approximated, plus content structure proven at that scale. It is a
foundation to receive the owner's real product content, not a content product of its own.

## Operating Context

Readers arrive from support answers, onboarding flows, and search engines, often mid-task.
Observed workflows from the reference: search or ask first, then module browsing for context;
copying configuration snippets verbatim; checking a changelog entry for recent changes;
comparing version-specific setup steps in tables. Platform teams navigate many versioned
sections and need stable URLs per article.

## Capabilities and Constraints

- Confirmed capabilities to build, per DESIGN.md: sticky two-row header with search and section
  tabs; sidebar tree (three levels, thin line icons, active state in Signal Orange); article
  layout (18rem sidebar, 768px content, TOC rail); module card grids with geometric motifs;
  changelog with status chips and date navigation; code blocks with copy buttons; "Last updated"
  per page; feedback widget; version selector; full dark scale beside the light default.
- Optional, hidden until needed: version selector above the sidebar, multi-product tabs,
  assistant panel (structure only until a real assistant or stub is decided).
- Brand is a neutral placeholder by owner decision: name and logo are placeholders; colors and
  forms follow DESIGN.md. Gravitee brand assets (logo PNG variants, wordmark) stay out of
  the UI.
- Constraints: no real content, statistics, testimonials, or compliance claims may be invented;
  every displayed claim needs a real source or stays out. No fabrication of the reference
  product's content as the owner's own.
- Undecided: which product's content the site will carry; whether search and the assistant are
  real, stubbed, or omitted at first; content migration path from the reference site if any.

## Brand Commitments

authority: light-first, Signal Orange #FF8A00 as the single accent, warm red-tinted neutrals,
Manrope for prose, IBM Plex Mono for technical strings, 12px radius discipline, restrained
motion. Placeholder brand by explicit owner choice; a real name and logo replace the
placeholder when the owner supplies them.

## Evidence on Hand

- DESIGN.md and .impeccable/design.json: tokens, ramps, components, and page-type recipes
  measured from https://documentation.gravitee.io on 2026-10-11 via markup, CSS custom
  properties, computed styles, and screenshots (home, module landing, article, changelog,
  versioned APIM 4.11 sub-site, mobile 390px).
- Earlier reference: https://helpcenter.channable.com, same GitBook shell, different theme;
  contributed the card-forward home and changelog patterns. Its light-first cyan theme,
  Montserrat, and blue-grey neutrals were replaced by the Gravitee direction.
- Original request on record: clone every page of the reference help center, capture the design
  concept, no code until DESIGN.md was complete.
- Absences to respect: no real product content, no analytics, no user research for the owner's
  own product, no brand assets, no testimonials or performance data.

## Product Principles

1. Reading first: every page exists to complete one comprehension task; decoration that does
   not serve comprehension is removed.
2. One accent: navigation state must be readable at a glance, so Signal Orange marks the primary
   action, the active tab, and the active sidebar item, and nothing else on a screen.
3. Copyable precision: anything a user would copy (field names, gateway names, config,
   snippets) is monospaced and one click from the clipboard.
4. Depth without drowning: the information architecture must survive hundreds of pages through
   search, a three-level sidebar, and stable per-article URLs.
5. Placeholder honesty: empty or labeled placeholder beats invented content, statistics, or
   claims.

Target WCAG 2.1 AA. Measured contrast facts from the reference palette that the build must
handle, not copy blindly:
- Body text #9B5950 on #FFFFFF passes AA for normal text.
- On-signal Ink #1D1D1D on Signal Orange #FF8A00 measures about 7.1:1: passes AA for
  normal text; use ink text on orange buttons, never white on orange.
- Warm Veil #FFC9C0 borders on #FFFFFF are decorative only, never essential text.
- Orange as active link or tab text at 14px is signaled by underline and marker rather
  than color alone.
- Keyboard: all navigation, search, and controls reachable with visible focus; dialogs and the
  assistant panel closable with Escape; `motion-reduce` honored, as in the source.
