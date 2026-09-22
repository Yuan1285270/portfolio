---
name: Tsung-Yuan Lin portfolio — Beyond Borders
description: A scoped international-experience extension of the incumbent dark Kanit portfolio.
colors:
  ink: "#0c0c0c"
  mist: "#d7e2ea"
  paper: "#ffffff"
  global-surface: "#111418"
  global-muted: "#aebbc7"
  global-divider: "#38424a"
  global-underline: "#778793"
typography:
  display:
    fontFamily: 'var(--font-kanit), "Kanit", sans-serif'
    fontSize: "clamp(3.5rem, 7.8vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  title:
    fontSize: "clamp(1.45rem, 2.2vw, 1.8rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontSize: "0.85rem"
    lineHeight: 1.5
rounded:
  photo: "3px"
components:
  global-section:
    backgroundColor: "{colors.global-surface}"
    textColor: "{colors.mist}"
    padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 6rem)"
  global-link-hover:
    textColor: "{colors.paper}"
---

# Design System: Beyond Borders extension

## Overview

**Creative North Star: "Dark Kanit portfolio"**

This records the completed Beyond Borders section within the existing portfolio. Large, solid lettering and original exchange photographs carry the section; concise stories sit directly on a dark surface. This is a scoped implementation record, not a redesign specification for other sections.

**Key Characteristics:**
- Solid uppercase display type.
- Original photographs with restrained captions.
- Flat story rows and underlined evidence links.

## Colors

The incumbent ink background and mist text continue into a slightly lighter global surface. Global muted text supports paragraphs and captions; dividers separate stories. Paper is the evidence-link hover color. These neutrals describe this section, not the full site's accent palette.

## Typography

All text inherits Kanit with a sans-serif fallback. The two-line heading uses the display token with uppercase transformation and a solid fill. Story titles use the title token; paragraphs use body and a maximum width of 60ch. The introduction uses weight 300, `clamp(1.2rem, 2vw, 1.55rem)`, and line-height 1.45. Outcomes use weight 500 and 0.95rem.

## Layout

The section sits between About and Awards. Its centered container has a maximum width of 82rem. Header and main content share a `1.05fr 1fr` grid, with `clamp(2rem, 5vw, 5rem)` gaps. At widths of 767px or less, both grids become one column with 2rem gaps. Introductory copy expands from 38ch to 48ch on mobile.

The fencing note pairs a 7.5rem image with text; mobile uses 6rem. Both original photographs retain their intrinsic aspect ratios and full width within their containers.

## Elevation & Depth

This section has no shadows. Surface tone, whitespace, and thin story dividers establish grouping. This does not change existing depth treatments elsewhere.

## Shapes

Photographs use the photo radius. Story rows remain unboxed, separated by 1px rules; the first row omits its top rule. Rows use 1.5rem vertical padding, with outer padding removed at the first and last edges.

## Components

Three professional stories cover cross-cultural OwlHacks teamwork, English presentations, and data analysis. A smaller fencing note accompanies the two original exchange photographs. Copy remains grounded in the supplied reflection and existing evidence.

Exchange and OwlHacks evidence links retain the existing certificate URLs. Links use 0.9rem text, an 18px arrow, a minimum 44px target height, and a 5px underline offset. Hover changes color over 180ms; keyboard focus shows a 2px mist outline offset by 5px. PDF links announce their new-tab behavior to screen readers.

Source: `app/PortfolioLanding.tsx` (`GlobalSection`) and `app/globals.css` (`.global-*`).

## Do's and Don'ts

- **Do** preserve the incumbent dark palette and Kanit typography when extending this section.
- **Do** retain original photographs, source-backed claims, and working certificate links.
- **Do** keep the heading solid and the mobile reading order intact.
- **Don't** treat this scoped record as authorization to restyle unrelated sections.
