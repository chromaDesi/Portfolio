import { useEffect, useState } from 'react';

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

// Heavy WebGL (Spline) scenes are skipped on small screens, touch-primary
// devices, and when the user asks for reduced motion — these are the
// visitors most likely to be on a slow connection or weak GPU, and the
// Spline runtime alone is ~1.3MB gzipped.
export function useWantsHeavyMotion() {
  const isWideEnough = useMediaQuery('(min-width: 768px)');
  const canHover = useMediaQuery('(hover: hover) and (pointer: fine)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  return isWideEnough && canHover && !prefersReducedMotion;
}
