import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { cn } from '@/lib/cn';
import { GlowLine } from '@/components/GlowLine';
import { TechStackList } from '@/components/TechStackList';
import type { ProjectSummary } from '@/constants/projects';

const STACK_PREVIEW_COUNT = 4;

type ProjectCardProps = { project: ProjectSummary; priority?: boolean };

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const { slug, title, tagline, stack, cover, featured } = project;

  return (
    <div
      className={cn(
        'group bg-surface hover:border-primary/25 hover:bg-surface-raised/40 relative isolate flex size-full h-full flex-col overflow-hidden rounded-[28px] border border-white/15 transition-colors duration-200',
        'focus-within:outline-primary/70 focus-within:outline-2 focus-within:outline-offset-2',
      )}
    >
      <GlowLine />

      {cover ? (
        <div className="border-border relative aspect-video w-full overflow-hidden border-b">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
      ) : null}

      <div
        className={cn(
          'flex flex-1 flex-col p-6 sm:p-8',
          !cover && 'justify-center',
        )}
      >
        {featured ? (
          <p className="text-primary-hover font-mono text-[11px] font-semibold tracking-[0.18em] uppercase">
            Featured project
          </p>
        ) : null}

        <h3 className="font-title mt-3 text-2xl leading-tight font-semibold tracking-[-0.03em] text-balance">
          <Link
            href={`/projects/${slug}`}
            className="text-foreground outline-none"
          >
            <span aria-hidden="true" className="absolute inset-0 z-1" />
            {title}
          </Link>
        </h3>

        <p className="text-foreground-soft mt-3 text-sm leading-6 sm:text-base sm:leading-7">
          {tagline}
        </p>

        <div className="relative z-2 mt-6">
          <TechStackList
            stack={stack}
            label={`${title} tech stack`}
            limit={STACK_PREVIEW_COUNT}
          />
        </div>

        <span
          aria-hidden="true"
          className="text-primary-hover mt-auto inline-flex items-center gap-1.5 pt-8 font-mono text-[11px] font-semibold tracking-widest uppercase"
        >
          View project
          <ArrowUpRight className="size-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </div>
  );
}
