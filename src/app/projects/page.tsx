import type { Metadata } from 'next';

import { Section } from '@/components/Section';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { OtherProjectsList } from '@/components/OtherProjectsList';
import { getFeaturedProjects, getOtherProjects } from '@/constants/projects';
import { SITE_NAME } from '@/constants/siteConfig';

const PAGE_DESCRIPTION =
  'Selected engineering projects by Mohammad Omar — React and TypeScript products taken from architecture to production.';

export const metadata: Metadata = {
  title: 'Projects',
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    type: 'website',
    url: '/projects',
    title: `Projects | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Projects | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
  },
};

export default function ProjectsArchivePage() {
  const featuredProjects = getFeaturedProjects();
  const otherProjects = getOtherProjects();

  return (
    <>
      <Section
        id="all-projects"
        eyebrow="Archive"
        title="Everything I've shipped."
        subtitle="Every project worth showing, solo builds and team platforms alike."
        headingAlign="left"
      >
        <ProjectsGrid projects={featuredProjects} columns={2} />
      </Section>

      {otherProjects.length > 0 ? (
        <section
          aria-labelledby="more-projects-heading"
          className="px-5 pb-24 sm:pb-28 md:px-6 lg:px-10 lg:pb-32"
        >
          <div className="mx-auto w-full max-w-7xl">
            <h2
              id="more-projects-heading"
              className="text-foreground font-title text-2xl font-semibold tracking-[-0.03em] sm:text-3xl"
            >
              More projects
            </h2>
            <p className="text-foreground-soft mt-3 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7">
              Smaller builds and experiments, roughly largest to smallest.
            </p>

            <OtherProjectsList
              projects={otherProjects}
              className="mt-8 sm:mt-10"
            />
          </div>
        </section>
      ) : null}
    </>
  );
}
