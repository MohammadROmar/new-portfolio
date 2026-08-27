import type { Metadata } from 'next';
import { Montserrat, Space_Grotesk } from 'next/font/google';

import { Navbar } from '@/components/Navbar';
import { SmoothScroll } from '@/components/SmoothScroll';

import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  preload: true,
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: 'Mohammad Omar — Frontend Developer',
    template: '%s | Mohammad Omar',
  },
  description:
    'Frontend developer building polished, accessible, and performant web applications.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${montserrat.variable} bg-background scroll-smooth motion-reduce:scroll-auto`}
    >
      <body className="bg-background text-foreground selection:bg-primary/30 selection:text-foreground flex min-h-dvh flex-col font-sans antialiased">
        <Navbar />
        <SmoothScroll>
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
