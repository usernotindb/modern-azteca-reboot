
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroContent from './HeroContent';
import DimensionalShowcase from './DimensionalShowcase';
import VideoBackground from './VideoBackground';
import AnimatedParticlesOverlay from './AnimatedParticlesOverlay';
import ScrollDownIndicator from './ScrollDownIndicator';
import HeroBackground from './HeroBackground';
import { Button } from '@/components/ui/button';
import { ImageIcon } from 'lucide-react';

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
    <section className="relative overflow-hidden min-h-[100vh] flex items-center">
      {/* Background elements */}
      <VideoBackground />
      <HeroBackground />
      <AnimatedParticlesOverlay />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Text content */}
          <div>
            <HeroContent controls={controls} reference={ref} />
          </div>
          
          {/* Right column: Interactive Dimensional Showcase (replaces the card carousel) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <DimensionalShowcase />
          </motion.div>
        </div>
      </div>
      
      {/* Admin image generator button - floating in corner */}
      <div className="absolute bottom-20 right-8 z-50">
        <Button 
          variant="secondary" 
          size="sm" 
          className="rounded-full shadow-lg p-3 bg-blue-600 text-white hover:bg-blue-700"
          asChild
        >
          <Link to="/admin/image-generator" title="AI Image Generator">
            <ImageIcon className="h-5 w-5" />
            <span className="sr-only">AI Image Generator</span>
          </Link>
        </Button>
      </div>
      
      {/* Down arrow animated */}
      <ScrollDownIndicator />
    </section>
  );
};

export default Hero;
