import { motion } from 'framer-motion';
import { lazy, Suspense, useState, useEffect } from 'react';

// Lazy load Spline
const Spline = lazy(() => import('@splinetool/react-spline'));

const Hero = () => {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);

  useEffect(() => {
    // Delay loading Spline until after main content is visible
    const timer = setTimeout(() => setShouldLoadSpline(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="Hero"
      className="relative h-screen w-full bg-black bg-gradient-to-b from-red-700 to-black overflow-hidden"
    >
      {/* Spline background */}
      {shouldLoadSpline && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isSplineLoaded ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <Suspense fallback={null}>
            <Spline 
              scene="/destiny.spline" 
              onLoad={() => setIsSplineLoaded(true)}
            />
          </Suspense>
        </motion.div>
      )}

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 20,
            duration: 0.5
          }}
          className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-primary-foreground"
        >
          <span className="block">
            Varun <span className="text-primary">Parekh</span>
          </span>
          <span className="block mt-2">
            Beyond <span className="text-primary">Innovation</span>
          </span>
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
