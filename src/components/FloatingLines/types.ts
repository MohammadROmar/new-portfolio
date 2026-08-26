import type { CSSProperties } from 'react';

export type WaveName = 'top' | 'middle' | 'bottom';

export type WavePosition = {
  x: number;
  y: number;
  rotate: number;
};

export type FloatingLinesProps = {
  linesGradient?: readonly string[];
  enabledWaves?: readonly WaveName[];
  lineCount?: number | readonly number[];
  lineDistance?: number | readonly number[];
  topWavePosition?: WavePosition;
  middleWavePosition?: WavePosition;
  bottomWavePosition?: WavePosition;
  animationSpeed?: number;
  interactive?: boolean;
  bendRadius?: number;
  bendStrength?: number;
  mouseDamping?: number;
  parallax?: boolean;
  parallaxStrength?: number;
  mixBlendMode?: CSSProperties['mixBlendMode'];
  className?: string;
  style?: CSSProperties;
};
