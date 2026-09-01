export type ProjectImage = { src: string; alt: string };

export type ProjectLink = {
  label: string;
  href: string;
  type: 'repo' | 'demo' | 'resource';
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
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'PWA / Service Workers',
      'Motion',
      'Radix UI',
      'Jotai',
      'Vite',
    ],
    highlights: [
      'Delivered an offline-first Arabic RTL application for managing timed and open-ended PC and PlayStation sessions.',
      'Built configurable pricing with live cost calculation, warnings, summaries, and automatic timeout finalization.',
      'Directed a transparent AI-assisted workflow — owning requirements, architecture, UI iteration, code review, and final delivery.',
    ],
    links: [],
    cover: {
      src: '/open-graph/cover-snipergames.jpg',
      alt: 'Gaming lounge session management screens with live pricing and active game sessions.',
    },
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
    stack: [
      'Next.js',
      'TypeScript',
      'Stripe',
      'Prisma',
      'Resend',
      'Kinde',
      'UploadThing',
    ],
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
    cover: {
      src: '/open-graph/cover-casecobra.jpg',
      alt: 'Custom product builder with live preview and checkout screens.',
    },
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
      'Next.js',
      'React.js',
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
    cover: {
      src: '/open-graph/cover-fizzi.jpg',
      alt: 'Interactive soda product experience with 3D product visuals and animated layouts.',
    },
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
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'React Router',
      'TanStack Query',
      'Recharts',
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
    cover: {
      src: '/open-graph/cover-weatherly.jpg',
      alt: 'Forecast dashboard with weather metrics, charts, and location-based views.',
    },
    featured: false,
  },
  {
    slug: 'balagh',
    title: 'Balagh',
    tagline:
      'A government complaint-management dashboard with role-based access and exclusive complaint locking.',
    role: 'Team project',
    team: 'Team of 4 — 2 backend, 1 mobile, and me on the admin/employee dashboard frontend.',
    description: [
      "Balagh is an administrative dashboard for receiving, managing, and processing citizens' complaints, built by a four-person team — an ASP.NET backend, a Flutter mobile app for citizens, and this web dashboard for administrators and employees.",
      'Role-based access keeps administrators and employees in separate lanes: admins see statistics and manage employees, while employees work their assigned complaints. Backend-enforced exclusive locking means only the employee handling a complaint can act on it — everyone else sees who currently owns it.',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'next-intl',
      'ASP.NET',
      'Swagger',
    ],
    highlights: [
      'Built role-based dashboards for administrators (statistics, employee management, full complaint visibility) and employees (assigned and available complaints).',
      'Implemented backend-enforced exclusive complaint locking — once an employee claims a complaint, only they can act on it, and the UI reflects who currently holds it.',
      'Delivered paginated, filterable complaint and employee lists, with statistics and reports exportable as PDF.',
      'Added bilingual (Arabic/English) support and light/dark theming with next-intl and next-themes.',
    ],
    links: [
      {
        label: 'Live demo',
        href: 'https://balagh-app.vercel.app/',
        type: 'demo',
      },
      {
        label: 'Frontend repo',
        href: 'https://github.com/MohammadROmar/balagh/',
        type: 'repo',
      },
      {
        label: 'Backend repo',
        href: 'https://github.com/waitwhat2231/Balagh',
        type: 'repo',
      },
      {
        label: 'Mobile app repo',
        href: 'https://github.com/Mustafa-Sharaf/Balagh',
        type: 'repo',
      },
    ],
    cover: {
      src: '/open-graph/cover-balagh.jpg',
      alt: 'Complaint management workspace with statistics, employee tools, and case workflows.',
    },
    featured: false,
  },
  {
    slug: 'nova-bank',
    title: 'NovaBank',
    tagline:
      'A banking dashboard demonstrating classic software design patterns, built for a Software Engineering course.',
    role: 'Team project',
    description: [
      'NovaBank is a banking dashboard built for a Software Engineering course, focused on applying classic design patterns — including Singleton and Strategy — within a real-world frontend architecture.',
      'The app cleanly separates UI, business-logic abstraction, and API communication, talking to a dedicated ASP.NET backend and a companion Flutter mobile app built by teammates.',
    ],
    stack: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'ASP.NET',
      'Swagger',
    ],
    highlights: [
      'Applied the Strategy pattern for interchangeable business logic and Singleton for shared, single-instance services.',
      'Separated UI, business-logic abstraction, and API communication into distinct layers for a maintainable, pattern-driven architecture.',
      'Built two role-gated permission tiers — manager and admin — with managers restricted from creating other managers.',
    ],
    links: [
      {
        label: 'Live demo',
        href: 'https://nova-bank-one.vercel.app/',
        type: 'demo',
      },
      {
        label: 'Frontend repo',
        href: 'https://github.com/MohammadROmar/nova-bank',
        type: 'repo',
      },
      {
        label: 'Backend repo',
        href: 'https://github.com/waitwhat2231/Modular-Banking-System',
        type: 'repo',
      },
      {
        label: 'Mobile app repo',
        href: 'https://github.com/Mustafa-Sharaf/novabank',
        type: 'repo',
      },
    ],
    cover: {
      src: '/open-graph/cover-novabank.jpg',
      alt: 'Banking dashboards with account views, role-based management, and transaction interfaces.',
    },
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
    stack: [
      'React.js',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'Motion',
    ],
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
    cover: {
      src: '/open-graph/cover-stacked.jpg',
      alt: 'Animated grid search visualization showing algorithm exploration and pathfinding states.',
    },
    featured: false,
  },
  {
    slug: 'skillnest',
    title: 'SkillNest',
    tagline:
      'An educational platform with course browsing, cart, and simulated auth — built as a Prokaders training project.',
    role: 'Training project',
    description: [
      'SkillNest simulates an online learning platform: browsing courses with pagination, viewing course details, and managing a cart, with a login simulation that gates cart actions without a real backend.',
      'Built during a 16-hour frontend development track at Prokaders, it follows modern React practices — Context and useReducer for cart and auth state, React Router v6 with nested and lazy-loaded routes, and persisted state via localStorage.',
    ],
    stack: ['React.js', 'React Router', 'TypeScript', 'Tailwind CSS', 'Vite'],
    highlights: [
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
