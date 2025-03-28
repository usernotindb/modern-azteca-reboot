
import * as React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface CardBackgroundProps {
  mouseX: number;
  mouseY: number;
}

const CardBackground = ({ mouseX, mouseY }: CardBackgroundProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div 
      className="absolute inset-0 rounded-2xl overflow-hidden bg-blue-600/20 backdrop-blur-[12px] border border-blue-300/30 shadow-xl"
    >
      {/* Depth effects and highlights - simplified without transforms */}
      <div 
        className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-400/60 via-transparent to-blue-900/60"
      />
      
      {/* Simplified background effect */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-blue-400/30 to-transparent opacity-70"
      />
      
      {/* Glossy highlight - static for better performance */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-40"
      />
    </div>
  );
};

export default CardBackground;
