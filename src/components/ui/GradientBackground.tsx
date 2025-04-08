
import React from 'react';
import { motion } from 'framer-motion';

interface GradientBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const GradientBackground = ({ children, className = '' }: GradientBackgroundProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Gradient blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div 
          className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-400/30 rounded-full blur-[100px]"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-accent-400/20 rounded-full blur-[100px]"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-purple-400/20 rounded-full blur-[100px]"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
      {children}
    </div>
  );
};

export default GradientBackground;
