import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from 'react';

import {
  animateValue,
  buildBoxShadow,
  buildMeshGradients,
  easeInCubic,
  easeOutCubic,
} from '@/lib/borderGlow';

type BorderGlowProps = {
  children?: ReactNode;
  className?: string;
  edgeSensitivity?: number;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  animated?: boolean;
  colors?: string[];
  fillOpacity?: number;
};

type GlowRuntimeState = {
  isHovered: boolean;
  cursorAngle: number;
  edgeProximity: number;
  sweepActive: boolean;
};

type GlowConfig = {
  edgeSensitivity: number;
  fillOpacity: number;
};

type BorderGlowStyle = CSSProperties & {
  '--border-glow-angle': string;
  '--border-glow-border-opacity': number;
  '--border-glow-fill-opacity': number;
  '--border-glow-glow-opacity': number;
  '--border-glow-transition': string;
};

const DEFAULT_COLORS = ['#c084fc', '#f472b6', '#38bdf8'];

const FILL_MASK = [
  'linear-gradient(to bottom, black, black)',
  'radial-gradient(ellipse at 50% 50%, black 40%, transparent 65%)',
  'radial-gradient(ellipse at 66% 66%, black 5%, transparent 40%)',
  'radial-gradient(ellipse at 33% 33%, black 5%, transparent 40%)',
  'radial-gradient(ellipse at 66% 33%, black 5%, transparent 40%)',
  'radial-gradient(ellipse at 33% 66%, black 5%, transparent 40%)',
  'conic-gradient(from var(--border-glow-angle) at center, transparent 5%, black 15%, black 85%, transparent 95%)',
].join(', ');

const OUTER_GLOW_MASK =
  'conic-gradient(from var(--border-glow-angle) at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%)';

function calculateEdgeProximity(
  width: number,
  height: number,
  x: number,
  y: number,
) {
  const centerX = width / 2;
  const centerY = height / 2;
  const deltaX = x - centerX;
  const deltaY = y - centerY;

  const scaleX =
    deltaX === 0 ? Number.POSITIVE_INFINITY : centerX / Math.abs(deltaX);

  const scaleY =
    deltaY === 0 ? Number.POSITIVE_INFINITY : centerY / Math.abs(deltaY);

  return Math.min(Math.max(1 / Math.min(scaleX, scaleY), 0), 1);
}

function calculateCursorAngle(
  width: number,
  height: number,
  x: number,
  y: number,
) {
  const deltaX = x - width / 2;
  const deltaY = y - height / 2;

  if (deltaX === 0 && deltaY === 0) {
    return 0;
  }

  const radians = Math.atan2(deltaY, deltaX);
  const degrees = radians * (180 / Math.PI) + 90;

  return degrees < 0 ? degrees + 360 : degrees;
}

