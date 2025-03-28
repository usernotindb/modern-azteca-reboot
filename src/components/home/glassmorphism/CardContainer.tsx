
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface CardContainerProps {
  children: React.ReactNode;
}

const CardContainer = ({ children }: CardContainerProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the center of the card
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Get mouse distance from center
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Set maximum rotation (degrees)
    const maxRotation = 10;
    
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
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { mouseX, mouseY } as any);
    }
    return child;
  });

  return (
    <div 
      className="relative w-full h-[400px] flex items-center justify-center"
      style={{ perspective: "1200px" }}
    >
      {/* Main card container */}
      <motion.div
        ref={cardRef}
        className="w-full h-full rounded-2xl overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {childrenWithProps}
      </motion.div>
    </div>
  );
};

export default CardContainer;
