
import * as React from 'react';
import { motion } from 'framer-motion';
import { LOGO_IMAGES } from '@/config/images';

const CenterLogo = () => {
  const logo = LOGO_IMAGES.mainLogo;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-white/10 backdrop-blur-xl p-5 sm:p-7 flex items-center justify-center border border-white/30 shadow-lg"
    >
      <img 
        src={logo.path} 
        alt={logo.alt} 
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
};

export default CenterLogo;
