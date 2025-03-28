
import * as React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface IconConfig {
  src: string;
  label: string;
}

interface OrbitingIconsProps {
  icons: IconConfig[];
  mouseX: number;
  mouseY: number;
}

const OrbitingIcons = ({ icons, mouseX, mouseY }: OrbitingIconsProps) => {
  const isMobile = useIsMobile();
  // Calculate smaller radius for mobile
  const radius = isMobile ? 100 : 160; 
  
  return (
    <>
      {icons.map((icon, index) => {
        const angle = (index * Math.PI * 2) / icons.length;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const delay = index * 0.2;
        
        return (
          <motion.div
            key={index}
            initial={{ 
              x,
              y,
              opacity: 0,
            }}
            animate={{ 
              x,
              y,
              opacity: 1,
            }}
            transition={{
              opacity: { duration: 0.5, delay },
            }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{
              zIndex: 10,
            }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md p-2 sm:p-3 flex items-center justify-center border border-white/20 shadow-lg">
              <img src={icon.src} alt={icon.label} className="w-full h-full object-contain" />
            </div>
            <div className="absolute top-full mt-1 md:mt-2 left-1/2 transform -translate-x-1/2 text-white text-xs sm:text-sm font-medium whitespace-nowrap">
              {icon.label}
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default OrbitingIcons;
