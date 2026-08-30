import { BorderGlow } from '@/components/BorderGlow';
import { GlowLine } from '@/components/GlowLine';
import { CONTACT_LINKS } from '@/constants/contact';
import { SIGNATURE_CARD_GLOW_PROPS } from '@/constants/borderGlow';

export function ContactLinks() {
  return (
    <BorderGlow {...SIGNATURE_CARD_GLOW_PROPS}>
      <div className="relative isolate h-full overflow-hidden rounded-[28px] shadow-[0_24px_80px_-48px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.04)]">
        <GlowLine />

        <p className="text-muted-foreground p-6 pb-1! font-mono text-[11px] font-semibold tracking-[0.16em] uppercase sm:p-8">
          Prefer a direct message?
        </p>

        <ul className="divide-border grid divide-y">
          {CONTACT_LINKS.map((link) => {
            const isExternal = link.href.startsWith('http');

            return (
              <li className="min-w-0" key={link.label}>
                <a
                  className="group flex min-w-0 flex-col p-6 transition-colors duration-200 outline-none hover:bg-white/2.5 focus-visible:bg-white/2.5 sm:p-8"
                  href={link.href}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  target={isExternal ? '_blank' : undefined}
                >
                  <p className="text-primary-hover font-mono text-[11px] font-semibold tracking-[0.18em] uppercase">
                    {link.label}
                  </p>

                  <h3 className="text-foreground font-title mt-1 text-lg leading-tight font-semibold tracking-[-0.04em] text-balance">
                    {link.heading}
                  </h3>

                  <p className="text-foreground-soft mt-2 truncate text-sm leading-7 text-pretty sm:text-base">
                    {link.value}
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </BorderGlow>
  );
}
