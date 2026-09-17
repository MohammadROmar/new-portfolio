import type { ProjectCaseStudy } from './types';

export const novaBankProject: ProjectCaseStudy = {
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
  gallery: [
    {
      src: '/projects/nova-bank/login.jpg',
      alt: 'NovaBank login screen with a dark hero panel welcoming administrators.',
    },
    {
      src: '/projects/nova-bank/accounts-list.jpg',
      alt: 'Accounts list with balances, types, and status badges for each bank account.',
    },
    {
      src: '/projects/nova-bank/account-detail.jpg',
      alt: 'Account detail page with balance, actions, and a list of child accounts.',
    },
    {
      src: '/projects/nova-bank/create-account-form.jpg',
      alt: 'Create New Account form with account-type selection cards.',
    },
    {
      src: '/projects/nova-bank/update-account-form.jpg',
      alt: 'Update Account form for changing account type and account state.',
    },
    {
      src: '/projects/nova-bank/transactions-list.jpg',
      alt: 'Transactions list showing deposit amounts and approval status.',
    },
    {
      src: '/projects/nova-bank/transaction-detail.jpg',
      alt: 'Transaction detail page with amount, type, and a status-change control.',
    },
    {
      src: '/projects/nova-bank/deposit-form.jpg',
      alt: 'Deposit form showing available balance and the projected balance after the transaction.',
    },
    {
      src: '/projects/nova-bank/register-manager-form.jpg',
      alt: 'Register Manager form with password-strength requirements.',
    },
  ],
  featured: false,
};
