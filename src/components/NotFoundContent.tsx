'use client';

import Link from 'next/link';
import { ArrowUpRight, Home } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'motion/react';

import { Button, CtaButton } from './Buttons';

const CONTAINER_VARIANTS: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.09,
    },
  },
};

const ITEM_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ACTIONS_VARIANTS: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const ACTION_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const QUICK_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/#contact' },
] as const;

export function NotFoundContent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate="visible"
      className="relative isolate mx-auto flex w-full max-w-2xl flex-col items-center text-center"
      initial={shouldReduceMotion ? false : 'hidden'}
      variants={CONTAINER_VARIANTS}
    >
      <motion.p
        aria-hidden="true"
        className="font-title text-foreground text-[clamp(3.5rem,11vw,6rem)] leading-none font-bold tracking-tight"
        variants={ITEM_VARIANTS}
      >
        404
      </motion.p>

      <motion.h1
        id="not-found-heading"
        className="font-title text-foreground mt-4 text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.05] font-semibold tracking-[-0.04em] text-balance"
        variants={ITEM_VARIANTS}
      >
        This route doesn&apos;t exist.
      </motion.h1>

      <motion.p
        className="text-foreground-soft mt-5 max-w-md text-base leading-7 text-pretty sm:text-lg sm:leading-8"
        variants={ITEM_VARIANTS}
      >
        The page you&apos;re looking for was moved, renamed, or never existed.
        Let&apos;s get you back to somewhere useful.
      </motion.p>

      <motion.div
        className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-9"
        variants={ACTIONS_VARIANTS}
      >
        <CtaButton
          href="/"
          leadingIcon={<Home className="size-4" strokeWidth={2} />}
          variants={ACTION_VARIANTS}
        >
          Back to home
        </CtaButton>

        <Button
          href="/projects"
          trailingIcon={<ArrowUpRight className="size-4" strokeWidth={2} />}
          variants={ACTION_VARIANTS}
        >
          View projects
        </Button>
      </motion.div>

      <motion.nav
        aria-label="Quick links"
        className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        variants={ITEM_VARIANTS}
      >
        {QUICK_LINKS.map((link) => (
          <Link
            className="text-muted-foreground hover:text-foreground focus-visible:outline-focus rounded-sm font-mono text-[11px] font-medium tracking-widest uppercase transition-colors outline-none focus-visible:outline-2 focus-visible:outline-offset-4"
            href={link.href}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
      </motion.nav>
    </motion.div>
  );
}
