'use client';

import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';

import { cn } from '@/lib/cn';

const CONTAINER_VARIANTS: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.09,
    },
  },
};

const ITEM_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const RULE_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: ReactNode;
  id: string;
  as?: 'h2' | 'h3';
  align?: 'left' | 'center';
  className?: string;
};

type SectionProps = Omit<
  ComponentPropsWithoutRef<'section'>,
  'children' | 'id' | 'title'
> & {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: ReactNode;
  children: ReactNode;
  headingAs?: 'h2' | 'h3';
  headingAlign?: 'left' | 'center';
  containerClassName?: string;
  headingClassName?: string;
  contentClassName?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  headingAs = 'h2',
  headingAlign = 'center',
  className,
  containerClassName,
  headingClassName,
  contentClassName,
  ...props
}: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      {...props}
      id={id}
      aria-labelledby={headingId}
      className={cn('px-5 py-24 sm:py-28 md:px-6 lg:px-10 lg:py-32', className)}
    >
      <div className={cn('mx-auto w-full max-w-7xl', containerClassName)}>
        <SectionHeading
          id={headingId}
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          as={headingAs}
          align={headingAlign}
          className={headingClassName}
        />

        <div className={cn('mt-12 sm:mt-16', contentClassName)}>{children}</div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  id,
  as: Heading = 'h2',
  align = 'center',
  className,
}: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();
  const centered = align === 'center';

  return (
    <motion.header
      className={cn(
        'flex w-full flex-col',
        centered ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
      variants={CONTAINER_VARIANTS}
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.65 }}
    >
      <motion.p
        className="text-primary-hover font-mono text-[11px] font-semibold tracking-[0.28em] uppercase sm:text-xs"
        variants={ITEM_VARIANTS}
      >
        {eyebrow}
      </motion.p>

      <motion.div className="mt-3" variants={ITEM_VARIANTS}>
        <Heading
          id={id}
          className="text-foreground font-title text-[clamp(2rem,4vw,2.75rem)] leading-[1.08] font-semibold tracking-[-0.045em] text-balance"
        >
          {title}
        </Heading>
      </motion.div>

      <motion.span
        aria-hidden="true"
        className={cn(
          'bg-primary/20 relative mt-5 block h-px w-16',
          centered ? 'origin-center' : 'origin-left',
        )}
        variants={RULE_VARIANTS}
      >
        <span className="via-primary-hover absolute inset-y-0 left-1/2 w-11 -translate-x-1/2 bg-linear-to-r from-transparent to-transparent shadow-[0_0_16px_rgba(167,139,250,0.5)]" />
      </motion.span>

      {subtitle ? (
        <motion.p
          className={cn(
            'text-foreground-soft/80 mt-5 max-w-2xl text-base leading-7 text-pretty sm:text-lg sm:leading-8',
            centered && 'mx-auto',
          )}
          variants={ITEM_VARIANTS}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </motion.header>
  );
}
