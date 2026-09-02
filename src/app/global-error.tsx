'use client';

import './globals.css';

type GlobalErrorProps = { error: Error; reset: () => void };

export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground flex min-h-dvh flex-col items-center justify-center px-5 py-16 antialiased">
        <div className="mx-auto flex w-full max-w-md flex-col items-center text-center">
          <h1 className="text-[clamp(1.75rem,4vw,2.25rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-balance">
            Something went wrong.
          </h1>

          <p className="text-foreground-soft mt-4 text-base leading-7 text-pretty">
            The application hit an unexpected error. Refreshing usually fixes it
            — if it keeps happening, please check back shortly.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              className="bg-foreground text-background focus-visible:outline-focus min-h-11 cursor-pointer rounded-full px-6 text-sm font-semibold outline-none focus-visible:outline-2 focus-visible:outline-offset-4"
              onClick={reset}
              type="button"
            >
              Try again
            </button>

            {/* A plain anchor (not next/link) is intentional here: it forces
            a full reload back to "/", giving the app a clean slate instead
            of a client-side transition that reuses whatever just crashed. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              className="border-border text-foreground hover:bg-surface-raised focus-visible:outline-focus flex min-h-11 items-center rounded-full border px-6 text-sm font-semibold transition-colors outline-none focus-visible:outline-2 focus-visible:outline-offset-4"
              href="/"
            >
              Return home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
