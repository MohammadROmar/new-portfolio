import { ArrowUpRight } from 'lucide-react';

import { Section } from '@/components/Section';
import { Button } from '@/components/Buttons';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { getFeaturedProjects } from '@/constants/projects';

export function Projects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Products, not just interfaces."
      subtitle="Systems taken from architecture to production — solo end to end, or leading the frontend inside a team."
    >
      <ProjectsGrid projects={featuredProjects} columns={2} priority />

      <div className="mt-12 flex justify-center sm:mt-16">
        <Button
          href="/projects"
          trailingIcon={<ArrowUpRight className="size-4" strokeWidth={2} />}
        >
          View all projects
        </Button>
      </div>
    </Section>
  );
}
