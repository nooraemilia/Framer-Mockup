// CASE STUDY — WellNest
// NOTE: no external client, so the intro `meta` has 4 cells (Client omitted).
export default {
  slug: 'wellnest',
  title: 'WellNest — Case Study — NOORA EMILIA',
  description:
    'A community-driven mobile experience supporting cancer survivors through the emotional and social challenges that surface once treatment ends.',
  blocks: [
    {
      type: 'intro',
      tagline: { t1: 'UX Research & Product Design', rest: '· WellNest · 2025' },
      statement: { text: 'Designing for the part ', dim: 'that comes after treatment.' },
      lead:
        'A mobile experience supporting cancer survivors through the emotional, social, and mental-health challenges that surface once treatment ends and the medical system stops checking in. I <b>led UX research, user interviews, and usability testing</b> across the project.',
      buttons: [
        {
          label: 'Read full case study',
          href: 'https://medium.com/@noorasaarelainen/when-treatment-ends-a-ux-approach-to-post-cancer-support-1867c3b56181',
        },
        {
          label: 'See prototype',
          href: 'https://www.figma.com/proto/4tq1DZxIrFbr8GXK9YOXSR/The-Potato-Swirlies-%7C-Wellness-App?page-id=9301%3A3214&node-id=9317-6272&viewport=211%2C-957%2C0.1&t=SIC8LLwfcodpyDb9-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=9317%3A6272&show-proto-sidebar=1',
          style: 'secondary',
        },
      ],
      meta: [
        { label: 'Industry', value: 'Healthtech' },
        { label: 'Year', value: '2025' },
        { label: 'Role', value: 'UX/UI Design & User Research' },
        { label: 'Timeline', value: '5 weeks · Part-time · Team project' },
      ],
      hero: {
        src: 'https://framerusercontent.com/images/6uYyfK79iiAiV15Q1IuEo80yQ.png?width=900',
        alt: 'WellNest mobile interface showing the community feed.',
      },
    },
    {
      type: 'alternating',
      side: 'left',
      kick: 'The problem',
      title: 'A steep emotional drop when treatment ends',
      body:
        'Survivors describe life after cancer as stepping out of a storm with no map for what comes next. Once the medical system stops checking in, they lose structured support, frequent contact, and the sense of belonging that came from the treatment community — many report feeling <b>unsupported, isolated, or “left hanging.”</b>',
      image: {
        src: 'https://framerusercontent.com/images/ejLmKoXixKZsyuEQKkMowFoO3Sc.png?width=1200',
        alt: 'Three WellNest screens: home feed, profile settings, and daily check-in.',
      },
    },
    {
      type: 'alternating',
      side: 'right',
      kick: 'Research lead',
      title: 'Grounded in survivor voices',
      body:
        'I took the lead on <b>UX research, user interviews, and usability testing</b>, and supported the team through concept development, user flows, and prototyping — keeping every decision grounded in empathy and evidence rather than assumption.',
      image: {
        src: 'https://framerusercontent.com/images/XVXImVE4QaKyMzuwjHxZqIWN0.png?width=1200',
        alt: 'User persona card for Beatrice, a cancer survivor.',
      },
    },
    {
      type: 'testimonial',
      quote:
        'My family wants to take it all over for me, but they can\'t. The other girls understand. When you have to get another infusion or another operation, they know exactly what it feels like.',
      name: 'User interview participant',
      role: 'Cancer survivor · WellNest research',
      avatar: null,
    },
    {
      type: 'sticky',
      kick: 'Solution',
      heading: 'Four needs, heard again and again',
      images: [
        {
          src: 'https://framerusercontent.com/images/kJDu1fQIDH1E1dX6kdtT8E12rmk.png?width=1000',
          caption: 'WellNest onboarding flow: welcome, create account, and notifications screens.',
        },
        {
          src: 'https://framerusercontent.com/images/H90pZ7BMZ27zvBlRNT5kM2DmUE.png?width=1000',
          caption: "WellNest onboarding personalization capturing the user's cancer journey.",
        },
      ],
      bullets: [
        { bold: 'Emotional support', text: ' — continuous and gentle, not clinical check-ins that stop when treatment does.' },
        { bold: 'Community', text: ' — connection with people who share the same lived experience.' },
        { bold: 'Flexible coping', text: " — room for different coping styles, at each survivor's own pace." },
        { bold: 'Trust & safety', text: ' — an environment built on emotional safety above all.' },
        { bold: 'The problem statement', text: " — survivors need a way to connect with others who've shared their experience, because traditional support systems rarely address life after treatment." },
      ],
    },
    {
      type: 'alternating',
      side: 'left',
      kick: 'Direction',
      title: 'A calm, inclusive visual identity',
      body:
        'The visual identity leaned into <b>calm, grounding tones</b> and inclusive imagery — a deliberate step away from the clinical language survivors said they were tired of, toward something that felt safe and human.',
      image: {
        src: 'https://framerusercontent.com/images/3RgPGwo7L78Io7gzM18792pqA.png?width=1200',
        alt: 'WellNest moodboard exploring a calm, inclusive visual direction.',
      },
    },
    {
      type: 'alternating',
      side: 'right',
      kick: 'Process',
      title: 'Prioritised with purpose',
      body:
        'We built the persona <b>Beatrice</b>, mapped her emotional journey, and used the <b>MoSCoW method</b> to focus on tools that guide without overwhelming. Low- and mid-fi prototypes were tested with survivors, leading to clearer onboarding and friendlier mood-tracking copy.',
      image: {
        src: 'https://framerusercontent.com/images/BaRPPYKmepPjXY7v6R8Yx1UlDUQ.webp?width=1200',
        alt: 'WellNest color palette and typography set in Nunito Bold.',
      },
    },
    {
      type: 'sticky',
      kick: 'What we built',
      heading: 'Tools that guide without overwhelming',
      images: [
        {
          src: 'https://framerusercontent.com/images/NGLRL3SjR9tyNqHLXUDokL80nDE.png?width=1000',
          caption: 'WellNest core support features: Messages, Articles, and Support screens.',
        },
      ],
      bullets: [
        { bold: 'Identity-based groups', text: " — support spaces that actually feel like the survivor's own." },
        { bold: 'Private messaging', text: ' — one-to-one connection with people who understand.' },
        { bold: 'Daily check-ins', text: ' — friendly mood tracking, reworded to feel human rather than clinical.' },
        { bold: 'A reflection space', text: ' — a personal, private place to process the emotional world.' },
        { bold: 'Five core sections', text: ' — an intentionally simple information architecture that keeps cognitive load low.' },
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
          title: 'Himalayan Bone Broth',
          tags: ['Brand Identity', 'Content Strategy', 'E-commerce'],
          image: {
            src: 'https://framerusercontent.com/images/kOM75FtGrQk0OA3IX6MNzLS3YI.png',
            alt: 'Himalayan Bone Broth website mockup.',
          },
          href: '/himalayan-bone-broth',
        },
      ],
    },
  ],
};
