'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Maximize2 } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

import type { ProjectImage } from '@/constants/projects';

import { GalleryIndicator } from './GalleryIndicator';
import { GalleryArrowButtons } from './GalleryArrowButtons';
import { useEmblaSelectionState } from './useEmblaSyncedValue';

const GalleryLightbox = dynamic(() =>
  import('./GalleryLightbox').then((mod) => mod.GalleryLightbox),
);

type ProjectGalleryProps = {
  images: readonly ProjectImage[];
  title: string;
  priority?: boolean;
};

export function ProjectGallery({
  images,
  priority = false,
  title,
}: ProjectGalleryProps) {
  const hasMultipleImages = images.length > 1;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    watchDrag: hasMultipleImages,
  });
  const { canScrollNext, canScrollPrev, selectedIndex } =
    useEmblaSelectionState(emblaApi);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  function scrollTo(index: number) {
    emblaApi?.scrollTo(index);
  }

  function closeLightbox(lastViewedIndex: number) {
    setLightboxIndex(null);
    emblaApi?.scrollTo(lastViewedIndex);
  }

  if (images.length === 0) {
    return null;
  }

  return (
    <div
      aria-label={`${title} gallery`}
      aria-roledescription="carousel"
      role="region"
    >
      <div className="-mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="touch-[pan-y_pinch-zoom] -ml-4 flex">
            {images.map((image, index) => {
              const isSelected = index === selectedIndex;
              const imageLabel = image.alt
                ? `View image full size: ${image.alt}`
                : 'View image full size';

              return (
                <div
                  aria-label={`${index + 1} of ${images.length}`}
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 basis-[min(80vw,32rem)] pl-4"
                  key={image.src}
                  role="group"
                >
                  <button
                    aria-hidden={isSelected ? undefined : true}
                    aria-label={imageLabel}
                    className="border-border focus-visible:outline-focus group relative block aspect-video w-full overflow-hidden rounded-[28px] border outline-none focus-visible:outline-2 focus-visible:outline-offset-4"
                    onClick={() => setLightboxIndex(index)}
                    tabIndex={isSelected ? 0 : -1}
                    type="button"
                  >
                    <Image
                      alt={image.alt}
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      fill
                      priority={priority && index === 0}
                      sizes="(min-width: 640px) 32rem, 80vw"
                      src={image.src}
                    />

                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-[background-color,opacity] duration-200 group-hover:bg-black/25 group-hover:opacity-100">
                      <Maximize2
                        aria-hidden="true"
                        className="size-5 text-white"
                      />
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {hasMultipleImages ? (
        <div className="mt-4 flex items-center justify-between gap-4">
          <GalleryIndicator
            images={images}
            onSelect={scrollTo}
            selectedIndex={selectedIndex}
            title={title}
          />

          <GalleryArrowButtons
            canScrollNext={canScrollNext}
            canScrollPrev={canScrollPrev}
            onScrollNext={scrollNext}
            onScrollPrev={scrollPrev}
          />
        </div>
      ) : null}

      {lightboxIndex !== null ? (
        <GalleryLightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={closeLightbox}
          title={title}
        />
      ) : null}
    </div>
  );
}
