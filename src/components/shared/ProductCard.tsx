
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from '../ui/AnimatedButton';
import { ChevronRight } from 'lucide-react';

export interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  price?: string;
  categorySlug?: string;
  index?: number;
  delay?: number;
  variant?: 'home' | 'product';
}

const ProductCard = ({ 
  name, 
  description, 
  image, 
  price, 
  categorySlug,
  index = 0,
  delay = 0,
  variant = 'product'
}: ProductCardProps) => {
  const handleLearnMoreClick = (event: React.MouseEvent) => {
    event.preventDefault();
    
    // Create a slug from the product name
    const productSlug = name.toLowerCase().replace(/\s+/g, '-');
    const targetElement = document.getElementById(productSlug);
    
    if (targetElement) {
      // Smooth scroll to the element
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Home page variant (square image, simpler layout)
  if (variant === 'home') {
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
              href={`#${name.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-white text-aztec-900 hover:bg-aztec-50 font-medium"
              size="sm"
              icon={<ChevronRight className="h-4 w-4" />}
              iconPosition="right"
              onClick={handleLearnMoreClick}
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
            href={`#${name.toLowerCase().replace(/\s+/g, '-')}`}
            variant="outline"
            className="w-full justify-center bg-blue-600 hover:bg-blue-700 text-white border-0 font-medium"
            size="default"
            onClick={handleLearnMoreClick}
          >
            Learn More
          </AnimatedButton>
        </div>
      </motion.div>
    );
  }

  // Product page variant (16:9 image, more details)
  return (
    <div className="group bg-white border border-aztec-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="aspect-video bg-aztec-50 relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-aztec-900 group-hover:text-accent-600 transition-colors">
            {name}
          </h3>
          {price && (
            <span className="bg-aztec-50 text-aztec-800 px-3 py-1 rounded-full text-sm font-medium">
              {price}
            </span>
          )}
        </div>
        
        <p className="text-aztec-600 mb-6 flex-grow">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          <AnimatedButton
            href={`#${name.toLowerCase().replace(/\s+/g, '-')}`}
            variant="default"
            className="w-full sm:w-1/2 justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium"
            icon={<ChevronRight className="h-4 w-4" />}
            iconPosition="right"
            size="default"
            onClick={handleLearnMoreClick}
          >
            Learn More
          </AnimatedButton>
          
          <AnimatedButton
            href="/contact"
            variant="outline"
            className="w-full sm:w-1/2 justify-center border-aztec-200 text-aztec-800 hover:bg-accent-50 hover:text-accent-700 hover:border-accent-200 font-medium"
            size="default"
          >
            Get a Quote
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
