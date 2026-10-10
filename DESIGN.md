---
name: "Docs Fajar"
description: "Documentation design system cloned from documentation.gravitee.io: light-first, one orange signal, warm-tinted neutrals, Manrope plus IBM Plex Mono."
colors:
  primary: "#FF8A00"
  primary-hover: "#DE6C00"
  primary-muted: "#9B5950"
  primary-strong: "#271917"
  primary-ink: "#1D1D1D"
  surface: "#FFFFFF"
  surface-raised: "#FFF2F0"
  foreground: #271917
  text-body: "#9B5950"
  text-secondary: "#9B5950"
  border: "#FFC9C0"
  header-background: "#D10000"
  info: "#22A3B3"
  info-soft: "#E7F3F5"
  info-ink: "#1D1D20"
  warning: "#FF8A00"
  warning-ink: "#1D1D1D"
  danger: "#80004D"
  success: "#22A3B3"
  mono-surface: "#FFF2F0"
typography:
  headline: { fontFamily: "Manrope, sans-serif", fontSize: "36px", fontWeight: 700 }
  body: { fontFamily: "Manrope, sans-serif", fontSize: "18px", fontWeight: 400, lineHeight: "28px" }
  label: { fontFamily: "Manrope, sans-serif", fontSize: "14px", fontWeight: 500 }
  mono: { fontFamily: "IBM Plex Mono, monospace", fontWeight: 400 }
rounded:
  sm: "6px"
  md: "12px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.primary-ink}", rounded: "{rounded.md}", padding: "8px 16px" }
  button-primary-hover: { backgroundColor: "{colors.primary-hover}", textColor: "{colors.primary-ink}", rounded: "{rounded.md}", padding: "8px 16px" }
  button-secondary: { backgroundColor: "{colors.surface-raised}", textColor: "{colors.foreground}", rounded: "{rounded.md}", padding: "8px 16px" }
  search-field: { backgroundColor: "{colors.surface-raised}", rounded: "{rounded.md}", padding: "8px 12px" }
  section-tab: { textColor: "{colors.text-body}", typography: "{typography.label}" }
  section-tab-active: { textColor: "{colors.primary}", typography: "{typography.label}" }
  sidebar-link: { textColor: "{colors.foreground}", typography: "{typography.label}" }
  sidebar-link-active: { textColor: "{colors.primary}", typography: "{typography.label}" }
  chip-tag: { backgroundColor: "{colors.surface-raised}", textColor: "{colors.foreground}", rounded: "{rounded.sm}" }
  callout-info: { backgroundColor: "{colors.info-soft}", textColor: "{colors.info-ink}", rounded: "{rounded.md}" }
---

# Design System: Docs Fajar (Gravitee system)

## Overview

**Creative North Star: "The Signal in the Light"**

