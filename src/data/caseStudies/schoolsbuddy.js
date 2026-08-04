// CASE STUDY — SchoolsBuddy
// NOTE: no external client (4-cell meta) and no named quote, so there is no
// testimonial block — the block list simply omits it.
export default {
  slug: 'schoolsbuddy',
  title: 'SchoolsBuddy — Case Study — NOORA EMILIA',
  description:
    'A two-week solo redesign of the SchoolsBuddy teacher view, rebuilt for the real pace of a school day.',
  blocks: [
    {
      type: 'intro',
      tagline: { t1: 'UX Design & Information Architecture', rest: '· SchoolsBuddy · 2025' },
      statement: { text: 'Less time clicking, ', dim: 'more time teaching.' },
      lead:
        'A two-week solo redesign of the SchoolsBuddy teacher view — the school-management app I used daily in my own teaching — rebuilt for the <b>real pace and chaos of a school day</b>, especially managing after-school clubs.',
      buttons: [
        {
          label: 'Read full case study',
          href: 'https://medium.com/@noorasaarelainen/redesigning-schoolsbuddy-simplifying-the-teachers-experience-db4051108e29',
        },
        {
          label: 'See prototype',
          href: 'https://www.figma.com/proto/S2Kt1JcicMxDwXMMXhiHm8/Noora-s-Redesign-an-App?page-id=116%3A21&node-id=6449-431&p=f&viewport=-15693%2C6101%2C1.33&t=7PyblV6X3nakNbMF-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6449%3A431&show-proto-sidebar=1',
          style: 'secondary',
        },
      ],
      meta: [
        { label: 'Industry', value: 'EdTech' },
        { label: 'Year', value: '2025' },
        { label: 'Role', value: 'UX/UI Design & Information Architecture' },
        { label: 'Timeline', value: '2 weeks · Part-time · Solo project' },
      ],
      hero: {
        src: 'https://framerusercontent.com/images/mdHJS0sMsOpLySMAb9AoWtVPM.png?width=900',
        alt: 'Redesigned SchoolsBuddy mobile teacher interface.',
      },
    },
    {
      type: 'alternating',
      side: 'left',
      kick: 'The context',
      title: 'Built by a daily user',
      body:
        "As a teacher who used SchoolsBuddy every day, I felt first-hand that the teacher interface wasn't designed for the real pace of a school day. During my UX/UI bootcamp I took on the teacher view as a <b>solo two-week challenge</b>, leading the work from research through prototyping and visual design.",
      image: {
        src: 'https://framerusercontent.com/images/rp1vzRubve5ATbSLBq5CIUMD04c.png?width=1200',
        alt: 'SchoolsBuddy home screen, before and after the redesign.',
      },
    },
    {
      type: 'alternating',
      side: 'right',
      kick: 'Grounding',
      title: 'Heuristics, feedback, and competitors',
      body:
        "I ran a <b>heuristic evaluation</b> against Nielsen's 10 usability heuristics, gathered feedback from teacher-colleagues who use the app daily, and studied competitors like EvolveGo, SOCS, and PikmyKid — which leaned on cleaner layouts, more thoughtful palettes, and simpler organization.",
      image: {
        src: 'https://framerusercontent.com/images/Xs9icUw0HfMb8pAhzV9I3WzplY.png?width=1200',
        alt: 'Competitor analysis of school-management apps.',
      },
    },
    {
      type: 'sticky',
      kick: 'Challenge',
      heading: 'Cluttered, confusing, inefficient',
      images: [
        {
          src: 'https://framerusercontent.com/images/XTRMlH56BhfXrGAXkbBtK8X6c.png?width=1000',
          caption: 'SchoolsBuddy calendar view, before and after the redesign.',
        },
      ],
      bullets: [
        { bold: 'Visual overload', text: ' — a harsh palette with overly high contrast and no clear hierarchy.' },
        { bold: 'Poor organization', text: ' — illogically ordered lists, repetitive labels, and fragmented navigation.' },
        { bold: 'Distracting loading animation', text: ' — an over-the-top animation that made the app feel buggy.' },
        { bold: 'Hidden help', text: ' — the home-screen “info” button only showed a welcome message; real help was buried in settings.' },
      ],
    },
    {
      type: 'sticky',
      kick: 'Solution',
      heading: 'Calmer, clearer, more purposeful',
      images: [
        {
          src: 'https://framerusercontent.com/images/pRAvNRBFufZB5N3bwoCq4T9yUsI.png?width=1000',
          caption: 'SchoolsBuddy color palette, before and after the redesign.',
        },
        {
          src: 'https://framerusercontent.com/images/wI0V3f3WoloRCD2G3hlqBwZBOKM.png?width=1000',
          caption: 'SchoolsBuddy typography overview, set in Open Sans.',
        },
      ],
      bullets: [
        { bold: 'Simplified color scheme', text: " — aligned to SchoolsBuddy's brand, with accents used only for clarity." },
        { bold: 'Restructured IA', text: ' — a cleaner layout with logical ordering and clearer labels.' },
        { bold: 'Smoother loading', text: ' — a calm, intentional animation instead of a chaotic one.' },
        { bold: 'Open Sans typography', text: ' — better readability for teachers skimming quickly between tasks.' },
        { bold: 'What teachers noticed', text: ' — onboarding and navigation felt more intuitive, and the simpler palette reduced visual fatigue.' },
        { bold: 'Looking back', text: " — I'd deepen accessibility next (higher contrast, larger tap targets, more padding) and rethink a few icons flagged as less intuitive." },
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
