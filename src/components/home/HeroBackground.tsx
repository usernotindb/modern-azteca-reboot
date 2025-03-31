
import React from 'react';
import { motion } from 'framer-motion';
import { LOGO_IMAGES } from '@/config/images';

const HeroBackground = () => {
  const logo = LOGO_IMAGES.mainLogo;
  
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient background with Azteca brand color */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600 via-blue-700 to-blue-900"></div>
      
      {/* Digital circuit pattern overlay */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px] mix-blend-overlay"></div>
      
      {/* Subtle grid lines */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Abstract shapes with animations */}
      <motion.div
        className="absolute top-20 right-[10%] w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-3xl"
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
      
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl"
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
      
      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-blue-950/50"></div>
      
      {/* Display the Azteca Technology logo */}
      <div className={`absolute inset-0 bg-[url('${logo.path}')] bg-no-repeat bg-contain bg-center opacity-10`}></div>
    </div>
  );
};

export default HeroBackground;
