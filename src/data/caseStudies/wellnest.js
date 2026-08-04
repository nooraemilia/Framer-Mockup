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
      // Scroll-linked solution module. Each item owns one OR MORE screens via
      // `images:[…]` — every screen in an item keeps that bullet lit while it
      // passes the viewport centre, so you can add several screens to one bullet
      // without the highlight jumping ahead. A very long screen can be marked
      // `tall: true` to render at full height (the Home feed below).
      // Screens live in /public/wellnest — add the PNGs named here (see the
      // README in that folder for which screenshot maps to which file).
      type: 'solutionHighlight',
      kick: 'What we built',
      heading: 'Tools that guide without overwhelming',
      items: [
        {
          bold: "Support that's always in reach",
          text: ' — emergency numbers and vetted wellness apps gathered in one calm place, for the moments between appointments.',
          images: [
            { src: '/wellnest/01-support.png', alt: 'WellNest Support screen with emergency numbers and recommended wellness apps.' },
          ],
        },
        {
          bold: 'Stories from people who get it',
          text: ' — articles from fellow survivors and trusted professionals, tackling the real questions of life after treatment.',
          images: [
            { src: '/wellnest/02-articles.png', alt: 'WellNest Articles screen filtering stories by fellow survivors and trusted professionals.' },
          ],
        },
        {
          bold: 'Check-ins on your own terms',
          text: ' — gentle, optional tracking for mood, sleep, and energy, reworded to feel human rather than like a medical chart.',
          images: [
            { src: '/wellnest/03-my-journey.png', alt: 'WellNest My Journey screen with a Daily check-in and mood, sleep and energy tracking cards.' },
          ],
        },
        {
          bold: "A feed that says you're not alone",
          text: ' — everyday posts and journeys from your groups, so connection is the first thing you see.',
          images: [
            { src: '/wellnest/04-home-feed.png', alt: 'WellNest Home feed of community posts and survivor journeys.', tall: true },
          ],
        },
        {
          bold: 'Groups that match where you are now',
          text: ' — filter by cancer type, age, and location to find people whose experience actually mirrors yours.',
          images: [
            { src: '/wellnest/05-groups.png', alt: 'WellNest Connect & share screen recommending groups filtered by cancer type, age and location.' },
          ],
        },
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
