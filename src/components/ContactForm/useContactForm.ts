'use client';

import type { ChangeEvent, FocusEvent, FormEvent } from 'react';
import { useEffect, useRef, useState, useTransition } from 'react';

import {
  FIELD_NAMES,
  isFieldName,
  validateField,
  validateFields,
  type FieldErrors,
} from './validation';
import { FALLBACK_ERROR_MESSAGE, submitContactForm } from './web3forms';

export type SubmitState =
  { kind: 'idle' } | { kind: 'success' } | { kind: 'error'; message: string };

export function useContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>({
    kind: 'idle',
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isPending, startTransition] = useTransition();
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  function handleFieldBlur(
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.currentTarget;
    if (!isFieldName(name)) return;

    setErrors((previous) => ({
      ...previous,
      [name]: validateField(name, value),
    }));
  }

  function handleFieldChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.currentTarget;
    if (!isFieldName(name)) return;

    setErrors((previous) => {
      if (!previous[name]) return previous;
      return { ...previous, [name]: validateField(name, value) };
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isPending) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const honeypot = formData.get('botcheck');
    if (typeof honeypot === 'string' && honeypot.length > 0) {
      return;
    }

    const values = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      message: String(formData.get('message') ?? ''),
    };

    const nextErrors = validateFields(values);
    const firstInvalidField = FIELD_NAMES.find((field) => nextErrors[field]);

    if (firstInvalidField) {
      setErrors(nextErrors);
      const fieldToFocus = form.elements.namedItem(
        `contact-${firstInvalidField}`,
      );
      if (fieldToFocus instanceof HTMLElement) {
        fieldToFocus.focus();
      }
      return;
    }

    setErrors({});

    abortControllerRef.current?.abort();
    const controller = new AbortController();
    abortControllerRef.current = controller;

    startTransition(async () => {
      try {
        const result = await submitContactForm(values, controller.signal);

        if (result.ok) {
          setSubmitState({ kind: 'success' });
          form.reset();
          return;
        }

        setSubmitState({ kind: 'error', message: result.message });
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }

        setSubmitState({ kind: 'error', message: FALLBACK_ERROR_MESSAGE });
      }
    });
  }

  return {
    errors,
    submitState,
    isPending,
    handleFieldBlur,
    handleFieldChange,
    handleSubmit,
  };
}
