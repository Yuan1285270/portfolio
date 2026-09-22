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

Photo-led exchange section between About and Awards, for graduate admissions and job applications. Keep the existing dark Kanit portfolio style. Content is limited to the heading, brief exchange context, two photographs, and an exchange-certificate link. The user explicitly removed the three takeaway blocks, classroom score claims, and achievement slogans; do not restore them.

## Layout and photographs

The 82rem shell uses a `0.85fr 1.3fr` feature grid. The photo grid uses `0.85fr 1.2fr`, aligned at the bottom. Both grids stack below 768px.

First day at Temple: user-supplied `/Users/yuan/Desktop/IMG_4135.JPG`, resized proportionally and encoded as WebP only. Display the complete three-photo strip at a maximum width of 12rem with `height: auto`, without cropping, rotation, skew, stretching, or perspective correction. Preserve the original 1:3 proportions. The user chose this instead of the entrance photograph. Exchange group: iecs/0.jpg, 2:1 bottom crop retaining all people horizontally. Frames have 12px corners and context captions.

## Type and interaction

Solid uppercase Kanit 900 heading, `clamp(3.5rem, 6.5vw, 6rem)`, line-height 0.9, tracking -0.035em. Secondary text #aebbc7 over #0c0c0c. Keep the PDF certificate link underlined with a 44px target, visible focus, and new-tab announcement. No highlight rows or divider beneath the photographs.

This scoped record does not authorize restyling unrelated sections.
