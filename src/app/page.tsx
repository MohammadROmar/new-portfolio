import FloatingLines from '@/components/FloatingLines';
import HeroContent from '@/components/HeroContent';

export default function LandingPage() {
  return (
    <div className="after:from-background relative z-0 h-svh min-h-168 w-full after:absolute after:inset-x-0 after:bottom-0 after:h-50 after:bg-linear-to-t after:to-transparent">
      <HeroContent />

      <FloatingLines
        enabledWaves={['top', 'middle', 'bottom']}
        lineCount={4}
        lineDistance={8}
        bendRadius={8}
        bendStrength={-2}
        parallax
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

      <div className="h-screen" />
    </div>
  );
}
