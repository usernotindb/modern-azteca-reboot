
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
  const [showControls, setShowControls] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
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
    setShowControls(true);
  };

  // Resume auto-play when mouse leaves the carousel
  const handleMouseLeave = () => {
    setIsPaused(false);
    setTimeout(() => setShowControls(false), 1000);
  };

  return (
    <div 
      ref={carouselRef}
      className="relative max-w-md mx-auto transform-gpu"
      style={{ perspective: '1500px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D scene container */}
      <div className="relative transform-gpu" style={{ transformStyle: 'preserve-3d' }}>
        <Carousel
          opts={{
            align: "center",
            loop: true,
            skipSnaps: false,
            containScroll: "keepSnaps"
          }}
          className="w-full"
          onSlideChange={handleCarouselChange}
        >
          <CarouselContent className="-ml-1">
            {carouselItems.map((item, index) => (
              <CarouselItem key={item.id} className="pl-1 flex justify-center">
                <motion.div 
                  className="w-full transition-all duration-500"
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                  }}
                  animate={{
                    rotateY: isPaused ? 0 : (activeIndex === index ? 0 : (index < activeIndex ? 5 : -5))
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
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
          
          <motion.div 
            animate={{ opacity: showControls || !isAutoPlaying ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <CarouselPrevious 
              onClick={() => {
                setActiveIndex((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
              }}
              className="bg-white/10 border-blue-300/30 backdrop-blur-sm hover:bg-blue-500/20 transition-all"
            />
            <CarouselNext 
              onClick={() => {
                setActiveIndex((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
              }}
              className="bg-white/10 border-blue-300/30 backdrop-blur-sm hover:bg-blue-500/20 transition-all"
            />
          </motion.div>
        </Carousel>
      </div>
      
      {/* Autoplay indicator and control */}
      <motion.div 
        className="absolute -bottom-[60px] left-0 right-0 flex justify-center gap-2"
        initial={{ opacity: 0, y: 5 }}
        animate={{ 
          opacity: showControls || !isAutoPlaying ? 1 : 0.7,
          y: 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <button 
          onClick={() => setIsAutoPlaying(!isAutoPlaying)} 
          className="text-xs text-white/70 bg-blue-600/30 backdrop-blur-sm px-3 py-1 rounded-full hover:bg-blue-600/50 transition-colors"
        >
          {isAutoPlaying ? 'Pause' : 'Play'} Slideshow
        </button>
      </motion.div>
    </div>
  );
};

export default GlassmorphismCardCarousel;
