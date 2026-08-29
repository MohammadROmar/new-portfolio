import type { StaticImageData } from 'next/image';

import axiosIcon from '@/assets/icons/axios.svg';
import dotnetIcon from '@/assets/icons/dotnet.svg';
import featureSlicedDesignIcon from '@/assets/icons/feature-sliced-design.svg';
import firebaseIcon from '@/assets/icons/firebase.svg';
import gitIcon from '@/assets/icons/git.svg';
import githubIcon from '@/assets/icons/github.svg';
import gsapIcon from '@/assets/icons/gsap.svg';
import i18nextIcon from '@/assets/icons/i18next.svg';
import laravelIcon from '@/assets/icons/laravel.svg';
import lucideIcon from '@/assets/icons/lucide.svg';
import motionIcon from '@/assets/icons/motion.svg';
import nextjsIcon from '@/assets/icons/nextjs.svg';
import prismaIcon from '@/assets/icons/prisma.svg';
import pwaIcon from '@/assets/icons/pwa.svg';
import radixUiIcon from '@/assets/icons/radix-ui.svg';
import reactHookFormIcon from '@/assets/icons/react-hook-form.svg';
import reactIcon from '@/assets/icons/react.svg';
import reactRouterIcon from '@/assets/icons/react-router.svg';
import reduxToolkitIcon from '@/assets/icons/redux-toolkit.svg';
import shadcnIcon from '@/assets/icons/shadcn-ui.svg';
import stripeIcon from '@/assets/icons/stripe.svg';
import tailwindCssIcon from '@/assets/icons/tailwind-css.svg';
import tanstackQueryIcon from '@/assets/icons/tanstack-query.svg';
import threejsIcon from '@/assets/icons/threejs.svg';
import typescriptIcon from '@/assets/icons/typescript.svg';
import viteIcon from '@/assets/icons/vite.svg';
import postmanIcon from '@/assets/icons/postman.svg';
import swaggerIcon from '@/assets/icons/swagger.svg';
import reactLeafletIcon from '@/assets/icons/react-leaflet.svg';

export const TECH_ICONS: Readonly<Record<string, StaticImageData>> = {
  'React.js': reactIcon,
  TypeScript: typescriptIcon,
  'Next.js': nextjsIcon,
  Vite: viteIcon,
  'React Router': reactRouterIcon,
  'TanStack Query': tanstackQueryIcon,
  'Redux Toolkit': reduxToolkitIcon,
  Axios: axiosIcon,
  'React Hook Form': reactHookFormIcon,
  'Tailwind CSS': tailwindCssIcon,
  'shadcn/ui': shadcnIcon,
  Motion: motionIcon,
  i18next: i18nextIcon,
  Git: gitIcon,
  GitHub: githubIcon,
  'Feature-Sliced Design': featureSlicedDesignIcon,
  Laravel: laravelIcon,
  'ASP.NET': dotnetIcon,
  Firebase: firebaseIcon,
  Stripe: stripeIcon,
  Prisma: prismaIcon,
  'Radix UI': radixUiIcon,
  'PWA / Service Workers': pwaIcon,
  GSAP: gsapIcon,
  'React Three Fiber': threejsIcon,
  'Three.js': threejsIcon,
  Lucide: lucideIcon,
  Postman: postmanIcon,
  Swagger: swaggerIcon,
  'React Leaflet': reactLeafletIcon,
} satisfies Record<string, StaticImageData>;

export function getTechIcon(label: string): StaticImageData | undefined {
  return TECH_ICONS[label];
}
