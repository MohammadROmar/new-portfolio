import { useMemo } from 'react';

import { MAX_GRADIENT_STOPS, MAX_LINES_PER_WAVE } from './constants';
import type { FloatingLinesConfig } from './runtime.types';
import type { FloatingLinesProps, WaveName } from './types';

const DEFAULT_ENABLED_WAVES: readonly WaveName[] = [
  'top',
  'middle',
  'bottom',
];
const DEFAULT_LINE_COUNT: readonly number[] = [6];
const DEFAULT_LINE_DISTANCE: readonly number[] = [5];

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

  const waveIndex = enabledWaves.indexOf(wave);
  return finiteOr(value[waveIndex], fallback);
}

function resolveLineCount(
  value: number | readonly number[],
  enabledWaves: readonly WaveName[],
  wave: WaveName,
): number {
  return clamp(
    Math.trunc(resolveWaveValue(value, enabledWaves, wave, 6)),
    0,
    MAX_LINES_PER_WAVE,
  );
}

function resolveLineDistance(
  value: number | readonly number[],
  enabledWaves: readonly WaveName[],
  wave: WaveName,
): number {
  return resolveWaveValue(value, enabledWaves, wave, 0.1) * 0.01;
}

export function useFloatingLinesConfig({
  linesGradient,
  enabledWaves = DEFAULT_ENABLED_WAVES,
  lineCount = DEFAULT_LINE_COUNT,
  lineDistance = DEFAULT_LINE_DISTANCE,
  animationSpeed = 1,
}: FloatingLinesProps): FloatingLinesConfig {
  const enableTop = enabledWaves.includes('top');
  const enableMiddle = enabledWaves.includes('middle');
  const enableBottom = enabledWaves.includes('bottom');

  const topLineCount = enableTop
    ? resolveLineCount(lineCount, enabledWaves, 'top')
    : 0;
  const middleLineCount = enableMiddle
    ? resolveLineCount(lineCount, enabledWaves, 'middle')
    : 0;
  const bottomLineCount = enableBottom
    ? resolveLineCount(lineCount, enabledWaves, 'bottom')
    : 0;

  const topLineDistance = enableTop
    ? resolveLineDistance(lineDistance, enabledWaves, 'top')
    : 0.01;
  const middleLineDistance = enableMiddle
    ? resolveLineDistance(lineDistance, enabledWaves, 'middle')
    : 0.01;
  const bottomLineDistance = enableBottom
    ? resolveLineDistance(lineDistance, enabledWaves, 'bottom')
    : 0.01;

  const gradientKey = JSON.stringify(
    (linesGradient ?? []).slice(0, MAX_GRADIENT_STOPS),
  );
  const safeAnimationSpeed = finiteOr(animationSpeed, 1);

  return useMemo(
    () => ({
      gradientStops: JSON.parse(gradientKey) as string[],
      enableTop,
      enableMiddle,
      enableBottom,
      topLineCount,
      middleLineCount,
      bottomLineCount,
      topLineDistance,
      middleLineDistance,
      bottomLineDistance,
      animationSpeed: safeAnimationSpeed,
    }),
    [
      gradientKey,
      enableTop,
      enableMiddle,
      enableBottom,
      topLineCount,
      middleLineCount,
      bottomLineCount,
      topLineDistance,
      middleLineDistance,
      bottomLineDistance,
      safeAnimationSpeed,
    ],
  );
}
