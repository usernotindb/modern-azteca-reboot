
import React from 'react';
import { motion } from 'framer-motion';
import SlideUp, { SlideUpItem } from '../ui/SlideUp';
import AnimatedButton from '../ui/AnimatedButton';

const ProductsHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
      <SlideUp>
        <SlideUpItem>
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent-50 text-accent-600 text-sm font-medium">
            Hardware Solutions
          </span>
        </SlideUpItem>
        
        <SlideUpItem>
          <h2 className="text-3xl md:text-4xl font-bold text-aztec-900 max-w-xl">
            For businesses that require value, flexibility and a range of performance options
          </h2>
        </SlideUpItem>
      </SlideUp>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6 md:mt-0"
      >
        <AnimatedButton 
          href="/products" 
          withArrow 
          variant="ghost" 
          className="text-accent-600 hover:text-accent-700 font-medium"
        >
          View All Products
        </AnimatedButton>
      </motion.div>
    </div>
  );
};

export default ProductsHeader;
