'use client';

import type { ReactNode } from 'react';
import { ReactLenis } from 'lenis/react';

interface SmoothScrollProps {
  children: ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,

        smoothWheel: true,
        wheelMultiplier: 0.85,

        syncTouch: false,
        touchMultiplier: 1,

        anchors: { offset: -96 },

        autoToggle: true,
        stopInertiaOnNavigate: true,

        respectReducedMotion: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
