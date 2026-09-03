'use client';

import { motion, useReducedMotion, type Variants } from 'motion/react';

import { cn } from '@/lib/cn';
import { ProjectCard } from '@/components/ProjectCard';
import type { ProjectSummary } from '@/constants/projects';

const CONTAINER_VARIANTS: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.12,
    },
  },
};

const ITEM_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

type ProjectsGridProps = {
  projects: readonly ProjectSummary[];
  columns?: 1 | 2;
  priority?: boolean;
  className?: string;
};

export function ProjectsGrid({
  projects,
  columns = 2,
  priority = false,
  className,
}: ProjectsGridProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.ul
      className={cn(
        'grid gap-6 sm:gap-8',
        columns === 2 && 'lg:grid-cols-2',
        className,
      )}
      variants={CONTAINER_VARIANTS}
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {projects.map((project, index) => (
        <motion.li key={project.slug} className="flex" variants={ITEM_VARIANTS}>
          <ProjectCard project={project} priority={priority && index === 0} />
        </motion.li>
      ))}
    </motion.ul>
  );
}
