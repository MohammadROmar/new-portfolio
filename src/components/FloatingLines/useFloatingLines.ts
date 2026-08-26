import { useEffect, useRef, type RefObject } from 'react';

import { useFloatingLinesConfig } from './config';
import { createFloatingLinesRuntime } from './runtime';
import type { FloatingLinesProps } from './types';

export function useFloatingLines(
  options: FloatingLinesProps,
): RefObject<HTMLDivElement | null> {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const runtimeRef = useRef<ReturnType<
    typeof createFloatingLinesRuntime
  > | null>(null);
  const config = useFloatingLinesConfig(options);
  const initialConfigRef = useRef(config);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const runtime = createFloatingLinesRuntime(
      container,
      initialConfigRef.current,
    );
    runtimeRef.current = runtime;

    return () => {
      runtime.destroy();
      if (runtimeRef.current === runtime) runtimeRef.current = null;
    };
  }, []);

  useEffect(() => {
    runtimeRef.current?.update(config);
  }, [config]);

  return containerRef;
}
