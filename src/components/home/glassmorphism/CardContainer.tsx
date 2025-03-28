
import { useRef, useState, ReactNode, isValidElement, cloneElement } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface CardContainerProps {
  children: ReactNode;
}

const CardContainer = ({ children }: CardContainerProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const isMobile = useIsMobile();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isMobile) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the center of the card
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Get mouse distance from center
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Set maximum rotation (degrees) - reduced for better performance
    const maxRotation = 8;
    
    // Calculate rotation based on mouse position
    // Normalize the rotation to our max range based on card dimensions
    const rotateY = (mouseX / (rect.width / 2)) * maxRotation;
    const rotateX = -(mouseY / (rect.height / 2)) * maxRotation;
    
    setRotateX(rotateX);
    setRotateY(rotateY);
    setMouseX(mouseX);
    setMouseY(mouseY);
  };

  const handleMouseLeave = () => {
    // Smoothly reset to default position
    setRotateX(0);
    setRotateY(0);
  };

  // Clone children and inject the mouseX and mouseY props
  const childrenWithProps = children as ReactNode[];
  const clonedChildren = childrenWithProps.map((child, index) => {
    if (isValidElement(child)) {
      return cloneElement(child, { mouseX, mouseY, key: index } as any);
    }
    return child;
  });

  return (
    <div 
      className="relative w-full h-[400px] md:h-[400px] flex items-center justify-center"
      style={{ perspective: isMobile ? "none" : "1200px" }}
    >
      {/* Main card container */}
      <motion.div
        ref={cardRef}
        className="w-full h-full rounded-2xl overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
        }}
        // Increase stiffness and damping for smoother, less calculation-intensive animations
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        style={{
          transformStyle: isMobile ? "flat" : "preserve-3d",
        }}
      >
        {clonedChildren}
      </motion.div>
    </div>
  );
};

export default CardContainer;
