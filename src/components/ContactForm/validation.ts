export const FIELD_NAMES = ['name', 'email', 'message'] as const;
export type FieldName = (typeof FIELD_NAMES)[number];
export type FieldErrors = Partial<Record<FieldName, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 10;

export function isFieldName(name: string): name is FieldName {
  return (FIELD_NAMES as readonly string[]).includes(name);
}

export function validateField(
  name: FieldName,
  rawValue: string,
): string | undefined {
  const value = rawValue.trim();

  if (name === 'name') {
    return value.length > 0 ? undefined : 'Please enter your name.';
  }

  if (name === 'email') {
    if (value.length === 0) return 'Please enter your email.';
    return EMAIL_PATTERN.test(value)
      ? undefined
      : 'Please enter a valid email address.';
  }

  if (value.length === 0) return 'Please enter a message.';
  return value.length >= MIN_MESSAGE_LENGTH
    ? undefined
    : `Message should be at least ${MIN_MESSAGE_LENGTH} characters.`;
}

export function validateFields(values: Record<FieldName, string>): FieldErrors {
  const errors: FieldErrors = {};

  for (const field of FIELD_NAMES) {
    const error = validateField(field, values[field]);
    if (error) errors[field] = error;
  }

  return errors;
}
