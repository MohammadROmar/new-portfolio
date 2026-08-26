export type NavItem = { label: string; href: string; match?: string };

export const DEFAULT_LINKS: readonly NavItem[] = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
];
