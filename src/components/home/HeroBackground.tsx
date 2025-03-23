
import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Updated gradient to match the logo colors - blue gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-900"></div>
      
      {/* Digital circuit pattern with reduced opacity */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-repeat-space mix-blend-overlay"></div>
      
      {/* Abstract shapes with improved animations */}
      <motion.div
        className="absolute top-20 right-[10%] w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-[5%] w-80 h-80 bg-yellow-300 rounded-full opacity-10 blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500 rounded-full opacity-5 blur-3xl"
        animate={{
          x: [0, 20, 0],
          scale: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      
      {/* Data streams animation effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-blue-950/50"></div>
      
      {/* Prominently display the new Azteca Technology logo */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/aafd8b1b-4480-41c4-9f11-0d6862cff6dd.png')] bg-no-repeat bg-contain bg-center opacity-20"></div>
    </div>
  );
};

export default HeroBackground;
