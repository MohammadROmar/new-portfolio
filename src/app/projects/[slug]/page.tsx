import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { ProjectDetailContent } from '@/components/ProjectDetailContent';
import {
  getAdjacentProjects,
  getProjectBySlug,
  PROJECTS,
  PROJECT_COVER_HEIGHT,
  PROJECT_COVER_WIDTH,
} from '@/constants/projects';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/constants/siteConfig';

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<'/projects/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const ogImage = project.cover
    ? {
        url: project.cover.src,
        width: PROJECT_COVER_WIDTH,
        height: PROJECT_COVER_HEIGHT,
        alt: project.cover.alt,
      }
    : DEFAULT_OG_IMAGE;

  return {
    title: project.title,
    description: project.tagline,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: 'article',
      url: `/projects/${project.slug}`,
      title: `${project.title} | ${SITE_NAME}`,
      description: project.tagline,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | ${SITE_NAME}`,
      description: project.tagline,
      images: [ogImage.url],
    },
  };
}

export default async function ProjectPage({
  params,
}: PageProps<'/projects/[slug]'>) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(slug);

  return (
    <article className="scroll-mt-28 px-5 py-24 sm:py-28 md:px-6 lg:px-10 lg:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <ProjectDetailContent
          project={project}
          previous={previous}
          next={next}
        />
      </div>
    </article>
  );
}
