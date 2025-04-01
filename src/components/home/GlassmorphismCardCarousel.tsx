
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useIsMobile } from '@/hooks/use-mobile';
import { carouselItems } from '@/data/carouselData';
import InteractiveCardSlide from './InteractiveCardSlide';

const GlassmorphismCardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isMouseActive, setIsMouseActive] = useState(false);
  const isMobile = useIsMobile();
  
  const handleCarouselChange = (index: number) => {
    setActiveIndex(index);
  };

  // Handle mouse movement for interactive effects
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    
    try {
      // Calculate mouse position relative to the carousel container
      if (carouselRef.current) {
        const rect = carouselRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width * 2 - 1;
        const y = (e.clientY - rect.top) / rect.height * 2 - 1;
        
        setMouseX(x);
        setMouseY(y);
        setIsMouseActive(true);
      }
    } catch (error) {
      console.error("Mouse tracking error:", error);
      setMouseX(0);
      setMouseY(0);
    }
  };

  // Reset mouse position when mouse leaves the carousel
  const handleMouseLeave = () => {
    setIsMouseActive(false);
    // Smoothly reset position
    setTimeout(() => {
      if (!isMouseActive) {
        setMouseX(0);
        setMouseY(0);
      }
    }, 500);
  };

  // Mouse-based navigation - drag to slide
  // Fix the type error by properly typing the event parameter
  const handleDrag = (
    // Using a more generic type for the event and properly casting it
    e: React.MouseEvent | MouseEvent | TouchEvent | PointerEvent, 
    dragX: number
  ) => {
    if (isMobile || !isMouseActive) return;
    
    if (Math.abs(dragX) > 50) {
      if (dragX > 0 && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      } else if (dragX < 0 && activeIndex < carouselItems.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    }
  };

  return (
    <div 
      ref={carouselRef} 
      className="relative max-w-md mx-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
        onSlideChange={handleCarouselChange}
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={item.id} className="w-full flex justify-center">
              <motion.div 
                className={`w-full transition-all duration-500 ${activeIndex === index ? "scale-100 opacity-100" : "scale-90 opacity-40"}`}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={(e, info) => handleDrag(e, info.offset.x)}
              >
                <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <InteractiveCardSlide
                    item={item}
                    isActive={activeIndex === index}
                    mouseX={mouseX}
                    mouseY={mouseY}
                  />
                </div>
                <div className="absolute bottom-[-50px] left-0 right-0 text-center">
                  <h3 className="text-xl text-white font-semibold">{item.title}</h3>
                </div>
              </motion.div>
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
