
import { useEffect, useRef } from 'react';
import { useInView, useAnimation } from 'framer-motion';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import ServiceIconGrid from './ServiceIconGrid';

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background elements */}
      <HeroBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column: Text content */}
          <HeroContent controls={controls} reference={ref} />
          
          {/* Right column: IT Services Icons */}
          <ServiceIconGrid />
        </div>
      </div>
    </section>
  );
};

export default Hero;
