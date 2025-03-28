
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import HeroContent from './HeroContent';
import GlassmorphismCard from './GlassmorphismCard';
import VideoBackground from './VideoBackground';
import AnimatedParticlesOverlay from './AnimatedParticlesOverlay';
import ScrollDownIndicator from './ScrollDownIndicator';

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
      {/* Video Background */}
      <VideoBackground />

      {/* Animated particles overlay */}
      <AnimatedParticlesOverlay />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Text content */}
          <div>
            <HeroContent controls={controls} reference={ref} />
          </div>
          
          {/* Right column: 3D Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <GlassmorphismCard />
          </motion.div>
        </div>
      </div>
      
      {/* Down arrow animated */}
      <ScrollDownIndicator />
    </section>
  );
};

export default Hero;
