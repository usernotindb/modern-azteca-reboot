
import * as React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface CardContentProps {
  mouseX: number;
  mouseY: number;
  children: React.ReactNode;
}

const CardContent = ({ mouseX, mouseY, children }: CardContentProps) => {
  const isMobile = useIsMobile();
  
  // Don't use transformZ for 3D effect to avoid Framer Motion conflicts
  return (
    <div 
      className="relative h-full w-full p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center"
      style={{
        // Simplified transform style to avoid conflicting with Framer Motion
        transform: isMobile ? 'none' : 'translate3d(0, 0, 20px)',
        transformStyle: isMobile ? undefined : 'preserve-3d',
      }}
    >
      {children}
    </div>
  );
};

export default CardContent;
