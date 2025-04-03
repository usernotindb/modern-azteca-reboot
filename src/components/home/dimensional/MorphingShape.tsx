
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface MorphingShapeProps {
  position: { x: number; y: number; z: number };
  colors: string[];
  size: number;
  mousePosition: { x: number; y: number };
  activeIndex: number;
}

const MorphingShape = ({ position, colors, size, mousePosition, activeIndex }: MorphingShapeProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  // Generate unique blob path based on active index
  const getRandomPath = (seed: number) => {
    const complexity = 8; // Number of points in the blob
    const radius = size / 2;
    const center = size / 2;
    
    let points = [];
    for (let i = 0; i < complexity; i++) {
      // Use the seed to create deterministic but different shapes
      const angle = (i / complexity) * Math.PI * 2;
      const variance = Math.sin(seed + i * 3) * 0.2 + 0.8;
      const x = center + Math.cos(angle) * radius * variance;
      const y = center + Math.sin(angle) * radius * variance;
      points.push(x + ',' + y);
    }
    
    return points.join(' ');
  };
  
  // Paths for morphing between states
  const initialPath = getRandomPath(activeIndex);
  const targetPath = getRandomPath(activeIndex + 5);
  
  // Parallax effect calculation
  const getParallaxOffset = () => {
    const parallaxStrength = 0.05;
    return {
      x: mousePosition.x * parallaxStrength,
      y: mousePosition.y * parallaxStrength
    };
  };
  
  const parallaxOffset = getParallaxOffset();
  
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        x: position.x + parallaxOffset.x,
        y: position.y + parallaxOffset.y,
        zIndex: position.z,
        perspective: "1000px",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <svg 
        ref={svgRef} 
        width={size} 
        height={size} 
        viewBox={`0 0 ${size} ${size}`}
      >
        <defs>
          <linearGradient id={`gradient-${activeIndex}-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors[0]} stopOpacity="0.6" />
            <stop offset="100%" stopColor={colors[1]} stopOpacity="0.4" />
          </linearGradient>
          <filter id={`blur-${activeIndex}-${size}`}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
        
        {/* Background blur for glow effect */}
        <motion.polygon
          points={initialPath}
          fill={`url(#gradient-${activeIndex}-${size})`}
          filter={`url(#blur-${activeIndex}-${size})`}
          initial={{ points: initialPath }}
          animate={{ points: targetPath }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        
        {/* Main shape */}
        <motion.polygon
          points={initialPath}
          fill={`url(#gradient-${activeIndex}-${size})`}
          initial={{ points: initialPath }}
          animate={{ points: targetPath }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </svg>
    </motion.div>
  );
};

export default MorphingShape;
