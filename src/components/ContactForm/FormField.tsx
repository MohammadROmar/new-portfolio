'use client';

import type { ChangeEventHandler, FocusEventHandler } from 'react';

import { cn } from '@/lib/cn';

import type { FieldName } from './validation';

const FIELD_CLASSES =
  'border-border bg-background/55 text-foreground placeholder:text-subtle-foreground w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors duration-200 focus-visible:border-primary/45 focus-visible:ring-2 focus-visible:ring-primary/30';

const LABEL_CLASSES = 'text-foreground-soft text-sm font-medium';

export type FormFieldProps = {
  id: FieldName;
  label: string;
  type?: 'text' | 'email';
  as?: 'input' | 'textarea';
  placeholder: string;
  autoComplete: string;
  error?: string;
  onBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export function FormField({
  id,
  label,
  type = 'text',
  as = 'input',
  placeholder,
  autoComplete,
  error,
  onBlur,
  onChange,
}: FormFieldProps) {
  const domId = `contact-${id}`;
  const errorId = `${domId}-error`;
  const fieldClasses = cn(
    FIELD_CLASSES,
    error && 'border-danger/50 focus-visible:ring-danger/30',
  );

  return (
    <div className="flex flex-col gap-2">
      <label className={LABEL_CLASSES} htmlFor={domId}>
        {label}
      </label>

      {as === 'textarea' ? (
        <textarea
          aria-describedby={error ? errorId : undefined}
          aria-invalid={Boolean(error)}
          autoComplete={autoComplete}
          className={cn(fieldClasses, 'min-h-36 resize-y')}
          id={domId}
          name={id}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          required
        />
      ) : (
        <input
          aria-describedby={error ? errorId : undefined}
          aria-invalid={Boolean(error)}
          autoComplete={autoComplete}
          className={fieldClasses}
          id={domId}
          name={id}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          required
          type={type}
        />
      )}

      {error ? (
        <p className="text-danger text-xs" id={errorId} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
