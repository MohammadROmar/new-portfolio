export type WaveName = 'top' | 'middle' | 'bottom';

export type FloatingLinesProps = {
  linesGradient?: readonly string[];
  enabledWaves?: readonly WaveName[];
  lineCount?: number | readonly number[];
  lineDistance?: number | readonly number[];
  animationSpeed?: number;
};
