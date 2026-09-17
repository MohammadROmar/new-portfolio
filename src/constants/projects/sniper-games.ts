import type { ProjectCaseStudy } from './types';

export const sniperGamesProject: ProjectCaseStudy = {
  slug: 'sniper-games',
  title: 'Sniper Games',
  tagline:
    'An offline-first PWA for running a gaming lounge, delivered through a transparent AI-assisted workflow.',
  role: 'Freelance product developer',
  description: [
    "Sniper Games replaces a gaming lounge's manual, MS Word–based session tracking — previously two separate tables, one for PCs and one for PlayStations — with an offline-first PWA managing timed and open-ended sessions. Stations and pricing are fully configurable, so the client can add, remove, or edit any PC or PlayStation station on the fly, alongside live cost calculation and automatic timeout finalization, all working offline with persisted local data.",
    "I directed the project end to end: requirements, product and architecture decisions, UI iteration shaped by direct client feedback, and a transparent AI-assisted build the client could follow and trust, including generated-code review, debugging, and performance validation before delivery. It's been in continuous daily use since launch, currently running up to 8 PC and 2 PlayStation stations.",
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
    "Replaced a gaming lounge's manual, MS Word–based session tracking with an offline-first PWA — in continuous daily use since launch, currently running up to 8 PC and 2 PlayStation stations.",
    'Built fully configurable stations and pricing — add, remove, or edit any station on the fly — with live cost calculation, warnings, summaries, and automatic timeout finalization.',
    'Directed a transparent AI-assisted workflow — owning requirements, architecture, UI iteration shaped by direct client feedback, code review, and final delivery.',
    "Considered and deliberately left out local-network device control (locking or disconnecting a station over the shop's LAN) — a technically interesting idea the client never actually asked for, so it stayed out of the build.",
  ],
  links: [],
  cover: {
    src: '/open-graph/cover-snipergames.jpg',
    alt: 'Gaming lounge session management screens with live pricing and active game sessions.',
  },
  gallery: [
    {
      src: '/projects/sniper-games/sessions-dashboard.jpg',
      alt: 'Session control dashboard listing PC stations available to start a session.',
    },
    {
      src: '/projects/sniper-games/sessions-dashboard-ps4.jpg',
      alt: 'Session dashboard scrolled to the PlayStation station area.',
    },
    {
      src: '/projects/sniper-games/start-timed-session.jpg',
      alt: 'Start-session modal set to a fixed duration with a dial to pick the minutes.',
    },
    {
      src: '/projects/sniper-games/start-open-session.jpg',
      alt: 'Start-session modal set to open-ended time, billed from the actual start.',
    },
    {
      src: '/projects/sniper-games/start-session-by-amount.jpg',
      alt: 'Start-session modal set to charge by a paid amount, showing the equivalent time.',
    },
    {
      src: '/projects/sniper-games/manage-stations.jpg',
      alt: 'Station management modal for adding, removing, and pricing PC and PlayStation stations.',
    },
    {
      src: '/projects/sniper-games/session-ending-warning.jpg',
      alt: "A warning banner alerting that a station's session is about to end.",
    },
    {
      src: '/projects/sniper-games/session-ended-panel.jpg',
      alt: 'Finished-session panel awaiting review, shown alongside live countdown timers on other stations.',
    },
    {
      src: '/projects/sniper-games/session-history-log.jpg',
      alt: 'Session history log with totals and a searchable list of past sessions.',
    },
  ],
  featured: true,
};
