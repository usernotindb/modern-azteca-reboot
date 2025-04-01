
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CarouselItem } from '@/data/carouselData';

interface InteractiveCardSlideProps {
  item: CarouselItem;
  isActive: boolean;
}

const InteractiveCardSlide = ({ item, isActive }: InteractiveCardSlideProps) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Reset rotation when slide becomes inactive
  useEffect(() => {
    if (!isActive) {
      setRotateX(0);
      setRotateY(0);
    }
  }, [isActive]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive) return;
    
    // Get the position of the mouse relative to the card
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element
    
    // Calculate rotation based on mouse position
    // Mouse at center = no rotation, edges = more rotation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Limit rotation range to ±10 degrees
    const maxRotation = 10;
    const rotateYValue = ((x - centerX) / centerX) * maxRotation;
    const rotateXValue = ((centerY - y) / centerY) * maxRotation;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    // Smoothly reset rotation when mouse leaves
    setRotateX(0);
    setRotateY(0);
    setIsHovering(false);
  };
  
  return (
    <motion.div 
      className="relative w-full h-full aspect-square rounded-2xl overflow-hidden cursor-pointer preserve-3d"
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: isActive ? 1 : 0.5,
        scale: isActive ? 1 : 0.85,
        rotateX: rotateX,
        rotateY: rotateY,
        x: isActive ? 0 : 0
      }}
      transition={{ 
        duration: isHovering ? 0.1 : 0.4, 
        ease: "easeOut" 
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card background with 3D effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-blue-700/70 to-blue-900/90 backdrop-blur-lg border border-blue-300/30 rounded-2xl shadow-xl"
        animate={{
          rotateX: rotateX * 0.65,
          rotateY: rotateY * 0.65,
        }}
        transition={{ 
          duration: isHovering ? 0.1 : 0.4, 
          ease: "easeOut" 
        }}
      />
      
      {/* Content layer with slight offset for depth */}
      <motion.div 
        className="absolute inset-0 p-6 flex flex-col items-center z-10"
        animate={{
          rotateX: rotateX * 0.5,
          rotateY: rotateY * 0.5,
          z: 20,
        }}
        transition={{ 
          duration: isHovering ? 0.1 : 0.4, 
          ease: "easeOut" 
        }}
      >
        {/* Card title */}
        <h3 className="text-xl font-bold text-white mb-4 text-center">{item.title}</h3>
        
        {/* Main image with hover effect */}
        <div className="relative w-28 h-28 mb-6">
          <motion.div
            className="w-full h-full rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center p-3"
            animate={{
              scale: isActive ? (isHovering ? 1.1 : 1.05) : 0.95,
              opacity: isActive ? 1 : 0.8,
              rotateX: rotateX * -0.3, // Counter rotation for floating effect
              rotateY: rotateY * -0.3,
              z: 30,
            }}
            transition={{ 
              duration: isHovering ? 0.1 : 0.4, 
              ease: "easeOut" 
            }}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-contain" 
            />
          </motion.div>
        </div>
        
        {/* Key points with staggered animation */}
        <ul className="text-white/90 text-sm space-y-2 list-disc pl-5">
          {item.keyPoints.map((point, idx) => (
            <motion.li 
              key={idx}
              initial={{ opacity: 0, x: -5 }}
              animate={{ 
                opacity: isActive ? 1 : 0.7, 
                x: 0,
                z: 10 + idx * 5, // Stagger depth for 3D effect
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
      </motion.div>
      
      {/* Shine effect on hover */}
      {isActive && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isHovering ? 0.6 : 0,
            background: `linear-gradient(${125 + rotateY * 5}deg, transparent, rgba(255, 255, 255, 0.2), transparent)`
          }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.div>
  );
};

export default InteractiveCardSlide;
