import type { ProjectCaseStudy } from './types';

export const ouzounProject: ProjectCaseStudy = {
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
      label: 'Report',
      href: 'https://drive.google.com/file/d/1XMb0LhCjN6PZnxc32uDIexflPCl4bFn1/view?usp=drivesdk',
      type: 'demo',
    },
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
  gallery: [
    {
      src: '/projects/ouzoun/landing-hero-en.jpg',
      alt: 'Ouzoun landing page hero introducing the medical operations dashboard, in English.',
    },
    {
      src: '/projects/ouzoun/landing-hero-ar-light.jpg',
      alt: 'Arabic RTL light-theme version of the Ouzoun landing page hero.',
    },
    {
      src: '/projects/ouzoun/sign-in.jpg',
      alt: 'Sign-in screen with a dental-clinic photo alongside the email and password fields.',
    },
    {
      src: '/projects/ouzoun/dashboard-dark.jpg',
      alt: 'Dark-theme statistics dashboard with user distribution and top-assistant rankings.',
    },
    {
      src: '/projects/ouzoun/dashboard-light-ar.jpg',
      alt: 'Arabic RTL light-theme version of the statistics dashboard.',
    },
    {
      src: '/projects/ouzoun/kits-list.jpg',
      alt: 'Surgical kit cards showing tool and implant counts for each kit type.',
    },
    {
      src: '/projects/ouzoun/kit-detail-tools.jpg',
      alt: 'Kit detail page listing the tools included in the Implant Surgery Kit.',
    },
    {
      src: '/projects/ouzoun/kit-detail-implants.jpg',
      alt: 'Kit detail page scrolled to show the implants included in the kit.',
    },
    {
      src: '/projects/ouzoun/tools-list.jpg',
      alt: 'Grid of dental tools with dimensions and available quantities.',
    },
    {
      src: '/projects/ouzoun/assistants-menu.jpg',
      alt: 'Assistants section menu with links to register, assign, and view holidays.',
    },
    {
      src: '/projects/ouzoun/assistants-list.jpg',
      alt: 'All Assistants list showing ratings, contact info, and management actions.',
    },
    {
      src: '/projects/ouzoun/assign-assistant-to-procedure.jpg',
      alt: 'Upcoming procedures available for assistant assignment, with dates and assistant counts.',
    },
    {
      src: '/projects/ouzoun/doctor-info.jpg',
      alt: 'Doctor information page with contact details, clinic address, and a location map.',
    },
    {
      src: '/projects/ouzoun/account-details.jpg',
      alt: "Account details page with the doctor's contact info and a change-password action.",
    },
    {
      src: '/projects/ouzoun/assistant-holiday-request.jpg',
      alt: 'Single holiday request detail with a calendar range and rejected status.',
    },
    {
      src: '/projects/ouzoun/assistants-holidays-list.jpg',
      alt: "An overview of assistants' holiday requests showing each request's reason and approval status.",
    },
    {
      src: '/projects/ouzoun/notifications.jpg',
      alt: 'Notifications feed grouped by date, covering leave requests, appointments, and inventory alerts.',
    },
    {
      src: '/projects/ouzoun/procedure-detail-assistants.jpg',
      alt: 'Procedure detail page showing doctor, schedule, and assigned assistants.',
    },
    {
      src: '/projects/ouzoun/procedure-detail-tools.jpg',
      alt: 'Procedure detail page scrolled to required tools and implant kits.',
    },
    {
      src: '/projects/ouzoun/procedure-detail-kit.jpg',
      alt: 'Procedure detail page showing required implants, tools, and the linked surgical kit.',
    },
  ],
  featured: true,
};
