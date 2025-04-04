
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from '../ui/AnimatedButton';

interface HeroContentProps {
  controls?: any;
  reference?: React.RefObject<HTMLDivElement>;
}

const HeroContent = ({ controls, reference }: HeroContentProps) => {
  return (
    <motion.div
      ref={reference}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      className="max-w-xl"
    >
      <motion.span
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="inline-block px-4 py-1.5 mb-4 rounded-full bg-yellow-400 text-blue-900 text-sm font-medium"
      >
        The Ultimate IT Department
      </motion.span>
      
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
      >
        Azteca Technology Has You Covered
      </motion.h1>
      
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-blue-50 text-lg mb-8 leading-relaxed"
      >
        We understand practical deployment of technology. Whether it's solving problems, planning for growth, or optimization, our team of experts is ready to help your business thrive.
      </motion.p>
      
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <AnimatedButton href="/products" withArrow className="bg-blue-600 hover:bg-blue-700 text-white">
          Explore Our Solutions
        </AnimatedButton>
        
        <AnimatedButton href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white">
          Contact Us
        </AnimatedButton>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
