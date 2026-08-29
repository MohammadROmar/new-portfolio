'use client';

import Image from 'next/image';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/Tooltip';
import { getTechIcon } from '@/constants/techIcons';

const CHIP_CLASSES =
  'border-border bg-background/55 text-muted-foreground flex h-10 items-center rounded-xl border px-3 font-mono text-[11px]';

type TechStackListProps = {
  stack: readonly string[];
  label: string;
  limit?: number;
};

export function TechStackList({ stack, label, limit }: TechStackListProps) {
  const visible = limit ? stack.slice(0, limit) : stack;
  const hiddenCount = stack.length - visible.length;

  return (
    <TooltipProvider delayDuration={140} skipDelayDuration={100}>
      <ul aria-label={label} className="flex flex-wrap gap-2">
        {visible.map((technology) => {
          const icon = getTechIcon(technology);

          if (!icon) {
            return (
              <li key={technology}>
                <span className={CHIP_CLASSES}>{technology}</span>
              </li>
            );
          }

          return (
            <li key={technology}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span
                    role="img"
                    tabIndex={0}
                    aria-label={technology}
                    className="group/tool border-border bg-background/55 hover:border-primary/35 hover:bg-primary/10 focus-visible:ring-primary/30 flex h-10 w-auto items-center justify-center gap-2 rounded-xl border px-3 transition-[background-color,border-color] duration-200 outline-none focus-visible:ring-2 [@media(hover:hover)_and_(pointer:fine)]:size-10 [@media(hover:hover)_and_(pointer:fine)]:px-0"
                  >
                    <Image
                      src={icon}
                      alt=""
                      width={20}
                      height={20}
                      unoptimized
                      className="size-5 object-contain opacity-75 transition-[opacity,transform] duration-200 ease-out group-hover/tool:scale-105 group-hover/tool:opacity-100 motion-reduce:transform-none motion-reduce:transition-none"
                    />

                    <span className="text-foreground-soft font-mono text-[11px] [@media(hover:hover)_and_(pointer:fine)]:hidden">
                      {technology}
                    </span>
                  </span>
                </TooltipTrigger>

                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className="border-border bg-surface-raised text-foreground font-mono text-xs"
                >
                  {technology}
                </TooltipContent>
              </Tooltip>
            </li>
          );
        })}

        {hiddenCount > 0 ? (
          <li>
            <span className={CHIP_CLASSES}>+{hiddenCount}</span>
          </li>
        ) : null}
      </ul>
    </TooltipProvider>
  );
}
