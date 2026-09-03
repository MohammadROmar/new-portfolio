import type { ProjectCaseStudy } from './types';

export const skillnestProject: ProjectCaseStudy = {
  slug: 'skillnest',
  title: 'SkillNest',
  tagline:
    'An educational platform with course browsing, cart, and simulated auth — the certification capstone for a Prokaders training track.',
  role: 'Certification project',
  description: [
    'SkillNest was the completion deliverable for a Prokaders frontend certificate: built after the training track ended, against a written specification the program provided, with the certificate awarded only to those who completed it. It simulates an online learning platform — browsing courses with pagination, viewing course details, and managing a cart, with a login simulation that gates cart actions without a real backend.',
    'The UI was implemented from a mockup largely generated with Google Stitch, with the frontend logic built independently — Context and useReducer for cart and auth state, React Router v6 with nested and lazy-loaded routes, and persisted state via localStorage — then submitted via GitHub with a live deploy, against a set deadline.',
  ],
  stack: ['React.js', 'React Router', 'TypeScript', 'Tailwind CSS', 'Vite'],
  highlights: [
    'Built after training as the graded capstone for a Prokaders certificate — implemented to a written specification and delivered via GitHub with a live deploy, against a deadline.',
    'Implemented course browsing with pagination, detail pages, and full cart management (add, remove, clear).',
    'Simulated authentication state with React Context and useReducer, persisting cart and login state to localStorage.',
    'Built nested, lazy-loaded routing with React Router v6 for a clean, scalable navigation structure.',
  ],
  links: [
    {
      label: 'Live demo',
      href: 'https://skillnest-app.vercel.app/',
      type: 'demo',
    },
    {
      label: 'GitHub repo',
      href: 'https://github.com/MohammadROmar/skillnest',
      type: 'repo',
    },
    {
      label: 'Images — Unsplash',
      href: 'https://unsplash.com/',
      type: 'resource',
    },
    {
      label: 'Illustrations — unDraw',
      href: 'https://undraw.co/',
      type: 'resource',
    },
    {
      label: 'Certificate',
      href: 'https://drive.google.com/file/d/1doWyt9WlgzeXnfdfKKHyGShRmArM4xPk/view?usp=drivesdk',
      type: 'resource',
    },
  ],
  cover: {
    src: '/open-graph/cover-skillnest.jpg',
    alt: 'Course browsing, learning content, and shopping cart interfaces for an online education platform.',
  },
  featured: false,
};
