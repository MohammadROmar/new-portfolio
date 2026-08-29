import { Hero as HeroContent } from '@/components/Hero';
import { FloatingLines } from '@/components/FloatingLines';
import { About } from '@/components/About';
import { EngineeringApproach } from '@/components/EngineeringApproach';
import { Projects } from '@/components/Projects';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <About />
      <EngineeringApproach />
      <Projects />
    </>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="after:from-background relative z-0 h-svh min-h-168 w-full after:absolute after:inset-x-0 after:bottom-0 after:h-50 after:bg-linear-to-t after:to-transparent"
    >
      <HeroContent />

      <FloatingLines
        enabledWaves={['top', 'middle', 'bottom']}
        lineCount={4}
        lineDistance={8}
        animationSpeed={1}
        linesGradient={[
          '#201E54',
          '#2A2C76',
          '#3B1576',
          '#4E2E81',
          '#66468C',
          '#574B87',
        ]}
      />
    </section>
  );
}
