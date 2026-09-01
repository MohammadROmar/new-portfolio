export const SITE_NAME = 'Mohammad Omar';

export const SITE_TITLE = 'Mohammad Omar — Frontend Engineer';

export const SITE_DESCRIPTION =
  'Frontend Engineer specializing in React and TypeScript for complex, data-intensive products — architected solo or delivered within a team.';
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || ''
).replace(/\/+$/, '');

export const DEFAULT_OG_IMAGE = {
  url: '/open-graph/default.jpg',
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — Frontend Engineer`,
} as const;

export const PROJECTS_OG_IMAGE = {
  url: '/open-graph/projects.jpg',
  width: 1200,
  height: 630,
  alt: `Projects — ${SITE_NAME}`,
} as const;

export const RESUME_OG_IMAGE = {
  url: '/open-graph/resume.jpg',
  width: 1200,
  height: 630,
  alt: `Resume — ${SITE_NAME}`,
} as const;
