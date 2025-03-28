
import * as React from 'react';
import { motion } from 'framer-motion';

const FloatingParticles = () => {
  // Create an array of particles with different positions and animations
  const particles = Array.from({ length: 15 }).map((_, index) => ({
    id: index,
    size: Math.random() * 3 + 1,
    initialX: Math.random() * 200 - 100,
    initialY: Math.random() * 200 - 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2
  }));

  return (
    <>
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/30"
          style={{
            width: particle.size,
            height: particle.size,
          }}
          initial={{ 
            x: particle.initialX, 
            y: particle.initialY,
            opacity: 0 
          }}
          animate={{ 
            x: [particle.initialX, particle.initialX + (Math.random() * 20 - 10), particle.initialX],
            y: [particle.initialY, particle.initialY + (Math.random() * 20 - 10), particle.initialY],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      ))}
    </>
  );
};

export default FloatingParticles;
