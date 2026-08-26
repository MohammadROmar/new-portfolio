import { useMemo } from 'react';

import type {
  FloatingLinesProps,
  WaveName,
  WavePosition,
} from './types';
import { MAX_GRADIENT_STOPS, MAX_LINES_PER_WAVE } from './constants';
import type { FloatingLinesConfig } from './runtime.types';

export const DEFAULT_ENABLED_WAVES: readonly WaveName[] = [
  'top',
  'middle',
  'bottom',
];

export const DEFAULT_LINE_COUNT: readonly number[] = [6];
export const DEFAULT_LINE_DISTANCE: readonly number[] = [5];

const DEFAULT_TOP_POSITION: WavePosition = {
  x: 10,
  y: 0.5,
  rotate: -0.4,
};

const DEFAULT_MIDDLE_POSITION: WavePosition = {
  x: 5,
  y: 0,
  rotate: 0.2,
};

const DEFAULT_BOTTOM_POSITION: WavePosition = {
  x: 2,
  y: -0.7,
  rotate: -1,
};

type VectorTuple = FloatingLinesConfig['topWavePosition'];

function finiteOr(value: number | undefined, fallback: number): number {
  return Number.isFinite(value) ? (value as number) : fallback;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function resolveWaveValue(
  value: number | readonly number[],
  enabledWaves: readonly WaveName[],
  wave: WaveName,
  fallback: number,
): number {
  if (typeof value === 'number') return finiteOr(value, fallback);

  const index = enabledWaves.indexOf(wave);
  return finiteOr(value[index], fallback);
}

function resolveLineCount(
  value: number | readonly number[],
  enabledWaves: readonly WaveName[],
  wave: WaveName,
): number {
  const count = resolveWaveValue(value, enabledWaves, wave, 6);
  return clamp(Math.trunc(count), 0, MAX_LINES_PER_WAVE);
}

function resolveLineDistance(
  value: number | readonly number[],
  enabledWaves: readonly WaveName[],
  wave: WaveName,
): number {
  return resolveWaveValue(value, enabledWaves, wave, 0.1) * 0.01;
}

function resolvePosition(
  position: WavePosition | undefined,
  fallback: WavePosition,
): VectorTuple {
  return [
    finiteOr(position?.x, fallback.x),
    finiteOr(position?.y, fallback.y),
    finiteOr(position?.rotate, fallback.rotate),
  ];
}

export function useFloatingLinesConfig({
  linesGradient,
  enabledWaves = DEFAULT_ENABLED_WAVES,
  lineCount = DEFAULT_LINE_COUNT,
  lineDistance = DEFAULT_LINE_DISTANCE,
  topWavePosition,
  middleWavePosition,
  bottomWavePosition,
  animationSpeed = 1,
  interactive = false,
  bendRadius = 5,
  bendStrength = -0.5,
  mouseDamping = 0.05,
  parallax = true,
  parallaxStrength = 0.2,
}: FloatingLinesProps): FloatingLinesConfig {
  const enableTop = enabledWaves.includes('top');
  const enableMiddle = enabledWaves.includes('middle');
  const enableBottom = enabledWaves.includes('bottom');

  const topCount = enableTop
    ? resolveLineCount(lineCount, enabledWaves, 'top')
    : 0;
  const middleCount = enableMiddle
    ? resolveLineCount(lineCount, enabledWaves, 'middle')
    : 0;
  const bottomCount = enableBottom
    ? resolveLineCount(lineCount, enabledWaves, 'bottom')
    : 0;

  const topDistance = enableTop
    ? resolveLineDistance(lineDistance, enabledWaves, 'top')
    : 0.01;
  const middleDistance = enableMiddle
    ? resolveLineDistance(lineDistance, enabledWaves, 'middle')
    : 0.01;
  const bottomDistance = enableBottom
    ? resolveLineDistance(lineDistance, enabledWaves, 'bottom')
    : 0.01;

  const topX = finiteOr(topWavePosition?.x, DEFAULT_TOP_POSITION.x);
  const topY = finiteOr(topWavePosition?.y, DEFAULT_TOP_POSITION.y);
  const topRotate = finiteOr(
    topWavePosition?.rotate,
    DEFAULT_TOP_POSITION.rotate,
  );

  const middleX = finiteOr(
    middleWavePosition?.x,
    DEFAULT_MIDDLE_POSITION.x,
  );
  const middleY = finiteOr(
    middleWavePosition?.y,
    DEFAULT_MIDDLE_POSITION.y,
  );
  const middleRotate = finiteOr(
    middleWavePosition?.rotate,
    DEFAULT_MIDDLE_POSITION.rotate,
  );

  const bottomX = finiteOr(
    bottomWavePosition?.x,
    DEFAULT_BOTTOM_POSITION.x,
  );
  const bottomY = finiteOr(
    bottomWavePosition?.y,
    DEFAULT_BOTTOM_POSITION.y,
  );
  const bottomRotate = finiteOr(
    bottomWavePosition?.rotate,
    DEFAULT_BOTTOM_POSITION.rotate,
  );

  const gradientKey = JSON.stringify(
    (linesGradient ?? []).slice(0, MAX_GRADIENT_STOPS),
  );
  const safeAnimationSpeed = finiteOr(animationSpeed, 1);
  const safeBendRadius = Math.max(finiteOr(bendRadius, 5), 0);
  const safeBendStrength = finiteOr(bendStrength, -0.5);
  const safeMouseDamping = clamp(finiteOr(mouseDamping, 0.05), 0, 1);
  const safeParallaxStrength = finiteOr(parallaxStrength, 0.2);

  return useMemo(
    () => ({
      gradientStops: JSON.parse(gradientKey) as string[],
      enableTop,
      enableMiddle,
      enableBottom,
      topLineCount: topCount,
      middleLineCount: middleCount,
      bottomLineCount: bottomCount,
      topLineDistance: topDistance,
      middleLineDistance: middleDistance,
      bottomLineDistance: bottomDistance,
      topWavePosition: resolvePosition(
        { x: topX, y: topY, rotate: topRotate },
        DEFAULT_TOP_POSITION,
      ),
      middleWavePosition: resolvePosition(
        { x: middleX, y: middleY, rotate: middleRotate },
        DEFAULT_MIDDLE_POSITION,
      ),
      bottomWavePosition: resolvePosition(
        { x: bottomX, y: bottomY, rotate: bottomRotate },
        DEFAULT_BOTTOM_POSITION,
      ),
      animationSpeed: safeAnimationSpeed,
      interactive,
      bendRadius: safeBendRadius,
      bendStrength: safeBendStrength,
      mouseDamping: safeMouseDamping,
      parallax,
      parallaxStrength: safeParallaxStrength,
    }),
    [
      gradientKey,
      enableTop,
      enableMiddle,
      enableBottom,
      topCount,
      middleCount,
      bottomCount,
      topDistance,
      middleDistance,
      bottomDistance,
      topX,
      topY,
      topRotate,
      middleX,
      middleY,
      middleRotate,
      bottomX,
      bottomY,
      bottomRotate,
      safeAnimationSpeed,
      interactive,
      safeBendRadius,
      safeBendStrength,
      safeMouseDamping,
      parallax,
      safeParallaxStrength,
    ],
  );
}
