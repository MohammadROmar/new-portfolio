import { cn } from '@/lib/cn';
import type { ProjectImage } from '@/constants/projects';

const DOT_DISPLAY_LIMIT = 7;

type GalleryIndicatorProps = {
  images: readonly ProjectImage[];
  selectedIndex: number;
  onSelect: (index: number) => void;
  title: string;
};

export function GalleryIndicator({
  images,
  onSelect,
  selectedIndex,
  title,
}: GalleryIndicatorProps) {
  if (images.length > DOT_DISPLAY_LIMIT) {
    return (
      <span className="text-muted-foreground shrink-0 font-mono text-xs tracking-[0.04em] tabular-nums">
        {selectedIndex + 1} / {images.length}
      </span>
    );
  }

  return (
    <div
      aria-label={`Choose image, ${title}`}
      className="flex items-center gap-2"
      role="group"
    >
      {images.map((image, index) => {
        const selected = index === selectedIndex;

        return (
          <button
            aria-current={selected}
            aria-label={`Go to image ${index + 1}`}
            className={cn(
              'focus-visible:outline-focus size-2 rounded-full transition-colors outline-none focus-visible:outline-2 focus-visible:outline-offset-4',
              selected
                ? 'bg-primary'
                : 'bg-border-hover hover:bg-muted-foreground',
            )}
            key={image.src}
            onClick={() => onSelect(index)}
            type="button"
          />
        );
      })}
    </div>
  );
}
