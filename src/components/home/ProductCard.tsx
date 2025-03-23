
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from '../ui/AnimatedButton';
import { ChevronRight } from 'lucide-react';

interface ProductCardProps { 
  name: string; 
  description: string;
  image: string;
  index: number;
}

const ProductCard = ({ name, description, image, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group bg-white border border-aztec-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="aspect-square relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-aztec-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
          <AnimatedButton
            href={`/products/${name.toLowerCase().replace(/\s+/g, '-')}`}
            className="bg-white text-aztec-900 hover:bg-aztec-50"
            size="sm"
            icon={<ChevronRight className="h-4 w-4" />}
            iconPosition="right"
          >
            View Details
          </AnimatedButton>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-aztec-900 group-hover:text-accent-600 transition-colors">
          {name}
        </h3>
        
        <p className="text-aztec-600 mb-4">
          {description}
        </p>
        
        <AnimatedButton
          href={`/products/${name.toLowerCase().replace(/\s+/g, '-')}`}
          variant="outline"
          className="w-full justify-center bg-blue-600 hover:bg-blue-700 text-white border-0"
          size="sm"
        >
          Learn More...
        </AnimatedButton>
      </div>
    </motion.div>
  );
};

export default ProductCard;
