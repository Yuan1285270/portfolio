---
name: Tsung-Yuan Lin portfolio — Beyond Borders and exchange
description: Homepage exchange collage and a Chinese reading surface within the incumbent dark Kanit portfolio.
colors:
  ink: "#0c0c0c"
  mist: "#d7e2ea"
  paper: "#ffffff"
  global-surface: "#0c0c0c"
  global-muted: "#aebbc7"
  global-divider: "#38424a"
  global-underline: "#778793"
  exchange-video: "#17191b"
typography:
  display:
    fontFamily: 'var(--font-kanit), "Kanit", sans-serif'
    fontSize: "clamp(3.5rem, 6.5vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  title:
    fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  intro:
    fontSize: "clamp(1rem, 1.6vw, 1.2rem)"
    fontWeight: 300
    lineHeight: 1.5
  caption:
    fontSize: "0.8rem"
  label:
    fontSize: "0.85rem"
    lineHeight: 1.5
  exchange-display:
    fontFamily: 'var(--font-kanit), "PingFang TC", "Microsoft JhengHei", sans-serif'
    fontSize: "clamp(3rem, 5.8vw, 5.3rem)"
    fontWeight: 600
    lineHeight: 1.23
    letterSpacing: "-0.035em"
  exchange-display-mobile:
    fontSize: "clamp(3rem, 10.5vw, 4.2rem)"
  exchange-headline:
    fontSize: "clamp(2rem, 3.5vw, 3.25rem)"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  exchange-title:
    fontSize: "1.3rem"
    fontWeight: 500
    lineHeight: 1.65
  exchange-body:
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 2
  exchange-lead:
    fontSize: "1.08rem"
    lineHeight: 1.95
  exchange-navigation:
    fontSize: "0.95rem"
  exchange-topbar:
    fontSize: "0.9rem"
  exchange-evidence:
    fontSize: "0.92rem"
    lineHeight: 1.9
  exchange-quote:
    fontSize: "1.16rem"
    fontWeight: 300
    lineHeight: 1.6
  exchange-source:
    fontSize: "0.78rem"
  exchange-resource:
    fontSize: "1.1rem"
  exchange-footer-mobile:
    fontSize: "0.75rem"
rounded:
  photo: "12px"
components:
  global-section:
    backgroundColor: "{colors.global-surface}"
    textColor: "{colors.mist}"
    padding: "clamp(4rem, 7vw, 7rem) clamp(1.5rem, 5vw, 6rem)"
  global-link-hover:
    textColor: "{colors.paper}"
  exchange-film:
    backgroundColor: "{colors.exchange-video}"
    rounded: "{rounded.photo}"
    width: "100%"
  exchange-evidence-summary:
    textColor: "{colors.mist}"
    padding: "0.8rem 0"

---

# Design System: Beyond Borders and exchange extension

## Overview

**Creative North Star: "Dark Kanit portfolio"**

The international-experience surfaces inherit the portfolio's ink background, mist text, solid Kanit headings, and personal photography. The homepage remains a concise, photo-led introduction for admissions and job applications. The standalone Traditional Chinese reading page extends that identity with calmer heading weights and generous line spacing.

This is a scoped record of the homepage exchange section and `/exchange`, not authority to restyle unrelated sections. Route strategy and its annotated field-note structure remain in `.impeccable/surfaces/app-exchange-page-tsx.md`; the production direction contract is in `app/layout.tsx` (seed `cfb92fc1`).

**Key Characteristics:**
- Dark ink and mist, with muted context and thin structural dividers.
- A compact aligned homepage collage and a spacious, responsive reading page.
- Real photographs at their original proportions and grounded, inspectable coursework excerpts.

## Colors

The existing neutral palette keeps photographs prominent. Ink supplies the page and homepage-section ground; mist is the main text and keyboard-focus color. Muted text carries dates, captions, sources, and supporting outcomes. Divider and underline colors distinguish structure and links without introducing an accent.

The exchange-video token is an intentional local addition for the native video's empty/loading canvas. It is not a replacement page background or a new card-surface system. Paper is reserved for existing hover treatment.

## Typography

The homepage retains solid uppercase Kanit 900 for its two-line heading, with the incumbent display, title, body, intro, caption, and label tokens unchanged. The reading page uses Kanit for Latin text and the explicit PingFang TC / Microsoft JhengHei fallback stack for Traditional Chinese, with body weight 400.

Exchange display and headline roles use lighter weights and taller leading to keep Chinese headings clear. Body paragraphs use the exchange-body role; the introduction uses exchange-lead. The narrower speaking column is capped at 35rem and the lead at 29rem. Captions and resource metadata use the existing caption step with 1.6 leading for captions; mobile chapter links, tables, and desktop footer use the existing label size.

