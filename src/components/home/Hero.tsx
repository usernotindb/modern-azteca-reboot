
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-media-query';
import HeroContent from './HeroContent';
import DimensionalShowcase from './DimensionalShowcase';
import VideoBackground from './VideoBackground';
import AnimatedParticlesOverlay from './AnimatedParticlesOverlay';
import ScrollDownIndicator from './ScrollDownIndicator';
import HeroBackground from './HeroBackground';

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  return (
    <section className="relative overflow-hidden min-h-[100vh] flex items-center">
      {/* Background elements */}
      <VideoBackground />
      <HeroBackground />
      <AnimatedParticlesOverlay />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-12 md:py-20 relative bg-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column: Text content */}
          <div>
            <HeroContent controls={controls} reference={ref} />
          </div>
          
          {/* Right column: Interactive Dimensional Showcase (only on desktop) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={isMobile ? "mt-8" : "relative hidden lg:block"}
          >
            <DimensionalShowcase />
          </motion.div>
        </div>
      </div>
      
      {/* Down arrow animated (not on mobile) */}
      <div className="hidden md:block">
        <ScrollDownIndicator />
      </div>
    </section>
  );
};

export default Hero;
