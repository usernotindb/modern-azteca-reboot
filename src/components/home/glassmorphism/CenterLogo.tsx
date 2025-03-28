
import { motion } from 'framer-motion';

const CenterLogo = () => {
  return (
    <motion.div
      animate={{ 
        boxShadow: [
          "0 0 20px 5px rgba(59,130,246,0.3)", 
          "0 0 40px 10px rgba(59,130,246,0.5)", 
          "0 0 20px 5px rgba(59,130,246,0.3)"
        ]
      }}
      transition={{ duration: 4, repeat: Infinity }}
      className="relative w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center p-8 mb-6 z-10"
      style={{
        transform: "translateZ(30px)",
      }}
    >
      <img 
        src="/lovable-uploads/aafd8b1b-4480-41c4-9f11-0d6862cff6dd.png" 
        alt="Azteca Technology Logo" 
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
};

export default CenterLogo;
