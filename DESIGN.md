---
name: Tsung-Yuan Lin portfolio — Beyond Borders
description: A scoped international-experience extension of the incumbent dark Kanit portfolio.
colors:
  ink: "#0c0c0c"
  mist: "#d7e2ea"
  paper: "#ffffff"
  global-surface: "#0c0c0c"
  global-muted: "#aebbc7"
  global-divider: "#38424a"
  global-underline: "#778793"
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
rounded:
  photo: "12px"
components:
  global-section:
    backgroundColor: "{colors.global-surface}"
    textColor: "{colors.mist}"
    padding: "clamp(4rem, 7vw, 7rem) clamp(1.5rem, 5vw, 6rem)"
  global-link-hover:
    textColor: "{colors.paper}"
---

# Design System: Beyond Borders extension

## Scope and direction

A compact photographic interlude between About and Awards, within the incumbent dark Kanit portfolio. User feedback rejected the essay-like density and dim group photo. The revised section keeps one short introduction and three brief achievements; detailed stories and the fencing note are removed. Existing Awards still provides competition evidence.

## Layout and content

The 82rem shell uses a `0.85fr 1.3fr` feature grid: heading and introduction on the left, with two photographs on the right. The photo grid uses `0.85fr 1.2fr`, aligned at the bottom. The Temple entrance (iecs/1-3.jpeg) is bottom-cropped into a square frame, with a clockwise 1.2deg CSS rotation and 1.04 scale, corrected following user feedback on the direction. The exchange group (iecs/0.jpg) uses a 2:1 bottom-aligned crop to remove excess ceiling while retaining the entire horizontal group. Captions identify the campus and exchange classmates. The original class and fencing photographs are no longer displayed.

Three short takeaways below the feature describe OwlHacks teamwork, English presentations, and the salary-analysis project. A single top rule groups them; no cards or long paragraphs. Both existing certificate links remain accessible.

## Responsive behavior

At 767px and below, the feature and takeaway grids become single columns; the photos also stack vertically so the group remains readable. Heading size is `clamp(3.5rem, 6.5vw, 6rem)`. Mobile photo captions remain below their images.

## Visual tokens

Background is the incumbent `--ink` (#0c0c0c); foreground is `--mist` (#d7e2ea); secondary text is #aebbc7. Heading is Kanit 900, line-height 0.9, tracking -0.035em. Images have 12px corners. Links retain 44px target height, underlining, an arrow, new-tab PDF announcements, and visible focus outlines.

This is a scoped record and does not authorize restyling unrelated sections.
