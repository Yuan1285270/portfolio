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

## Scope

Photo-led exchange section between About and Awards, for graduate admissions and job applications. Keep the existing dark Kanit portfolio style. Content is limited to the heading, brief exchange context, three photographs, and an exchange-certificate link. The user explicitly removed the three takeaway blocks, classroom score claims, and achievement slogans; do not restore them.

## Layout and photographs

The 82rem shell uses a `0.85fr 1.3fr` feature grid, stacking below 768px. The photos form one aligned rectangle: a full first-day strip on the left spanning two rows, with a classroom instructor portrait and exchange group stacked on the right. Photo columns are `1fr 2.25fr`, with equal rows and consistent gaps; retain this collage on mobile.

First-day strip: user-supplied `/Users/yuan/Desktop/IMG_4135.JPG`, proportional WebP encoding, complete original 1:3 composition. Classroom: high-resolution `iecs/3-1.jpeg`, encoded at 1600 × 2133; proportional cover crop with `object-position: center 20%` retains both faces and upper bodies. Exchange group: `iecs/0.jpg`, proportional cover crop retaining every person horizontally. Never rotate, skew, stretch, or perspective-correct photographs. All frames have 12px corners. Captions are screen-reader-only to keep aligned photo edges.

## Type and interaction

Solid uppercase Kanit 900 heading, `clamp(3.5rem, 6.5vw, 6rem)`, line-height 0.9, tracking -0.035em. Secondary text #aebbc7 over #0c0c0c. Keep the PDF certificate link underlined with a 44px target, visible focus, and new-tab announcement. No highlight rows or divider beneath the photographs.

This scoped record does not authorize restyling unrelated sections.
