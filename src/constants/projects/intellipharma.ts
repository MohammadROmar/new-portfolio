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
    {
      label: "Project's report",
      href: 'https://drive.google.com/file/d/1deOIzZDuhNKYbzxda7qESeOgyTWtwkrl/view?usp=drivesdk',
      type: 'demo',
    },
  ],
  cover: {
    src: '/open-graph/cover-intellipharma.jpg',
    alt: 'Pharmaceutical operations dashboards, route planning, and field-team tracking interfaces.',
  },
  gallery: [
    {
      src: '/projects/intellipharma/login.jpg',
      alt: "IntelliPharma's Arabic RTL login screen on a dark, dotted-grid background.",
    },
    {
      src: '/projects/intellipharma/overview-dashboard-ar.jpg',
      alt: 'Arabic RTL admin overview dashboard with delivery, staff, and order stats plus a request trend chart.',
    },
    {
      src: '/projects/intellipharma/smart-assistant-chat.jpg',
      alt: 'AI assistant chat panel for asking natural-language questions about pharmacies and orders.',
    },
    {
      src: '/projects/intellipharma/create-order-details.jpg',
      alt: 'First step of order creation: selecting the destination pharmacy and warehouse.',
    },
    {
      src: '/projects/intellipharma/create-order-medicines.jpg',
      alt: 'Second step of order creation: searching the medicine catalog and building the order cart.',
    },
    {
      src: '/projects/intellipharma/order-detail.jpg',
      alt: 'Purchase order detail page with line items, financial summary, and order context.',
    },
    {
      src: '/projects/intellipharma/debts-list.jpg',
      alt: 'Pharmacy debts overview with total balance, collection progress, and a filterable debt-account list.',
    },
    {
      src: '/projects/intellipharma/debt-detail.jpg',
      alt: 'Single pharmacy debt detail page with payment history and contributing orders.',
    },
    {
      src: '/projects/intellipharma/delivery-detail.jpg',
      alt: 'Delivery record detail page with order items, timeline, and required collection amount.',
    },
    {
      src: '/projects/intellipharma/medicine-form.jpg',
      alt: 'Add New Medicine form with bilingual naming, pricing, warehouse stock, and product photos.',
    },
    {
      src: '/projects/intellipharma/notifications.jpg',
      alt: 'Notification center listing stock-expiry alerts.',
    },
    {
      src: '/projects/intellipharma/pharmacies-list.jpg',
      alt: 'Paginated list of registered pharmacies with region, pharmacist, and status columns.',
    },
    {
      src: '/projects/intellipharma/route-plan-detail.jpg',
      alt: 'Route plan detail with an interactive map showing planned stops and visit progress.',
    },
    {
      src: '/projects/intellipharma/visit-detail.jpg',
      alt: "A rep's visit list with a selected visit's completion status and service-time details.",
    },
    {
      src: '/projects/intellipharma/profile-permissions.jpg',
      alt: 'Admin profile page listing the assigned role and detailed granted permissions.',
    },
    {
      src: '/projects/intellipharma/create-role-form.jpg',
      alt: 'Create Role form with a role name field and a searchable permissions list.',
    },
    {
      src: '/projects/intellipharma/role-permissions-matrix.jpg',
      alt: 'Expanded permissions matrix across ERP and Planner modules for a new role.',
    },
    {
      src: '/projects/intellipharma/sales-targets.jpg',
      alt: 'Sales Targets page showing yearly, quarterly, and monthly quota cards.',
    },
  ],
  featured: true,
};
