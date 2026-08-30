'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';

import { BorderGlow } from '@/components/BorderGlow';
import { Section } from '@/components/Section';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/Tooltip';
import {
  TOOLKIT_CONTAINER_VARIANTS,
  TOOLKIT_GROUPS,
  TOOLKIT_ITEM_VARIANTS,
} from '@/constants/engineeringToolkit';
import { SIGNATURE_CARD_GLOW_PROPS } from '@/constants/borderGlow';

import { GlowLine } from './GlowLine';

export function EngineeringApproach() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="approach"
      eyebrow="Engineering toolkit"
      title="Tools chosen with intent."
      subtitle="A focused stack for building complex, dependable frontend products."
    >
      <BorderGlow {...SIGNATURE_CARD_GLOW_PROPS}>
        <div className="relative isolate overflow-hidden rounded-[28px] shadow-[0_24px_80px_-48px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.04)]">
          <GlowLine />

          <TooltipProvider delayDuration={140} skipDelayDuration={100}>
            <motion.ul
              className="divide-border grid divide-y lg:grid-cols-3 lg:divide-x lg:divide-y-0"
              variants={TOOLKIT_CONTAINER_VARIANTS}
              initial={shouldReduceMotion ? false : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {TOOLKIT_GROUPS.map((group) => (
                <motion.li
                  key={group.label}
                  className="flex min-w-0 flex-col p-6 sm:p-8 lg:p-9"
                  variants={TOOLKIT_ITEM_VARIANTS}
                >
                  <p className="text-primary-hover font-mono text-[11px] font-semibold tracking-[0.18em] uppercase">
                    {group.label}
                  </p>

                  <h3 className="text-foreground font-title mt-4 text-2xl leading-tight font-semibold tracking-[-0.04em] text-balance">
                    {group.title}
                  </h3>

                  <p className="text-foreground-soft mt-4 text-sm leading-7 text-pretty sm:text-base">
                    {group.description}
                  </p>

                  <ul
                    aria-label={`${group.label} technologies`}
                    className="mt-auto flex flex-wrap gap-2 pt-8"
                  >
                    {group.technologies.map((technology) => (
                      <li key={technology.label}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span
                              role="img"
                              tabIndex={0}
                              aria-label={technology.label}
                              className="group/tool border-border bg-background/55 hover:border-primary/35 hover:bg-primary/10 focus-visible:ring-primary/30 flex h-10 w-auto items-center justify-center gap-2 rounded-xl border px-3 transition-[background-color,border-color] duration-200 outline-none focus-visible:ring-2 [@media(hover:hover)_and_(pointer:fine)]:size-10 [@media(hover:hover)_and_(pointer:fine)]:px-0"
                            >
                              <Image
                                src={technology.icon}
                                alt=""
                                width={20}
                                height={20}
                                unoptimized
                                className="size-5 object-contain opacity-75 transition-[opacity,transform] duration-200 ease-out group-hover/tool:scale-105 group-hover/tool:opacity-100 motion-reduce:transform-none motion-reduce:transition-none"
                              />

                              <span className="text-foreground-soft font-mono text-[11px] [@media(hover:hover)_and_(pointer:fine)]:hidden">
                                {technology.label}
                              </span>
                            </span>
                          </TooltipTrigger>

                          <TooltipContent
                            side="top"
                            sideOffset={8}
                            className="border-border bg-surface-raised text-foreground font-mono text-xs"
                          >
                            {technology.label}
                          </TooltipContent>
                        </Tooltip>
                      </li>
                    ))}
                  </ul>
                </motion.li>
              ))}
            </motion.ul>
          </TooltipProvider>
        </div>
      </BorderGlow>
    </Section>
  );
}
