'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { FileText } from 'lucide-react';

import { cn } from '@/lib/cn';
import { useScrolledPast } from '@/hooks/useScrolledPast';
import { DEFAULT_LINKS, NavItem } from '@/constants/defaultLinks';
import { ENTER_CONTAINER, ENTER_ITEM } from '@/constants/enterItem';

import { Logo } from './Logo';
import { GithubIcon } from './GithubIcon';
import { ResumeLink } from './ResumeLink';

export type NavbarProps = {
  brandLabel?: string;
  links?: readonly NavItem[];
  proHref?: string;
  proLabel?: string;
  scrollThreshold?: number;
  className?: string;
};

type NavLinksProps = {
  activeHref?: string;
  highlightId: string;
  links: readonly NavItem[];
};

const MOBILE_EXTERNAL_LINK_CLASSES = cn(
  'group flex items-center justify-between rounded-[10px] px-3.5 py-3',
  'font-mono text-[13px] font-medium tracking-[0.04em] text-white/70 uppercase',
  'transition-colors hover:bg-white/6 hover:text-white',
  'focus-visible:ring-2 focus-visible:ring-violet-400/80 focus-visible:outline-none',
);

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
                'font-mono text-[13px] font-medium tracking-[0.04em] uppercase',
                'transition-[color,transform] duration-200 active:scale-[0.96]',
                'focus-visible:ring-primary/80 focus-visible:ring-2 focus-visible:outline-none',
                highlighted
                  ? 'text-violet-100'
                  : 'text-white/70 hover:text-white',
              )}
              href={item.href}
              onFocus={() => setHoveredHref(item.href)}
              onMouseEnter={() => setHoveredHref(item.href)}
            >
              {highlighted ? (
                <motion.span
                  className={cn(
                    'absolute inset-0 -z-10 rounded-xl',
                    'border-primary/15 bg-primary/10 border',
                    'shadow-[0_4px_22px_rgba(91,33,182,0.24),inset_0_1px_0_rgba(216,180,254,0.12)]',
                    'backdrop-blur-xl backdrop-saturate-[1.45]',
                  )}
                  layoutId={`nav-highlight-${highlightId}`}
                  transition={{
                    type: 'spring',
                    stiffness: 520,
                    damping: 42,
                  }}
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
  resumeUrl,
}: {
  activeHref?: string;
  githubUrl: string;
  links: readonly NavItem[];
  onNavigate: () => void;
  resumeUrl: string;
}) {
  return (
    <motion.nav
      animate={{ opacity: 1, y: 0, scale: 1 }}
      aria-label="Mobile navigation"
      className={cn(
        'absolute top-[calc(100%+0.5rem)] right-1 z-20 flex min-w-52 flex-col gap-0.5 overflow-hidden rounded-[14px]',
        'border border-white/6 bg-[rgba(18,15,23,0.88)] p-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)]',
        'backdrop-blur-[32px] backdrop-saturate-[1.3] md:hidden',
      )}
      exit={{ opacity: 0, y: -6, scale: 0.985 }}
      id="mobile-navigation"
      initial={{ opacity: 0, y: -6, scale: 0.985 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {links.map((item) => (
        <Link
          aria-current={item.href === activeHref ? 'page' : undefined}
          className={cn(
            'group flex items-center justify-between rounded-[10px] px-3.5 py-3',
            'font-mono text-[13px] font-medium tracking-[0.04em] text-white/70 uppercase',
            'transition-colors hover:bg-white/6 hover:text-white focus-visible:ring-2 focus-visible:ring-violet-400/80 focus-visible:outline-none',
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
        className={MOBILE_EXTERNAL_LINK_CLASSES}
        href={resumeUrl}
        onClick={onNavigate}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="inline-flex items-center gap-2">
          <FileText aria-hidden="true" className="text-primary size-3.5" />
          Resume
        </span>

        <span className="sr-only">PDF, opens in a new tab</span>
      </a>

      <a
        className={MOBILE_EXTERNAL_LINK_CLASSES}
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

export default function Navbar({
  brandLabel = 'Home',
  links = DEFAULT_LINKS,
  scrollThreshold = 50,
  className,
}: NavbarProps) {
  const pathname = usePathname();
  const highlightId = useId();
  const reduceMotion = useReducedMotion();
  const scrolled = useScrolledPast(scrollThreshold);
  const [menuOpen, setMenuOpen] = useState(false);

  const activeHref = links.find(({ href, match = href }) =>
    pathname.startsWith(match),
  )?.href;

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
        'pointer-events-none fixed inset-x-0 top-5 z-1500 flex flex-col items-center px-5 font-mono md:px-6 lg:px-10',
        className,
      )}
    >
      <motion.div
        animate="visible"
        className={cn(
          'pointer-events-auto relative flex h-14 w-full items-center justify-between rounded-2xl border',
          'transition-[max-width,background-color,border-color,padding,box-shadow,backdrop-filter] duration-500 ease-out',
          scrolled
            ? 'max-w-7xl border-white/4 bg-[rgba(18,15,23,0.45)] py-0 pr-1 pl-4 shadow-[0_8px_32px_rgba(0,0,0,0.28),inset_0_0.5px_0_rgba(255,255,255,0.08)] backdrop-blur-xl backdrop-saturate-[1.4] md:pr-2 md:pl-5'
            : 'max-w-[1680px] border-transparent bg-transparent py-0 pr-1 pl-1 md:pr-2 md:pl-5',
        )}
        initial={reduceMotion ? false : 'hidden'}
        variants={ENTER_CONTAINER}
      >
        <div className="flex min-w-0 items-center">
          <motion.div variants={ENTER_ITEM}>
            <Link
              aria-label={brandLabel}
              className="flex items-center rounded-lg focus-visible:ring-2 focus-visible:ring-violet-400/80 focus-visible:outline-none"
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              <Logo />
            </Link>
          </motion.div>

          <motion.span
            aria-hidden="true"
            className="mx-2 hidden text-lg font-light text-white select-none md:mr-2 md:ml-4.5 md:block"
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
              'transition-colors duration-200 hover:bg-white/[0.07] hover:text-white',
              'focus-visible:ring-2 focus-visible:ring-violet-400/80 focus-visible:outline-none',
            )}
            href="https://github.com/MohammadROmar/"
            rel="noopener noreferrer"
            target="_blank"
            variants={ENTER_ITEM}
            whileTap={{ scale: 0.97 }}
          >
            <GithubIcon className="h-4 w-4" />
          </motion.a>

          <ResumeLink />

          <motion.button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className={cn(
              'flex h-9 w-9 flex-col items-center justify-center gap-1 rounded-[10px] border border-transparent p-2.25 md:hidden',
              'bg-white/[0.035] shadow-[inset_0_0.5px_0_rgba(255,255,255,0.08)] backdrop-blur-xl',
              'transition-colors hover:bg-white/[0.07] focus-visible:ring-2 focus-visible:ring-violet-400/80 focus-visible:outline-none',
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
              resumeUrl="/resume/Mohammad-Omar-Resume.pdf"
            />
          ) : null}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
