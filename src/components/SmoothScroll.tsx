'use client';

import type { PropsWithChildren } from 'react';
import { ReactLenis } from 'lenis/react';

export function SmoothScroll({ children }: PropsWithChildren) {
  return <ReactLenis root>{children}</ReactLenis>;
}
