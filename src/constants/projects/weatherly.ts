import type { ProjectCaseStudy } from './types';

export const weatherlyProject: ProjectCaseStudy = {
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
};
