
import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Updated gradient to match Azteca Technology logo colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-900"></div>
      
      {/* Abstract shapes */}
      <motion.div
        className="absolute top-20 right-[10%] w-64 h-64 bg-blue-300 rounded-full opacity-20 blur-3xl"
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
        className="absolute bottom-20 left-[5%] w-80 h-80 bg-yellow-400 rounded-full opacity-20 blur-3xl"
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
      
      {/* Add the Azteca Technology logo image in the background */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/881ea460-231f-4a79-9b8a-a49b932665d7.png')] bg-no-repeat bg-contain bg-center opacity-10" />
    </div>
  );
};

export default HeroBackground;
