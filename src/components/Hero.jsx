import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section
      id="Hero"
      className="relative h-screen w-full bg-black bg-gradient-to-b from-red-700 to-black overflow-hidden"
    >
      {/* Spline background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute inset-0 z-0"
      >
        <Spline scene="/destiny.spline" />
      </motion.div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 20,
            delay: 1.5,
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
