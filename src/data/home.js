// Homepage content — the list-shaped bits (projects grid, accordion, timeline).
// The hero and About copy live in their components (they are one-of-a-kind).
export const projects = [
  {
    title: 'ILGA Portugal',
    href: '/ilga-portugal',
    image: {
      src: 'https://framerusercontent.com/images/mv301lcXsr0r2Amx25RDVw6MJs.png',
      alt: 'Laptop mockup showing ILGA Portugal About Us page.',
    },
    blurb:
      'A research-led redesign that makes a national LGBTQIA+ advocacy site clear, welcoming, and easy to navigate.',
    tags: ['UX Research', 'Usability Testing', 'Accessibility', 'Nonprofit', 'Solo Project', 'Website'],
  },
  {
    title: 'WellNest',
    href: '/wellnest',
    image: {
      src: 'https://framerusercontent.com/images/6uYyfK79iiAiV15Q1IuEo80yQ.png',
      alt: 'WellNest mobile interface with community feed and navigation.',
    },
    blurb: 'A community-driven wellness app where people share their journeys and find support.',
    tags: ['Product Design', 'Mobile UX', 'User Flows', 'Community Features', 'Health & Wellness', 'App'],
  },
  {
    title: 'SchoolsBuddy',
    href: '/schoolsbuddy',
    image: {
      src: 'https://framerusercontent.com/images/mdHJS0sMsOpLySMAb9AoWtVPM.png',
      alt: 'Redesigned SchoolsBuddy app with upcoming events and messages.',
    },
    blurb:
      'A redesign of a school communications app that streamlines events, messages, and daily coordination.',
    tags: ['Redesign', 'UX Design', 'User Research', 'EdTech', 'Solo Project', 'App'],
  },
  {
    title: 'Himalayan Bone Broth',
    href: '/himalayan-bone-broth',
    image: {
      src: 'https://framerusercontent.com/images/kOM75FtGrQk0OA3IX6MNzLS3YI.png',
      alt: 'Laptop mockup showing Himalayan Bone Broth product page.',
    },
    blurb: 'Brand identity and e-commerce design for a premium wellness nutrition product.',
    tags: ['Brand Identity', 'Content Strategy', 'Visual Design', 'Wellness Nutrition', 'E-commerce', 'Website'],
  },
];

export const accordion = [
  {
    heading: 'Accessibility & Inclusive Design',
    intro:
      'I design with real-world users in mind, including neurodivergent users, people with disabilities, and international audiences.',
    bullets: [
      'Accessibility-focused UX reviews',
      'Designing for neurodiversity and cognitive load',
      'Language clarity and content simplification',
      'Inclusive patterns for forms, navigation, and layouts',
      'Accessibility recommendations aligned with WCAG and EAA principles',
    ],
  },
  {
    heading: 'User Research & UX Strategy',
    intro: 'I bring clarity to decisions through research and structured thinking.',
    bullets: [
      'User interviews and usability testing',
      'Persona and journey mapping',
      'Research synthesis and insights',
      'Aligning user needs with business goals',
      'Translating research into actionable design decisions',
    ],
  },
  {
    heading: 'Websites & Digital Platforms',
    intro:
      'I design and improve digital products so users can actually find what they need without frustration.',
    bullets: [
      'Website structure and information architecture',
      'Navigation and user flow improvements',
      'Content hierarchy and UX writing',
      'Accessibility and usability audits',
      'Redesigning existing websites that feel cluttered or confusing',
    ],
  },
  {
    heading: 'Product & App UX',
    intro: 'I help shape digital products that feel intuitive, focused, and easy to use.',
    bullets: [
      'User flows and task-based journeys',
      'Wireframes and interactive prototypes, from low to high fidelity',
      'Feature prioritization and scope definition',
      'Usability reviews and iterative design',
      'Turning complex requirements into simple interactions',
    ],
  },
];

export const work = [
  { date: '03/2018 – 07/2019', role: 'Marketing Communications Associate', org: 'Budapest Metropolitan University' },
  { date: '09/2019 – 10/2021', role: 'Content Creator', org: 'Katrium Oü' },
  { date: '04/2024 – 11/2025', role: 'Teaching Assistant', org: 'United Lisbon International School' },
  { date: '11/2025 – Present', role: 'Freelance UX/UI Designer', org: ' ' },
  { date: 'Apr 2026 – Present', role: 'Cowork & Community Manager', org: 'tribe IRL' },
];

export const education = [
  {
    date: '09/2016 – 06/2020',
    role: 'BA International Relations & Diplomacy',
    org: 'Budapest Metropolitan University',
  },
  {
    date: '09/2021 – 09/2023',
    role: 'MSc Digital Communication Leadership & ICT4D',
    org: 'Wageningen University & Research, University of Salzburg, Universidade Federal da Bahia',
  },
  { date: '09/2024 – 04/2025', role: 'UX/UI Design', org: 'Ironhack' },
  { date: '03/2025 – Present', role: 'UX/UI Design Mentorship Program', org: 'Ladies That UX Lisbon' },
];
