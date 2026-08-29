export const SITE_NAME = 'Mohammad Omar';

export const SITE_TITLE = 'Mohammad Omar — Frontend Developer';

export const SITE_DESCRIPTION =
  'Frontend developer building polished, accessible, and performant web applications.';

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://mohammad-omar.vercel.app'
).replace(/\/+$/, '');

export const DEFAULT_OG_IMAGE = {
  url: '/og-default.jpg',
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — Frontend Developer`,
} as const;
