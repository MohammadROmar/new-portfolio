'use client';

import { motion, useReducedMotion, type Variants } from 'motion/react';

import type { SkillGroup } from '@/constants/resume';

const CONTAINER_VARIANTS: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.06,
    },
  },
};

const ITEM_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const BADGE_CLASSES =
  'bg-primary/15 text-foreground-soft rounded-md px-3 py-1 text-xs';

type ResumeSkillsProps = {
  groups: readonly SkillGroup[];
};

export function ResumeSkills({ groups }: ResumeSkillsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="space-y-6"
      variants={CONTAINER_VARIANTS}
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {groups.map((group) => (
        <motion.div key={group.label} variants={ITEM_VARIANTS}>
          <h3 className="text-foreground text-sm font-semibold">
            {group.label}
          </h3>

          <ul
            aria-label={`${group.label} skills`}
            className="mt-3 flex flex-wrap gap-2"
          >
            {group.skills.map((skill) => (
              <li key={skill} className={BADGE_CLASSES}>
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}
