
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
  
  // Calculate transform based on mouse position
  const transformValue = isMobile 
    ? undefined 
    : `perspective(1000px) rotateX(${mouseY * 10}deg) rotateY(${-mouseX * 10}deg) translateZ(20px)`;
  
  return (
    <motion.div 
      className="relative h-full w-full p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center"
      style={{
        transformStyle: 'preserve-3d',
        transform: transformValue,
        transition: 'transform 0.1s ease-out'
      }}
    >
      {children}
    </motion.div>
  );
};

export default CardContent;
