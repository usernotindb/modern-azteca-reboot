
import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Updated gradient to create a more modern tech look with deeper blues */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-800 via-blue-900 to-blue-950"></div>
      
      {/* Modern tech pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/lovable-uploads/afed578c-bf2b-497e-b9a9-8507af071ac4.png')] bg-cover bg-center"></div>
      
      {/* Digital circuit pattern */}
      <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-repeat-space mix-blend-overlay"></div>
      
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
        className="absolute bottom-20 left-[5%] w-80 h-80 bg-blue-300 rounded-full opacity-10 blur-3xl"
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
      
      {/* Azteca Technology logo in the background with reduced opacity */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/881ea460-231f-4a79-9b8a-a49b932665d7.png')] bg-no-repeat bg-contain bg-center opacity-5"></div>
    </div>
  );
};

export default HeroBackground;
