
import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface CardContainerProps {
  children: React.ReactNode;
  onMouseMove?: (e: React.MouseEvent) => void;
}

// Define the type of the props that will be passed to children
interface ChildProps {
  mouseX: number;
  mouseY: number;
}

const CardContainer = ({ children, onMouseMove }: CardContainerProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const isMobile = useIsMobile();

  // Handle mouse movement to calculate position only, not for transforms
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !cardRef.current) return;
    
    try {
      // Get card dimensions and position
      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      
      // Only calculate mouse position relative to the window for children
      const newMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const newMouseY = (e.clientY / window.innerHeight) * 2 - 1;
      
      // Strictly limit the range of values to prevent animation errors
      setMouseX(Math.max(-0.3, Math.min(0.3, newMouseX)));
      setMouseY(Math.max(-0.3, Math.min(0.3, newMouseY)));
      
      // Call the onMouseMove prop if provided
      if (onMouseMove) {
        onMouseMove(e);
      }
    } catch (error) {
      console.error("Error in handleMouseMove:", error);
      setMouseX(0);
      setMouseY(0);
    }
  };

  // Handle mouse leave to reset the position
  const handleMouseLeave = () => {
    setMouseX(0);
    setMouseY(0);
  };

  // Reset states when component unmounts
  useEffect(() => {
    return () => {
      setMouseX(0);
      setMouseY(0);
    };
  }, []);

  // Clone children and inject the mouseX and mouseY props
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      // Use type assertion to safely pass props
      return React.cloneElement(child, { 
        mouseX, 
        mouseY 
      } as ChildProps);
    }
    return child;
  });

  return (
    <div
      ref={cardRef}
      className="relative w-full aspect-square max-w-md mx-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        // Set perspective on container only, not its children
        perspective: '1200px',
      }}
    >
      {childrenWithProps}
    </div>
  );
};

export default CardContainer;
