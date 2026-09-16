import { useCallback, useRef, useSyncExternalStore } from 'react';
import type { EmblaCarouselType, EmblaEventType } from 'embla-carousel';

const SYNC_EVENTS: readonly EmblaEventType[] = ['select', 'reInit'];

export type EmblaSelectionState = {
  selectedIndex: number;
  canScrollPrev: boolean;
  canScrollNext: boolean;
};

const INITIAL_SNAPSHOT: EmblaSelectionState = {
  selectedIndex: 0,
  canScrollPrev: false,
  canScrollNext: false,
};

function readSelectionState(emblaApi: EmblaCarouselType): EmblaSelectionState {
  return {
    selectedIndex: emblaApi.selectedScrollSnap(),
    canScrollPrev: emblaApi.canScrollPrev(),
    canScrollNext: emblaApi.canScrollNext(),
  };
}

function isSameSelectionState(
  a: EmblaSelectionState,
  b: EmblaSelectionState,
): boolean {
  return (
    a.selectedIndex === b.selectedIndex &&
    a.canScrollPrev === b.canScrollPrev &&
    a.canScrollNext === b.canScrollNext
  );
}

export function useEmblaSelectionState(
  emblaApi: EmblaCarouselType | undefined,
): EmblaSelectionState {
  const snapshotRef = useRef(INITIAL_SNAPSHOT);

  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      if (!emblaApi) return () => {};

      for (const event of SYNC_EVENTS) {
        emblaApi.on(event, onStoreChange);
      }

      return () => {
        for (const event of SYNC_EVENTS) {
          emblaApi.off(event, onStoreChange);
        }
      };
    },
    [emblaApi],
  );

  const getSnapshot = useCallback((): EmblaSelectionState => {
    if (!emblaApi) return INITIAL_SNAPSHOT;

    const next = readSelectionState(emblaApi);
    if (isSameSelectionState(snapshotRef.current, next)) {
      return snapshotRef.current;
    }

    snapshotRef.current = next;
    return next;
  }, [emblaApi]);

  return useSyncExternalStore(subscribe, getSnapshot, () => INITIAL_SNAPSHOT);
}
