
import React, { useState, useEffect, useRef } from 'react';
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
  const isMobile = useIsMobile();
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  
  const handleCarouselChange = (index: number) => {
    setActiveIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isPaused) {
      autoPlayIntervalRef.current = setInterval(() => {
        const nextIndex = (activeIndex + 1) % carouselItems.length;
        setActiveIndex(nextIndex);
      }, 4000); // Change slide every 4 seconds
    }
    
    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
        autoPlayIntervalRef.current = null;
      }
    };
  }, [activeIndex, isAutoPlaying, isPaused]);

  // Pause auto-play when mouse enters the carousel
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  // Resume auto-play when mouse leaves the carousel
  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div 
      className="relative max-w-md mx-auto"
      onMouseEnter={handleMouseEnter}
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
                className="w-full transition-all duration-500"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
              >
                <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-xl transform-gpu">
                  <InteractiveCardSlide
                    item={item}
                    isActive={activeIndex === index}
                  />
                </div>
                <div className="absolute bottom-[-30px] left-0 right-0 text-center">
                  <div className="flex justify-center gap-2 mt-4">
                    {carouselItems.map((_, idx) => (
                      <button
                        key={idx}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          activeIndex === idx 
                            ? 'bg-blue-500 scale-125' 
                            : 'bg-blue-300/50'
                        }`}
                        onClick={() => setActiveIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious 
          onClick={() => {
            setActiveIndex((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
          }}
        />
        <CarouselNext 
          onClick={() => {
            setActiveIndex((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
          }}
        />
      </Carousel>
      
      {/* Autoplay indicator and control */}
      <div className="absolute -bottom-[60px] left-0 right-0 flex justify-center gap-2">
        <button 
          onClick={() => setIsAutoPlaying(!isAutoPlaying)} 
          className="text-xs text-white/70 bg-blue-600/30 backdrop-blur-sm px-3 py-1 rounded-full hover:bg-blue-600/50 transition-colors"
        >
          {isAutoPlaying ? 'Pause' : 'Play'} Slideshow
        </button>
      </div>
    </div>
  );
};

export default GlassmorphismCardCarousel;
