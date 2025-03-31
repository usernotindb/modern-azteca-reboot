
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
import { ICON_IMAGES } from '@/config/images';

interface CardData {
  title: string;
  iconIds: string[];
}

const GlassmorphismCard = ({ iconIds, active }: { iconIds: string[]; active: boolean }) => {
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
        <OrbitingIcons iconIds={iconIds} mouseX={mouseX} mouseY={mouseY} />
        <FloatingParticles />
      </CardContent>
    </CardContainer>
  );
};

const GlassmorphismCardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Card data
  const cardsData: CardData[] = [
    {
      title: "IT Infrastructure",
      iconIds: ['icon-cloud', 'icon-hardware', 'icon-security', 'icon-support']
    },
    {
      title: "Software Solutions",
      iconIds: ['icon-software', 'icon-apps', 'icon-dev', 'icon-web']
    },
    {
      title: "Security Solutions",
      iconIds: ['icon-security', 'icon-protection', 'icon-access', 'icon-monitor']
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
                  iconIds={card.iconIds} 
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
