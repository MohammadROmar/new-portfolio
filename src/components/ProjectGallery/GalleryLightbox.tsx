'use client';

import type { KeyboardEvent } from 'react';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

import { cn } from '@/lib/cn';
import type { ProjectImage } from '@/constants/projects';

import { GalleryNextButton, GalleryPrevButton } from './GalleryArrowButtons';
import { useEmblaSelectionState } from './useEmblaSyncedValue';

type GalleryLightboxProps = {
  images: readonly ProjectImage[];
  initialIndex: number;
  title: string;
  onClose: (lastViewedIndex: number) => void;
};

export function GalleryLightbox({
  images,
  initialIndex,
  onClose,
  title,
}: GalleryLightboxProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    startIndex: initialIndex,
    watchDrag: images.length > 1,
  });
  const { canScrollNext, canScrollPrev, selectedIndex } =
    useEmblaSelectionState(emblaApi);

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  function handleOpenChange(open: boolean) {
    if (!open) onClose(selectedIndex);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowLeft') scrollPrev();
    else if (event.key === 'ArrowRight') scrollNext();
  }

  const currentImage = images[selectedIndex];

  return (
    <Dialog.Root onOpenChange={handleOpenChange} open>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            'fixed inset-0 z-1800 bg-black/85 backdrop-blur-sm',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0 motion-reduce:animate-none',
          )}
        />

        <Dialog.Content
          className={cn(
            'fixed inset-0 z-1800 flex flex-col items-center justify-center gap-4 p-4 outline-none sm:p-10',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 motion-reduce:animate-none',
          )}
          onKeyDown={handleKeyDown}
        >
          <Dialog.Title className="sr-only">
            {title} — image {selectedIndex + 1} of {images.length}
          </Dialog.Title>

          <Dialog.Description className="sr-only">
            Use the arrow keys or swipe to browse the other images in this
            gallery. Press Escape to close.
          </Dialog.Description>

          <Dialog.Close
            aria-label="Close image viewer"
            className={cn(
              'border-border bg-surface/80 text-foreground-soft absolute top-4 right-4 flex size-10 items-center justify-center rounded-full border outline-2 outline-offset-2 outline-transparent backdrop-blur-sm transition-colors sm:top-6 sm:right-6',
              'hover:border-border-hover hover:text-foreground',
              'focus-visible:outline-focus',
            )}
          >
            <X aria-hidden="true" className="size-5" />
          </Dialog.Close>

          <div className="w-full max-w-6xl overflow-hidden" ref={emblaRef}>
            <div className="touch-[pan-y_pinch-zoom] flex">
              {images.map((image, index) => (
                <div
                  className="relative h-[70vh] w-full min-w-0 shrink-0 sm:h-[80vh]"
                  key={image.src}
                >
                  <Image
                    alt={image.alt}
                    aria-hidden={index === selectedIndex ? undefined : true}
                    className="object-contain"
                    fill
                    sizes="100vw"
                    src={image.src}
                  />
                </div>
              ))}
            </div>
          </div>

          {images.length > 1 ? (
            <>
              <div className="pointer-events-none absolute inset-x-2 top-1/2 flex -translate-y-1/2 justify-between sm:inset-x-6">
                <GalleryPrevButton
                  canScroll={canScrollPrev}
                  className="pointer-events-auto"
                  onScroll={scrollPrev}
                />
                <GalleryNextButton
                  canScroll={canScrollNext}
                  className="pointer-events-auto"
                  onScroll={scrollNext}
                />
              </div>

              <span className="text-foreground-soft font-mono text-xs tracking-[0.04em] tabular-nums">
                {selectedIndex + 1} / {images.length}
              </span>
            </>
          ) : null}

          {currentImage.alt ? (
            <p className="sr-only" role="status">
              {currentImage.alt}
            </p>
          ) : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
