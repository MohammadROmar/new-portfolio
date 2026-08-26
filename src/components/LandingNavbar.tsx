'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from 'motion/react';
import { type ReactNode, useEffect, useId, useState } from 'react';

import { cn } from '@/lib/cn';
import { DEFAULT_LINKS, LandingNavItem } from '@/constants/defaultLinks';
import { useScrolledPast } from '@/hooks/useScrolledPast';

import { Logo } from './Logo';
import { GithubIcon } from './GithubIcon';

export type LandingNavbarProps = {
  logo?: ReactNode;
  brandLabel?: string;
  links?: readonly LandingNavItem[];
  proHref?: string;
  proLabel?: string;
  scrollThreshold?: number;
  className?: string;
};

const ENTER_CONTAINER: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.065,
    },
  },
};

const ENTER_ITEM: Variants = {
  hidden: { opacity: 0, y: -10, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
};

type NavLinksProps = {
  activeHref?: string;
  highlightId: string;
  links: readonly LandingNavItem[];
};

function DesktopNavLinks({ activeHref, highlightId, links }: NavLinksProps) {
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const highlightedHref = hoveredHref ?? activeHref;

  return (
    <nav
      aria-label="Primary navigation"
      className="hidden items-center gap-2 md:flex"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setHoveredHref(null);
        }
      }}
      onMouseLeave={() => setHoveredHref(null)}
    >
      {links.map((item) => {
        const active = item.href === activeHref;
        const highlighted = item.href === highlightedHref;

        return (
          <motion.div key={item.href} variants={ENTER_ITEM}>
            <Link
              aria-current={active ? 'page' : undefined}
              className={cn(
                'relative isolate block rounded-xl px-2.5 py-1.5',
                'font-mono text-[13px] font-medium uppercase tracking-[0.04em]',
                'text-white/70 transition-colors hover:text-white active:scale-[0.96]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/80',
              )}
              href={item.href}
              onFocus={() => setHoveredHref(item.href)}
              onMouseEnter={() => setHoveredHref(item.href)}
            >
              {highlighted ? (
                <motion.span
                  className={cn(
                    'absolute inset-0 -z-10 rounded-xl border border-white/8',
                    'bg-[rgba(18,15,23,0.45)] shadow-[0_2px_16px_rgba(0,0,0,0.2),inset_0_0.5px_0_rgba(255,255,255,0.06)]',
                    'backdrop-blur-xl backdrop-saturate-[1.4]',
                  )}
                  layoutId={`landing-nav-highlight-${highlightId}`}
                  transition={{ type: 'spring', stiffness: 520, damping: 42 }}
                />
              ) : null}
              {item.label}
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
}

function MobileMenu({
  activeHref,
  githubUrl,
  links,
  onNavigate,
}: {
  activeHref?: string;
  githubUrl: string;
  links: readonly LandingNavItem[];
  onNavigate: () => void;
}) {
  return (
    <motion.nav
      animate={{ opacity: 1, y: 0, scale: 1 }}
      aria-label="Mobile navigation"
      className={cn(
        'absolute right-1 top-[calc(100%+0.5rem)] z-20 flex min-w-52 flex-col gap-0.5 overflow-hidden rounded-[14px]',
        'border border-white/6 bg-[rgba(18,15,23,0.88)] p-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)]',
        'backdrop-blur-[32px] backdrop-saturate-[1.3] md:hidden',
      )}
      exit={{ opacity: 0, y: -6, scale: 0.985 }}
      id="landing-mobile-navigation"
      initial={{ opacity: 0, y: -6, scale: 0.985 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {links.map((item) => (
        <Link
          aria-current={item.href === activeHref ? 'page' : undefined}
          className={cn(
            'group flex items-center justify-between rounded-[10px] px-3.5 py-3',
            'font-mono text-[13px] font-medium uppercase tracking-[0.04em] text-white/70',
            'transition-colors hover:bg-white/6 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/80',
          )}
          href={item.href}
          key={item.href}
          onClick={onNavigate}
        >
          {item.label}
          <span className="-translate-x-1.5 text-base opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
            →
          </span>
        </Link>
      ))}

      <a
        className="flex items-center justify-between rounded-[10px] px-3.5 py-3 font-mono text-[13px] font-medium uppercase tracking-[0.04em] text-white/70 transition-colors hover:bg-white/6 hover:text-white"
        href={githubUrl}
        onClick={onNavigate}
        rel="noreferrer"
        target="_blank"
      >
        <span className="inline-flex items-center gap-2">
          <GithubIcon className="h-3.5 w-3.5" />
          GitHub
        </span>
      </a>
    </motion.nav>
  );
}

export default function LandingNavbar({
  logo,
  brandLabel = 'Home',
  links = DEFAULT_LINKS,
  scrollThreshold = 50,
  className,
}: LandingNavbarProps) {
  const pathname = usePathname();
  const highlightId = useId();
  const reduceMotion = useReducedMotion();
  const scrolled = useScrolledPast(scrollThreshold);
  const [menuOpen, setMenuOpen] = useState(false);

  const activeHref = links.find(({ href, match = href }) =>
    pathname.startsWith(match),
  )?.href;

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        'pointer-events-none fixed inset-x-0 top-5 z-1500 flex flex-col items-center px-4 font-mono md:px-6',
        className,
      )}
    >
      <motion.div
        animate="visible"
        className={cn(
          'pointer-events-auto relative flex h-14 w-full items-center justify-between rounded-2xl border',
          'transition-[max-width,background-color,border-color,padding,box-shadow,backdrop-filter] duration-500 ease-out',
          scrolled
            ? 'max-w-319 border-white/4 bg-[rgba(18,15,23,0.45)] py-0 pl-4 pr-1 shadow-[0_8px_32px_rgba(0,0,0,0.28),inset_0_0.5px_0_rgba(255,255,255,0.08)] backdrop-blur-xl backdrop-saturate-[1.4] md:pl-5 md:pr-2'
            : 'max-w-[1680px] border-transparent bg-transparent py-0 pl-1 pr-1 md:pl-5 md:pr-2',
        )}
        initial={reduceMotion ? false : 'hidden'}
        variants={ENTER_CONTAINER}
      >
        <div className="flex min-w-0 items-center">
          <motion.div variants={ENTER_ITEM}>
            <Link
              aria-label={brandLabel}
              className="flex items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/80"
              href="/"
            >
              {logo ?? <Logo />}
            </Link>
          </motion.div>

          <motion.span
            aria-hidden="true"
            className="mx-2 hidden select-none text-lg font-light text-white md:ml-4.5 md:mr-2 md:block"
            variants={ENTER_ITEM}
          >
            /
          </motion.span>

          <DesktopNavLinks
            activeHref={activeHref}
            highlightId={highlightId}
            links={links}
          />
        </div>

        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <motion.a
            className={cn(
              'hidden h-9 items-center gap-1.5 rounded-[10px] border border-transparent px-3 md:flex',
              'bg-white/[0.035] font-mono text-[13px] font-medium text-white/80 shadow-[inset_0_0.5px_0_rgba(255,255,255,0.08)] backdrop-blur-xl',
              'transition-[background-color,transform] hover:bg-white/[0.07] hover:text-white active:scale-[0.97]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/80',
            )}
            href="https://github.com/MohammadROmar/"
            rel="noopener noreferrer"
            target="_blank"
            variants={ENTER_ITEM}
          >
            <GithubIcon className="h-4 w-4" />
          </motion.a>

          <motion.button
            aria-controls="landing-mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className={cn(
              'flex h-9 w-9 flex-col items-center justify-center gap-1 rounded-[10px] border border-transparent p-2.25 md:hidden',
              'bg-white/[0.035] shadow-[inset_0_0.5px_0_rgba(255,255,255,0.08)] backdrop-blur-xl',
              'transition-colors hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/80',
            )}
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
            variants={ENTER_ITEM}
          >
            <span
              className={cn(
                'block h-[1.5px] w-full rounded bg-white transition-transform duration-200',
                menuOpen && 'translate-y-[5.5px] rotate-45',
              )}
            />
            <span
              className={cn(
                'block h-[1.5px] w-full rounded bg-white transition-opacity duration-200',
                menuOpen && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'block h-[1.5px] w-full rounded bg-white transition-transform duration-200',
                menuOpen && 'translate-y-[-5.5px] -rotate-45',
              )}
            />
          </motion.button>
        </div>

        <AnimatePresence initial={false}>
          {menuOpen ? (
            <MobileMenu
              activeHref={activeHref}
              githubUrl="https://github.com/MohammadROmar/"
              links={links}
              onNavigate={() => setMenuOpen(false)}
            />
          ) : null}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
