
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import CardContainer from './glassmorphism/CardContainer';
import CardBackground from './glassmorphism/CardBackground';
import CardContent from './glassmorphism/CardContent';
import CenterLogo from './glassmorphism/CenterLogo';
import OrbitingIcons from './glassmorphism/OrbitingIcons';
import FloatingParticles from './glassmorphism/FloatingParticles';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent as ShadcnCardContent } from "@/components/ui/card";
import { cn } from '@/lib/utils';

const GlassmorphismCard = ({ icons, active }: { icons: any[]; active: boolean }) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const isMobile = useIsMobile();

  const handleMouseMove = (e: React.MouseEvent) => {
    try {
      if (isMobile) return;
      
      // Calculate mouse position relative to the window
      const newMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const newMouseY = (e.clientY / window.innerHeight) * 2 - 1;
      
      setMouseX(newMouseX);
      setMouseY(newMouseY);
    } catch (error) {
      console.error("Mouse move error:", error);
      setMouseX(0);
      setMouseY(0);
    }
  };

  return (
    <CardContainer onMouseMove={handleMouseMove}>
      <CardBackground mouseX={mouseX} mouseY={mouseY} />
      <CardContent mouseX={mouseX} mouseY={mouseY}>
        <CenterLogo />
        <OrbitingIcons icons={icons} mouseX={mouseX} mouseY={mouseY} />
        <FloatingParticles />
      </CardContent>
    </CardContainer>
  );
};

const GlassmorphismCardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Card data
  const cardsData = [
    {
      title: "IT Infrastructure",
      icons: [
        { src: "/lovable-uploads/74da57e4-5aa3-4a37-aa85-c1c28943253c.png", label: "Cloud" },
        { src: "/lovable-uploads/881ea460-231f-4a79-9b8a-a49b932665d7.png", label: "Hardware" },
        { src: "/lovable-uploads/8d93ccd6-f135-4472-ad9a-677825e40020.png", label: "Security" },
        { src: "/lovable-uploads/9f23050e-b4e0-417a-bc5f-cf88dd8c3e82.png", label: "Support" },
      ]
    },
    {
      title: "Software Solutions",
      icons: [
        { src: "/lovable-uploads/6d1b82c7-3784-46ea-9384-d24ef9ad8509.png", label: "Software" },
        { src: "/lovable-uploads/9f952ca9-69ce-4ab5-8239-0dbdcdae2c6b.png", label: "Apps" },
        { src: "/lovable-uploads/f9ca7c28-be78-46ba-9cdc-eff03c287cb7.png", label: "Dev" },
        { src: "/lovable-uploads/628857d0-dac0-42fc-b3e9-4528eee9ef00.png", label: "Web" }
      ]
    },
    {
      title: "Security Solutions",
      icons: [
        { src: "/lovable-uploads/8d93ccd6-f135-4472-ad9a-677825e40020.png", label: "Security" },
        { src: "/lovable-uploads/bec2f6ea-6fb3-4073-9c82-38aea9579aab.png", label: "Protection" },
        { src: "/lovable-uploads/15740d59-746e-4979-ae0f-e377879839ee.png", label: "Access" },
        { src: "/lovable-uploads/944ad356-757c-4847-bb03-8e643c5032fc.png", label: "Monitor" }
      ]
    }
  ];

  const handleCarouselChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative max-w-md mx-auto">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
        onSlideChange={handleCarouselChange}
      >
        <CarouselContent>
          {cardsData.map((card, index) => (
            <CarouselItem key={index} className="w-full flex justify-center">
              <div className={cn("w-full transition-opacity duration-300", activeIndex === index ? "opacity-100" : "opacity-30")}>
                <GlassmorphismCard 
                  icons={card.icons} 
                  active={activeIndex === index} 
                />
              </div>
              <div className="absolute bottom-[-50px] left-0 right-0 text-center">
                <h3 className="text-xl text-white font-semibold">{card.title}</h3>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-16" />
        <CarouselNext className="-right-16" />
      </Carousel>
    </div>
  );
};

export default GlassmorphismCardCarousel;
