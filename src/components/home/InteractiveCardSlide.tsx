
import React from 'react';
import { motion } from 'framer-motion';
import { CarouselItem } from '@/data/carouselData';

interface InteractiveCardSlideProps {
  item: CarouselItem;
  isActive: boolean;
}

const InteractiveCardSlide = ({ item, isActive }: InteractiveCardSlideProps) => {
  return (
    <motion.div 
      className="relative w-full h-full aspect-square rounded-2xl overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: isActive ? 1 : 0.7,
        scale: isActive ? 1 : 0.9,
      }}
      transition={{ duration: 0.4 }}
    >
      {/* Card background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-blue-700/70 to-blue-900/90 backdrop-blur-lg border border-blue-300/30 rounded-2xl shadow-xl" />
      
      {/* Content layer */}
      <div className="absolute inset-0 p-6 flex flex-col items-center z-10">
        {/* Card title */}
        <h3 className="text-xl font-bold text-white mb-4 text-center">{item.title}</h3>
        
        {/* Main image */}
        <div className="relative w-28 h-28 mb-6">
          <motion.div
            className="w-full h-full rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center p-3"
            animate={{
              scale: isActive ? 1.05 : 0.95,
              opacity: isActive ? 1 : 0.8,
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
        <ul className="text-white/90 text-sm space-y-2 list-disc pl-5">
          {item.keyPoints.map((point, idx) => (
            <motion.li 
              key={idx}
              initial={{ opacity: 0, x: -5 }}
              animate={{ 
                opacity: isActive ? 1 : 0.6, 
                x: 0
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
      </div>
    </motion.div>
  );
};

export default InteractiveCardSlide;
