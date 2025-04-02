
import * as React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface CardBackgroundProps {
  mouseX: number;
  mouseY: number;
  isActive?: boolean;
  direction?: 'left' | 'right' | null;
}

const CardBackground = ({ mouseX, mouseY, isActive, direction }: CardBackgroundProps) => {
  const isMobile = useIsMobile();
  
  // Calculate dynamic gradient position based on mouse
  const gradientX = 50 + (mouseX * 15);
  const gradientY = 50 + (mouseY * 15);
  
  // Calculate shine position based on mouse
  const shineX = 50 + (mouseX * 25);
  const shineY = 50 + (mouseY * 25);
  
  // Determine direction-based styling
  const directionOffset = direction === 'left' ? -5 : direction === 'right' ? 5 : 0;
  
  // Define boxShadow values for better 3D effect
  const activeBoxShadow = '0 20px 25px -5px rgba(0,0,0,0.2), 0 10px 10px -5px rgba(0,0,0,0.1), 0 0 15px 2px rgba(59,130,246,0.3)';
  const inactiveBoxShadow = '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)';
  const hoverBoxShadow = '0 25px 30px -5px rgba(0,0,0,0.3), 0 15px 15px -5px rgba(0,0,0,0.15), 0 0 20px 4px rgba(59,130,246,0.4)';
  
  // Calculate rotation values safely
  const rotateX = isMobile ? 0 : mouseY * 10; 
  const rotateY = isMobile ? 0 : -mouseX * 10;
  
  return (
    <motion.div 
      className="absolute inset-0 rounded-2xl overflow-hidden bg-blue-600/20 backdrop-blur-[12px] border border-blue-300/30"
      style={{
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX,
        rotateY,
        boxShadow: isActive 
          ? (Math.abs(mouseX) > 0.1 || Math.abs(mouseY) > 0.1 ? hoverBoxShadow : activeBoxShadow) 
          : inactiveBoxShadow
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Depth effects and highlights - dynamic with mouse */}
      <div 
        className="absolute inset-0 opacity-30 bg-gradient-to-br from-blue-400/60 via-transparent to-blue-900/60"
        style={{
          backgroundPosition: `${gradientX}% ${gradientY}%`,
          transition: 'background-position 0.2s ease-out',
        }}
      />
      
      {/* Dynamic radial gradient effect */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{
          background: `radial-gradient(circle at ${50 + directionOffset}% ${50 + (mouseY * 10)}%, rgba(59, 130, 246, 0.4), transparent)`,
          backgroundSize: isActive ? '150% 150%' : '120% 120%',
          transition: 'all 0.3s ease-out',
        }}
      />
      
      {/* Glossy highlight - dynamic with mouse */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-transparent via-white/15 to-transparent opacity-60"
        style={{
          backgroundPosition: `${shineX}% ${shineY}%`,
          backgroundSize: '200% 200%',
          transition: 'background-position 0.2s ease-out',
        }}
        animate={{
          opacity: isActive ? 0.8 : 0.4,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Direction-based highlight */}
      {direction && (
        <motion.div 
          className="absolute inset-0 opacity-0"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: direction === 'left' ? 0.3 : direction === 'right' ? 0.3 : 0
          }}
          transition={{ duration: 0.3 }}
          style={{
            background: direction === 'left' 
              ? 'linear-gradient(to right, rgba(59, 130, 246, 0.3), transparent)'
              : 'linear-gradient(to left, rgba(59, 130, 246, 0.3), transparent)',
          }}
        />
      )}
    </motion.div>
  );
};

export default CardBackground;
