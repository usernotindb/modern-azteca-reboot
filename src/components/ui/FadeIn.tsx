
import { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

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
  const getDirectionalVariants = () => {
    const variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration, delay } },
    };

    // Add transform properties based on direction
    if (direction === 'up') {
      variants.hidden.y = distance;
      variants.visible.y = 0;
    } else if (direction === 'down') {
      variants.hidden.y = -distance;
      variants.visible.y = 0;
    } else if (direction === 'left') {
      variants.hidden.x = distance;
      variants.visible.x = 0;
    } else if (direction === 'right') {
      variants.hidden.x = -distance;
      variants.visible.x = 0;
    }

    return variants;
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
