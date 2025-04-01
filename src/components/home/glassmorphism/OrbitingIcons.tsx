
import * as React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { getImage } from '@/config/images';

interface OrbitingIconsProps {
  iconIds: string[];
  isActive?: boolean;
  mouseX?: number;
  mouseY?: number;
}

const OrbitingIcons = ({ iconIds, isActive = false, mouseX = 0, mouseY = 0 }: OrbitingIconsProps) => {
  const isMobile = useIsMobile();
  // Calculate dynamic radius based on active state
  const baseRadius = isMobile ? 100 : 160;
  const radius = isActive ? baseRadius * 1.1 : baseRadius;
  
  return (
    <>
      {iconIds.map((iconId, index) => {
        const icon = getImage(iconId);
        // Calculate positions in a circle
        const angle = ((index * Math.PI * 2) / iconIds.length);
        
        // Calculate base positions
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        const delay = index * 0.2;
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              x,
              y,
              opacity: isActive ? 1 : 0.7,
              scale: isActive ? 1.1 : 0.95,
            }}
            transition={{
              opacity: { duration: 0.5, delay },
              x: { duration: 0.8, type: "spring", stiffness: 50 },
              y: { duration: 0.8, type: "spring", stiffness: 50 },
              scale: { duration: 0.4 }
            }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: "50%",
              top: "50%",
              zIndex: 10,
            }}
          >
            <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full backdrop-blur-md p-2 sm:p-3 flex items-center justify-center border shadow-md transition-all duration-300 ${isActive ? 'bg-blue-500/30 border-blue-300/40' : 'bg-white/10 border-white/20'}`}>
              <img src={icon.path} alt={icon.alt} className="w-full h-full object-contain" />
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default OrbitingIcons;
