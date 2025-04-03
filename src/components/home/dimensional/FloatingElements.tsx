
import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementsProps {
  count: number;
  activeIndex: number;
  mousePosition: { x: number; y: number };
}

const FloatingElements = ({ count, activeIndex, mousePosition }: FloatingElementsProps) => {
  // Generate an array of elements with different properties
  const elements = React.useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      // Create deterministic but varying properties based on index and active slide
      const seed = i * (activeIndex + 1);
      
      return {
        id: i,
        initialX: Math.sin(seed) * 300,
        initialY: Math.cos(seed) * 300,
        size: Math.max(3, (Math.sin(seed * 0.4) * 10) + 15),
        duration: 15 + Math.sin(seed) * 5,
        delay: i * 0.2,
        opacity: 0.1 + Math.sin(seed * 0.5) * 0.3,
        type: i % 5, // Different element types for visual variety
        hue: (activeIndex * 40 + i * 15) % 360 // Color variation
      };
    });
  }, [count, activeIndex]);
  
  // Render different element types based on the type value
  const renderElement = (element: typeof elements[0]) => {
    const { type, size, hue } = element;
    const color = `hsla(${hue}, 80%, 60%, 0.4)`;
    
    switch(type) {
      case 0: // Circle
        return (
          <div 
            className="rounded-full" 
            style={{
              width: size,
              height: size,
              backgroundColor: color,
            }}
          />
        );
      case 1: // Square
        return (
          <div 
            className="rounded-md" 
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              transform: 'rotate(45deg)'
            }}
          />
        );
      case 2: // Ring
        return (
          <div 
            className="rounded-full border-2" 
            style={{
              width: size,
              height: size,
              borderColor: color,
            }}
          />
        );
      case 3: // Triangle (CSS triangle)
        return (
          <div 
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size/2}px solid transparent`,
              borderRight: `${size/2}px solid transparent`,
              borderBottom: `${size}px solid ${color}`,
            }}
          />
        );
      case 4: // Cross
        return (
          <div className="relative" style={{ width: size, height: size }}>
            <div 
              className="absolute left-1/2 top-0 -translate-x-1/2" 
              style={{
                width: size/4,
                height: size,
                backgroundColor: color,
              }}
            />
            <div 
              className="absolute top-1/2 left-0 -translate-y-1/2" 
              style={{
                width: size,
                height: size/4,
                backgroundColor: color,
              }}
            />
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {elements.map(element => {
        // Calculate parallax effect
        const parallaxX = mousePosition.x * (0.02 + (element.id % 5) * 0.01);
        const parallaxY = mousePosition.y * (0.02 + (element.id % 5) * 0.01);
        
        return (
          <motion.div
            key={element.id}
            className="absolute opacity-30"
            style={{
              x: element.initialX + parallaxX,
              y: element.initialY + parallaxY,
              opacity: element.opacity
            }}
            initial={{ scale: 0 }}
            animate={{ 
              scale: [0, 1, 0.8, 1], 
              x: [
                element.initialX + parallaxX,
                element.initialX + 50 + parallaxX,
                element.initialX - 30 + parallaxX,
                element.initialX + parallaxX
              ],
              y: [
                element.initialY + parallaxY,
                element.initialY - 20 + parallaxY,
                element.initialY + 40 + parallaxY,
                element.initialY + parallaxY
              ]
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
          >
            {renderElement(element)}
          </motion.div>
        )
      })}
    </div>
  );
};

export default FloatingElements;
