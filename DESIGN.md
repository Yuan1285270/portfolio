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
    fontSize: "clamp(3rem, 5.8vw, 5rem)"
    fontWeight: 600
    lineHeight: 1.23
    letterSpacing: "-0.035em"
  exchange-display-mobile:
    fontSize: "clamp(3rem, 10.5vw, 4.2rem)"
  exchange-headline:
    fontSize: "clamp(1.8rem, 2.7vw, 2.4rem)"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  exchange-title:
    fontSize: "1.2rem"
    fontWeight: 500
    lineHeight: 1.65
  exchange-body:
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.95
  exchange-lead:
    fontSize: "1.05rem"
    lineHeight: 1.9
  exchange-navigation:
    fontSize: "0.9rem"
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
    fontSize: "1rem"
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

Exchange display and headline roles use lighter weights and taller leading to keep Chinese headings clear. Body paragraphs use the exchange-body role; the introduction uses exchange-lead. Chapter introductions and standalone prose are capped at 44rem and the lead at 29rem. Captions and resource metadata use the existing caption step with 1.6 leading for captions; mobile chapter links and desktop footer use the existing label size.

The additional exchange type roles are deliberate additions, including navigation, topbar, evidence disclosures, quotations, source labels, resource titles, and the mobile footer. They document the reading surface's real hierarchy rather than changing the homepage ramp. Mobile topbar text uses the caption size; mobile display has its own fluid range. Source labels are ancillary to readable body evidence.

## Layout

The homepage exchange section remains between About and Awards. Its 82rem shell uses a `0.85fr 1.3fr` feature grid, stacking below 768px. Photos form one aligned rectangle: a full first-day strip at left spanning two rows, with a classroom instructor portrait above fencing at right. Photo columns remain `1fr 2.25fr`, with equal rows and consistent gaps; retain this collage on mobile. The only current homepage changes are the bottom-right fencing image and its `/exchange` link.

The exchange page has a 78rem maximum shell and fluid horizontal padding from 1.5rem to 4rem. The opening portrait is capped at 22rem and the teacher portrait at 20rem. Chapter introductions sit above their related content, with a 44rem prose measure, rather than in a separate headline column. Gaps use `--exchange-gap` (1.5rem–3.5rem); chapter spacing grows from 3.5rem to 5.5rem.

The fencing photograph and friends photograph/text form one paired composition, followed by a separate volleyball paragraph. Career-fair and finance-club copy precedes a clearly labeled company-visit subsection. Its photographs use 9:16 grid columns so the original 3:4 Google portrait and 4:3 Amazon landscape share one height without cropping. Each university paragraph stays with its own 22rem-wide photograph; desktop subgrid aligns the photos, while mobile keeps each paragraph and photo together in reading order. The closing pairs the scholarship-event photograph with the event account and an official source link, followed by reflective copy and resources.

At 767px and below, content pairs stack. The teacher and campus portraits are capped at 18rem; the company photo pair remains together with a .75rem gap, retaining original proportions. Chapter navigation wraps to two links per row.

Homepage first-day strip: user-supplied `/Users/yuan/Desktop/IMG_4135.JPG`, proportional WebP encoding, complete original 1:3 composition. Classroom: high-resolution `iecs/3-1.jpeg`, encoded at 1600 × 2133; the approved homepage cover crop uses `object-position: center 20%` to retain faces and upper bodies. Fencing replaces the former certificate group in the lower-right frame. The reading page displays the complete original proportions of its Philadelphia portrait, instructor photo, fencing photo, friends photo, and Google, Amazon, MIT and Princeton photographs. Homepage captions remain screen-reader-only; reading-page captions are visible.

## Elevation & Depth

These surfaces have no added shadows. Photographs provide depth, while whitespace and thin divider rules separate navigation, coursework excerpts, and resources. Disclosures remain part of the page ground rather than raised cards.

## Shapes

Photographs and the native video share the existing photo radius. Do not rotate, skew, stretch, or perspective-correct photographs. The homepage's approved cover crops preserve image proportions; reading images use automatic height. The video is a 16:9 frame with native controls.

## Components

### Homepage exchange link

The underlined “Explore my exchange” link now opens `/exchange` in a new tab, announces that behavior to assistive technology, and keeps the arrow, 44px minimum target, paper hover color, 180ms color transition, and visible 2px mist outline with 5px offset. The certificate remains available from the reading page's closing resources. No highlight rows or divider are added beneath the homepage photographs.

### Reading navigation and links

The topbar provides a return to the homepage exchange section. Chapter links navigate to eight topics named directly: English classes, coursework, OwlHacks, fencing and friends, career exploration, campus visits, Philadelphia life, and return sharing. The reading surface uses 44px minimum targets for text and navigation links and a 2px mist focus outline with 6px offset. Hover communicates interactivity through white text or underlining. A skip link becomes visible on keyboard focus, with opacity and pointer events disabled while hidden. The footer returns to the title.

### Coursework disclosures

Native `details` / `summary` reveals specific coursework excerpts on demand. The summary has a 56px minimum target, thin dividers above and below, and a plus icon that rotates into a close mark when open. Evidence uses a smaller reading role, an optional quotation, or short annotated paragraphs. Source labels identify the coursework. No classroom scores, invented mastery, or fabricated quotes are presented.

### Photographs and film

Photos remain actual evidence with descriptive alternatives. The OwlHacks film uses a poster, native controls, inline playback, and no autoplay; it loads media only on demand. Its rounded video canvas is the only new surface color. Respect reduced motion by disabling smooth scrolling on this route when requested.

### Closing resources

Ruled resource links pair a readable title with muted metadata and an arrow. The selected scholarship-sharing PDF and exchange certificate explicitly announce PDF format and a new tab. The closing separately links to the education department’s 2026-01-21 event record and shows the existing event photograph. The project return link stays in the current tab. Public downloads contain reviewed excerpts; administrative and grade records stay local.

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

## Author voice

The exchange narrative follows WRITING_STYLE.md, extracted from the supplied reports and sharing notes with de-ai-flavor. Direct chapter labels replace generic skill claims. Concrete first-person scenes carry the narrative; optional disclosures contain the presentation self-assessments, writing revisions and classroom AI hiring proposal. Personal observations about education costs remain questions, not unsupported population claims. No class scores, fictional achievements or company-employment claims appear.