The additional exchange type roles are deliberate additions, including navigation, topbar, evidence disclosures, quotations, source labels, resource titles, and the mobile footer. They document the reading surface's real hierarchy rather than changing the homepage ramp. Mobile topbar text uses the caption size; mobile display has its own fluid range. Source labels are ancillary to readable body evidence.

## Layout

The homepage exchange section remains between About and Awards. Its 82rem shell uses a `0.85fr 1.3fr` feature grid, stacking below 768px. Photos form one aligned rectangle: a full first-day strip at left spanning two rows, with a classroom instructor portrait above fencing at right. Photo columns remain `1fr 2.25fr`, with equal rows and consistent gaps; retain this collage on mobile. The only current homepage changes are the bottom-right fencing image and its `/exchange` link.

The exchange page has a 90rem maximum shell and fluid horizontal padding from 1.5rem to 5rem. Desktop uses paired copy/media compositions, two-column coursework, and a wide fencing figure capped at 62rem. Chapter spacing grows from 4.5rem to 8rem. At 767px and below, content pairs stack into a single column, the portrait uses the available width, and chapter navigation becomes two links per row. Reading photos use full width and automatic height.

Homepage first-day strip: user-supplied `/Users/yuan/Desktop/IMG_4135.JPG`, proportional WebP encoding, complete original 1:3 composition. Classroom: high-resolution `iecs/3-1.jpeg`, encoded at 1600 × 2133; the approved homepage cover crop uses `object-position: center 20%` to retain faces and upper bodies. Fencing replaces the former certificate group in the lower-right frame. The reading page displays the complete original proportions of its Philadelphia portrait, instructor photo, fencing photo, and friends photo. Homepage captions remain screen-reader-only; reading-page captions are visible.

## Elevation & Depth

These surfaces have no added shadows. Photographs provide depth, while whitespace and thin divider rules separate navigation, coursework excerpts, and resources. Disclosures remain part of the page ground rather than raised cards.

## Shapes

Photographs and the native video share the existing photo radius. Do not rotate, skew, stretch, or perspective-correct photographs. The homepage's approved cover crops preserve image proportions; reading images use automatic height. The video is a 16:9 frame with native controls.

## Components

### Homepage exchange link

The underlined “Explore my exchange” link now opens `/exchange` in a new tab, announces that behavior to assistive technology, and keeps the arrow, 44px minimum target, paper hover color, 180ms color transition, and visible 2px mist outline with 5px offset. The certificate remains available from the reading page's closing resources. No highlight rows or divider are added beneath the homepage photographs.

### Reading navigation and links

The topbar provides a return to the homepage exchange section. Chapter links navigate to four anchored sections. The reading surface uses 44px minimum targets for text and navigation links and a 2px mist focus outline with 6px offset. Hover communicates interactivity through white text or underlining. A skip link becomes visible on keyboard focus. The footer returns to the title.

### Coursework disclosures

Native `details` / `summary` reveals specific coursework excerpts on demand. The summary has a 56px minimum target, thin dividers above and below, and a plus icon that rotates into a close mark when open. Evidence uses a smaller reading role, an optional quotation, lists, or a semantic two-column table. Source labels identify the coursework. No classroom scores, invented mastery, or fabricated quotes are presented.

### Photographs and film

Photos remain actual evidence with descriptive alternatives. The OwlHacks film uses a poster, native controls, inline playback, and no autoplay; it loads media only on demand. Its rounded video canvas is the only new surface color. Respect reduced motion by disabling smooth scrolling on this route when requested.

### Closing resources

Ruled resource links pair a readable title with muted metadata and an arrow. The selected sharing PDF and exchange certificate explicitly announce PDF format and a new tab. The project return link stays in the current tab. Public downloads contain reviewed excerpts; administrative and grade records stay local.

## Do's and Don'ts

### Do:
- Do keep the homepage text brief and original photos prominent.
- Do preserve the approved homepage collage columns and complete first-day strip.
- Do use generous Chinese reading leading and visible keyboard focus on the exchange page.
- Do ground reflection and coursework excerpts in the source map and preserve original photo proportions.

### Don't:
- Don't restore homepage takeaway blocks, classroom-score claims, or achievement slogans.
- Don't rotate, skew, stretch, or perspective-correct photographs.
- Don't restyle unrelated portfolio sections or promote route-specific reading choices into global defaults.
- Don't expose administrative documents or grade records in public downloads.
