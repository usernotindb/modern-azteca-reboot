
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
  
  // Calculate rotation values safely
  const rotateX = isMobile ? 0 : mouseY * 10;
  const rotateY = isMobile ? 0 : -mouseX * 10;
  
  return (
    <motion.div 
      className="relative h-full w-full p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center"
      style={{
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ duration: 0.1, ease: "easeOut" }}
    >
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default CardContent;
