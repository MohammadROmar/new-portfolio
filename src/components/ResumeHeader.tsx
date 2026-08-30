'use client';

import Link from 'next/link';
import { Download } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'motion/react';

import { cn } from '@/lib/cn';
import type { ResumeContact } from '@/constants/resume';
import { GlowLine } from './GlowLine';

const MotionLink = motion.create(Link);

const CONTAINER_VARIANTS: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
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
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

type ResumeHeaderProps = {
  name: string;
  role: string;
  contacts: ReadonlyArray<Pick<ResumeContact, 'label' | 'value' | 'href'>>;
  pdfHref: string;
  pdfFilename: string;
};

export function ResumeHeader({
  name,
  role,
  contacts,
  pdfHref,
  pdfFilename,
}: ResumeHeaderProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.header
      className="text-center"
      variants={CONTAINER_VARIANTS}
      initial={shouldReduceMotion ? false : 'hidden'}
      animate="visible"
    >
      <motion.h1
        variants={ITEM_VARIANTS}
        className="text-foreground font-title text-3xl font-semibold tracking-[-0.02em] sm:text-4xl"
      >
        {name}
      </motion.h1>

      <motion.p
        variants={ITEM_VARIANTS}
        className="text-foreground-soft mt-2 text-base sm:text-lg"
      >
        {role}
      </motion.p>

      <ul
        aria-label="Contact details"
        className="divide-border text-muted-foreground mt-5 flex flex-wrap items-center justify-center divide-x text-sm"
      >
        {contacts.map(({ label, value, href }) => (
          <motion.li
            key={label}
            variants={ITEM_VARIANTS}
            className="px-3 text-xs first:pl-0"
          >
            {href ? (
              <a
                href={href}
                {...(href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="hover:text-foreground focus-visible:outline-focus rounded-xs transition-colors outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <span className="sr-only">{label}: </span>
                {value}
              </a>
            ) : (
              <span>
                <span className="sr-only">{label}: </span>
                {value}
              </span>
            )}
          </motion.li>
        ))}
      </ul>

      <motion.div variants={ITEM_VARIANTS} className="mt-7">
        <MotionLink
          href={pdfHref}
          download={pdfFilename}
          className={cn(
            'border-border text-foreground-soft relative inline-flex h-10 items-center gap-2 rounded-full border px-5 text-sm font-medium',
            'hover:border-primary/40 hover:text-foreground transition-colors',
            'focus-visible:outline-focus focus-visible:outline-2 focus-visible:outline-offset-4',
          )}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
        >
          <GlowLine />
          <Download aria-hidden="true" className="size-4" />
          Download PDF
        </MotionLink>
      </motion.div>
    </motion.header>
  );
}
