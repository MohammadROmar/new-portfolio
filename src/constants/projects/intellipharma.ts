import type { ProjectCaseStudy } from './types';

export const intellipharmaProject: ProjectCaseStudy = {
  slug: 'intellipharma',
  title: 'IntelliPharma',
  tagline:
    'A bilingual, AI-driven ERP and CRM for pharmaceutical distribution.',
  role: 'Graduation project',
  team: 'Team of 5. I owned the dashboard frontend end to end; teammates covered backend (2), mobile (1), and the AI/ML route-planning model (1).',
  description: [
    "Warehouse distribution for pharmacies loses money to three things: randomized rep and distributor routes wasting fuel and time, months of retraining every time an experienced rep leaves and takes their pharmacy relationships with them, and zero real-time visibility into where a rep actually is or what they've sold. IntelliPharma is my graduation project, built by a team of five around a reinforcement-learning route planner to close that gap.",
    'I owned the frontend end to end: a strict Feature-Sliced Design codebase spanning 1,100+ source files, 21 domain entities, and 67 route-level pages.',
    'The frontend rests on a two-layer data architecture — a typed Axios client with normalized error handling, and reusable TanStack Query hooks for Suspense reads, infinite lists, and mutations. Backend-authoritative role-based access control protects routes, navigation, and UI down to individual capabilities, and a companion Flutter app and Laravel backend round out the system.',
    "The planner backs that up with real numbers: it cuts driving distance by roughly 42–54% against naive route ordering, and in a full production-pipeline test it completed 97 of 97 planning requests with no crashes or timeouts at a 5.3-second median response time. Getting there took more than model accuracy — an early version's ride-completion rate dropped from 0.90 to 0.74 under aggressive reward feedback, which is why the team built a replay-and-shadow-validation gate that can reject a bad model update outright rather than trust everything it learns.",
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
  gallery: [
    { src: '/open-graph/cover-balagh.jpg', alt: '' },
    { src: '/open-graph/cover-intellipharma.jpg', alt: '' },
    { src: '/open-graph/cover-skillnest.jpg', alt: '' },
    { src: '/open-graph/cover-ouzoun.jpg', alt: '' },
  ],
  featured: true,
};
