
import { ReactNode } from 'react';

interface CardContentProps {
  mouseX: number;
  mouseY: number;
  children: ReactNode;
}

const CardContent = ({ mouseX, mouseY, children }: CardContentProps) => {
  return (
    <div 
      className="relative h-full w-full p-8 flex flex-col items-center justify-center"
      style={{
        transform: "translateZ(20px)",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
};

export default CardContent;
