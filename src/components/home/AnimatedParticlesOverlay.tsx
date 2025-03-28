
import { motion } from 'framer-motion';

const AnimatedParticlesOverlay = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff20_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 rounded-full bg-blue-400"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%", 
              opacity: 0.2 + Math.random() * 0.5 
            }}
            animate={{ 
              y: [
                Math.random() * 100 + "%", 
                Math.random() * 100 + "%", 
                Math.random() * 100 + "%"
              ],
              x: [
                Math.random() * 100 + "%", 
                Math.random() * 100 + "%", 
                Math.random() * 100 + "%"
              ],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 20 + Math.random() * 30,
              repeatType: 'reverse'
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedParticlesOverlay;
