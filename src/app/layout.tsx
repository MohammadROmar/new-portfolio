import type { Metadata } from 'next';
import { Raleway, Sansation } from 'next/font/google';

import { Navbar } from '@/components/Navbar';
import { SmoothScroll } from '@/components/SmoothScroll';
import {
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from '@/constants/siteConfig';

import './globals.css';

const sansation = Sansation({
  variable: '--font-sansation',
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: true,
});

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: '%s | Mohammad Omar' },
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
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
      className={`${sansation.variable} ${raleway.variable} bg-background scroll-smooth motion-reduce:scroll-auto`}
    >
      <body className="bg-background text-foreground selection:bg-primary/30 selection:text-foreground flex min-h-dvh flex-col antialiased">
        <Navbar />
        <SmoothScroll>
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
