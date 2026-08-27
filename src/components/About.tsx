'use client';

import { BadgeCheck, GraduationCap, type LucideIcon } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'motion/react';

import { cn } from '@/lib/cn';
import { Section } from '@/components/Section';

import { GlowLine } from './GlowLine';
import { BorderGlow } from './BorderGlow';

const CONTENT_VARIANTS: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.12,
    },
  },
};

const ITEM_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="about"
      eyebrow="About me"
      title="I build beyond the interface."
      subtitle="Polished interfaces, built on dependable architecture."
    >
      <motion.div
        className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(19rem,0.8fr)] lg:gap-20"
        variants={CONTENT_VARIANTS}
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.article className="max-w-3xl" variants={ITEM_VARIANTS}>
          <p className="text-foreground font-title text-2xl leading-[1.35] font-medium tracking-[-0.035em] text-pretty sm:text-3xl">
            I&apos;m a frontend engineer working where product design,
            application architecture, and reliability meet.
          </p>

          <div className="text-foreground-soft mt-7 space-y-5 text-base leading-7 sm:text-lg sm:leading-8">
            <p>
              Based in Damascus, I specialize in React and TypeScript for
              complex, data-intensive products. My work extends from polished,
              responsive interfaces to the engineering underneath them: typed
              API boundaries, server-state orchestration, access control,
              real-time workflows, internationalization, and resilient session
              management.
            </p>

            <p>
              I built the frontend foundation of IntelliPharma, a bilingual
              pharmaceutical ERP and CRM spanning 21 domain entities and 67
              route-level pages. That experience shaped how I approach software:
              understand the domain first, establish clear ownership and
              boundaries, then optimize the paths that matter to real users.
            </p>
          </div>
        </motion.article>

        <motion.div variants={ITEM_VARIANTS}>
          <BorderGlow
            className="w-full"
            edgeSensitivity={34}
            glowColor="255 92 76"
            backgroundColor="#110D18"
            borderRadius={28}
            glowRadius={34}
            glowIntensity={0.75}
            coneSpread={22}
            animated={false}
            colors={['#5B21B6', '#7846C7', '#A78BFA', '#C4B5FD']}
            fillOpacity={0.06}
          >
            <aside
              aria-label="Education and certification"
              className="relative overflow-hidden rounded-[28px]"
            >
              <GlowLine />

              <Credential
                icon={GraduationCap}
                label="Education"
                title="Information Technology Engineering"
                description="Software Engineering specialization"
                meta="Damascus University · Fifth year · Expected 2026"
              />

              <Credential
                icon={BadgeCheck}
                label="Training & certification"
                title="Frontend Development Track"
                description="Certificate of Attendance"
                meta="Prokaders · 16 hours of online training"
                className="border-none"
              />
            </aside>
          </BorderGlow>
        </motion.div>
      </motion.div>
    </Section>
  );
}

type CredentialProps = {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  meta: string;
  className?: string;
};

function Credential({
  icon: Icon,
  label,
  title,
  description,
  meta,
  className,
}: CredentialProps) {
  return (
    <div
      className={cn('border-border flex gap-4 border-b p-5 sm:p-6', className)}
    >
      <span
        aria-hidden="true"
        className="border-primary/20 bg-primary/10 text-primary mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border"
      >
        <Icon className="size-4.5" strokeWidth={1.8} />
      </span>

      <div className="min-w-0">
        <p className="text-primary-hover font-mono text-[11px] font-semibold tracking-[0.16em] uppercase">
          {label}
        </p>

        <h3 className="text-foreground mt-2 text-base leading-6 font-semibold">
          {title}
        </h3>

        <p className="text-foreground-soft mt-1 text-sm leading-6">
          {description}
        </p>

        <p className="text-muted-foreground mt-3 text-sm leading-6">{meta}</p>
      </div>
    </div>
  );
}
