
import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
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
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mouseDirection, setMouseDirection] = useState<'left' | 'right' | null>(null);
  const lastMouseXRef = useRef(0);
  const controls = useAnimation();
  
  const handleCarouselChange = (index: number) => {
    setActiveIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayIntervalRef.current = setInterval(() => {
        const nextIndex = (activeIndex + 1) % carouselItems.length;
        setActiveIndex(nextIndex);
      }, 4000); // Change slide every 4 seconds
    }
    
    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [activeIndex, isAutoPlaying]);

  // Pause auto-play when mouse enters the carousel
  const handleMouseEnter = () => {
    setIsMouseActive(true);
    setIsAutoPlaying(false);
  };

  // Resume auto-play when mouse leaves the carousel
  const handleMouseLeave = () => {
    setIsMouseActive(false);
    setIsAutoPlaying(true);
    setMouseDirection(null);
    
    // Smoothly reset position
    setTimeout(() => {
      if (!isMouseActive) {
        setMouseX(0);
        setMouseY(0);
      }
    }, 500);
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
        
        // Determine mouse direction
        const currentMouseX = e.clientX;
        const direction = currentMouseX > lastMouseXRef.current ? 'right' : 'left';
        lastMouseXRef.current = currentMouseX;
        setMouseDirection(direction);
        
        // Navigate based on mouse position and movement
        // If mouse is far to the left/right and moving in that direction
        if (Math.abs(x) > 0.7) {
          if (x < -0.7 && direction === 'left' && activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
          } else if (x > 0.7 && direction === 'right' && activeIndex < carouselItems.length - 1) {
            setActiveIndex(activeIndex + 1);
          }
        }
      }
    } catch (error) {
      console.error("Mouse tracking error:", error);
      setMouseX(0);
      setMouseY(0);
    }
  };

  // Mouse-based navigation - drag to slide
  const handleDrag = (
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

  // 3D effect animation variants
  const cardVariants = {
    active: (direction: 'left' | 'right' | null) => ({
      rotateY: direction === 'left' ? 5 : direction === 'right' ? -5 : 0,
      rotateX: mouseY * 5,
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    }),
    inactive: {
      rotateY: 0,
      rotateX: 0,
      scale: 0.9,
      opacity: 0.4,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div 
      ref={carouselRef} 
      className="relative max-w-md mx-auto perspective-1000"
      onMouseMove={handleMouseMove}
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
                animate={activeIndex === index ? 'active' : 'inactive'}
                variants={cardVariants}
                custom={mouseDirection}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={(e, info) => handleDrag(e, info.offset.x)}
              >
                <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-xl transform-gpu">
                  <InteractiveCardSlide
                    item={item}
                    isActive={activeIndex === index}
                    mouseX={mouseX}
                    mouseY={mouseY}
                    direction={mouseDirection}
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
      
      {/* Autoplay indicator and control */}
      <div className="absolute -bottom-[80px] left-0 right-0 flex justify-center gap-2">
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
