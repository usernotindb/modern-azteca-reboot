
import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const isMobile = useIsMobile();
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // Handle mouse movement to create the 3D tilting effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !cardRef.current) return;
    
    try {
      // Get card dimensions and position
      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      
      // Calculate mouse position relative to the card center
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;
      
      // Calculate rotation based on mouse position (limit max rotation to +/- 5deg)
      const rotateYValue = Math.max(-5, Math.min(5, ((e.clientX - cardCenterX) / (rect.width / 2)) * 5));
      const rotateXValue = Math.max(-5, Math.min(5, ((e.clientY - cardCenterY) / (rect.height / 2)) * 5));
      
      // Update rotation state
      setRotateX(-rotateXValue);
      setRotateY(rotateYValue);
      
      // Update mouse position state
      const newMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const newMouseY = (e.clientY / window.innerHeight) * 2 - 1;
      setMouseX(newMouseX);
      setMouseY(newMouseY);
      
      // Call the onMouseMove prop if provided
      if (onMouseMove) {
        onMouseMove(e);
      }
    } catch (error) {
      console.error("Error in handleMouseMove:", error);
      // Set default values if an error occurs
      setRotateX(0);
      setRotateY(0);
      setMouseX(0);
      setMouseY(0);
    }
  };

  // Handle mouse leave to reset the card position
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  // Reset states when component unmounts
  useEffect(() => {
    return () => {
      setRotateX(0);
      setRotateY(0);
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
      className="relative w-full aspect-square max-w-md mx-auto bg-transparent perspective"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        // Use a non-animated inline style for the container
        transform: isMobile 
          ? 'none' 
          : `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease',
        position: 'relative', 
      }}
    >
      {childrenWithProps}
    </div>
  );
};

export default CardContainer;
