export type ProjectImage = { src: string; alt: string };

export type ProjectLink = {
  label: string;
  href: string;
  type: 'repo' | 'demo' | 'resource';
};

export type ProjectSummary = {
  slug: string;
  title: string;
  tagline: string;
  stack: readonly string[];
  links: readonly ProjectLink[];
  cover?: ProjectImage;
  featured: boolean;
};

export type ProjectCaseStudy = ProjectSummary & {
  role: string;
  team?: string;
  description: readonly string[];
  highlights: readonly string[];
  gallery?: readonly ProjectImage[];
};
