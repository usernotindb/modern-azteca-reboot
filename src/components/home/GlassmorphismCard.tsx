
import * as React from 'react';
import { useState } from 'react';
import CardContainer from './glassmorphism/CardContainer';
import CardBackground from './glassmorphism/CardBackground';
import CardContent from './glassmorphism/CardContent';
import CenterLogo from './glassmorphism/CenterLogo';
import OrbitingIcons from './glassmorphism/OrbitingIcons';
import FloatingParticles from './glassmorphism/FloatingParticles';

const GlassmorphismCard = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const icons = [
    { src: "/lovable-uploads/74da57e4-5aa3-4a37-aa85-c1c28943253c.png", label: "Cloud" },
    { src: "/lovable-uploads/881ea460-231f-4a79-9b8a-a49b932665d7.png", label: "Hardware" },
    { src: "/lovable-uploads/8d93ccd6-f135-4472-ad9a-677825e40020.png", label: "Security" },
    { src: "/lovable-uploads/9f23050e-b4e0-417a-bc5f-cf88dd8c3e82.png", label: "Support" },
  ];

  return (
    <CardContainer>
      <CardBackground mouseX={mouseX} mouseY={mouseY} />
      <CardContent mouseX={mouseX} mouseY={mouseY}>
        <CenterLogo />
        <OrbitingIcons icons={icons} mouseX={mouseX} mouseY={mouseY} />
        <FloatingParticles />
      </CardContent>
    </CardContainer>
  );
};

export default GlassmorphismCard;
