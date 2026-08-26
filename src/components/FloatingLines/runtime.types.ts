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
  animationSpeed: number;
};
