import type { FieldName } from './validation';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export const FALLBACK_ERROR_MESSAGE =
  'Something went wrong sending that. Please try again, or email me directly using the link beside this form.';

const MISSING_ACCESS_KEY_MESSAGE =
  "The contact form isn't set up yet — please email me directly instead.";

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

export type ContactFormValues = Record<FieldName, string>;

export type SubmitContactFormResult =
  { ok: true } | { ok: false; message: string };

export async function submitContactForm(
  values: ContactFormValues,
  signal: AbortSignal,
): Promise<SubmitContactFormResult> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return { ok: false, message: MISSING_ACCESS_KEY_MESSAGE };
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: 'New message from the portfolio contact form',
      from_name: 'Portfolio contact form',
      botcheck: '',
      ...values,
    }),
    signal,
  });

  const result: Web3FormsResponse | null = await response
    .json()
    .catch(() => null);

  if (response.ok && result?.success) {
    return { ok: true };
  }

  return { ok: false, message: result?.message ?? FALLBACK_ERROR_MESSAGE };
}
