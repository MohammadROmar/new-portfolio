import { BorderGlow } from '@/components/BorderGlow';
import { GlowLine } from '@/components/GlowLine';
import { SIGNATURE_CARD_GLOW_PROPS } from '@/constants/borderGlow';

import { ContactFormFields } from './ContactFormFields';

export function ContactForm() {
  return (
    <BorderGlow {...SIGNATURE_CARD_GLOW_PROPS} className="h-full w-full">
      <div className="relative isolate h-full overflow-hidden rounded-[28px] p-6 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-8">
        <GlowLine />

        <p className="text-muted-foreground pb-6 font-mono text-[11px] font-semibold tracking-[0.16em] uppercase sm:pb-10">
          Send me a message
        </p>

        <ContactFormFields />
      </div>
    </BorderGlow>
  );
}
