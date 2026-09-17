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
  gallery: [
    {
      src: '/projects/casecobra/hero.jpg',
      alt: 'Casecobra landing page hero with a custom phone case preview and a "Custom Phone Case" headline.',
    },
    {
      src: '/projects/casecobra/landing-product-grid.jpg',
      alt: 'Grid of custom phone case designs on the Casecobra landing page, labeled "What people are buying".',
    },
    {
      src: '/projects/casecobra/upload-image.jpg',
      alt: 'Step 1 of the case builder: uploading a photo for the custom case.',
    },
    {
      src: '/projects/casecobra/customize-case.jpg',
      alt: 'Step 2 of the case builder: choosing case color, iPhone model, material, and finish.',
    },
    {
      src: '/projects/casecobra/order-summary.jpg',
      alt: 'Case order summary with pricing breakdown and a checkout button.',
    },
    {
      src: '/projects/casecobra/login-required-modal.jpg',
      alt: 'Login-required modal prompting sign-in to complete a saved case order.',
    },
    {
      src: '/projects/casecobra/login.jpg',
      alt: 'Login screen with Google sign-in and email continue options.',
    },
    {
      src: '/projects/casecobra/stripe-checkout.jpg',
      alt: 'Stripe checkout form for shipping details and card payment.',
    },
    {
      src: '/projects/casecobra/order-confirmation.jpg',
      alt: 'Order confirmation page thanking the customer with an order number after purchase.',
    },
    {
      src: '/projects/casecobra/order-confirmation-shipping.jpg',
      alt: 'Order confirmation details showing shipping address, payment status, and order total.',
    },
    {
      src: '/projects/casecobra/seller-dashboard.jpg',
      alt: 'Seller dashboard showing weekly and monthly sales goals and incoming orders.',
    },
  ],
  featured: true,
};
