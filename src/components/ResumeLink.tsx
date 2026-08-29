'use client';

import Link from 'next/link';
import { FileText } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { ENTER_ITEM } from '@/constants/enterItem';
import { RESUME_PAGE_HREF } from '@/constants/resume';

import { cn } from '@/lib/cn';

const MotionLink = motion.create(Link);

export function ResumeLink() {
  const reduceMotion = useReducedMotion();

  return (
    <MotionLink
      className={cn(
        'group relative isolate hidden h-10 shrink-0 items-center gap-2 rounded-full border px-4 md:inline-flex',
        'border-primary/25 bg-primary/8 text-foreground/85 font-mono text-[13px] leading-none font-medium',
        'shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_24px_-18px_var(--color-primary)] backdrop-blur-xl',
        'transition-[color,background-color,border-color,box-shadow] duration-200',
        'hover:border-primary/45 hover:bg-primary/[0.14] hover:text-foreground',
        'focus-visible:outline-focus focus-visible:outline-2 focus-visible:outline-offset-3',
      )}
      href={RESUME_PAGE_HREF}
      transition={{ type: 'spring', stiffness: 430, damping: 28 }}
      variants={ENTER_ITEM}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
    >
      <span
        aria-hidden="true"
        className="via-primary/70 pointer-events-none absolute inset-x-5 -top-px h-px bg-linear-to-r from-transparent to-transparent opacity-0 shadow-[0_0_7px_var(--color-primary)] transition-opacity duration-200 group-hover:opacity-100 motion-reduce:transition-none"
      />

      <FileText aria-hidden="true" className="text-primary size-4" />

      <span>Resume</span>
    </MotionLink>
  );
}
