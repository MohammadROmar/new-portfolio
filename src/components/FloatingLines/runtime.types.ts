type VectorTuple = readonly [x: number, y: number, z: number];

export type FloatingLinesConfig = {
  gradientStops: readonly string[];
  enableTop: boolean;
  enableMiddle: boolean;
  enableBottom: boolean;
  topLineCount: number;
  middleLineCount: number;
  bottomLineCount: number;
  topLineDistance: number;
  middleLineDistance: number;
  bottomLineDistance: number;
  topWavePosition: VectorTuple;
  middleWavePosition: VectorTuple;
  bottomWavePosition: VectorTuple;
  animationSpeed: number;
  interactive: boolean;
  bendRadius: number;
  bendStrength: number;
  mouseDamping: number;
  parallax: boolean;
  parallaxStrength: number;
};
