'use client';

import { useFloatingLines } from './useFloatingLines';
import type { FloatingLinesProps } from './types';

export default function FloatingLines({
  className,
  style,
  mixBlendMode = 'screen',
  ...options
}: FloatingLinesProps) {
  const containerRef = useFloatingLines(options);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={[
        'floating-lines-container relative h-full w-full overflow-hidden',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ ...style, mixBlendMode }}
    />
  );
}
