// CASE STUDY — ILGA Portugal
export default {
  slug: 'ilga-portugal',
  title: 'ILGA Portugal — Case Study — NOORA EMILIA',
  description:
    "A six-week, research-led redesign of ILGA Portugal's website — clarity, warmth, and accessibility for a national LGBTQIA+ advocacy organization.",
  blocks: [
    {
      type: 'intro',
      tagline: { t1: 'UX Research & Accessibility', rest: '· ILGA Portugal · 2025' },
      statement: { text: "Navigating shouldn't feel like ", dim: 'solving a puzzle.' },
      lead:
        "A six-week redesign of ILGA Portugal's website so anyone seeking information, events, or help could find it quickly and confidently — a digital home that serves a marginalized community with <b>clarity, warmth, and care.</b>",
      buttons: [
        {
          label: 'Read full case study',
          href: 'https://medium.com/@noorasaarelainen/designing-with-purpose-the-ilga-portugal-website-redesign-0689128c637c',
        },
        {
          label: 'See prototype',
          href: 'https://www.figma.com/proto/AQ755qs1PFHjOUynGGkYaI/-Final-Project--ILGA-%7C-Design-File--Deliverable-?page-id=11051%3A8848&node-id=11068-13500&viewport=1092%2C183%2C0.12&t=nKVLO1grnL2dfUKG-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=11068%3A13500&show-proto-sidebar=1',
          style: 'secondary',
        },
      ],
      meta: [
        { label: 'Industry', value: 'Non-profit civil society (NGO)' },
        { label: 'Client', value: 'ILGA Portugal' },
        { label: 'Year', value: '2025' },
        { label: 'Role', value: 'UX/UI & Accessibility Design' },
        { label: 'Timeline', value: '6 weeks · Part-time · Solo project' },
      ],
      hero: {
        src: 'https://framerusercontent.com/images/mv301lcXsr0r2Amx25RDVw6MJs.png?width=900',
        alt: 'Laptop mockup showing the redesigned ILGA Portugal About Us page.',
      },
    },
    {
      type: 'alternating',
      side: 'left',
      kick: 'The organization',
      title: "Portugal's leading LGBTQIA+ advocate since 1995",
      body:
        'ILGA Portugal is built on three pillars — <b>political advocacy, support services, and community empowerment.</b> Yet usability testing showed that many first-time visitors couldn\'t grasp that mission within seconds of landing on the homepage. The work it exists to do was buried beneath internal terminology.',
      image: {
        src: 'https://framerusercontent.com/images/NSkW4BmbGztK5mLQmVhcJEwdNs.png?width=1200',
        alt: 'Before-and-after comparison of the ILGA Portugal About Us page.',
      },
    },
    {
      type: 'alternating',
      side: 'right',
      kick: 'The approach',
      title: 'Six weeks, research to hi-fi — solo',
      body:
        'Working alone, I led the full process: <b>stakeholder interviews, competitive benchmarking of five NGOs, accessibility research against WCAG, and two rounds of usability testing</b> — carrying the redesign from early findings through to a high-fidelity prototype.',
      image: {
        src: 'https://framerusercontent.com/images/EZWlIc0qazbksVvk2GIJXGKeIyU.png?width=1200',
        alt: 'Side-by-side comparison of the original and redesigned ILGA Portugal homepage.',
      },
    },
    {
      type: 'sticky',
      kick: 'Challenge',
      heading: 'Where first-time users got lost',
      images: [
        {
          src: 'https://framerusercontent.com/images/dBmk3aFBYBe4AsmCCYlfE8rT9rE.png?width=1000',
          caption: 'Before-and-after views of the ILGA Portugal site navigation.',
        },
        {
          src: 'https://framerusercontent.com/images/wuEBgkqs0JxE1HFRFvcTi2TllY.png?width=1000',
          caption: 'Comparison of the original and redesigned ILGA Portugal events page.',
        },
      ],
      bullets: [
        { bold: '67% had never heard of ILGA', text: ' — first-time visitors were the rule, not the exception.' },
        { bold: '50% misread the homepage', text: ' — as an employment agency rather than an advocacy organization.' },
        { bold: '83% struggled to find events', text: ' — there was no clearly labeled “Events” section.' },
        { bold: 'Confusing labels', text: ' — “Activities,” “Projects,” and “Programs” blurred into one another.' },
        { bold: 'Scattered resources', text: ' — spread across unclear categories with no central hub.' },
        { bold: 'Accessibility gaps', text: ' — limited color contrast and no font resizing.' },
      ],
    },
    {
      type: 'testimonial',
      quote:
        'Many people don\'t immediately understand what ILGA does. Our critical work is buried, and users rely on Google to find our own pages.',
      name: 'ILGA stakeholder',
      role: 'Stakeholder interview · ILGA Portugal',
      avatar: null,
    },
    {
      type: 'sticky',
      kick: 'Solution',
      heading: 'Five sections, built on user mental models',
      images: [
        {
          src: 'https://framerusercontent.com/images/mYAxUtcvoasUrBWUjWs7nZvFjmE.png?width=1000',
          caption: 'Redesigned ILGA Portugal resources section with a searchable database.',
        },
      ],
      bullets: [
        { bold: 'Homepage', text: " — communicates ILGA's mission and three pillars within seconds." },
        { bold: 'Events', text: ' — a dedicated, intuitive hub for community gatherings and campaigns.' },
        { bold: 'Knowledge Hub', text: ' — one place for resources, research, and policy documents.' },
        { bold: 'Get Involved', text: ' — clear pathways for volunteering and advocacy.' },
        { bold: 'Support', text: ' — direct access to legal, mental-health, and community services.' },
        {
          bold: 'Accessibility throughout',
          text: ' — stronger contrast, larger action-oriented buttons, clearer type, plus dark-mode and font-resizing consideration.',
        },
      ],
    },
    {
      type: 'pullQuote',
      quote:
        "In a second round of testing, 100% of participants completed every task independently — and recognized ILGA's mission the moment they arrived.",
      cite: 'Second-round usability testing with the redesign',
    },
    {
      type: 'moreProjects',
      showAllHref: '/#projects',
      projects: [
        {
          title: 'WellNest',
          tags: ['Product Design', 'Mobile UX', 'App'],
          image: {
            src: 'https://framerusercontent.com/images/6uYyfK79iiAiV15Q1IuEo80yQ.png',
            alt: 'WellNest mobile app mockup.',
          },
          href: '/wellnest',
        },
        {
          title: 'SchoolsBuddy',
          tags: ['Redesign', 'UX Design', 'EdTech'],
          image: {
            src: 'https://framerusercontent.com/images/mdHJS0sMsOpLySMAb9AoWtVPM.png',
            alt: 'SchoolsBuddy app mockup.',
          },
          href: '/schoolsbuddy',
        },
      ],
    },
  ],
};
