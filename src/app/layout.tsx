import type { Metadata } from 'next';
import { Montserrat, Space_Grotesk } from 'next/font/google';

import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';

import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
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
      className={`${spaceGrotesk.variable} ${montserrat.variable} scroll-smooth bg-background motion-reduce:scroll-auto`}
    >
      <body className="flex min-h-dvh flex-col bg-background font-sans text-foreground antialiased selection:bg-primary/30 selection:text-foreground">
        <Navbar />
        <SmoothScroll>
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
