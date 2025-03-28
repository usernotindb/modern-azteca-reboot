
import { motion } from 'framer-motion';

const FloatingParticles = () => {
  return (
    <>
      {Array.from({ length: 12 }).map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute w-1 h-1 rounded-full bg-white/40"
          initial={{
            x: (Math.random() - 0.5) * 300, 
            y: (Math.random() - 0.5) * 300,
            opacity: Math.random() * 0.5 + 0.2,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: (Math.random() - 0.5) * 300,
            y: (Math.random() - 0.5) * 300,
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
            z: Math.random() * 50 - 25,
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        />
      ))}
    </>
  );
};

export default FloatingParticles;
