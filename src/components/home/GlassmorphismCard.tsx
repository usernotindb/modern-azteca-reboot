
import * as React from 'react';
import { useState, useCallback, useEffect } from 'react';
import CardContainer from './glassmorphism/CardContainer';
import CardBackground from './glassmorphism/CardBackground';
import CardContent from './glassmorphism/CardContent';
import CenterLogo from './glassmorphism/CenterLogo';
import OrbitingIcons from './glassmorphism/OrbitingIcons';
import FloatingParticles from './glassmorphism/FloatingParticles';
import { useIsMobile } from '@/hooks/use-mobile';

const GlassmorphismCard = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const isMobile = useIsMobile();

  const iconIds = [
    'icon-cloud',
    'icon-hardware',
    'icon-security',
    'icon-support',
  ];

  // Minimal mouse tracking with limited values to prevent animation issues
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    try {
      if (isMobile) return;
      
      // Calculate mouse position relative to the window
      const newMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const newMouseY = (e.clientY / window.innerHeight) * 2 - 1;
      
      // Update state with the new values - strict limiting to prevent extreme rotations
      setMouseX(Math.max(-0.3, Math.min(0.3, newMouseX)));
      setMouseY(Math.max(-0.3, Math.min(0.3, newMouseY)));
    } catch (error) {
      console.error("Mouse move error:", error);
      // Set default values if an error occurs
      setMouseX(0);
      setMouseY(0);
    }
  }, [isMobile]);

  // Reset the mouse position on component unmount
  useEffect(() => {
    return () => {
      setMouseX(0);
      setMouseY(0);
    };
  }, []);

  return (
    <CardContainer onMouseMove={handleMouseMove}>
      <CardBackground mouseX={mouseX} mouseY={mouseY} />
      <CardContent mouseX={mouseX} mouseY={mouseY}>
        <CenterLogo />
        <OrbitingIcons iconIds={iconIds} mouseX={mouseX} mouseY={mouseY} />
        <FloatingParticles />
      </CardContent>
    </CardContainer>
  );
};

export default GlassmorphismCard;
