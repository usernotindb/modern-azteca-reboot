
import * as React from 'react';
import { ReactNode } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface CardContentProps {
  mouseX: number;
  mouseY: number;
  children: ReactNode;
}

const CardContent = ({ mouseX, mouseY, children }: CardContentProps) => {
  const isMobile = useIsMobile();
  
  // Simplify the transform style to avoid Framer Motion conflicts
  const transformStyle = isMobile ? undefined : "preserve-3d";
  
  return (
    <div 
      className="relative h-full w-full p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center"
      style={{
        transform: isMobile ? undefined : `translateZ(20px)`,
        transformStyle,
      }}
    >
      {children}
    </div>
  );
};

export default CardContent;
