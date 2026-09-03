import type { ProjectCaseStudy, ProjectSummary } from './types';
import { intellipharmaProject } from './intellipharma';
import { sniperGamesProject } from './sniper-games';
import { casecobraProject } from './casecobra';
import { ouzounProject } from './ouzoun';
import { fizziProject } from './fizzi';
import { weatherlyProject } from './weatherly';
import { balaghProject } from './balagh';
import { novaBankProject } from './nova-bank';
import { stackedProject } from './stacked';
import { skillnestProject } from './skillnest';

export type {
  ProjectImage,
  ProjectLink,
  ProjectSummary,
  ProjectCaseStudy,
} from './types';

export const PROJECT_COVER_WIDTH = 1600;
export const PROJECT_COVER_HEIGHT = 900;

const ALL_PROJECTS: readonly ProjectCaseStudy[] = [
  intellipharmaProject,
  sniperGamesProject,
  casecobraProject,
  ouzounProject,
  fizziProject,
  weatherlyProject,
  balaghProject,
  novaBankProject,
  stackedProject,
  skillnestProject,
];

const PROJECT_INDEX_BY_SLUG = new Map(
  ALL_PROJECTS.map((project, index) => [project.slug, index]),
);

function toProjectSummary(project: ProjectCaseStudy): ProjectSummary {
  const { slug, title, tagline, stack, links, cover, featured } = project;
  return { slug, title, tagline, stack, links, cover, featured };
}

export function getProjectSlugs(): readonly string[] {
  return ALL_PROJECTS.map((project) => project.slug);
}

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  const index = PROJECT_INDEX_BY_SLUG.get(slug);
  return index === undefined ? undefined : ALL_PROJECTS[index];
}

export function getFeaturedProjects(): readonly ProjectSummary[] {
  return ALL_PROJECTS.filter((project) => project.featured).map(
    toProjectSummary,
  );
}

export function getOtherProjects(): readonly ProjectSummary[] {
  return ALL_PROJECTS.filter((project) => !project.featured).map(
    toProjectSummary,
  );
}

export function getAdjacentProjects(slug: string): {
  previous: ProjectSummary | null;
  next: ProjectSummary | null;
} {
  const index = PROJECT_INDEX_BY_SLUG.get(slug);

  if (index === undefined) {
    return { previous: null, next: null };
  }

  const previous = ALL_PROJECTS[index - 1];
  const next = ALL_PROJECTS[index + 1];

  return {
    previous: previous ? toProjectSummary(previous) : null,
    next: next ? toProjectSummary(next) : null,
  };
}
