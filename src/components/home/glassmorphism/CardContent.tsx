
import { ReactNode } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface CardContentProps {
  mouseX: number;
  mouseY: number;
  children: ReactNode;
}

const CardContent = ({ mouseX, mouseY, children }: CardContentProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div 
      className="relative h-full w-full p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center"
      style={{
        transform: isMobile ? "none" : "translateZ(20px)",
        transformStyle: isMobile ? "flat" : "preserve-3d",
      }}
    >
      {children}
    </div>
  );
};

export default CardContent;
