export type NavItem = { label: string; href: string; match?: string };

export const DEFAULT_LINKS: readonly NavItem[] = [
  { label: 'About', href: '/#about' },
  { label: 'Approach', href: '/#approach' },
  { label: 'Projects', href: '/#projects', match: '/projects' },
  { label: 'Contact', href: '/#contact' },
];
