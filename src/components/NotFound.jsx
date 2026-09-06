import { lazy, Suspense } from 'react';
import { useWantsHeavyMotion } from '../hooks/use-media-query';

const Spline = lazy(() => import('@splinetool/react-spline'));

const NotFound = () => {
  const wantsHeavyMotion = useWantsHeavyMotion();

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black bg-gradient-to-b from-red-700 to-black">
      {/* Background Spline model — skipped on mobile/touch/reduced-motion */}
      {wantsHeavyMotion && (
        <Suspense fallback={null}>
          <Spline scene="/photoreal_earth.spline" />
        </Suspense>
      )}

      {/* Overlay Box */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60 text-white px-8 py-6 rounded-lg shadow-lg text-center z-10">
        <h1 className="text-4xl font-bold mb-2">Error 404</h1>
        <p className="text-lg">Page Not Found - VP</p>
      </div>
    </div>
  );
};

export default NotFound;
