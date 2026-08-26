import {
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Vector3,
  WebGLRenderer,
} from 'three';

import { MAX_GRADIENT_STOPS } from './constants';
import type { FloatingLinesConfig } from './runtime.types';
import { fragmentShader, vertexShader } from './shaders';

const MAX_PIXEL_RATIO = 2;
const MAX_FRAME_DELTA_SECONDS = 0.1;

type UniformValue<T> = { value: T };

type FloatingLinesUniforms = {
  iTime: UniformValue<number>;
  iResolution: UniformValue<Vector3>;
  animationSpeed: UniformValue<number>;
  enableTop: UniformValue<boolean>;
  enableMiddle: UniformValue<boolean>;
  enableBottom: UniformValue<boolean>;
  topLineCount: UniformValue<number>;
  middleLineCount: UniformValue<number>;
  bottomLineCount: UniformValue<number>;
  topLineDistance: UniformValue<number>;
  middleLineDistance: UniformValue<number>;
  bottomLineDistance: UniformValue<number>;
  lineGradient: UniformValue<Vector3[]>;
  lineGradientCount: UniformValue<number>;
};

export type FloatingLinesRuntime = {
  update: (config: FloatingLinesConfig) => void;
  destroy: () => void;
};

function colorToVector(hex: string): Vector3 {
  const normalized = hex.trim().replace(/^#/, '');
  const expanded =
    normalized.length === 3
      ? normalized
          .split('')
          .map(character => character + character)
          .join('')
      : normalized;

  if (!/^[\da-fA-F]{6}$/.test(expanded)) {
    return new Vector3(1, 1, 1);
  }

  const color = Number.parseInt(expanded, 16);
  return new Vector3(
    ((color >> 16) & 255) / 255,
    ((color >> 8) & 255) / 255,
    (color & 255) / 255,
  );
}

function createUniforms(config: FloatingLinesConfig): FloatingLinesUniforms {
  const uniforms: FloatingLinesUniforms = {
    iTime: { value: 0 },
    iResolution: { value: new Vector3(1, 1, 1) },
    animationSpeed: { value: 1 },
    enableTop: { value: false },
    enableMiddle: { value: false },
    enableBottom: { value: false },
    topLineCount: { value: 0 },
    middleLineCount: { value: 0 },
    bottomLineCount: { value: 0 },
    topLineDistance: { value: 0.01 },
    middleLineDistance: { value: 0.01 },
    bottomLineDistance: { value: 0.01 },
    lineGradient: {
      value: Array.from(
        { length: MAX_GRADIENT_STOPS },
        () => new Vector3(1, 1, 1),
      ),
    },
    lineGradientCount: { value: 0 },
  };

  updateUniforms(uniforms, config);
  return uniforms;
}

function updateUniforms(
  uniforms: FloatingLinesUniforms,
  config: FloatingLinesConfig,
): void {
  uniforms.animationSpeed.value = config.animationSpeed;
  uniforms.enableTop.value = config.enableTop;
  uniforms.enableMiddle.value = config.enableMiddle;
  uniforms.enableBottom.value = config.enableBottom;
  uniforms.topLineCount.value = config.topLineCount;
  uniforms.middleLineCount.value = config.middleLineCount;
  uniforms.bottomLineCount.value = config.bottomLineCount;
  uniforms.topLineDistance.value = config.topLineDistance;
  uniforms.middleLineDistance.value = config.middleLineDistance;
  uniforms.bottomLineDistance.value = config.bottomLineDistance;
  uniforms.lineGradientCount.value = config.gradientStops.length;

  config.gradientStops.forEach((hex, index) => {
    uniforms.lineGradient.value[index].copy(colorToVector(hex));
  });
}

export function createFloatingLinesRuntime(
  container: HTMLDivElement,
  initialConfig: FloatingLinesConfig,
): FloatingLinesRuntime {
  let active = true;
  let isIntersecting = true;
  let isDocumentVisible = !document.hidden;
  let animationFrame: number | null = null;
  let lastFrameTime: number | null = null;
  let elapsedTime = 0;

  const scene = new Scene();
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
  camera.position.z = 1;

  const renderer = new WebGLRenderer({
    alpha: false,
    antialias: false,
  });
  renderer.setPixelRatio(
    Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO),
  );
  renderer.domElement.style.display = 'block';
  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';
  container.appendChild(renderer.domElement);

  const uniforms = createUniforms(initialConfig);
  const material = new ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
  });
  const geometry = new PlaneGeometry(2, 2);
  const mesh = new Mesh(geometry, material);
  scene.add(mesh);

  const render = () => renderer.render(scene, camera);

  const resize = () => {
    if (!active) return;

    const width = Math.max(container.clientWidth, 1);
    const height = Math.max(container.clientHeight, 1);
    renderer.setSize(width, height, false);
    uniforms.iResolution.value.set(
      renderer.domElement.width,
      renderer.domElement.height,
      1,
    );
  };

  const shouldAnimate = () => active && isIntersecting && isDocumentVisible;

  const stopAnimation = () => {
    if (animationFrame !== null) {
      cancelAnimationFrame(animationFrame);
      animationFrame = null;
    }
    lastFrameTime = null;
  };

  const renderFrame = (timestamp: number) => {
    animationFrame = null;
    if (!shouldAnimate()) return;

    if (lastFrameTime !== null) {
      elapsedTime += Math.min(
        (timestamp - lastFrameTime) / 1_000,
        MAX_FRAME_DELTA_SECONDS,
      );
    }

    lastFrameTime = timestamp;
    uniforms.iTime.value = elapsedTime;
    render();
    animationFrame = requestAnimationFrame(renderFrame);
  };

  const startAnimation = () => {
    if (!shouldAnimate() || animationFrame !== null) return;
    lastFrameTime = null;
    animationFrame = requestAnimationFrame(renderFrame);
  };

  const updateAnimationState = () => {
    if (shouldAnimate()) startAnimation();
    else stopAnimation();
  };

  const handleVisibilityChange = () => {
    isDocumentVisible = !document.hidden;
    updateAnimationState();
  };

  const resizeObserver = new ResizeObserver(() => {
    if (!active) return;
    resize();
    if (!shouldAnimate()) render();
  });
  resizeObserver.observe(container);

  const intersectionObserver = new IntersectionObserver(entries => {
    if (!active) return;
    isIntersecting = entries[0]?.isIntersecting ?? true;
    updateAnimationState();
  });
  intersectionObserver.observe(container);

  document.addEventListener('visibilitychange', handleVisibilityChange);

  resize();
  render();
  startAnimation();

  return {
    update(config) {
      if (!active) return;
      updateUniforms(uniforms, config);
      if (isIntersecting && isDocumentVisible) render();
    },

    destroy() {
      if (!active) return;

      active = false;
      stopAnimation();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener(
        'visibilitychange',
        handleVisibilityChange,
      );

      scene.remove(mesh);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    },
  };
}
