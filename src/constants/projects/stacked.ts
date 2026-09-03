import type { ProjectCaseStudy } from './types';

export const stackedProject: ProjectCaseStudy = {
  slug: 'stacked',
  title: 'Stacked',
  tagline:
    'An interactive grid puzzle solver visualizing DFS, BFS, A*, and uniform-cost search.',
  role: 'Personal project',
  description: [
    'Stacked visualizes how different search algorithms — DFS, BFS, A*, and uniform-cost search — explore a grid to find a path, with animated path visualization built on predictable state transitions.',
    'The interaction model stays responsive across screen sizes, turning an algorithms concept into something you can watch unfold step by step.',
  ],
  stack: ['React.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Motion'],
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
};
