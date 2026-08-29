import type { IconComponent } from '@/lib/icon';
import { cn } from '@/lib/cn';

export type CredentialProps = {
  icon: IconComponent;
  label: string;
  title: string;
  description: string;
  meta?: string;
  className?: string;
};

export function Credential({
  icon: Icon,
  label,
  title,
  description,
  meta,
  className,
}: CredentialProps) {
  return (
    <div
      className={cn('border-border flex gap-4 border-b p-5 sm:p-6', className)}
    >
      <span
        aria-hidden="true"
        className="border-primary/20 bg-primary/10 text-primary mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border"
      >
        <Icon className="size-4.5" strokeWidth={1.8} />
      </span>

      <div className="min-w-0">
        <p className="text-primary-hover font-mono text-[11px] font-semibold tracking-[0.16em] uppercase">
          {label}
        </p>

        <h3 className="text-foreground mt-2 text-base leading-6 font-semibold">
          {title}
        </h3>

        <p className="text-foreground-soft mt-1 text-sm leading-6">
          {description}
        </p>

        {meta ? (
          <p className="text-muted-foreground mt-3 text-sm leading-6">{meta}</p>
        ) : null}
      </div>
    </div>
  );
}
