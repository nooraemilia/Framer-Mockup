// CASE STUDY — Budapest Metropolitan University (METU)
// A case study is just an ordered list of `blocks`. Reorder / duplicate /
// delete a block by editing this array — no layout code required.
export default {
  slug: 'metu',
  title: 'Budapest Metropolitan University — Case Study — NOORA EMILIA',
  description:
    'Marketing & communications for Budapest Metropolitan University — PPC, social, email, and content grounded in the target market.',
  blocks: [
    {
      type: 'intro',
      tagline: { t1: 'Marketing & Comms', rest: '· Budapest Metropolitan University · 2018–2020' },
      statement: { text: 'Marketing that ', dim: 'understands its market.' },
      lead:
        "A part-time marketing and communications role supporting Budapest Metropolitan University's international brand — spanning <b>PPC campaigns, social media, email marketing, and content creation</b>, all grounded in a strong understanding of the target audience.",
      buttons: [
        { label: 'Read full case study', href: '#' },
        { label: 'See prototype', href: '#', style: 'secondary' },
      ],
      meta: [
        { label: 'Industry', value: 'Higher Education' },
        { label: 'Client', value: 'Budapest Metropolitan University' },
        { label: 'Year', value: '2018–2020' },
        { label: 'Role', value: 'Marketing & Communications Associate / Consultant' },
        { label: 'Timeline', value: '16 months part-time + short-term consulting engagement' },
      ],
      hero: { ph: 'Hero image' },
    },
    {
      type: 'alternating',
      side: 'left',
      kick: 'The role',
      title: 'Owning the full marketing mix',
      body:
        "Across a 16-month engagement I independently ran <b>PPC campaigns, social media, email marketing, and content creation</b> for the university's international audience — turning a strong read of the target market into consistent, on-brand communication.",
      image: { ph: 'Campaign / channel image' },
    },
    {
      type: 'alternating',
      side: 'right',
      kick: 'Approach',
      title: 'Learning fast, testing faster',
      body:
        'New channels and briefs were treated as experiments: quick to learn, quick to ship, and measured against how well they reached prospective international students. Nothing was off-limits if it moved the numbers.',
      image: { ph: 'Content / asset image' },
    },
    {
      type: 'sticky',
      kick: 'Deliverables',
      heading: 'What I delivered',
      images: [
        { ph: 'PPC dashboard' },
        { ph: 'Social media feed' },
        { ph: 'Email campaign' },
        { ph: 'Content assets' },
      ],
      bullets: [
        { bold: 'PPC campaigns', text: ' — planned, launched, and optimised paid search and social ads.' },
        { bold: 'Social media', text: ' — content calendars and community management across channels.' },
        { bold: 'Email marketing', text: ' — segmented campaigns for prospective and current students.' },
        { bold: 'Content creation', text: ' — copy, visuals, and assets aligned to the brand.' },
        { bold: 'Market focus', text: ' — every decision anchored in the target audience.' },
      ],
    },
    {
      type: 'testimonial',
      quote:
        'Noora independently managed PPC campaigns, social media, email marketing, and content creation while maintaining a strong understanding of the target market. She is quick to learn and never shies away from a challenge.',
      name: 'Luca Utassy',
      role:
        'International Marketing Manager & Head of International Marketing and Event Management Office, Budapest Metropolitan University',
      avatar: null,
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
