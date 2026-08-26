import type { Variants } from 'motion/react';

export const ENTER_CONTAINER: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.065,
    },
  },
};

export const ENTER_ITEM: Variants = {
  hidden: { opacity: 0, y: -10, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
};
