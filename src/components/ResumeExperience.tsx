'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'motion/react';

import { getProjectBySlug } from '@/constants/projects';
import type { ResumeExperienceEntry } from '@/constants/resume';

const CONTAINER_VARIANTS: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.08,
    },
  },
};

const ITEM_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const LINK_CLASSES =
  'text-foreground-soft hover:text-foreground focus-visible:outline-focus inline-flex items-center gap-1 text-sm transition-colors outline-none focus-visible:outline-2 focus-visible:outline-offset-4';

const BADGE_CLASSES =
  'bg-primary/20 text-foreground-soft rounded-md px-2.5 py-1 text-xs';

type ResumeExperienceProps = {
  entries: readonly ResumeExperienceEntry[];
};

export function ResumeExperience({ entries }: ResumeExperienceProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.ul
      className="divide-border divide-y"
      variants={CONTAINER_VARIANTS}
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {entries.map((entry) => {
        const project = getProjectBySlug(entry.slug);

        if (!project) return null;

        return (
          <motion.li
            key={entry.slug}
            variants={ITEM_VARIANTS}
            className="py-6 first:pt-0 last:pb-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-foreground text-base font-semibold sm:text-lg">
                {project.title}
              </h3>

              {entry.period ? (
                <span className="text-muted-foreground text-xs">
                  {entry.period}
                </span>
              ) : null}
            </div>

            {entry.context ? (
              <p className="text-foreground-soft mt-0.5 text-xs italic">
                {entry.context}
              </p>
            ) : null}

            <p className="text-foreground-soft mt-3 text-sm leading-6 sm:leading-relaxed">
              {project.tagline}
            </p>

            <ul className="mt-3 space-y-1.5">
              {entry.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-2 text-sm leading-6 sm:leading-relaxed"
                >
                  <span
                    aria-hidden="true"
                    className="text-muted-foreground shrink-0"
                  >
                    ▸
                  </span>
                  <span className="text-foreground-soft">{highlight}</span>
                </li>
              ))}
            </ul>

            <ul
              aria-label={`${project.title} tech stack`}
              className="mt-4 flex flex-wrap gap-2"
            >
              {project.stack.map((technology) => (
                <li key={technology} className={BADGE_CLASSES}>
                  {technology}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5">
              <Link href={`/projects/${project.slug}`} className={LINK_CLASSES}>
                View project
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </Link>

              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={LINK_CLASSES}
                >
                  {link.label}
                  <ArrowUpRight aria-hidden="true" className="size-3.5" />
                </a>
              ))}
            </div>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
