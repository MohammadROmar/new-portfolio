import { Mail, MapPin, Phone } from 'lucide-react';

import { GithubIcon } from '@/components/GithubIcon';
import { LinkedinIcon } from '@/components/LinkedinIcon';
import type { IconComponent } from '@/lib/icon';

export const RESUME_PAGE_HREF = '/resume';
export const RESUME_PDF_HREF = '/resume/Mohammad-Omar-Resume.pdf';
export const RESUME_PDF_FILENAME = 'Mohammad-Omar-Resume.pdf';

export const RESUME_NAME = 'Mohammad Omar';

export const RESUME_ROLE =
  'Frontend Engineer | React, TypeScript & Scalable Architecture';

export const RESUME_SUMMARY =
  'Frontend Engineer specializing in React and TypeScript architecture for complex, data-intensive products. Built the frontend foundation of IntelliPharma, a bilingual pharmaceutical ERP/CRM spanning 1,100+ source files, 21 domain entities, 60 feature slices, and 67 route-level pages, as the sole frontend engineer on a five-person team. Strong in Feature-Sliced Design, typed API boundaries, TanStack Query data orchestration, role-based access control, resilient session management, real-time workflows, and performance-focused UI delivery. Comfortable owning a project end-to-end - from requirements and architecture through critical code review, debugging, optimization, validation, and production delivery.';

export type ResumeContact = {
  icon: IconComponent;
  label: string;
  value: string;
  href?: string;
};

export const RESUME_CONTACTS: readonly ResumeContact[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mohammad.riyad.omar@gmail.com',
    href: 'mailto:mohammad.riyad.omar@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+963 935 239 163',
    href: 'tel:+963935239163',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Damascus, Syria',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'GitHub: MohammadROmar',
    href: 'https://github.com/MohammadROmar',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'LinkedIn: Mohammad Omar',
    href: 'https://linkedin.com/in/mohammad-r-omar',
  },
] as const satisfies readonly ResumeContact[];

export type SkillGroup = {
  label: string;
  skills: readonly string[];
};

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    label: 'Core',
    skills: [
      'TypeScript',
      'JavaScript',
      'React.js',
      'Next.js',
      'HTML5',
      'CSS3',
    ],
  },
  {
    label: 'Architecture',
    skills: [
      'Feature-Sliced Design (FSD)',
      'React Router',
      'Component architecture',
      'Compound components',
      'Design systems',
      'Role-based access control (RBAC)',
    ],
  },
  {
    label: 'Data & State',
    skills: [
      'TanStack Query',
      'Redux Toolkit',
      'Axios',
      'REST APIs',
      'WebSockets',
      'Firebase Cloud Messaging (FCM)',
      'Laravel Echo/Reverb',
      'Suspense',
      'Infinite queries',
    ],
  },
  {
    label: 'UI & Forms',
    skills: [
      'Tailwind CSS',
      'shadcn/ui',
      'React Hook Form',
      'i18next',
      'next-intl',
      'Responsive design',
      'Arabic/English RTL',
    ],
  },
  {
    label: 'Visualization & Interaction',
    skills: [
      'Recharts',
      'React Leaflet',
      'OpenStreetMap',
      'Barcode scanning',
      'Motion',
    ],
  },
  {
    label: 'Quality & Delivery',
    skills: [
      'Vite',
      'Git',
      'GitHub',
      'Postman',
      'Swagger',
      'ESLint',
      'Prettier',
      'Lazy loading',
      'Code splitting',
      'Error boundaries',
      'Accessibility',
      'Vercel',
    ],
  },
] as const satisfies readonly SkillGroup[];

export type ResumeExperienceCategory = 'selected' | 'experience' | 'additional';

export type ResumeExperienceEntry = {
  slug: string;
  category: ResumeExperienceCategory;
  context?: string;
  period?: string;
  highlights: readonly string[];
};

