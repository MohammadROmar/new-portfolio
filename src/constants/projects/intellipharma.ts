import type { ProjectCaseStudy } from './types';

export const intellipharmaProject: ProjectCaseStudy = {
  slug: 'intellipharma',
  title: 'IntelliPharma',
  tagline:
    'A bilingual, AI-driven ERP and CRM for pharmaceutical distribution.',
  role: 'Graduation project',
  team: 'Team of 5. I owned the dashboard frontend end to end; teammates covered backend (2), mobile (1), and the AI/ML route-planning model (1).',
  description: [
    'IntelliPharma is my graduation project — a bilingual pharmaceutical ERP and CRM serving warehouse admins, sales reps, and distributors, built by a team of five around a reinforcement-learning route planner as its headline feature. I owned the frontend end to end: a strict Feature-Sliced Design codebase spanning 1,100+ source files, 21 domain entities, and 67 route-level pages.',
    'The frontend rests on a two-layer data architecture — a typed Axios client with normalized error handling, and reusable TanStack Query hooks for Suspense reads, infinite lists, and mutations. Backend-authoritative role-based access control protects routes, navigation, and UI down to individual capabilities, and a companion Flutter app and Laravel backend round out the system.',
  ],
  stack: [
    'React.js',
    'Feature-Sliced Design',
    'React Router',
    'Redux Toolkit',
    'TanStack Query',
    'shadcn/ui',
    'Vite',
    'TypeScript',
    'Axios',
    'React Hook Form',
    'Tailwind CSS',
    'i18next',
    'Laravel',
    'Laravel Echo',
    'Pusher',
    'Postman',
    'Firebase',
    'React Leaflet',
    'Recharts',
  ],
  highlights: [
    'Architected a strict Feature-Sliced Design codebase across app, pages, features, entities, shared, and widgets layers, keeping dependency direction explicit across 1,100+ source files.',
    'Designed a two-layer data architecture: a typed Axios apiClient with interceptor-normalized responses, plus reusable TanStack Query hooks for Suspense reads, infinite lists, and CRUD mutations.',
    'Implemented backend-authoritative RBAC from session state through protected routes, permission-aware navigation, and capability-driven UI that fails closed when access is missing.',
    'Integrated real-time field-team tracking over authenticated WebSocket channels, reconciling REST snapshots with live location events in a normalized store.',
    'Engineered cross-tab authentication as a concurrency system — serialized token refreshes with Web Locks and propagated session state across tabs via BroadcastChannel.',
  ],
  links: [
    {
      label: 'Live demo',
      href: 'https://intelli-pharma.limebyte.org/',
      type: 'demo',
    },
  ],
  cover: {
    src: '/open-graph/cover-intellipharma.jpg',
    alt: 'Pharmaceutical operations dashboards, route planning, and field-team tracking interfaces.',
  },
  featured: true,
};
