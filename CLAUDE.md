# CLAUDE.md — Noora Emilia Portfolio

Project context for Claude Code. Read this fully before doing anything.

## What this is
A personal portfolio site for Noora Emilia (UX/UI designer & researcher, with a
marketing background). It currently exists as three hand-built **static HTML files**.
Goal: refactor into a clean, **block-based static site**, keep the exact look, add the
remaining case studies easily, and deploy to **Vercel via GitHub**.

The owner is not a developer. Favour the simplest thing that lets her add a case study
or duplicate a section by editing a content file — not layout code.

## Current files (in this folder)
- `index.html` — homepage: hero, projects grid, About, "I can help you with" accordion,
  education/work timeline, inverted footer. This is the canonical design system.
- `case-bmu.html` — the case-study template (Budapest Metropolitan University). Canonical
  case-study layout: intro → alternating → sticky → testimonial → more-projects → footer.
- `case-ilga-portugal.html` — an earlier, simpler case study (rebuild with the block system).

Open these in a browser to see the exact intended look. **Preserve it 1:1** — do not restyle.

## Design system (must keep exactly)
- **Fonts:** Switzer (display/headings, from Fontshare) + Inter (body/UI, Google Fonts).
- **Colors:** paper background `#FAFAF7` with a subtle fixed SVG paper-grain texture behind
  everything (footer excluded). Ink `#000`, body `#1E1605`, muted `#3D3C34`, label `#767676`.
  Accent yellow `#FFC300` (subheaders, stat numbers, bullets, hovers) — the ONLY accent.
  Footer inverted: bg `#0B0B0B`, text `#fff`, links light blue `#8AB4F8`.
- **Buttons:** sharp corners (0 radius), dark by default, invert on hover; secondary = outline.
- **Nav:** sticky, textured to match paper, hides on scroll-down, returns on scroll-up.
- **Motion:** reveal-on-scroll via IntersectionObserver WITH a safety net (never leave content
  hidden if the observer misses) + respect `prefers-reduced-motion`.
- **Layout:** max-width 1440 (home) / 1320 (case), gutter `clamp(20px,4vw,72px)`.
- **Project images:** use `mix-blend-mode:multiply` to hide baked-in white backgrounds on the
  paper (temporary — remove once transparent PNGs are added).

## The goal: a block-based case-study system
A case study = an **ordered list of blocks**. Layouts live in one place (components/partials);
only the content list changes per case study. Adding, removing, reordering, or **duplicating**
a block is a one-line content change. Long case studies (like METU) use many blocks; short ones
use few.

### Block types + content fields
1. `intro` — { tagline, statement (optional dimmed tail), lead, buttons:[{label,href,style}], meta:[{label,value}], heroImage }
2. `alternating` — { side:"left"|"right" (image side), kick, title, body, image }  ← DUPLICATE for more content
3. `sticky` — { kick, heading, bullets:[{bold,text}], images:[{src,caption}] }
4. `testimonial` — { quote, name, role, avatar }
5. `bigQuote` — { quote, attribution }   (full-bleed dark band)
6. `divider` — { word, caption }         (oversized word between chapters)
7. `metrics` — { intro, items:[{big,cap}] }
8. `moreProjects` — { projects:[{title,tags:[],image,href}], showAllHref }

### METU case study as a block list (from case-bmu.html)
intro → alternating(left) → alternating(right) → sticky → testimonial → moreProjects
(add more `alternating` or `metrics` blocks to make it longer)

### A SHORT case study
intro → alternating → testimonial → moreProjects

## Recommended build approach
Static site, framework-light. **Astro is recommended** (components + one content file per case
study; static HTML output; trivial Vercel deploy). Editing a case study = editing its content
file; adding a block = adding one entry. A plain HTML + tiny JS renderer over a per-case JSON
block list is an acceptable simpler alternative. No server/backend.

## Tasks for Claude Code (in order)
1. Scaffold a static project (Astro preferred) and **port the exact design system / CSS** from
   `index.html` and `case-bmu.html`. Verify it looks identical.
2. Turn each section into a reusable block/component matching the block types above.
3. Represent each case study as a content file = ordered block list. Recreate **METU** (from
   `case-bmu.html`) and **ILGA** (from `case-ilga-portugal.html`). Wire the homepage projects
   grid to link to the case-study pages.
4. Make adding a new case study trivial (copy a content file) and document how to duplicate/
   remove blocks in a short README.
5. Initialise git, add a sensible `.gitignore`, commit, and push to a NEW GitHub repo. Ask the
   owner to authorise/sign in when GitHub credentials are needed — do not guess.
6. Print the exact steps to connect the GitHub repo to Vercel (Add New → Project → import repo →
   Deploy), and how to add a custom domain later.

## Assets still to add (currently placeholders)
- Real yellow-background portrait for the hero (replaces a Framer cutout URL).
- Transparent project mockup PNGs (then remove `mix-blend-mode:multiply`).
- Case-study images: hero, alternating sections, sticky screens, testimonial avatar (gray now).
- Real links: Download My CV → Google Drive; prototype / "read full case study" links.
- Optional: 8 hand-drawn arrow PNGs for the timeline (currently clean SVG recreations — fine).

## Guardrails
- Match the current look exactly; the accent is only `#FFC300`; footer stays inverted, no texture.
- Accessibility matters (the portfolio sells it): keep alt text, visible focus states,
  `prefers-reduced-motion`, ~44px touch targets, strong contrast.
- Ask before anything irreversible (force-push, deleting files, changing the domain).
