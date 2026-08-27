'use client';

import { ArrowDownRight } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'motion/react';

import { Button, CtaButton } from './Buttons';

const CONTAINER_VARIANTS: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.09,
    },
  },
};

const ITEM_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
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

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-heading"
      className="pointer-events-none absolute inset-0 isolate z-10 px-5 md:px-6 lg:px-10"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_72%_at_22%_50%,rgba(9,7,13,0.88)_0%,rgba(9,7,13,0.64)_43%,rgba(9,7,13,0.16)_72%,transparent_100%)]"
      />

      <div className="mx-auto flex h-full w-full max-w-7xl items-center pt-24 pb-10 sm:pt-28">
        <motion.div
          animate="visible"
          className="pointer-events-auto w-full max-w-4xl"
          initial={shouldReduceMotion ? false : 'hidden'}
          variants={CONTAINER_VARIANTS}
        >
          <h1
            id="hero-heading"
            className="font-title font-semibold tracking-[-0.06em]"
          >
            <motion.span
              variants={ITEM_VARIANTS}
              className="text-foreground/90 block text-[clamp(2.75rem,4.4vw,3.75rem)] leading-[0.96]"
            >
              I&apos;m Mohammad.
            </motion.span>

            <motion.span
              variants={ITEM_VARIANTS}
              className="text-foreground mt-3 block max-w-4xl text-[clamp(3rem,5.5vw,4.75rem)] leading-[0.92] text-balance sm:mt-4"
            >
              I build web apps that stay{' '}
              <span className="text-primary-hover">fast as they grow.</span>
            </motion.span>
          </h1>

          <motion.p
            variants={ITEM_VARIANTS}
            className="text-foreground-soft mt-7 max-w-2xl text-base leading-7 text-pretty sm:mt-8 sm:text-lg sm:leading-8"
          >
            I turn complex requirements into fast, accessible products—combining
            clean architecture, thoughtful UI, and performance that holds up in
            production.
          </motion.p>

          <HeroActions />
        </motion.div>
      </div>
    </section>
  );
}

function HeroActions() {
  return (
    <motion.div
      className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9"
      variants={ACTIONS_VARIANTS}
    >
      <CtaButton
        href="#projects"
        trailingIcon={<ArrowDownRight className="size-4" strokeWidth={2} />}
        variants={ACTION_VARIANTS}
      >
        View selected work
      </CtaButton>

      <Button href="#contact" variants={ACTION_VARIANTS}>
        Let&apos;s talk
      </Button>
    </motion.div>
  );
}
