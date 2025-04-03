
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { carouselItems } from '@/data/carouselData';
import { useIsMobile } from '@/hooks/use-mobile';
import GenerativeBackground from './dimensional/GenerativeBackground';
import MorphingShape from './dimensional/MorphingShape';
import FloatingElements from './dimensional/FloatingElements';
import BiomorphicCard from './dimensional/BiomorphicCard';

const DimensionalShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const controls = useAnimation();
  
  // Motion values for fluid interactions
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  // Rotate based on mouse position
  const rotateX = useTransform(smoothMouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-10, 10]);

  // Auto rotation for card changing
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % carouselItems.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isHovering]);

  // Handle mouse movement for interactive effects
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    mouseX.set(x);
    mouseY.set(y);
    setMousePosition({ x, y });
  };

  // Show next showcase item
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % carouselItems.length);
  };
  
  // Show previous showcase item
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div 
      ref={containerRef} 
      className="relative w-full max-w-2xl mx-auto h-[500px] perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Generative background that reacts to movement */}
      <GenerativeBackground 
        mouseX={smoothMouseX} 
        mouseY={smoothMouseY}
        activeIndex={activeIndex}
      />
      
      {/* Main content container with 3D effect */}
      <motion.div 
        className="relative w-full h-full"
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Floating morphing shapes */}
        <MorphingShape
          position={{ x: -100, y: -80, z: -50 }}
          colors={['#8B5CF6', '#7C3AED']}
          size={120}
          mousePosition={mousePosition}
          activeIndex={activeIndex}
        />
        
        <MorphingShape
          position={{ x: 120, y: 100, z: -30 }}
          colors={['#60A5FA', '#3B82F6']}
          size={80}
          mousePosition={mousePosition}
          activeIndex={activeIndex}
        />
        
        {/* Floating particles and elements */}
        <FloatingElements 
          count={30} 
          activeIndex={activeIndex}
          mousePosition={mousePosition}
        />
        
        {/* Main showcase content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              transition={{ 
                type: 'spring', 
                stiffness: 100, 
                damping: 20 
              }}
              className="w-full max-w-md"
            >
              <BiomorphicCard 
                item={carouselItems[activeIndex]} 
                mouseX={smoothMouseX}
                mouseY={smoothMouseY}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
      
      {/* Navigation controls */}
      <div className="absolute bottom-[-40px] left-0 right-0 flex justify-center items-center gap-4">
        <button 
          onClick={handlePrev}
          className="w-10 h-10 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-300/20 flex items-center justify-center hover:bg-blue-500/30 transition-all"
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="flex gap-2">
          {carouselItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === activeIndex 
                ? 'bg-blue-500 scale-125' 
                : 'bg-blue-300/30'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-300/20 flex items-center justify-center hover:bg-blue-500/30 transition-all"
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 5L12.5 10L7.5 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DimensionalShowcase;
