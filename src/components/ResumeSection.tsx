'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

import { cn } from '@/lib/cn';

type ResumeSectionProps = {
  heading: string;
  children: ReactNode;
  className?: string;
};

export function ResumeSection({
  heading,
  children,
  className,
}: ResumeSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className={cn('mt-12 sm:mt-14', className)}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="text-muted-foreground border-border mb-4 border-b pb-2 text-xs font-bold tracking-[0.2em] uppercase">
        {heading}
      </h2>

      <div>{children}</div>
    </motion.section>
  );
}
