import { Mail, Phone } from 'lucide-react';

import { TelegramIcon } from '@/components/TelegramIcon';
import type { IconComponent } from '@/lib/icon';

export const CONTACT_EMAIL = 'mohammad.riyad.omar@gmail.com';
export const CONTACT_EMAIL_HREF = `mailto:${CONTACT_EMAIL}`;

export const CONTACT_PHONE_DISPLAY = '+963 935 239 163';
export const CONTACT_PHONE_HREF = 'tel:+963935239163';

export const CONTACT_TELEGRAM_USERNAME = 'MohammadROmar';
export const CONTACT_TELEGRAM_HREF = `https://t.me/${CONTACT_TELEGRAM_USERNAME}`;

export type ContactLink = {
  icon: IconComponent;
  label: string;
  heading: string;
  value: string;
  href: string;
};

export const CONTACT_LINKS: readonly ContactLink[] = [
  {
    icon: Mail,
    label: 'Email',
    heading: 'Send a message.',
    value: CONTACT_EMAIL,
    href: CONTACT_EMAIL_HREF,
  },
  {
    icon: Phone,
    label: 'Phone',
    heading: 'Call anytime.',
    value: CONTACT_PHONE_DISPLAY,
    href: CONTACT_PHONE_HREF,
  },
  {
    icon: TelegramIcon,
    label: 'Telegram',
    heading: 'Chat directly.',
    value: `@${CONTACT_TELEGRAM_USERNAME}`,
    href: CONTACT_TELEGRAM_HREF,
  },
] as const satisfies readonly ContactLink[];
