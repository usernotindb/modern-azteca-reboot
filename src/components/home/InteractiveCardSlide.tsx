
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
}

const InteractiveCardSlide = ({ item, isActive, mouseX, mouseY }: InteractiveCardSlideProps) => {
  return (
    <div className="relative w-full h-full aspect-square">
      {/* Glassmorphism background with interactive tilt */}
      <CardBackground mouseX={mouseX} mouseY={mouseY} />
      
      {/* Content layer */}
      <div className="absolute inset-0 p-6 flex flex-col items-center">
        {/* Card title */}
        <h3 className="text-xl font-bold text-white mb-4 text-center">{item.title}</h3>
        
        {/* Main image */}
        <div className="relative w-24 h-24 mb-4">
          <motion.div
            className="w-full h-full rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center p-2"
            animate={{
              scale: isActive ? 1 : 0.9,
              opacity: isActive ? 1 : 0.7,
            }}
            transition={{ duration: 0.3 }}
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
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            >
              {point}
            </motion.li>
          ))}
        </ul>
        
        {/* Orbiting icons */}
        <div className="absolute inset-0 -z-10">
          <OrbitingIcons iconIds={item.iconIds} mouseX={mouseX} mouseY={mouseY} />
        </div>
      </div>
    </div>
  );
};

export default InteractiveCardSlide;
