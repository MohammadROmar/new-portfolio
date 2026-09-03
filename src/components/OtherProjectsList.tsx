'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

import githubIcon from '@/assets/icons/github.svg';
import type { ProjectSummary } from '@/constants/projects';

const CONTAINER_VARIANTS: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.04,
      staggerChildren: 0.08,
    },
  },
};

const ITEM_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

type OtherProjectsListProps = {
  projects: readonly ProjectSummary[];
  className?: string;
};

export function OtherProjectsList({
  projects,
  className,
}: OtherProjectsListProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.ul
      className={className}
      variants={CONTAINER_VARIANTS}
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {projects.map((project) => {
        const repoLink = project.links.find((link) => link.type === 'repo');
        const demoLink = project.links.find((link) => link.type === 'demo');

        return (
          <motion.li
            key={project.slug}
            variants={ITEM_VARIANTS}
            className="border-border hover:border-primary/25 hover:bg-surface-raised/40 mb-3 flex flex-col gap-4 rounded-2xl border p-5 transition-colors duration-200 sm:flex-row sm:items-center sm:justify-between sm:p-6"
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group focus-visible:outline-focus min-w-0 outline-none focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <h3 className="text-foreground font-title group-hover:text-primary-hover text-lg font-semibold tracking-[-0.02em] transition-colors">
                {project.title}
              </h3>
              <p className="text-foreground-soft mt-1.5 text-sm leading-6">
                {project.tagline}
              </p>
              <p className="text-muted-foreground mt-2 font-mono text-[11px] tracking-wider">
                {project.stack.slice(0, 4).join(' · ')}
              </p>
            </Link>

            <div className="flex shrink-0 items-center gap-2">
              {repoLink ? (
                <a
                  href={repoLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="border-border text-muted-foreground hover:text-foreground hover:border-primary/35 focus-visible:outline-focus flex size-9 items-center justify-center rounded-full border transition-colors outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <Image
                    src={githubIcon}
                    alt=""
                    width={16}
                    height={16}
                    unoptimized
                    className="size-4"
                  />
                </a>
              ) : null}

              {demoLink ? (
                <a
                  href={demoLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live demo`}
                  className="border-border text-muted-foreground hover:text-foreground hover:border-primary/35 focus-visible:outline-focus flex size-9 items-center justify-center rounded-full border transition-colors outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              ) : null}
            </div>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
