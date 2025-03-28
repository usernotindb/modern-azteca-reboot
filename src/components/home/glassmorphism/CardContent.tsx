
import * as React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface CardContentProps {
  mouseX: number;
  mouseY: number;
  children: React.ReactNode;
}

const CardContent = ({ mouseX, mouseY, children }: CardContentProps) => {
  const isMobile = useIsMobile();
  
  // Simplified approach to avoid Framer Motion conflicts
  return (
    <div 
      className="relative h-full w-full p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center"
      style={{
        // Use simple inline styles without 3D transforms that could conflict with Framer Motion
        transform: 'none',
        // Remove transform-style as it can conflict with nested Framer Motion elements
      }}
    >
      {children}
    </div>
  );
};

export default CardContent;