This system is cloned from the live Gravitee documentation (documentation.gravitee.io, a GitBook
site carrying Gravitee's own theme configuration), observed on 2026-10-11 through markup, CSS
tokens, computed styles, and screenshots of every page type, including the versioned APIM 4.11
sub-site. The stance: a bright reading room where one orange signal does all the wayfinding. Warm,
red-tinted neutrals keep long reading calm in daylight; a true monospace carries every technical
string; and the shell behaves the same across seven product modules and twelve content versions
of one product.

**Key Characteristics:**
- Light-first with a complete dark scale; dark is the opt-out, never a broken mode.
- One signal: Signal Orange (#FF8A00) on no more than a few affordances per screen.
- Neutrals are warm and red-tinted, never pure grey.
- Radius discipline: 12px for every interactive and content container.
- Motion is a whisper: hover lift, state transitions, panel fade. Nothing performs.

## Colors

The palette is primary orange plus a warm red-tinted neutral ramp plus four semantic colors, all
as 12-step scales (full ramps for both modes in `.impeccable/design.json`). Light values below
are the default; dark mode swaps in the values listed under "Dark mode".

### Primary
- **Signal Orange** (#FF8A00): the accent. Primary buttons, active section tab and its 2px
  underline, active sidebar item, focus rings, progress bar, icon highlights.
- **Deep Orange** (#DE6C00): hover state of solid primary surfaces only.
- **Amber Ink** (#E5B593): orange-family text on dark surfaces (labels, placeholder chips).
- **Signal White** (#FFFCF4): strong text and icons that need a warm near-white.
- **On-signal Ink** (#1D1D1D): the only text color allowed on orange surfaces. Measures 7.1:1
  against Signal Orange; white on orange was rejected for contrast.

### Neutral (light default, dark alternative)
- **Paper** (#FFFFFF): page surface. Dark mode uses Workshop #1D1D1D.
- **Raised** (#FFF2F0): cards, code blocks, popovers. Dark mode uses #252121.
- **Warm Veil** (#FFC9C0): borders, inputs, dividers. Dark mode uses #563C38.
- **Warm Mist** (#9B5950): secondary text and passive icons. Dark mode uses #C56457.
- **Body** (#9B5950): article body text, 18px on 28px. Dark mode uses #DFB5AE.
- **Ink** (#271917): headings and strong text. Dark mode uses Chalk #FFFCFA.
- **Header Veil** (#D10000 light, #600000 dark): token behind the header. The header renders a
  warm light gradient (white to #FFF2F0 at 88% opacity with backdrop blur), never a flat fill.

### Semantic (status and callouts only)
- **Info / Success** (#22A3B3 teal) on **Info Soft** (#E7F3F5 light, #262D2F dark): informational
- **Warning** (#FF8A00) with **Warning Ink** (#1D1D1D): caution callouts and status labels.
- **Danger** (#80004D light, #CB548D dark): error callouts and destructive states.

### Brand
- The interface is deliberately quieter than the brand mark. Source brand assets (the Gravitee
  docs logo PNG, light and white variants) are replaced by the Docs Fajar wordmark; no source
  logo colors enter the palette.

### Named Rules
**The One Signal Rule.** Signal Orange appears on at most a few affordances per screen: the
primary action, the active tab, the active sidebar item. Its rarity is what makes navigation
readable at a glance in the light.

**The Warm Neutral Rule.** Every neutral is tinted toward red and amber. Pure grey (#808080
family) is never used for borders, body text, or surfaces.

**The Light-First Rule.** Light is the default and the mode this system is specified in. Dark is
a complete, first-class opt-out with its own scale, not an inversion.

## Typography

**Headline/Body Font:** Manrope (400, 600, 700) with sans-serif fallback.
**Label/Mono Font:** IBM Plex Mono (400, 500, 600, 700) for all code and technical strings.
Emoji render in Noto Color Emoji, matching the source.

**Character:** Manrope's semi-geometric warmth carries the voice in daylight; IBM Plex Mono carries
the technical payload so parameters, field names, and channel names never blur into prose.

### Hierarchy
- **Headline** (700, 36px, Ink): page H1 only. One per page, including the home hero.
- **Body** (400, 18px, line-height 28px, Body #9B5950): article paragraphs; measure capped near
- **Label** (500, 14px): section tabs, sidebar links, breadcrumbs, chip text, and small
  uppercase group labels in the sidebar.
- **Mono** (400, IBM Plex Mono): inline code, code blocks, field names, channel names, URLs.

### Named Rules
**The Two-Track Type Rule.** Prose stays in Manrope; anything a user might copy (a field name, a
config key, a channel identifier, a snippet) switches to IBM Plex Mono. If it is technical, it
is monospaced.

## Layout

- **Shell:** max-width 1536px container, centered, page padding 16px on mobile, 24px from 640px,
  32px from 768px.
- **Header:** 109px total, two rows. Row one is 64px: logo, centered search with a Cmd+K hint,
  right-side actions (only real destinations; ghost links forbidden). Row two holds the section
  tabs, horizontally scrollable, plus the version selector on versioned sections. Sticky,
  z-30, hairline bottom edge, blurred warm gradient backdrop.
- **Reading room:** three columns on desktop: sidebar tree 18rem, content column 768px, right
  "On this page" TOC rail.
- **Home:** H1 plus a bold one-line positioning statement, a centered search bar (the focal
  point), then a "Get started" card row, a large two-column "Modules" grid with one geometric
  orange motif per module, a "What X can do for you" three-card row, a "What's new?" row to the
  changelog, and an optional "classic consoles" link row for legacy docs.
- **Mobile (390px verified):** single column, content 358px wide, no horizontal scroll; sidebar
  becomes a TOC drawer behind a header button; header actions collapse into a More menu and the
  header search hides, leaving the hero search.
- **Spacing rhythm:** 8 / 16 / 24 / 32px. Consistent across breakpoints; whitespace separates
  sections, not background flips.

## Elevation & Depth

Flat at rest, lifted on interaction. Depth comes first from the warm tonal ramp (surfaces step
Workshop to Raised to Warm Veil), then from one restrained shadow vocabulary: a small ambient
shadow at rest on interactive elements, a larger ambient shadow on hover and focus, and a 1px
hover lift. The header is the one layered element: a hairline plus a blurred, semi-transparent
warm gradient so scrolling content never collides with it. Exactly one luminous element exists
in the whole system: the assistant panel's glow, reserved for the AI surface.

### Shadow Vocabulary
- **Hairline** (`0 1px 0 rgb(28 29 30 / 0.02)` dark, hairline light): header bottom edge only.
- **Ambient-low**: rest state on buttons, inputs, cards. Small, low-blur.
- **Ambient-high**: hover and focus, paired with `translateY(-1px)` and a primary focus ring.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadow and lift appear only as a
response to state (hover, focus, expand).

## Shapes

One radius language: 12px for buttons, inputs, search, cards, code blocks, tabs, and callouts;
6px for keyboard hints (kbd). No pill-shaped buttons or cards, no square-cornered islands, no
mixed radii within one component. Borders are 1px in Warm Veil; the header's only border is its
hairline shadow.

## Components

### Buttons
- **Shape:** 12px radius, padding 8px 16px, minimum height 44px for touch.
- **Primary:** Signal Orange background, On-signal Ink text; hover Deep Orange plus 1px lift.
- **Secondary:** Raised surface background, Chalk text, 1px Warm Veil border.
- **Ghost:** transparent, Chalk text, Raised hover background; used in the header.
- **Focus:** visible ring in Signal Orange; hover lifts 1px. All keyboard reachable.

### Search Field
- 12px radius, Raised fill, 1px Warm Veil border, padding 8px 12px, leading search icon,
  trailing Cmd+K keyboard hint. Focus raises shadow and switches the border to Signal Orange.
  Real behavior required: results from a live index, an explicit empty state, keyboard
  navigation, and Escape to dismiss. A search field that does nothing does not ship.

### Section Tabs
- Label-size text buttons, horizontally scrollable with edge arrows. Default Body color; active
  is Signal Orange with a 2px orange underline. Tabs map one-to-one to real sections.

### Version Selector
- Dropdown above the sidebar tree on versioned sections, showing the active version (for
  example 4.11). Hidden until content is actually versioned.

### Sidebar Tree
- 18rem column, label-size links in Chalk, three levels of indentation, thin 16px line icons
  that match the item's meaning. Active item is Signal Orange with a left marker. A small
  neutral "Powered by GitBook" badge closes the column.

### Module Cards
- Large cards on the Raised surface, 12px radius, one geometric orange motif per module (arch,
  hexagon, grid, wave, diamond, orbit family), module name, one-line scope. This is the home's
  signature composition.

### Chips
- Small, 6px radius, Raised background, Chalk text. Reserved for changelog status labels
  (IMPROVEMENT, NEW, MARKETPLACES) and real version or date tags.

### Callouts
- 12px radius block, semantic soft background, matching ink text, leading round icon in the
  semantic color. Four kinds only: info, warning, danger, success.

### Code Blocks
- 12px radius, Raised surface (#FFF2F0 light), IBM Plex Mono, copy button in the corner. Inline
  code uses the same family at body size.

### Reading Aids
- 2px progress bar pinned to the top of the header animating with scroll.
- "Was this helpful?" three-emoji widget closing every article.
- "Last updated" line under article titles and on the home page.
- Floating assistant button (round, bottom-right of articles) beside the header Ask entry.
- RSS feed button and TAGS filter in the changelog breadcrumb area.
- Cookie banner: Raised floating card, Accept and Reject, appears once.

## Do's and Don'ts

### Do:
- **Do** use Signal Orange on the primary action, the active tab, and the active sidebar item,
  and nothing else on that screen.
- **Do** write text on orange in On-signal Ink #1D1D1D (7.1:1); never white on orange.
- **Do** keep neutrals warm: borders #FFC9C0, body #9B5950, headings #271917 on Paper #FFFFFF.
- **Do** set every technical string in IBM Plex Mono.
- **Do** ship the complete dark scale beside the light default; verify both, not one.
- **Do** end articles with the feedback widget and a "Last updated" line, and give every code
  block a copy button.
- **Do** collapse header actions into a More menu, hide the header search, and swap the sidebar
  for a TOC drawer at phone widths; keep 390px free of horizontal scroll.

### Don't:
- **Don't** paint large surfaces in Signal Orange: the accent marks state, it does not decorate.
- **Don't** stack gradients, glass, glow, or grain; the only gradient is the header veil and
  the only glow is the assistant panel.
- **Don't** use pill-shaped buttons or cards; pills are not part of this form language.
- **Don't** clone the earlier reference's light-first cyan system, Montserrat, or blue-grey
  neutrals; those belong to the Channable direction this system replaced.
- **Don't** swap Manrope for Montserrat or use Manrope as the monospace face.
- **Don't** put statistics, testimonials, or compliance claims on the surface without a real
  source; the source help center shows none.
- **Don't** ship a nav item, tab, button, or search field without a real destination or
  behavior.

---

Reference history: this file previously specified a Channable Help Center clone (light-first,
Signal Cyan, Montserrat). The owner chose the Gravitee direction instead; the Channable system
is retained only as history and its values must not be reintroduced.
