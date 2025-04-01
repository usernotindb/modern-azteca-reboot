
import * as React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { getImage, ImageConfig } from '@/config/images';

interface OrbitingIconsProps {
  iconIds: string[];
  mouseX: number;
  mouseY: number;
  isActive?: boolean;
}

const OrbitingIcons = ({ iconIds, mouseX, mouseY, isActive = false }: OrbitingIconsProps) => {
  const isMobile = useIsMobile();
  // Calculate dynamic radius based on active state
  const baseRadius = isMobile ? 100 : 160;
  const radius = isActive ? baseRadius * 1.1 : baseRadius;
  
  return (
    <>
      {iconIds.map((iconId, index) => {
        const icon = getImage(iconId);
        const angleOffset = isActive ? mouseX * 0.2 : 0; // Slight angle adjustment based on mouse position
        const angle = ((index * Math.PI * 2) / iconIds.length) + angleOffset;
        
        // Calculate base positions
        const baseX = Math.cos(angle) * radius;
        const baseY = Math.sin(angle) * radius;
        
        // Add slight mouse influence for interactive effect
        const x = baseX + (isActive ? mouseX * 10 : 0);
        const y = baseY + (isActive ? mouseY * 10 : 0);
        
        const delay = index * 0.2;
        
        return (
          <motion.div
            key={index}
            initial={{ 
              opacity: 0,
            }}
            animate={{ 
              x,
              y,
              opacity: isActive ? 1 : 0.7,
              scale: isActive ? 1.1 : 0.95,
              // No z property
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
              zIndex: 10, // Static zIndex only
            }}
          >
            <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full backdrop-blur-md p-2 sm:p-3 flex items-center justify-center border shadow-lg transition-all duration-300 ${isActive ? 'bg-blue-500/30 border-blue-300/40 shadow-blue-500/20' : 'bg-white/10 border-white/20'}`}>
              <img src={icon.path} alt={icon.alt} className="w-full h-full object-contain" />
            </div>
            <div className={`absolute top-full mt-1 md:mt-2 left-1/2 transform -translate-x-1/2 text-white text-xs sm:text-sm font-medium whitespace-nowrap transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
              {icon.alt}
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default OrbitingIcons;
