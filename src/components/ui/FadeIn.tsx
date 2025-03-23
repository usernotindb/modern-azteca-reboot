
import { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView, useAnimation, Variant, Variants } from 'framer-motion';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  threshold?: number;
  className?: string;
}

const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  distance = 20,
  threshold = 0.1,
  className = '',
}: FadeInProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once: true });

  // Set initial animation states based on direction
  const getDirectionalVariants = (): Variants => {
    // Base no-direction variant
    if (direction === 'none') {
      return {
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1, 
          transition: { duration, delay } 
        },
      };
    }
    
    // Direction-specific variants
    if (direction === 'up') {
      return {
        hidden: { opacity: 0, y: distance },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { duration, delay } 
        },
      };
    } 
    
    if (direction === 'down') {
      return {
        hidden: { opacity: 0, y: -distance },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { duration, delay } 
        },
      };
    } 
    
    if (direction === 'left') {
      return {
        hidden: { opacity: 0, x: distance },
        visible: { 
          opacity: 1, 
          x: 0, 
          transition: { duration, delay } 
        },
      };
    }
    
    // direction === 'right'
    return {
      hidden: { opacity: 0, x: -distance },
      visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration, delay } 
      },
    };
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={getDirectionalVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