export function BorderGlow({
  children,
  className = '',
  edgeSensitivity = 30,
  glowColor = '40 80 80',
  backgroundColor = '#120F17',
  borderRadius = 28,
  glowRadius = 40,
  glowIntensity = 1,
  coneSpread = 25,
  animated = false,
  colors = DEFAULT_COLORS,
  fillOpacity = 0.5,
}: BorderGlowProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const runtimeRef = useRef<GlowRuntimeState>({
    isHovered: false,
    cursorAngle: 45,
    edgeProximity: 0,
    sweepActive: false,
  });

  const configRef = useRef<GlowConfig>({
    edgeSensitivity,
    fillOpacity,
  });

  const meshGradients = useMemo(() => buildMeshGradients(colors), [colors]);

  const borderBackground = useMemo(
    () =>
      [
        `linear-gradient(${backgroundColor} 0 100%) padding-box`,
        'linear-gradient(rgb(255 255 255 / 0%) 0% 100%) border-box',
        ...meshGradients.map((gradient) => `${gradient} border-box`),
      ].join(', '),
    [backgroundColor, meshGradients],
  );

  const fillBackground = useMemo(
    () => meshGradients.map((gradient) => `${gradient} padding-box`).join(', '),
    [meshGradients],
  );

  const glowBoxShadow = useMemo(
    () => buildBoxShadow(glowColor, glowIntensity),
    [glowColor, glowIntensity],
  );

  const borderMask = useMemo(
    () =>
      `conic-gradient(
        from var(--border-glow-angle) at center,
        black ${coneSpread}%,
        transparent ${coneSpread + 15}%,
        transparent ${100 - coneSpread - 15}%,
        black ${100 - coneSpread}%
      )`,
    [coneSpread],
  );

  const syncVisualState = useCallback(() => {
    const card = cardRef.current;

    if (!card) return;

    const runtime = runtimeRef.current;
    const config = configRef.current;
    const isVisible = runtime.isHovered || runtime.sweepActive;
    const colorSensitivity = config.edgeSensitivity + 20;

    const borderOpacity = isVisible
      ? Math.max(
          0,
          (runtime.edgeProximity * 100 - colorSensitivity) /
            (100 - colorSensitivity),
        )
      : 0;

    const glowOpacity = isVisible
      ? Math.max(
          0,
          (runtime.edgeProximity * 100 - config.edgeSensitivity) /
            (100 - config.edgeSensitivity),
        )
      : 0;

    card.style.setProperty(
      '--border-glow-angle',
      `${runtime.cursorAngle.toFixed(3)}deg`,
    );

    card.style.setProperty(
      '--border-glow-border-opacity',
      String(borderOpacity),
    );

    card.style.setProperty(
      '--border-glow-fill-opacity',
      String(borderOpacity * config.fillOpacity),
    );

    card.style.setProperty('--border-glow-glow-opacity', String(glowOpacity));

    card.style.setProperty(
      '--border-glow-transition',
      isVisible ? 'opacity 0.25s ease-out' : 'opacity 0.75s ease-in-out',
    );
  }, []);

  useEffect(() => {
    configRef.current = {
      edgeSensitivity,
      fillOpacity,
    };

    syncVisualState();
  }, [edgeSensitivity, fillOpacity, syncVisualState]);

  useEffect(() => {
    if (!animated) return;

    const angleStart = 110;
    const angleEnd = 465;
    const runtime = runtimeRef.current;
    let cancelled = false;

    const updateRuntime = (update: (state: GlowRuntimeState) => void) => {
      if (cancelled) return;

      update(runtime);
      syncVisualState();
    };

    runtime.sweepActive = true;
    runtime.cursorAngle = angleStart;
    syncVisualState();

    animateValue({
      duration: 500,
      onUpdate: (value) => {
        updateRuntime((state) => {
          state.edgeProximity = value / 100;
        });
      },
    });

    animateValue({
      ease: easeInCubic,
      duration: 1500,
      end: 50,
      onUpdate: (value) => {
        updateRuntime((state) => {
          state.cursorAngle =
            (angleEnd - angleStart) * (value / 100) + angleStart;
        });
      },
    });

    animateValue({
      ease: easeOutCubic,
      delay: 1500,
      duration: 2250,
      start: 50,
      end: 100,
      onUpdate: (value) => {
        updateRuntime((state) => {
          state.cursorAngle =
            (angleEnd - angleStart) * (value / 100) + angleStart;
        });
      },
    });

    animateValue({
      ease: easeInCubic,
      delay: 2500,
      duration: 1500,
      start: 100,
      end: 0,
      onUpdate: (value) => {
        updateRuntime((state) => {
          state.edgeProximity = value / 100;
        });
      },
      onEnd: () => {
        updateRuntime((state) => {
          state.sweepActive = false;
        });
      },
    });

    return () => {
      cancelled = true;
      runtime.sweepActive = false;
      syncVisualState();
    };
  }, [animated, syncVisualState]);

  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      const card = cardRef.current;

      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const runtime = runtimeRef.current;

      runtime.edgeProximity = calculateEdgeProximity(
        rect.width,
        rect.height,
        x,
        y,
      );

      runtime.cursorAngle = calculateCursorAngle(rect.width, rect.height, x, y);

      syncVisualState();
    },
    [syncVisualState],
  );

  const handlePointerEnter = useCallback(() => {
    runtimeRef.current.isHovered = true;
    syncVisualState();
  }, [syncVisualState]);

  const handlePointerLeave = useCallback(() => {
    runtimeRef.current.isHovered = false;
    syncVisualState();
  }, [syncVisualState]);

  const cardStyle = {
    contain: 'layout',
    background: backgroundColor,
    borderRadius: `${borderRadius}px`,
    transform: 'translate3d(0, 0, 0.01px)',
    boxShadow:
      'rgba(0,0,0,0.1) 0 1px 2px, rgba(0,0,0,0.1) 0 2px 4px, rgba(0,0,0,0.1) 0 4px 8px, rgba(0,0,0,0.1) 0 8px 16px, rgba(0,0,0,0.1) 0 16px 32px, rgba(0,0,0,0.1) 0 32px 64px',
    '--border-glow-angle': '45deg',
    '--border-glow-border-opacity': 0,
    '--border-glow-fill-opacity': 0,
    '--border-glow-glow-opacity': 0,
    '--border-glow-transition': 'opacity 0.75s ease-in-out',
  } satisfies BorderGlowStyle;

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={`relative isolate grid border border-white/15 ${className}`}
      style={cardStyle}
    >
      <div
        className="absolute inset-0 z-[-1] rounded-[inherit]"
        style={{
          border: '1px solid transparent',
          background: borderBackground,
          opacity: 'var(--border-glow-border-opacity)',
          maskImage: borderMask,
          WebkitMaskImage: borderMask,
          transition: 'var(--border-glow-transition)',
        }}
      />

      <div
        className="absolute inset-0 z-[-1] rounded-[inherit]"
        style={
          {
            border: '1px solid transparent',
            background: fillBackground,
            maskImage: FILL_MASK,
            WebkitMaskImage: FILL_MASK,
            maskComposite: 'subtract, add, add, add, add, add',
            WebkitMaskComposite:
              'source-out, source-over, source-over, source-over, source-over, source-over',
            opacity: 'var(--border-glow-fill-opacity)',
            mixBlendMode: 'soft-light',
            transition: 'var(--border-glow-transition)',
          } as CSSProperties
        }
      />

      <span
        className="pointer-events-none absolute z-1 rounded-[inherit]"
        style={{
          inset: `${-glowRadius}px`,
          maskImage: OUTER_GLOW_MASK,
          WebkitMaskImage: OUTER_GLOW_MASK,
          opacity: 'var(--border-glow-glow-opacity)',
          mixBlendMode: 'plus-lighter',
          transition: 'var(--border-glow-transition)',
        }}
      >
        <span
          className="absolute rounded-[inherit]"
          style={{
            inset: `${glowRadius}px`,
            boxShadow: glowBoxShadow,
          }}
        />
      </span>

      <div className="relative z-1 flex flex-col overflow-auto">{children}</div>
    </div>
  );
}
