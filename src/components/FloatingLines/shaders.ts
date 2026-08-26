export const vertexShader = `
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec3 iResolution;
uniform float animationSpeed;

uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;

uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;

uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;

uniform vec3 lineGradient[8];
uniform int lineGradientCount;

const int MAX_LINES_PER_WAVE = 32;
const vec3 TOP_WAVE_POSITION = vec3(10.0, 0.5, -0.4);
const vec3 MIDDLE_WAVE_POSITION = vec3(5.0, 0.0, 0.2);
const vec3 BOTTOM_WAVE_POSITION = vec3(2.0, -0.7, -1.0);
const vec3 BLACK = vec3(0.0);
const vec3 PINK = vec3(233.0, 71.0, 245.0) / 255.0;
const vec3 BLUE = vec3(47.0, 75.0, 162.0) / 255.0;

mat2 rotate(float radians) {
  return mat2(
    cos(radians),
    sin(radians),
    -sin(radians),
    cos(radians)
  );
}

vec3 backgroundColor(vec2 uv) {
  vec3 color = vec3(0.0);
  float y = sin(uv.x - 0.2) * 0.3 - 0.1;
  float distanceFromWave = uv.y - y;

  color += mix(BLUE, BLACK, smoothstep(0.0, 1.0, abs(distanceFromWave)));
  color += mix(
    PINK,
    BLACK,
    smoothstep(0.0, 1.0, abs(distanceFromWave - 0.8))
  );

  return color * 0.5;
}

vec3 getLineColor(float position, vec3 fallbackColor) {
  if (lineGradientCount <= 0) return fallbackColor;
  if (lineGradientCount == 1) return lineGradient[0] * 0.5;

  float clampedPosition = clamp(position, 0.0, 0.9999);
  float scaledPosition = clampedPosition * float(lineGradientCount - 1);
  int firstIndex = int(floor(scaledPosition));
  int secondIndex = min(firstIndex + 1, lineGradientCount - 1);

  return mix(
    lineGradient[firstIndex],
    lineGradient[secondIndex],
    fract(scaledPosition)
  ) * 0.5;
}

float wave(vec2 uv, float offset) {
  float time = iTime * animationSpeed;
  float movement = time * 0.1;
  float amplitude = sin(offset + time * 0.2) * 0.3;
  float y = sin(uv.x + offset + movement) * amplitude;
  float distanceFromWave = uv.y - y;

  return 0.0175 / max(abs(distanceFromWave) + 0.01, 0.001) + 0.01;
}

void mainImage(out vec4 fragmentColor, in vec2 fragmentCoordinate) {
  vec2 baseUv =
    (2.0 * fragmentCoordinate - iResolution.xy) / iResolution.y;
  baseUv.y *= -1.0;

  vec3 color = vec3(0.0);
  vec3 fallbackColor =
    lineGradientCount > 0 ? vec3(0.0) : backgroundColor(baseUv);

  if (enableBottom) {
    for (int i = 0; i < MAX_LINES_PER_WAVE; ++i) {
      if (i >= bottomLineCount) break;

      float lineIndex = float(i);
      float gradientPosition =
        lineIndex / max(float(bottomLineCount - 1), 1.0);
      vec3 lineColor = getLineColor(gradientPosition, fallbackColor);
      float angle =
        BOTTOM_WAVE_POSITION.z * log(length(baseUv) + 1.0);
      vec2 rotatedUv = baseUv * rotate(angle);

      color += lineColor * wave(
        rotatedUv + vec2(
          bottomLineDistance * lineIndex + BOTTOM_WAVE_POSITION.x,
          BOTTOM_WAVE_POSITION.y
        ),
        1.5 + 0.2 * lineIndex
      ) * 0.2;
    }
  }

  if (enableMiddle) {
    for (int i = 0; i < MAX_LINES_PER_WAVE; ++i) {
      if (i >= middleLineCount) break;

      float lineIndex = float(i);
      float gradientPosition =
        lineIndex / max(float(middleLineCount - 1), 1.0);
      vec3 lineColor = getLineColor(gradientPosition, fallbackColor);
      float angle =
        MIDDLE_WAVE_POSITION.z * log(length(baseUv) + 1.0);
      vec2 rotatedUv = baseUv * rotate(angle);

      color += lineColor * wave(
        rotatedUv + vec2(
          middleLineDistance * lineIndex + MIDDLE_WAVE_POSITION.x,
          MIDDLE_WAVE_POSITION.y
        ),
        2.0 + 0.15 * lineIndex
      );
    }
  }

  if (enableTop) {
    for (int i = 0; i < MAX_LINES_PER_WAVE; ++i) {
      if (i >= topLineCount) break;

      float lineIndex = float(i);
      float gradientPosition = lineIndex / max(float(topLineCount - 1), 1.0);
      vec3 lineColor = getLineColor(gradientPosition, fallbackColor);
      float angle = TOP_WAVE_POSITION.z * log(length(baseUv) + 1.0);
      vec2 rotatedUv = baseUv * rotate(angle);
      rotatedUv.x *= -1.0;

      color += lineColor * wave(
        rotatedUv + vec2(
          topLineDistance * lineIndex + TOP_WAVE_POSITION.x,
          TOP_WAVE_POSITION.y
        ),
        1.0 + 0.2 * lineIndex
      ) * 0.1;
    }
  }

  fragmentColor = vec4(color, 1.0);
}

void main() {
  vec4 color = vec4(0.0);
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}
`;
