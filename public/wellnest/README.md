# WellNest phone screens

Drop the WellNest phone screenshots here. They are used by the
`solutionHighlight` block on the WellNest case study
(`src/data/caseStudies/wellnest.js`, the "Tools that guide without
overwhelming" section).

Add PNGs with these exact names (portrait screenshots look best):

| File                   | Screenshot to export           | Bullet it lights up                     |
| ---------------------- | ------------------------------ | --------------------------------------- |
| `01-support.png`       | **Support** screen             | Support that's always in reach          |
| `02-articles.png`      | **Articles** screen            | Stories from people who get it          |
| `03-my-journey.png`    | **My Journey / Daily check-in**| Check-ins on your own terms             |
| `04-home-feed.png`     | **Home feed** (the long one)   | A feed that says you're not alone       |
| `05-groups.png`        | **Connect & share / Groups**   | Groups that match where you are now     |

Notes:
- **`04-home-feed.png` is the tall one.** It's marked `tall: true` in the data,
  so it renders at full height and scrolls through the centre on its own bullet —
  the "A feed…" item stays active for the whole length of the image.
- One bullet can own **several** screens: in the data give that item an
  `images: [ … ]` array with more than one entry. Each screen keeps the same
  bullet lit while it passes the viewport centre, so (say) three screens can
  scroll by before the active bullet advances.
- Until a file exists, its slot shows a subtle dashed phone-shaped placeholder
  (no broken-image icon), so the section still looks intentional.
