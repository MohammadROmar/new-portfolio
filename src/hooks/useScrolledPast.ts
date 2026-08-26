import { useEffect, useState } from 'react';

export function useScrolledPast(threshold: number) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      const next = window.scrollY > threshold;
      setScrolled((current) => (current === next ? current : next));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [threshold]);

  return scrolled;
}
