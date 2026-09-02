'use client';

import { Home, RotateCw } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'motion/react';

import { Button, CtaButton } from '@/components/Buttons';

const CONTAINER_VARIANTS: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
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
      duration: 0.6,
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

type ErrorPageProps = { error: Error; reset: () => void };

export default function Error({ reset }: ErrorPageProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="error-heading"
      className="relative flex min-h-svh w-full items-center justify-center overflow-hidden px-5 pt-24 pb-16 sm:pt-28 md:px-6 lg:px-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_55%_at_50%_38%,rgba(248,113,113,0.1)_0%,rgba(9,7,13,0.5)_55%,transparent_80%)]"
      />

      <motion.div
        animate="visible"
        className="relative isolate mx-auto flex w-full max-w-xl flex-col items-center text-center"
        initial={shouldReduceMotion ? false : 'hidden'}
        role="alert"
        variants={CONTAINER_VARIANTS}
      >
        <motion.h1
          id="error-heading"
          className="font-title text-foreground text-[clamp(2rem,4.5vw,2.75rem)] leading-[1.05] font-semibold tracking-[-0.04em] text-balance"
          variants={ITEM_VARIANTS}
        >
          Something went wrong.
        </motion.h1>

        <motion.p
          className="text-foreground-soft mt-4 max-w-md text-base leading-7 text-pretty sm:text-lg sm:leading-8"
          variants={ITEM_VARIANTS}
        >
          An unexpected error interrupted this page. Try again, or head back
          home.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-9"
          variants={ACTIONS_VARIANTS}
        >
          <CtaButton
            leadingIcon={<RotateCw className="size-4" strokeWidth={2} />}
            onClick={reset}
            variants={ACTION_VARIANTS}
          >
            Try again
          </CtaButton>

          <Button
            href="/"
            leadingIcon={<Home className="size-4" strokeWidth={2} />}
            variants={ACTION_VARIANTS}
          >
            Back to home
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
