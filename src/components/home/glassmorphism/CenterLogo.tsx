
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const CenterLogo = () => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div
      animate={{ 
        boxShadow: [
          "0 0 20px 5px rgba(59,130,246,0.3)", 
          "0 0 30px 8px rgba(59,130,246,0.4)", 
          "0 0 20px 5px rgba(59,130,246,0.3)"
        ]
      }}
      // Slow down the animation for better performance
      transition={{ duration: 6, repeat: Infinity }}
      className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 z-10"
      style={{
        transform: isMobile ? "none" : "translateZ(30px)",
      }}
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
