
import React from 'react';
import { motion } from 'framer-motion';
import { CarouselItem } from '@/data/carouselData';
import CardBackground from './glassmorphism/CardBackground';
import OrbitingIcons from './glassmorphism/OrbitingIcons';

interface InteractiveCardSlideProps {
  item: CarouselItem;
  isActive: boolean;
  mouseX: number;
  mouseY: number;
  direction?: 'left' | 'right' | null;
}

const InteractiveCardSlide = ({ item, isActive, mouseX, mouseY, direction }: InteractiveCardSlideProps) => {
  // 3D Transform values based on mouse position
  const rotateX = isActive ? mouseY * -10 : 0; // Invert Y for natural tilt
  const rotateY = isActive ? mouseX * 10 : 0;
  
  // Avoid using translateZ in the transform string as it can cause issues with framer-motion
  const transformStyle = isActive 
    ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    : 'perspective(1000px)';

  return (
    <div 
      className="relative w-full h-full aspect-square transform-gpu"
      style={{
        transform: transformStyle,
        transition: 'transform 0.3s ease'
      }}
    >
      {/* Glassmorphism background with interactive tilt */}
      <CardBackground 
        mouseX={mouseX} 
        mouseY={mouseY}
        isActive={isActive}
        direction={direction} 
      />
      
      {/* Content layer */}
      <div className="absolute inset-0 p-6 flex flex-col items-center z-10">
        {/* Card title */}
        <h3 className="text-xl font-bold text-white mb-4 text-center">{item.title}</h3>
        
        {/* Main image */}
        <div className="relative w-24 h-24 mb-4">
          <motion.div
            className="w-full h-full rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center p-2"
            animate={{
              scale: isActive ? 1.1 : 0.9,
              opacity: isActive ? 1 : 0.7,
              y: isActive ? -5 : 0,
            }}
            transition={{ duration: 0.4 }}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-contain" 
            />
          </motion.div>
        </div>
        
        {/* Key points */}
        <ul className="text-white/90 text-sm space-y-2 list-disc pl-6">
          {item.keyPoints.map((point, idx) => (
            <motion.li 
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ 
                opacity: isActive ? 1 : 0.5, 
                x: isActive ? 0 : -5
              }}
              transition={{ 
                duration: 0.3,
                delay: isActive ? idx * 0.1 : 0 
              }}
            >
              {point}
            </motion.li>
          ))}
        </ul>
        
        {/* Orbiting icons */}
        <div className="absolute inset-0 -z-10">
          <OrbitingIcons 
            iconIds={item.iconIds} 
            mouseX={mouseX} 
            mouseY={mouseY}
            isActive={isActive}
          />
        </div>
      </div>
    </div>
  );
};

export default InteractiveCardSlide;
