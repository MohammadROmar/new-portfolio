import { cn } from '@/lib/cn';

export function GlowLine({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'via-primary/70 pointer-events-none absolute inset-x-12 top-0 z-10 h-px bg-linear-to-r from-transparent to-transparent shadow-[0_0_18px_rgba(167,139,250,0.35)]',
        className,
      )}
    />
  );
}
