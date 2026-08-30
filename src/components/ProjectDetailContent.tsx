'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { ArrowLeft, ArrowUpLeft, ArrowUpRight } from 'lucide-react';

import githubIcon from '@/assets/icons/github.svg';
import { cn } from '@/lib/cn';
import { SectionHeading } from '@/components/Section';
import { BorderGlow } from '@/components/BorderGlow';
import { GlowLine } from '@/components/GlowLine';
import { TechStackList } from '@/components/TechStackList';
import type { Project } from '@/constants/projects';
import { SIGNATURE_CARD_GLOW_PROPS } from '@/constants/borderGlow';

const EASE = [0.22, 1, 0.36, 1] as const;

const CONTAINER_VARIANTS: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.12,
    },
  },
};

const ITEM_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE,
    },
  },
};

const COVER_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: EASE,
    },
  },
};

type ProjectDetailContentProps = {
  project: Project;
  previous: Project | null;
  next: Project | null;
};

export function ProjectDetailContent({
  project,
  previous,
  next,
}: ProjectDetailContentProps) {
  const shouldReduceMotion = useReducedMotion();
  const headingId = 'project-heading';

  return (
    <motion.div
      initial={shouldReduceMotion ? false : 'hidden'}
      animate="visible"
      variants={CONTAINER_VARIANTS}
    >
      <motion.div variants={ITEM_VARIANTS}>
        <Link
          href="/projects"
          className="text-muted-foreground hover:text-foreground focus-visible:outline-focus inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold tracking-[0.14em] uppercase transition-colors outline-none focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <ArrowLeft aria-hidden="true" className="size-3.5" />
          All projects
        </Link>
      </motion.div>

      <motion.div variants={ITEM_VARIANTS} className="mt-10 sm:mt-12">
        <SectionHeading
          id={headingId}
          eyebrow={project.role}
          title={project.title}
          subtitle={project.tagline}
          align="left"
        />
      </motion.div>

      {project.cover ? (
        <motion.div
          variants={COVER_VARIANTS}
          className="border-border relative mt-12 aspect-video w-full overflow-hidden rounded-[28px] border sm:mt-16"
        >
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      ) : null}

      <motion.div
        variants={ITEM_VARIANTS}
        className="mt-12 grid items-start gap-12 sm:mt-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(19rem,0.8fr)] lg:gap-16"
      >
        <div className="text-foreground-soft max-w-3xl space-y-5 text-base leading-7 sm:text-lg sm:leading-8">
          {project.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {project.highlights.length > 0 ? (
            <div className="pt-4">
              <h2 className="text-foreground font-title text-lg font-semibold tracking-[-0.02em]">
                Highlights
              </h2>

              <ul className="mt-4 space-y-3">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-6 sm:text-base sm:leading-7"
                  >
                    <span
                      aria-hidden="true"
                      className="bg-primary/50 mt-2.5 size-1.5 shrink-0 rounded-full"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <BorderGlow {...SIGNATURE_CARD_GLOW_PROPS}>
          <aside aria-label="Project details" className="relative">
            <GlowLine />

            <div className="flex flex-col gap-6 p-5 sm:p-6">
              {project.team ? (
                <div>
                  <p className="text-primary-hover font-mono text-[11px] font-semibold tracking-[0.16em] uppercase">
                    Team
                  </p>
                  <p className="text-foreground-soft mt-3 text-sm leading-6">
                    {project.team}
                  </p>
                </div>
              ) : null}

              <div>
                <p className="text-primary-hover font-mono text-[11px] font-semibold tracking-[0.16em] uppercase">
                  Stack
                </p>
                <div className="mt-3">
                  <TechStackList
                    stack={project.stack}
                    label={`${project.title} tech stack`}
                  />
                </div>
              </div>

              {project.links.length > 0 ? (
                <div>
                  <p className="text-primary-hover font-mono text-[11px] font-semibold tracking-[0.16em] uppercase">
                    Links
                  </p>
                  <div className="mt-3 flex flex-col gap-2.5">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground-soft hover:text-foreground focus-visible:outline-focus inline-flex items-center gap-1.5 text-sm transition-colors outline-none focus-visible:outline-2 focus-visible:outline-offset-4"
                      >
                        {link.type === 'repo' ? (
                          <Image
                            src={githubIcon}
                            alt=""
                            width={14}
                            height={14}
                            unoptimized
                            className="size-3.5"
                          />
                        ) : (
                          <ArrowUpRight
                            aria-hidden="true"
                            className="size-3.5"
                          />
                        )}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </aside>
        </BorderGlow>
      </motion.div>

      {previous || next ? (
        <motion.nav
          variants={ITEM_VARIANTS}
          aria-label="More projects"
          className="border-border mt-16 grid gap-6 border-t pt-10 sm:mt-20 sm:grid-cols-2 sm:pt-12"
        >
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="group focus-visible:outline-focus flex flex-col outline-none focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <span className="text-muted-foreground inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold tracking-[0.14em] uppercase">
                <ArrowUpLeft
                  aria-hidden="true"
                  className="size-3.5 transition-transform duration-200 ease-out group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                />
                Previous
              </span>
              <span className="text-foreground font-title mt-2 text-xl font-semibold tracking-[-0.02em]">
                {previous.title}
              </span>
            </Link>
          ) : (
            <span aria-hidden="true" />
          )}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className={cn(
                'group focus-visible:outline-focus flex flex-col outline-none focus-visible:outline-2 focus-visible:outline-offset-4',
                'sm:items-end sm:text-right',
              )}
            >
              <span className="text-muted-foreground inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold tracking-[0.14em] uppercase">
                Next
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
              <span className="text-foreground font-title mt-2 text-xl font-semibold tracking-[-0.02em]">
                {next.title}
              </span>
            </Link>
          ) : null}
        </motion.nav>
      ) : null}
    </motion.div>
  );
}
