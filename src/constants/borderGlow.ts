import type { ComponentProps } from 'react';

import { BorderGlow } from '@/components/BorderGlow';

export const SIGNATURE_CARD_GLOW_PROPS: Omit<
  ComponentProps<typeof BorderGlow>,
  'children'
> = {
  className: 'w-full',
  edgeSensitivity: 34,
  glowColor: '255 92 76',
  backgroundColor: '#110D18',
  borderRadius: 28,
  glowRadius: 34,
  glowIntensity: 0.75,
  coneSpread: 22,
  animated: false,
  colors: ['#5B21B6', '#7846C7', '#A78BFA', '#C4B5FD'],
  fillOpacity: 0.06,
};