export const RESUME_EXPERIENCE: readonly ResumeExperienceEntry[] = [
  {
    slug: 'intellipharma',
    category: 'selected',
    context: 'Graduation project · Team of 5',
    period: 'November 2025 - August 2026',
    highlights: [
      'Architected a strict Feature-Sliced Design codebase across app, pages, features, entities, shared, and widgets layers, keeping dependency direction explicit across 1,100+ source files.',
      'Designed a two-layer data architecture: a typed Axios apiClient with interceptor-normalized ApiResponse<T> and localized ApiError handling, plus reusable TanStack Query hooks for Suspense reads, infinite lists, and CRUD mutations with domain query keys, language-aware caching, and centralized side effects, powering data fetching across all 60 feature slices.',
      'Implemented backend-authoritative RBAC from session state through permission parsing, protected routes and direct URLs, permission-aware navigation, and capability-driven UI that fails closed when access is missing, securing all 67 route-level pages.',
      'Integrated and validated a real-time field-team tracking client over authenticated Laravel Reverb channels, reconciling an initial REST snapshot with timestamped WebSocket events in a normalized external store; coalesced bursts and modeled stale-data and connection states.',
      'Engineered a reliable push-notification lifecycle with backend-confirmed, user-scoped token fingerprints, cross-tab locking, bounded retry and recovery, idempotent message handling, and service-worker delivery synchronized with Redux and TanStack Query state.',
      'Engineered cross-tab authentication as a concurrency system - serialized rotating refresh-token exchanges with Web Locks and coalesced simultaneous in-tab refreshes through promise sharing.',
      'Propagated login, refresh, and logout across tabs via BroadcastChannel, keeping Redux session state consistent and preventing refresh races or false session expiry.',
      'Built the UI layer of an in-app AI assistant: a chat interface with persisted, searchable conversation history and session retrieval, consuming backend-proxied Gemini API responses with no model credentials exposed client-side.',
    ],
  },
  {
    slug: 'sniper-games',
    category: 'experience',
    context: 'Freelance product developer',
    period: 'July 2026 - August 2026',
    highlights: [
      'Delivered an offline-first Arabic RTL application for managing timed and open-ended PC and PlayStation sessions, with fully configurable stations and pricing, live cost calculation, warnings, summaries, and automatic timeout finalization.',
      "Replaced the client's manual, MS Word-based session tracking with the app - currently running up to 8 PC and 2 PlayStation stations in continuous daily use since launch.",
      'Owned the project end-to-end for the customer - requirements, product and architecture decisions, UI iteration shaped by live client feedback, debugging, performance optimization, and delivery.',
    ],
  },
  {
    slug: 'ouzoun',
    category: 'additional',
    context: 'Collaborative project · Team of 5',
    highlights: [
      'Built an administration platform for dental operations, tools, implants, assistants, and analytics, integrating an ASP.NET backend with two Flutter mobile applications.',
      'Implemented real-time notifications, role-based administration, and interactive analytics dashboards to support connected clinic workflows.',
    ],
  },
  {
    slug: 'stacked',
    category: 'additional',
    highlights: [
      'Implemented DFS, BFS, A*, and uniform-cost search with animated path visualization, predictable state transitions, and responsive interaction across screen sizes.',
    ],
  },
] as const satisfies readonly ResumeExperienceEntry[];

export function getResumeExperienceByCategory(
  category: ResumeExperienceCategory,
) {
  return RESUME_EXPERIENCE.filter((entry) => entry.category === category);
}

export type ResumeCredentialEntry = {
  title: string;
  accent?: string;
  subtitle: string;
  meta?: string;
};

export const EDUCATION_ENTRY: ResumeCredentialEntry = {
  title: 'Information Technology Engineering',
  accent: 'Software Engineering Specialization',
  subtitle: 'Damascus University · Coursework and final exams complete',
  meta: 'Expected Spring 2027',
};

export const CERTIFICATION_ENTRY: ResumeCredentialEntry = {
  title: 'Frontend Development Track',
  accent: 'Prokaders',
  subtitle:
    'Certificate - awarded for delivering a capstone project to written specification',
  meta: '16-hour training track',
};

export const RESUME_LANGUAGES = 'Arabic — Native · English — Fluent';
