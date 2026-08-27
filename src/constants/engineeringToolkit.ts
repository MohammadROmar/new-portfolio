import type { StaticImageData } from 'next/image';
import type { Variants } from 'motion/react';

import axiosIcon from '@/assets/icons/axios.svg';
import featureSlicedDesignIcon from '@/assets/icons/feature-sliced-design.svg';
import i18nextIcon from '@/assets/icons/i18next.svg';
import motionIcon from '@/assets/icons/motion.svg';
import nextjsIcon from '@/assets/icons/nextjs.svg';
import reactHookFormIcon from '@/assets/icons/react-hook-form.svg';
import reactIcon from '@/assets/icons/react.svg';
import reduxToolkitIcon from '@/assets/icons/redux-toolkit.svg';
import shadcnIcon from '@/assets/icons/shadcn-ui.svg';
import tailwindCssIcon from '@/assets/icons/tailwind-css.svg';
import tanstackQueryIcon from '@/assets/icons/tanstack-query.svg';
import typescriptIcon from '@/assets/icons/typescript.svg';
import viteIcon from '@/assets/icons/vite.svg';
import gitIcon from '@/assets/icons/git.svg';
import githubIcon from '@/assets/icons/github.svg';
import reactRouterIcon from '@/assets/icons/react-router.svg';

export type ToolkitTechnology = { label: string; icon: StaticImageData };

export type ToolkitGroup = {
  label: string;
  title: string;
  description: string;
  technologies: readonly ToolkitTechnology[];
};

export const TOOLKIT_GROUPS = [
  {
    label: 'Architecture',
    title: 'Systems that stay understandable.',
    description:
      'Typed boundaries and clear domain ownership keep complex products easier to extend, review, and maintain as they grow.',
    technologies: [
      { label: 'React 19', icon: reactIcon },
      { label: 'TypeScript', icon: typescriptIcon },
      { label: 'Next.js', icon: nextjsIcon },
      { label: 'React Router v8', icon: reactRouterIcon },
      {
        label: 'Feature-Sliced Design',
        icon: featureSlicedDesignIcon,
      },
    ],
  },
  {
    label: 'Data & workflows',
    title: 'State that stays predictable.',
    description:
      'Server data, forms, permissions, sessions, and real-time events are modeled as explicit product states instead of scattered edge cases.',
    technologies: [
      { label: 'TanStack Query', icon: tanstackQueryIcon },
      { label: 'Redux Toolkit', icon: reduxToolkitIcon },
      { label: 'Axios', icon: axiosIcon },
      { label: 'React Hook Form', icon: reactHookFormIcon },
    ],
  },
  {
    label: 'Interface & delivery',
    title: 'Experiences that hold up.',
    description:
      'Responsive UI, accessible interaction, purposeful motion, and a performance-conscious delivery path are treated as one system.',
    technologies: [
      { label: 'Tailwind CSS v4', icon: tailwindCssIcon },
      { label: 'shadcn/ui', icon: shadcnIcon },
      { label: 'Motion', icon: motionIcon },
      { label: 'i18next', icon: i18nextIcon },
      { label: 'Vite', icon: viteIcon },
      { label: 'Git', icon: gitIcon },
      { label: 'GitHub', icon: githubIcon },
    ],
  },
] as const satisfies readonly ToolkitGroup[];

export const TOOLKIT_CONTAINER_VARIANTS: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
};

export const TOOLKIT_ITEM_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
