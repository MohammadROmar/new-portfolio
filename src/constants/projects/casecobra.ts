import type { ProjectCaseStudy } from './types';

export const casecobraProject: ProjectCaseStudy = {
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
};
