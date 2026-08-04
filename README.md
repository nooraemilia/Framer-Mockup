# Noora Emilia — Portfolio

A static, block-based portfolio site built with [Astro](https://astro.build).
Same look as the original hand-built HTML, but every case study is now just a
**content file** — a list of blocks you can reorder, duplicate, or delete
without touching any layout code.

---

## Running it locally

```bash
npm install      # first time only
npm run dev      # start the dev server → http://localhost:4321
npm run build    # build the static site into dist/
npm run preview  # preview the built site
```

You don't need to know how to code to edit content — you only ever edit the
files in **`src/data/`**.

---

## Where things live

```
src/
├── data/                     ← THE ONLY FOLDER YOU EDIT FOR CONTENT
│   ├── site.js               ← email, phone numbers, socials, CV link, footer line
│   ├── home.js               ← homepage projects grid, accordion, timeline
│   └── caseStudies/          ← one file per case study (the block lists)
│       ├── metu.js
│       ├── ilga-portugal.js
│       ├── wellnest.js
│       ├── schoolsbuddy.js
│       └── himalayan-bone-broth.js
│
├── components/               ← layout code (you normally never touch this)
│   ├── blocks/               ← the 10 block types, each its own component
│   ├── home/                 ← homepage sections (hero, projects, about, …)
│   ├── Nav.astro  Footer.astro  SiteScripts.astro  BlockRenderer.astro
│
├── layouts/                  ← page shells (BaseLayout, CaseLayout)
├── pages/                    ← routes: index.astro (home), [slug].astro (case studies)
└── styles/global.css         ← the whole design system, ported 1:1
```

The original hand-built files (`index.html`, `case-bmu.html`, …) are kept in the
repo root **as reference only** — they are not part of the site build.

---

## A case study is just a list of blocks

Open any file in `src/data/caseStudies/`. It looks like this:

```js
export default {
  slug: 'metu',                       // the URL → /metu
  title: 'Budapest Metropolitan University — Case Study — NOORA EMILIA',
  description: '…',                    // for search engines / social previews
  blocks: [
    { type: 'intro',        /* … */ },
    { type: 'alternating',  /* … */ },
    { type: 'alternating',  /* … */ },
    { type: 'sticky',       /* … */ },
    { type: 'testimonial',  /* … */ },
    { type: 'moreProjects', /* … */ },
  ],
};
```

The page is rendered top-to-bottom in exactly the order the blocks appear.

### Reorder a block
Move a block up or down in the `blocks: [ … ]` list. That's it — cut the
`{ … }` object and paste it where you want it.

### Duplicate a block (e.g. add another story section)
Copy a whole `{ type: 'alternating', … }` object and paste it as a new entry.
Then edit its text/image. Tip: alternate `side: 'left'` / `side: 'right'` so the
image zig-zags down the page.

### Remove a block
Delete its `{ … }` object from the list.

That's the whole system: **reorder / duplicate / remove = editing one entry in
the `blocks` array.**

---

## Add a brand-new case study (copy one file)

1. **Copy** an existing file in `src/data/caseStudies/` — pick the closest shape:
   - `metu.js` — short (intro → 2×alternating → sticky → testimonial → more).
   - `ilga-portugal.js` — longer (adds a second sticky + a pull-quote).
2. **Rename** it, e.g. `new-project.js`.
3. Change the **`slug`** (this becomes the URL, e.g. `slug: 'new-project'` → `/new-project`).
4. Change the **`title`**, **`description`**, and edit the **`blocks`** list.
5. **Link to it** from the homepage: open `src/data/home.js` and add (or edit) an
   entry in the `projects` array with `href: '/new-project'`.

No routing, no layout code — the new page appears automatically at `/<slug>`.

---

## The 10 block types

Each block is an object `{ type: '…', …fields }`. Fields marked _(html)_ accept
simple `<b>bold</b>` tags.

| `type`          | Fields |
|-----------------|--------|
| `intro`         | `tagline:{t1,rest}`, `statement:{text,dim?}`, `lead`_(html)_, `buttons:[{label,href,style?}]`, `meta:[{label,value}]`, `hero:{src,alt}` **or** `{ph:'Hero image'}` |
| `alternating`   | `side:'left'|'right'` (image side), `kick`, `title`_(html)_, `body`_(html)_, `image:{src,alt}` **or** `{ph:'label'}` |
| `sticky`        | `kick`, `heading`, `bullets:[{bold,text}]`, `images:[{src,caption}]` **or** `[{ph:'label'}]` |
| `solutionHighlight` | `kick`, `heading`, `items:[{bold,text,images:[{src,alt,tall?}]}]` — a scroll-linked version of `sticky` (see below) |
| `testimonial`   | `quote`, `name`, `role`, `avatar:{src,alt}` **or** `null` (gray circle) |
| `pullQuote`     | `quote`_(html)_, `cite` — a **light**, centered quote (a guiding question / a result) |
| `bigQuote`      | `quote`_(html)_, `attribution` — a **full-bleed dark** band |
| `divider`       | `word`_(html)_, `caption` — an oversized chapter word |
| `metrics`       | `intro`_(html)_, `items:[{big,cap}]` — big stat numbers in the accent yellow |
| `moreProjects`  | `projects:[{title,tags:[],image:{src,alt},href}]`, `showAllHref` |

Notes:
- **Consecutive `alternating` blocks** are automatically grouped into one section
  so their spacing matches the original design — just list them one after another.
- **Buttons** whose `href` starts with `http` automatically open in a new tab.
- **Images** are optional everywhere: leave a `{ph:'…'}` placeholder (a gray box)
  until the real asset exists. Project/mockup images use `mix-blend-mode:multiply`
  to hide their baked-in white backgrounds on the paper texture — remove that from
  `src/styles/global.css` once transparent PNGs are added.

### `solutionHighlight` — the scroll-linked solution section
A richer version of `sticky`, first used on WellNest. The left column is a tall
gallery of phone screens that scrolls with the page; the right column stays
pinned and vertically centred. As you scroll, **one list item lights up at a
time** — the one whose screen is centred in the viewport — and its matching
screen is emphasised in sync (the rest dim). On narrow screens it stacks to one
column and the highlight becomes static.

Each `items` entry has a bullet **and its screens**. To add a row, duplicate an
`items` entry; to reorder, reorder the array. Example:

```js
{
  type: 'solutionHighlight',
  kick: 'What we built',
  heading: 'Tools that guide without overwhelming',
  items: [
    {
      bold: 'Support that\'s always in reach',
      text: ' — emergency numbers and vetted wellness apps in one calm place.',
      images: [
        { src: '/wellnest/01-support.png', alt: 'Support screen.' },
      ],
    },
    // …duplicate this object for each additional row
  ],
}
```

**One bullet can own several screens.** Give an item more than one entry in its
`images: [ … ]` array and every screen keeps that bullet lit while it passes the
viewport centre — so three screens can scroll by before the highlight moves on
to the next bullet. (`image: {…}` is still accepted as shorthand for a single
screen.)

**A very long screen** (e.g. a scrolling Home feed) can be marked
`tall: true` on its image object — it then renders at full height and scrolls
through the centre on its own bullet instead of being height-capped.

Screens go in `public/` (referenced by an absolute path like
`/wellnest/01-support.png`). Until a file exists the block shows a subtle
dashed phone-shaped placeholder — no broken-image icon. It honours
`prefers-reduced-motion` (keeps only the colour highlight, drops the scaling)
and stacks to one static column below 860px.

### `pullQuote` vs `bigQuote`
The original ILGA and Himalayan pages use a **light** centered quote — that's
`pullQuote`. `bigQuote` is the **dark full-bleed** variant from the design spec;
use it when you want a bold, high-contrast break between chapters.

---

## Editing site-wide details

`src/data/site.js` holds everything that appears on every page: email, the two
phone numbers, social links, the "Download My CV" link, and the footer line.
Change it once and it updates everywhere (homepage hero + every footer).

---

## Design system (do not restyle)

All CSS lives in `src/styles/global.css`, ported 1:1 from the originals:
Switzer + Inter fonts, the `#FAFAF7` paper texture, the single accent
`#FFC300`, sharp-cornered buttons, the sticky hide-on-scroll nav, reveal-on-scroll
(with a safety-net timeout and `prefers-reduced-motion` support), and the
copy-to-clipboard toast. Home pages max out at 1440px, case pages at 1320px.
