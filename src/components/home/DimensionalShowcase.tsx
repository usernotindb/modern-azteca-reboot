
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { carouselItems } from '@/data/carouselData';
import MorphingShape from './dimensional/MorphingShape';
import FloatingElements from './dimensional/FloatingElements';
import BiomorphicCard from './dimensional/BiomorphicCard';
import GenerativeBackground from './dimensional/GenerativeBackground';

const DimensionalShowcase = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track mouse position for parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setMousePosition({ x, y });
  };
  
  // Auto-rotate through items
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 6000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-square max-w-lg mx-auto"
      onMouseMove={handleMouseMove}
      style={{ perspective: '1000px' }}
    >
      {/* Background elements */}
      <GenerativeBackground activeIndex={activeIndex} />
      
      {/* Morphing shapes positioned in 3D space */}
      <MorphingShape 
        position={{ x: -40, y: -40, z: 1 }} 
        colors={['#8B5CF6', '#D946EF']} 
        size={100} 
        mousePosition={mousePosition}
        activeIndex={activeIndex}
      />
      <MorphingShape 
        position={{ x: 40, y: 60, z: 2 }} 
        colors={['#0EA5E9', '#1EAEDB']} 
        size={120} 
        mousePosition={mousePosition}
        activeIndex={activeIndex}
      />
      <MorphingShape 
        position={{ x: 90, y: -50, z: 0 }} 
        colors={['#F97316', '#FEC6A1']} 
        size={80} 
        mousePosition={mousePosition}
        activeIndex={activeIndex}
      />
      
      {/* Floating elements */}
      <FloatingElements activeIndex={activeIndex} mousePosition={mousePosition} />
      
      {/* Central interactive card */}
      <div className="absolute inset-0 flex items-center justify-center">
        <BiomorphicCard 
          item={carouselItems[activeIndex]} 
          mousePosition={mousePosition} 
        />
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-20">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === index 
                ? 'bg-white scale-150' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DimensionalShowcase;
