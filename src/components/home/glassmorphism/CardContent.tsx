
import * as React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface CardContentProps {
  mouseX: number;
  mouseY: number;
  children: React.ReactNode;
}

const CardContent = ({ mouseX, mouseY, children }: CardContentProps) => {
  const isMobile = useIsMobile();
  
  // Calculate rotation values safely - using smaller multiplier for gentler effect
  const rotateX = isMobile ? 0 : mouseY * 5;
  const rotateY = isMobile ? 0 : -mouseX * 5;
  
  return (
    <motion.div 
      className="relative h-full w-full p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center"
      style={{
        // Using perspective on container level only
        transformStyle: 'preserve-3d',
      }}
      animate={{
        // Only animate rotation, not compound transforms
        rotateX,
        rotateY,
      }}
      transition={{ 
        duration: 0.2, 
        ease: "easeOut" 
      }}
    >
      {/* Use z-index instead of translateZ for layering */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default CardContent;
