import type { ProjectCaseStudy } from './types';

export const balaghProject: ProjectCaseStudy = {
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
      href: 'https://github.com/MohammadROmar/balagh',
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
  gallery: [
    {
      src: '/projects/balagh/login.jpg',
      alt: "Balagh's Arabic RTL login screen for the government complaint-management dashboard.",
    },
    {
      src: '/projects/balagh/reports-analytics.jpg',
      alt: 'Reports and analytics view filtering complaints by status with percentage breakdowns.',
    },
    {
      src: '/projects/balagh/complaints-list-admin-ar.jpg',
      alt: 'Arabic RTL admin view of complaint cards showing status, submitter, and location.',
    },
    {
      src: '/projects/balagh/complaints-list-employee.jpg',
      alt: 'Employee view of assigned and available complaints, without the admin sidebar.',
    },
    {
      src: '/projects/balagh/complaint-detail-info-ar.jpg',
      alt: 'Arabic RTL complaint detail page with submission info, status actions, and an attached photo.',
    },
    {
      src: '/projects/balagh/complaint-detail-history-ar.jpg',
      alt: 'Complaint detail page scrolled to documents, notes, and a full status-history timeline.',
    },
    {
      src: '/projects/balagh/complaint-detail-locked-by-employee.jpg',
      alt: 'Complaint detail page showing a complaint locked and being processed by an employee, with a Proceed action.',
    },
    {
      src: '/projects/balagh/register-employee-form.jpg',
      alt: 'Add New Employee form with contact info, government entity, and password requirements.',
    },
  ],
  featured: false,
};
