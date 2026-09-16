import { ChevronLeft, ChevronRight } from 'lucide-react';

import { cn } from '@/lib/cn';

const ARROW_BUTTON_CLASSES = cn(
  'border-border bg-surface/80 text-foreground-soft flex size-10 shrink-0 items-center justify-center rounded-full border outline-2 outline-offset-2 outline-transparent backdrop-blur-sm transition-[color,border-color,transform,outline-color]',
  'hover:border-border-hover hover:text-foreground',
  'active:scale-95',
  'focus-visible:outline-focus',
  'aria-disabled:pointer-events-none aria-disabled:opacity-40',
);

type ArrowButtonProps = {
  canScroll: boolean;
  onScroll: () => void;
  className?: string;
};

export function GalleryPrevButton({
  canScroll,
  className,
  onScroll,
}: ArrowButtonProps) {
  return (
    <button
      aria-disabled={!canScroll}
      aria-label="Previous image"
      className={cn(ARROW_BUTTON_CLASSES, className)}
      onClick={canScroll ? onScroll : undefined}
      type="button"
    >
      <ChevronLeft aria-hidden="true" className="size-4.5" />
    </button>
  );
}

export function GalleryNextButton({
  canScroll,
  className,
  onScroll,
}: ArrowButtonProps) {
  return (
    <button
      aria-disabled={!canScroll}
      aria-label="Next image"
      className={cn(ARROW_BUTTON_CLASSES, className)}
      onClick={canScroll ? onScroll : undefined}
      type="button"
    >
      <ChevronRight aria-hidden="true" className="size-4.5" />
    </button>
  );
}

type GalleryArrowButtonsProps = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onScrollPrev: () => void;
  onScrollNext: () => void;
};

export function GalleryArrowButtons({
  canScrollNext,
  canScrollPrev,
  onScrollNext,
  onScrollPrev,
}: GalleryArrowButtonsProps) {
  return (
    <div className="flex items-center gap-2">
      <GalleryPrevButton canScroll={canScrollPrev} onScroll={onScrollPrev} />
      <GalleryNextButton canScroll={canScrollNext} onScroll={onScrollNext} />
    </div>
  );
}
