export type LandingNavItem = { label: string; href: string; match?: string };

export const DEFAULT_LINKS: readonly LandingNavItem[] = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
];
