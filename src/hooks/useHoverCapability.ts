import { useSyncExternalStore } from 'react';

const HOVER_QUERY = '(hover: hover) and (pointer: fine)';

function subscribe(onChange: () => void) {
  const mediaQueryList = window.matchMedia(HOVER_QUERY);

  mediaQueryList.addEventListener('change', onChange);

  return () => mediaQueryList.removeEventListener('change', onChange);
}

function getSnapshot() {
  return window.matchMedia(HOVER_QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

export function useHoverCapability() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
