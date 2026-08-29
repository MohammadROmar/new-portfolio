export type ProjectImage = { src: string; alt: string };

export type ProjectLink = {
  label: string;
  href: string;
  type: 'repo' | 'demo';
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  team?: string;
  description: readonly string[];
  stack: readonly string[];
  highlights: readonly string[];
  links: readonly ProjectLink[];
  cover?: ProjectImage;
  featured: boolean;
};

export const PROJECT_COVER_WIDTH = 1600;
export const PROJECT_COVER_HEIGHT = 900;

export const PROJECTS: readonly Project[] = [
  {
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
      'React 19',
      'TypeScript',
      'Vite',
      'React Router v8',
      'TanStack Query v5',
      'Redux Toolkit',
      'Axios',
      'Tailwind CSS v4',
      'i18next',
      'shadcn/ui',
      'Laravel',
      'Postman',
      'Firebase',
      'Lucide',
      'React Leaflet',
    ],
    highlights: [
      'Architected a strict Feature-Sliced Design codebase across app, pages, features, entities, shared, and widgets layers, keeping dependency direction explicit across 1,100+ source files.',
      'Designed a two-layer data architecture: a typed Axios apiClient with interceptor-normalized responses, plus reusable TanStack Query hooks for Suspense reads, infinite lists, and CRUD mutations.',
      'Implemented backend-authoritative RBAC from session state through protected routes, permission-aware navigation, and capability-driven UI that fails closed when access is missing.',
      'Integrated real-time field-team tracking over authenticated WebSocket channels, reconciling REST snapshots with live location events in a normalized store.',
      'Engineered cross-tab authentication as a concurrency system — serialized token refreshes with Web Locks and propagated session state across tabs via BroadcastChannel.',
    ],
    links: [],
    featured: true,
  },
  {
    slug: 'sniper-games',
    title: 'Sniper Games',
    tagline:
      'An offline-first PWA for running a gaming lounge, delivered through a transparent AI-assisted workflow.',
    role: 'Freelance product developer',
    description: [
      'Sniper Games manages timed and open-ended PC and PlayStation sessions for a gaming lounge, with configurable pricing, live cost calculation, and automatic timeout finalization — all working offline-first with persistent local data.',
      'I directed the project end to end: requirements, product and architecture decisions, UI iteration, and a transparent AI-assisted build the client could follow and trust, including generated-code review, debugging, and performance validation before delivery.',
    ],
    stack: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Jotai',
      'Motion',
      'Radix UI',
      'PWA / Service Workers',
    ],
    highlights: [
      'Delivered an offline-first Arabic RTL application for managing timed and open-ended PC and PlayStation sessions.',
      'Built configurable pricing with live cost calculation, warnings, summaries, and automatic timeout finalization.',
      'Directed a transparent AI-assisted workflow — owning requirements, architecture, UI iteration, code review, and final delivery.',
    ],
    links: [],
    featured: true,
  },
  {
    slug: 'fizzi',
    title: 'Fizzi',
    tagline:
      'A 3D product landing page for a fictional soda brand, built on GSAP and React Three Fiber.',
    role: 'Personal project',
    description: [
      'Fizzi is a concept landing page for a fictional soda brand, built to push on 3D rendering and motion rather than product features. Real-time 3D models run through React Three Fiber and Three.js, choreographed with GSAP-driven scroll and transition animations.',
      'The focus was performance under load: keeping a WebGL scene and a heavy animation timeline responsive without sacrificing frame rate or page weight.',
    ],
    stack: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'GSAP',
      'React Three Fiber',
      'Tailwind CSS',
    ],
    highlights: [
      'Rendered real-time 3D product models with React Three Fiber and Three.js.',
      'Choreographed scroll-driven and transition animations with GSAP.',
      'Optimized a WebGL scene and animation timeline for performance and responsiveness.',
    ],
    links: [
      {
        label: 'Live demo',
        href: 'https://fizzi-app.vercel.app/',
        type: 'demo',
      },
      {
        label: 'GitHub repo',
        href: 'https://github.com/MohammadROmar/fizzi',
        type: 'repo',
      },
    ],
    featured: true,
  },
  {
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
    stack: ['Next.js 15', 'TypeScript', 'ASP.NET', 'Swagger', 'Firebase'],
    highlights: [
      'Built an administration platform for dental operations, tools, implants, assistants, and analytics.',
      'Integrated an ASP.NET backend with two Flutter mobile applications.',
      'Implemented real-time notifications, role-based administration, and interactive analytics dashboards.',
    ],
    links: [
      { label: 'Live demo', href: 'https://ouzoun.vercel.app/', type: 'demo' },
    ],
    featured: true,
  },
  {
    slug: 'casecobra',
    title: 'CaseCobra',
    tagline:
      'A custom product e-commerce flow with live preview and Stripe checkout.',
    role: 'Personal project',
    description: [
      'CaseCobra is an end-to-end customization and checkout flow for a custom product store: upload an image, preview it on the product live, and check out securely.',
      'The flow persists product configuration through a database layer and handles payment through Stripe, from image upload to confirmed order.',
    ],
    stack: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'UploadThing'],
    highlights: [
      'Developed an end-to-end customization and checkout flow with image upload and live product preview.',
      'Persisted product configuration with database integration.',
      'Integrated secure Stripe payments end to end.',
    ],
    links: [
      {
        label: 'Live demo',
        href: 'https://casecobra-app.vercel.app/',
        type: 'demo',
      },
      {
        label: 'GitHub repo',
        href: 'https://github.com/MohammadROmar/casecobra/',
        type: 'repo',
      },
    ],
    featured: false,
  },
  {
    slug: 'weatherly',
    title: 'Weatherly',
    tagline:
      'A privacy-first weather dashboard with live forecasts, favorites, and interactive charts.',
    role: 'Personal project',
    description: [
      'Weatherly is a weather dashboard that reads your local forecast from device location or a city search, with recent-search history, favorites, and a 5-day outlook alongside detailed metrics like humidity, wind, and pressure.',
      'Data fetching runs through TanStack Query for caching and background refetching, with Recharts turning the forecast into readable charts, and a privacy-first approach that keeps search history local to the session.',
    ],
    stack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'React Router',
      'TanStack Query',
      'Recharts',
      'Lucide',
    ],
    highlights: [
      'Built location-based and city-search weather lookups backed by the OpenWeatherMap API.',
      'Implemented 5-day forecasts, detailed metrics, and interactive charts with Recharts.',
      'Used TanStack Query for caching and background refetching, with a privacy-first, session-local approach to search history and favorites.',
    ],
    links: [
      {
        label: 'Live demo',
        href: 'https://weatherly-site.vercel.app/',
        type: 'demo',
      },
      {
        label: 'GitHub repo',
        href: 'https://github.com/MohammadROmar/weatherly',
        type: 'repo',
      },
    ],
    featured: false,
  },
  {
    slug: 'stacked',
    title: 'Stacked',
    tagline:
      'An interactive grid puzzle solver visualizing DFS, BFS, A*, and uniform-cost search.',
    role: 'Personal project',
    description: [
      'Stacked visualizes how different search algorithms — DFS, BFS, A*, and uniform-cost search — explore a grid to find a path, with animated path visualization built on predictable state transitions.',
      'The interaction model stays responsive across screen sizes, turning an algorithms concept into something you can watch unfold step by step.',
    ],
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Motion'],
    highlights: [
      'Implemented DFS, BFS, A*, and uniform-cost search with animated path visualization.',
      'Built predictable state transitions with Redux Toolkit.',
      'Delivered responsive interaction across screen sizes.',
    ],
    links: [
      {
        label: 'Live demo',
        href: 'https://stacked-game.vercel.app/',
        type: 'demo',
      },
      {
        label: 'GitHub repo',
        href: 'https://github.com/MohammadROmar/stacked/',
        type: 'repo',
      },
    ],
    featured: false,
  },
] as const satisfies readonly Project[];

export function getProjectSlugs(): readonly string[] {
  return PROJECTS.map((project) => project.slug);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): readonly Project[] {
  return PROJECTS.filter((project) => project.featured);
}

export function getOtherProjects(): readonly Project[] {
  return PROJECTS.filter((project) => !project.featured);
}

export function getAdjacentProjects(slug: string): {
  previous: Project | null;
  next: Project | null;
} {
  const index = PROJECTS.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: PROJECTS[index - 1] ?? null,
    next: PROJECTS[index + 1] ?? null,
  };
}
