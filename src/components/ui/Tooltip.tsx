'use client';

import type { ComponentProps } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '@/lib/cn';

type TooltipProviderProps = ComponentProps<typeof TooltipPrimitive.Provider>;

function TooltipProvider({
  delayDuration = 140,
  skipDelayDuration = 100,
  disableHoverableContent = true,
  ...props
}: TooltipProviderProps) {
  return (
    <TooltipPrimitive.Provider
      delayDuration={delayDuration}
      disableHoverableContent={disableHoverableContent}
      skipDelayDuration={skipDelayDuration}
      {...props}
    />
  );
}

const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

type TooltipContentProps = ComponentProps<typeof TooltipPrimitive.Content>;

function TooltipContent({
  children,
  className,
  collisionPadding = 8,
  sideOffset = 8,
  ...props
}: TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        className={cn(
          'border-primary/20 bg-surface-raised text-foreground z-1600',
          'max-w-64 rounded-lg border px-2.5 py-1.5 select-none',
          'text-xs leading-none shadow-[0_8px_28px_rgba(0,0,0,0.38)]',
          'origin-(--radix-tooltip-content-transform-origin) will-change-[transform,opacity]',
          'animate-in fade-in-0 zoom-in-95 duration-150',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          'data-[side=bottom]:slide-in-from-top-1',
          'data-[side=left]:slide-in-from-right-1',
          'data-[side=right]:slide-in-from-left-1',
          'data-[side=top]:slide-in-from-bottom-1',
          'motion-reduce:animate-none',
          className,
        )}
        collisionPadding={collisionPadding}
        sideOffset={sideOffset}
        {...props}
      >
        {children}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
