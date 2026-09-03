import type { ProjectCaseStudy } from './types';

export const ouzounProject: ProjectCaseStudy = {
  slug: 'ouzoun',
  title: 'Ouzoun',
  tagline:
    'An administration platform for dental clinics, connecting web, backend, and two mobile apps.',
  role: 'Team project',
  team: 'Team of 5 — 2 backend, 2 mobile, and me on the admin dashboard frontend.',
  description: [
    'Ouzoun is an administration platform for dental operations, tools, implants, and assistants, built by a five-person team with an ASP.NET backend and two companion Flutter mobile applications for connected clinic workflows. I owned the admin dashboard frontend.',
    'The platform includes real-time notifications, role-based administration, and interactive analytics dashboards that give clinic staff visibility into day-to-day operations.',
  ],
  stack: [
    'Next.js',
    'TypeScript',
    'ASP.NET',
    'next-intl',
    'Swagger',
    'Firebase',
    'React Leaflet',
    'Recharts',
  ],
  highlights: [
    'Built an administration platform for dental operations, tools, implants, assistants, and analytics.',
    'Integrated an ASP.NET backend with two Flutter mobile applications.',
    'Implemented real-time notifications, role-based administration, and interactive analytics dashboards.',
  ],
  links: [
    { label: 'Live demo', href: 'https://ouzoun.vercel.app/', type: 'demo' },
    {
      label: 'Dashboard repo',
      href: 'https://github.com/MohammadROmar/ouzoun',
      type: 'repo',
    },
    {
      label: 'Backend repo',
      href: 'https://github.com/Loukas998/Ouzon',
      type: 'repo',
    },
    {
      label: 'Assistant app repo',
      href: 'https://github.com/grace945/Assistant_Ouzoun_App',
      type: 'repo',
    },
    {
      label: 'Doctor app repo',
      href: 'https://github.com/HadelBrmo/doctor_ouzoune/tree/eb11006f0d60b8edf3883431cf2079e7ab25c46f',
      type: 'repo',
    },
  ],
  cover: {
    src: '/open-graph/cover-ouzoun.jpg',
    alt: 'Dental clinic administration dashboards with operational data and connected workflows.',
  },
  featured: true,
};
