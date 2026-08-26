'use client';

import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

import { cn } from '@/lib/cn';

type SharedProps = {
  children: ReactNode;
  className?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
};

type AnchorProps = SharedProps &
  Omit<ComponentProps<typeof motion.a>, keyof SharedProps | 'href'> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  Omit<ComponentProps<typeof motion.button>, keyof SharedProps> & {
    href?: never;
  };

export type PortfolioButtonProps = AnchorProps | NativeButtonProps;

const BASE_CLASSES = [
  'group relative isolate inline-flex min-h-12 cursor-pointer touch-manipulation',
  'select-none items-center justify-center rounded-full',
  'text-sm font-semibold tracking-[-0.01em]',
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus',
  'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-45',
].join(' ');

function AppButtonContent({
  children,
  leadingIcon,
  trailingIcon,
}: Pick<SharedProps, 'children' | 'leadingIcon' | 'trailingIcon'>) {
  return (
    <>
      <span
        aria-hidden="true"
        className="via-primary/80 pointer-events-none absolute inset-x-6 -top-px z-20 h-px bg-linear-to-r from-transparent to-transparent opacity-0 shadow-[0_0_8px_var(--color-primary)] transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
      />
      <span
        aria-hidden="true"
        className="bg-primary/25 pointer-events-none absolute -bottom-12 left-1/2 h-20 w-36 -translate-x-1/2 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
      />

      {leadingIcon ? (
        <span aria-hidden="true" className="relative z-10 flex size-4">
          {leadingIcon}
        </span>
      ) : null}

      <span className="relative z-10">{children}</span>

      {trailingIcon ? (
        <span
          aria-hidden="true"
          className="relative z-10 flex size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
        >
          {trailingIcon}
        </span>
      ) : null}
    </>
  );
}

function CtaButtonContent({
  children,
  leadingIcon,
  trailingIcon,
}: Pick<SharedProps, 'children' | 'leadingIcon' | 'trailingIcon'>) {
  return (
    <span className="bg-foreground text-background relative z-10 inline-flex min-h-11.5 items-center justify-center gap-2.5 overflow-hidden rounded-full px-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
      <span
        aria-hidden="true"
        className="bg-primary-hover pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-linear-to-r from-transparent via-white/45 to-transparent opacity-0 transition-[transform,opacity] duration-500 ease-out group-hover:translate-x-[450%] group-hover:opacity-100 motion-reduce:transform-none motion-reduce:opacity-0 motion-reduce:transition-none"
      />

      {leadingIcon ? (
        <span aria-hidden="true" className="relative z-10 flex size-4">
          {leadingIcon}
        </span>
      ) : null}

      <span className="relative z-10">{children}</span>

      {trailingIcon ? (
        <span
          aria-hidden="true"
          className="bg-background text-foreground relative z-10 -mr-2 ml-0.5 flex size-8 items-center justify-center rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-rotate-6 motion-reduce:transform-none motion-reduce:transition-none"
        >
          {trailingIcon}
        </span>
      ) : null}
    </span>
  );
}

export function Button(props: PortfolioButtonProps) {
  const reduceMotion = useReducedMotion();

  if (typeof props.href === 'string') {
    const {
      href,
      className,
      leadingIcon,
      trailingIcon,
      children,
      ...anchorProps
    } = props;
    const classes = getAppButtonClasses(className);

    return (
      <motion.a
        {...anchorProps}
        className={classes}
        href={href}
        transition={{ type: 'spring', stiffness: 430, damping: 28 }}
        whileHover={reduceMotion ? undefined : { y: -1 }}
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      >
        <AppButtonContent leadingIcon={leadingIcon} trailingIcon={trailingIcon}>
          {children}
        </AppButtonContent>
      </motion.a>
    );
  }

  const { className, leadingIcon, trailingIcon, children, ...buttonProps } =
    props;
  const classes = getAppButtonClasses(className);

  return (
    <motion.button
      {...buttonProps}
      className={classes}
      transition={{ type: 'spring', stiffness: 430, damping: 28 }}
      type={props.type ?? 'button'}
      whileHover={reduceMotion ? undefined : { y: -1 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
    >
      <AppButtonContent leadingIcon={leadingIcon} trailingIcon={trailingIcon}>
        {children}
      </AppButtonContent>
    </motion.button>
  );
}

export function CtaButton(props: PortfolioButtonProps) {
  const reduceMotion = useReducedMotion();

  if (typeof props.href === 'string') {
    const {
      href,
      className,
      leadingIcon,
      trailingIcon,
      children,
      ...anchorProps
    } = props;
    const classes = getCtaButtonClasses(className);

    return (
      <motion.a
        {...anchorProps}
        className={classes}
        href={href}
        transition={{ type: 'spring', stiffness: 430, damping: 26 }}
        whileHover={reduceMotion ? undefined : { y: -2 }}
        whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      >
        <CtaButtonContent leadingIcon={leadingIcon} trailingIcon={trailingIcon}>
          {children}
        </CtaButtonContent>
      </motion.a>
    );
  }

  const { className, leadingIcon, trailingIcon, children, ...buttonProps } =
    props;
  const classes = getCtaButtonClasses(className);

  return (
    <motion.button
      {...buttonProps}
      className={classes}
      transition={{ type: 'spring', stiffness: 430, damping: 26 }}
      type={props.type ?? 'button'}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
    >
      <CtaButtonContent leadingIcon={leadingIcon} trailingIcon={trailingIcon}>
        {children}
      </CtaButtonContent>
    </motion.button>
  );
}

function getAppButtonClasses(className?: string) {
  return cn(
    BASE_CLASSES,
    'gap-2.5 border border-primary/20 bg-background/55 px-6 text-foreground',
    'shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_12px_32px_-22px_rgba(0,0,0,0.9)]',
    'backdrop-blur-xl backdrop-saturate-150 transition-[border-color,background-color,box-shadow] duration-300',
    'hover:border-primary/45 hover:bg-surface-raised/80 hover:shadow-[inset_0_1px_0_rgba(216,180,254,0.12),0_16px_38px_-22px_var(--color-primary)]',
    className,
  );
}

function getCtaButtonClasses(className?: string) {
  return cn(
    BASE_CLASSES,
    'p-px text-background',
    'bg-linear-to-r from-gradient-3 via-primary-hover to-gradient-5',
    'shadow-[0_18px_50px_-22px_var(--color-primary)]',
    'before:pointer-events-none before:absolute before:inset-x-5 before:-bottom-3 before:h-7 before:rounded-full before:bg-primary/45 before:opacity-60 before:blur-xl before:transition-opacity before:duration-300',
    'hover:before:opacity-90 motion-reduce:before:transition-none',
    className,
  );
}
