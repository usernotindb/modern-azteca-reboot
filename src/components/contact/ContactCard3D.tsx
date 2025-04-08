
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ContactCard3DProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href: string;
}

const ContactCard3D = ({ icon, title, content, href }: ContactCard3DProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.a 
      href={href}
      target={href.startsWith('http') ? "_blank" : undefined}
      rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
      className="relative block p-6 h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div 
        className="relative h-full w-full rounded-xl overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
        }}
      >
        {/* Card background with glassmorphism */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-accent-600/10 opacity-70 rounded-xl" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center p-6">
          <div className="mb-4 p-4 bg-white/20 backdrop-blur-sm rounded-full text-accent-600 transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-aztec-900">{title}</h3>
          <p className="text-aztec-700 transition-colors duration-300 group-hover:text-accent-600">{content}</p>
        </div>
      </motion.div>
    </motion.a>
  );
};

export default ContactCard3D;
