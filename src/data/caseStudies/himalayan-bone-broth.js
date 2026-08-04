// CASE STUDY — Himalayan Bone Broth
// NOTE: no named quote, so instead of a `testimonial` this uses a light
// `pullQuote` (the team's guiding question).
export default {
  slug: 'himalayan-bone-broth',
  title: 'Himalayan Bone Broth — Case Study — NOORA EMILIA',
  description:
    "A user-centered e-commerce blueprint for Himalayan Bone Broth — building consumer trust through honest, clear design.",
  blocks: [
    {
      type: 'intro',
      tagline: { t1: 'UX/UI & Content Strategy', rest: '· Himalayan Bone Broth · 2024' },
      statement: { text: 'When trust is ', dim: 'the product.' },
      lead:
        "A user-centered design blueprint for Himalayan Bone Broth's e-commerce platform — introducing a traditionally inspired product to health-conscious, skeptical shoppers through <b>honest information, clear navigation, and an experience that reflects the brand's values</b> of purity and reliability.",
      buttons: [
        {
          label: 'Read full case study',
          href: 'https://medium.com/@noorasaarelainen/how-can-ux-design-build-consumer-trust-2c5be02afb0f',
        },
        {
          label: 'Explore Mid-Fi Prototype',
          href: 'https://www.figma.com/proto/2A4tqQArpVAonQywmG65B7/Himalayan-Bone-Broth-%7C-Design-File?page-id=14%3A319&node-id=4307-2075&viewport=7982%2C1424%2C0.58&t=ndvRCKh1RDkzBDKj-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4307%3A2075&show-proto-sidebar=1',
          style: 'secondary',
        },
      ],
      meta: [
        { label: 'Industry', value: 'Wellness Nutrition' },
        { label: 'Client', value: 'Himalayan Bone Broth' },
        { label: 'Year', value: '2024' },
        { label: 'Role', value: 'UX/UI Design & Content Strategy' },
        { label: 'Timeline', value: '5 weeks · Part-time · Team project' },
      ],
      hero: {
        src: 'https://framerusercontent.com/images/kOM75FtGrQk0OA3IX6MNzLS3YI.png?width=900',
        alt: 'Laptop mockup of the Himalayan Bone Broth product page.',
      },
    },
    {
      type: 'alternating',
      side: 'left',
      kick: 'The challenge',
      title: 'Trust as currency',
      body:
        "Many health-conscious consumers are <b>skeptical</b>: confusing marketing, vague claims, and unclear sourcing leave them unsure what they're actually putting into their bodies. The task was to design a site that felt honest, clear, and trustworthy from the first glance — because when trust is the product, small UX choices matter a lot.",
      image: {
        src: 'https://framerusercontent.com/images/sz8jBwE2N3JiB4cKCdVsaJ6iA.webp?width=1200',
        alt: 'Himalayan Bone Broth product page shown on a laptop mockup.',
      },
    },
    {
      type: 'alternating',
      side: 'right',
      kick: 'Who we designed for',
      title: 'Meet Ricardo',
      body:
        'We interviewed people with healthy lifestyles and wellness-oriented values from different backgrounds and geographies — all sharing a demand for transparency around ingredients, sourcing, and health claims. From them we built the persona <b>Ricardo</b> and mapped his journey from discovering the product to making a confident purchase.',
      image: {
        src: 'https://framerusercontent.com/images/q7z2dHecW27gV67w8zuMI4IGJg.webp?width=1200',
        alt: 'Persona card for Ricardo, a wellness-oriented shopper.',
      },
    },
    {
      type: 'pullQuote',
      quote: 'How can we design a site that feels honest, clear, and trustworthy — from the very first glance?',
      cite: "The project's guiding question",
    },
    {
      type: 'sticky',
      kick: 'Solution',
      heading: 'Designing for honesty',
      images: [
        {
          src: 'https://framerusercontent.com/images/t7V8qB7sgN5zQ2bV2A1gT56u5q8.png?width=1000',
          caption: 'User flow diagram from browsing to purchase.',
        },
        {
          src: 'https://framerusercontent.com/images/LFWkeFXf5FczPNexm7eXIvC1inQ.webp?width=1000',
          caption: 'Sitemap diagram for the Himalayan Bone Broth website.',
        },
      ],
      bullets: [
        { bold: 'A clear sitemap', text: ' — content organized logically, avoiding clutter or misleading category names.' },
        { bold: 'Guided user flows', text: ' — leading from browsing to purchase without overwhelming, giving users time to digest.' },
        { bold: 'Honest UX writing', text: ' — straightforward ingredient and benefit descriptions, with no misleading claims.' },
        { bold: 'A clean aesthetic', text: ' — readability first, reducing cognitive load so users feel grounded rather than overwhelmed.' },
      ],
    },
    {
      type: 'sticky',
      kick: 'Testing',
      heading: 'What users told us',
      images: [
        {
          src: 'https://framerusercontent.com/images/eFMtdhXjY6jFmcCigFIEQzJZLo.png?width=1000',
          caption: 'Low-fidelity wireframes for the Himalayan Bone Broth site.',
        },
        {
          src: 'https://framerusercontent.com/images/TkNj79XgVPxsVGPi4tGBlBgRNo.png?width=1000',
          caption: 'Mid-fidelity screens for the Himalayan Bone Broth site.',
        },
      ],
      bullets: [
        { bold: 'Open and clear', text: ' — testers described the site as honest and easy to trust.' },
        { bold: 'Everything within reach', text: ' — they appreciated easy access to all the relevant information.' },
        { bold: 'A straightforward path', text: ' — a clear route from browsing to a confident purchase.' },
        { bold: "Inform, don't push", text: ' — the design empowers users to decide independently, respecting their skepticism and valuing their need for clarity.' },
      ],
    },
    {
      type: 'moreProjects',
      showAllHref: '/#projects',
      projects: [
        {
          title: 'ILGA Portugal',
          tags: ['UX Research', 'Accessibility', 'Website'],
          image: {
            src: 'https://framerusercontent.com/images/mv301lcXsr0r2Amx25RDVw6MJs.png',
            alt: 'ILGA Portugal website mockup.',
          },
          href: '/ilga-portugal',
        },
        {
          title: 'WellNest',
          tags: ['Product Design', 'Mobile UX', 'App'],
          image: {
            src: 'https://framerusercontent.com/images/6uYyfK79iiAiV15Q1IuEo80yQ.png',
            alt: 'WellNest app mockup.',
          },
          href: '/wellnest',
        },
      ],
    },
  ],
};
