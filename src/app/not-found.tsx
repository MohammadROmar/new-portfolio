import type { Metadata } from 'next';

import { NotFoundContent } from '@/components/NotFoundContent';

const PAGE_DESCRIPTION =
  "The page you're looking for doesn't exist or has moved.";

export const metadata: Metadata = {
  title: 'Page not found',
  description: PAGE_DESCRIPTION,
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-heading"
      className="relative flex min-h-svh w-full items-center justify-center overflow-hidden px-5 pt-24 pb-16 sm:pt-28 md:px-6 lg:px-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_50%_38%,rgba(167,139,250,0.14)_0%,rgba(9,7,13,0.5)_55%,transparent_80%)]"
      />

      <NotFoundContent />
    </section>
  );
}
