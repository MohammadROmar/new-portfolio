import type { ProjectCaseStudy } from './types';

export const fizziProject: ProjectCaseStudy = {
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
  gallery: [
    {
      src: '/projects/fizzi/hero.jpg',
      alt: 'Fizzi landing page hero with two soda cans and a "Live Gutsy" headline.',
    },
    {
      src: '/projects/fizzi/five-flavors-section.jpg',
      alt: 'Section showcasing all five Fizzi flavors arranged together.',
    },
    {
      src: '/projects/fizzi/scroll-dive-better.jpg',
      alt: 'A 3D scroll animation of a rotating can revealing the word "BETTER".',
    },
    {
      src: '/projects/fizzi/scroll-dive-health.jpg',
      alt: 'A 3D scroll animation of a rotating can showing nutrition facts and the word "HEALTH".',
    },
    {
      src: '/projects/fizzi/flavor-carousel.jpg',
      alt: 'Flavor picker carousel showing the Grape Goodness can and its price.',
    },
    {
      src: '/projects/fizzi/gut-friendly-section.jpg',
      alt: "Alternating content section describing the soda's prebiotics and probiotics.",
    },
    {
      src: '/projects/fizzi/light-calories-section.jpg',
      alt: 'Alternating content section highlighting low calories and bold flavor.',
    },
    {
      src: '/projects/fizzi/natural-ingredients-section.jpg',
      alt: 'Alternating content section describing natural, artificial-sweetener-free ingredients.',
    },
  ],
  featured: false,
};
