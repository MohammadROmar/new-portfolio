'use client';

import { useFloatingLines } from './useFloatingLines';
import type { FloatingLinesProps } from './types';

export default function FloatingLines(props: FloatingLinesProps) {
  const containerRef = useFloatingLines(props);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="floating-lines-container pointer-events-none relative h-full w-full overflow-hidden mix-blend-screen"
    />
  );
}
