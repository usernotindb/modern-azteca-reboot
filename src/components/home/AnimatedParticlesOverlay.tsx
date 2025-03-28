
import { motion } from 'framer-motion';

const AnimatedParticlesOverlay = () => {
  // Create an array of particles for the animation
  const particles = Array.from({ length: 20 }).map((_, index) => ({
    id: index,
    initialX: `${Math.random() * 100}%`,
    initialY: `${Math.random() * 100}%`,
    size: Math.random() * 0.5 + 0.5,
    opacity: 0.2 + Math.random() * 0.5,
    duration: 20 + Math.random() * 30
  }));

  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff20_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full bg-blue-400"
            initial={{ 
              x: particle.initialX, 
              y: particle.initialY, 
              opacity: particle.opacity,
              scale: particle.size
            }}
            animate={{ 
              y: [
                `${Math.random() * 100}%`, 
                `${Math.random() * 100}%`, 
                `${Math.random() * 100}%`
              ],
              x: [
                `${Math.random() * 100}%`, 
                `${Math.random() * 100}%`, 
                `${Math.random() * 100}%`
              ],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: particle.duration,
              repeatType: 'reverse'
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedParticlesOverlay;
