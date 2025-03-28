
import * as React from 'react';
import { motion } from 'framer-motion';

const CenterLogo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-white/10 backdrop-blur-xl p-5 sm:p-7 flex items-center justify-center border border-white/30 shadow-lg"
    >
      <img 
        src="/lovable-uploads/aafd8b1b-4480-41c4-9f11-0d6862cff6dd.png" 
        alt="Azteca Technology Logo" 
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
};

export default CenterLogo;
