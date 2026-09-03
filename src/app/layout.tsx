import type { Metadata } from 'next';
import { Raleway, Sansation } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

import { Navbar } from '@/components/Navbar';
import { SmoothScroll } from '@/components/SmoothScroll';
import {
  DEFAULT_OG_IMAGE,
  PERSON_JSON_LD,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  WEBSITE_JSON_LD,
} from '@/constants/siteConfig';

import './globals.css';

const sansation = Sansation({
  variable: '--font-sansation',
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: true,
  adjustFontFallback: false,
  fallback: ['Arial', 'sans-serif'],
});

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | Mohammad Omar',
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sansation.variable} ${raleway.variable} bg-background scroll-smooth motion-reduce:scroll-auto`}
    >
      <body className="bg-background text-foreground selection:bg-primary/30 selection:text-foreground flex min-h-dvh flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSON_LD) }}
        />

        <Navbar />
        <SmoothScroll>
          <main>{children}</main>
        </SmoothScroll>

        <Analytics />
      </body>
    </html>
  );
}
