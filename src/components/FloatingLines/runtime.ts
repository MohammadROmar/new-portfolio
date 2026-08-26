import {
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three';

import { MAX_GRADIENT_STOPS } from './constants';
import type { FloatingLinesConfig } from './runtime.types';
import { fragmentShader, vertexShader } from './shaders';

const INITIAL_MOUSE_POSITION = -1_000;
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
  topWavePosition: UniformValue<Vector3>;
  middleWavePosition: UniformValue<Vector3>;
  bottomWavePosition: UniformValue<Vector3>;
  iMouse: UniformValue<Vector2>;
  interactive: UniformValue<boolean>;
  bendRadius: UniformValue<number>;
  bendStrength: UniformValue<number>;
  bendInfluence: UniformValue<number>;
  parallax: UniformValue<boolean>;
  parallaxOffset: UniformValue<Vector2>;
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
    topWavePosition: { value: new Vector3() },
    middleWavePosition: { value: new Vector3() },
    bottomWavePosition: { value: new Vector3() },
    iMouse: {
      value: new Vector2(INITIAL_MOUSE_POSITION, INITIAL_MOUSE_POSITION),
    },
    interactive: { value: false },
    bendRadius: { value: 5 },
    bendStrength: { value: -0.5 },
    bendInfluence: { value: 0 },
    parallax: { value: false },
    parallaxOffset: { value: new Vector2() },
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
  uniforms.topWavePosition.value.set(...config.topWavePosition);
  uniforms.middleWavePosition.value.set(...config.middleWavePosition);
  uniforms.bottomWavePosition.value.set(...config.bottomWavePosition);
  uniforms.interactive.value = config.interactive;
  uniforms.bendRadius.value = config.bendRadius;
  uniforms.bendStrength.value = config.bendStrength;
  uniforms.parallax.value = config.parallax;
  uniforms.lineGradientCount.value = config.gradientStops.length;

  config.gradientStops.forEach((hex, index) => {
    uniforms.lineGradient.value[index].copy(colorToVector(hex));
  });
}

export function createFloatingLinesRuntime(
  container: HTMLDivElement,
  initialConfig: FloatingLinesConfig,
): FloatingLinesRuntime {
  let config = initialConfig;
  let active = true;
  let isIntersecting = true;
  let isDocumentVisible = !document.hidden;
  let animationFrame: number | null = null;
  let lastFrameTime: number | null = null;
  let elapsedTime = 0;

  const targetMouse = new Vector2(
    INITIAL_MOUSE_POSITION,
    INITIAL_MOUSE_POSITION,
  );
  const currentMouse = targetMouse.clone();
  let targetInfluence = 0;
  let currentInfluence = 0;
  const targetParallax = new Vector2();
  const currentParallax = new Vector2();

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

  const uniforms = createUniforms(config);
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

  const shouldRenderContinuously = () =>
    active && isIntersecting && isDocumentVisible;

  const stopAnimation = () => {
    if (animationFrame !== null) {
      cancelAnimationFrame(animationFrame);
      animationFrame = null;
    }
    lastFrameTime = null;
  };

  const renderFrame = (timestamp: number) => {
    animationFrame = null;
    if (!shouldRenderContinuously()) return;

    if (lastFrameTime !== null) {
      const delta = Math.min(
        (timestamp - lastFrameTime) / 1_000,
        MAX_FRAME_DELTA_SECONDS,
      );
      elapsedTime += delta;
    }
    lastFrameTime = timestamp;
    uniforms.iTime.value = elapsedTime;

    if (config.interactive) {
      currentMouse.lerp(targetMouse, config.mouseDamping);
      uniforms.iMouse.value.copy(currentMouse);

      currentInfluence +=
        (targetInfluence - currentInfluence) * config.mouseDamping;
      uniforms.bendInfluence.value = currentInfluence;
    }

    if (config.parallax) {
      currentParallax.lerp(targetParallax, config.mouseDamping);
      uniforms.parallaxOffset.value.copy(currentParallax);
    }

    render();
    animationFrame = requestAnimationFrame(renderFrame);
  };

  const startAnimation = () => {
    if (!shouldRenderContinuously() || animationFrame !== null) return;
    lastFrameTime = null;
    animationFrame = requestAnimationFrame(renderFrame);
  };

  const updateAnimationState = () => {
    if (shouldRenderContinuously()) {
      startAnimation();
    } else {
      stopAnimation();
    }
  };

  const handlePointerMove = (event: PointerEvent) => {
    if (!config.interactive && !config.parallax) return;

    const rect = renderer.domElement.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (config.interactive) {
      const pixelRatio = renderer.getPixelRatio();
      targetMouse.set(x * pixelRatio, (rect.height - y) * pixelRatio);
      targetInfluence = 1;
    }

    if (config.parallax) {
      const normalizedX = (x - rect.width / 2) / rect.width;
      const normalizedY = -(y - rect.height / 2) / rect.height;
      targetParallax.set(
        normalizedX * config.parallaxStrength,
        normalizedY * config.parallaxStrength,
      );
    }
  };

  const handlePointerLeave = () => {
    targetInfluence = 0;
    targetParallax.set(0, 0);
  };

  const handleVisibilityChange = () => {
    isDocumentVisible = !document.hidden;
    updateAnimationState();
  };

  const resizeObserver = new ResizeObserver(() => {
    if (!active) return;
    resize();
    if (!shouldRenderContinuously()) render();
  });
  resizeObserver.observe(container);

  const intersectionObserver = new IntersectionObserver(entries => {
    if (!active) return;
    isIntersecting = entries[0]?.isIntersecting ?? true;
    updateAnimationState();
  });
  intersectionObserver.observe(container);

  renderer.domElement.addEventListener('pointermove', handlePointerMove, {
    passive: true,
  });
  renderer.domElement.addEventListener('pointerleave', handlePointerLeave, {
    passive: true,
  });
  document.addEventListener('visibilitychange', handleVisibilityChange);

  resize();
  render();
  startAnimation();

  return {
    update(nextConfig) {
      if (!active) return;
      config = nextConfig;
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
      renderer.domElement.removeEventListener(
        'pointermove',
        handlePointerMove,
      );
      renderer.domElement.removeEventListener(
        'pointerleave',
        handlePointerLeave,
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
