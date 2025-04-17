
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CarouselItem } from '@/data/carouselData';
import { useIsMobile } from '@/hooks/use-mobile';
import DynamicLucideIcon from '@/components/ui/DynamicLucideIcon';

interface BiomorphicCardProps {
  item: CarouselItem;
  mousePosition: { x: number; y: number };
}

const BiomorphicCard = ({ item, mousePosition }: BiomorphicCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();
  
  // Calculate rotation and transform values based on mouse position
  const cardRotateX = mousePosition.y * 0.01;
  const cardRotateY = mousePosition.x * 0.01;
  const contentTranslateZ = Math.abs(mousePosition.x * 0.05) + 10;
  
  // Wave animation for the background
  const wavePath = (amplitude: number, frequency: number, phase: number) => {
    // Create a wavy path for the biomorphic shape
    const points = [];
    const width = 400;
    const height = 150;
    const segments = 20;
    
    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * width;
      const wavy = Math.sin((i / segments) * Math.PI * frequency + phase) * amplitude;
      const y = height/2 + wavy;
      points.push(`${x},${y}`);
    }
    
    // Connect back to create a closed shape
    for (let i = segments; i >= 0; i--) {
      const x = (i / segments) * width;
      const wavy = Math.sin((i / segments) * Math.PI * frequency + phase + Math.PI) * amplitude;
      const y = height/2 + wavy;
      points.push(`${x},${y}`);
    }
    
    return points.join(' ');
  };

  return (
    <motion.div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{
        rotateX: isMobile ? 0 : cardRotateX,
        rotateY: isMobile ? 0 : cardRotateY,
        transformStyle: 'preserve-3d',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
        background: 'rgba(20, 20, 40, 0.2)',
        backdropFilter: 'blur(10px)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        padding: '1.5rem',
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 400 400"
          preserveAspectRatio="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          className="absolute bottom-0 left-0"
        >
          <defs>
            <linearGradient id={`cardGradient-${item.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <motion.polygon 
            fill={`url(#cardGradient-${item.id})`}
            initial={{ points: wavePath(20, 2, 0) }}
            animate={{ 
              points: [
                wavePath(20, 2, 0),
                wavePath(25, 2, Math.PI),
                wavePath(30, 2, Math.PI*2),
                wavePath(20, 2, 0)
              ]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.svg>
      </div>

      {/* Card content with 3D effect */}
      <motion.div 
        className="relative z-10 flex flex-col items-center"
        style={{
          translateZ: isMobile ? 0 : contentTranslateZ
        }}
      >
        {/* Icon with glow effect */}
        <motion.div
          className="relative w-28 h-28 mb-6"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-xl" />
          <motion.div
            className="relative w-full h-full rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center p-3"
            animate={{
              boxShadow: isHovered 
                ? '0 0 30px 5px rgba(59, 130, 246, 0.5)' 
                : '0 0 20px 0px rgba(59, 130, 246, 0.3)',
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Use the first icon from iconIds */} 
            <DynamicLucideIcon 
              name={item.iconIds[0]} 
              className="w-16 h-16 text-white drop-shadow-lg" 
            />
          </motion.div>
        </motion.div>
        
        {/* Title with dynamic hover effect */}
        <motion.h3
          className="text-2xl font-bold text-white mb-4"
          animate={{
            textShadow: isHovered 
              ? '0 0 10px rgba(255, 255, 255, 0.5)' 
              : '0 0 0px rgba(255, 255, 255, 0)',
          }}
        >
          {item.title}
        </motion.h3>
        
        {/* Feature list with staggered animation */}
        <ul className="space-y-2 w-full">
          {item.keyPoints.map((point, idx) => (
            <motion.li
              key={idx}
              className="flex items-center text-blue-50/90"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: idx * 0.1,
                duration: 0.5,
              }}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mr-2" />
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      
      {/* Interactive ripple effect on hover */}
      {isHovered && (
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10"
          initial={{ width: 0, height: 0, opacity: 0.8 }}
          animate={{ width: 300, height: 300, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      )}
    </motion.div>
  );
};

export default BiomorphicCard;
