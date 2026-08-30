'use client';

import { ArrowUpRight, Loader2 } from 'lucide-react';

import { CtaButton } from '@/components/Buttons';

import { FormField } from './FormField';
import { useContactForm } from './useContactForm';

export function ContactFormFields() {
  const {
    errors,
    submitState,
    isPending,
    handleFieldBlur,
    handleFieldChange,
    handleSubmit,
  } = useContactForm();

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          autoComplete="name"
          error={errors.name}
          id="name"
          label="Name"
          onBlur={handleFieldBlur}
          onChange={handleFieldChange}
          placeholder="Your name"
        />

        <FormField
          autoComplete="email"
          error={errors.email}
          id="email"
          label="Email"
          onBlur={handleFieldBlur}
          onChange={handleFieldChange}
          placeholder="you@example.com"
          type="email"
        />
      </div>

      <FormField
        as="textarea"
        autoComplete="off"
        error={errors.message}
        id="message"
        label="Message"
        onBlur={handleFieldBlur}
        onChange={handleFieldChange}
        placeholder="What are you looking to build?"
      />

      <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden">
        <label htmlFor="contact-botcheck">Leave this field empty</label>
        <input
          autoComplete="off"
          id="contact-botcheck"
          name="botcheck"
          tabIndex={-1}
          type="text"
        />
      </div>

      <div className="space-y-4">
        <div className="flex w-full items-center justify-center sm:items-start sm:justify-start">
          <CtaButton
            className="sm:w-auto"
            disabled={isPending}
            trailingIcon={
              isPending ? (
                <Loader2 className="size-4 animate-spin" strokeWidth={2} />
              ) : (
                <ArrowUpRight className="size-4" strokeWidth={2} />
              )
            }
            type="submit"
          >
            {isPending ? 'Sending…' : 'Send message'}
          </CtaButton>
        </div>

        {submitState.kind === 'success' ? (
          <p className="text-success text-sm" role="status">
            Thanks — your message is on its way. I&apos;ll get back to you soon.
          </p>
        ) : null}

        {submitState.kind === 'error' ? (
          <p className="text-danger text-sm" role="alert">
            {submitState.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
