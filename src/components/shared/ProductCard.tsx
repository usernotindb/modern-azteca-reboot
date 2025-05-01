
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { getImagePath } from '@/config/images';
import { cn } from '@/lib/utils';
import { useIsMobile, useIsTablet } from '@/hooks/use-media-query';
import { ResponsiveImage } from '@/components/ui/responsive-image';

interface ProductCardProps {
  name: string;
  description: string;
  imageId?: string;
  image?: string; // Fallback if imageId is not provided
  categorySlug?: string;
  price?: string;
  link?: string;
  onLearnMore?: () => void;
  index?: number;
  variant?: 'default' | 'home';
  className?: string;
}

const ProductCard = ({
  name,
  description,
  imageId,
  image,
  categorySlug,
  price,
  link,
  onLearnMore,
  index = 0,
  variant = 'default',
  className,
}: ProductCardProps) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  
  // Determine delay based on index for staggered animations
  const animationDelay = 0.1 * (index % 10);
  
  // Handle click on the card
  const handleClick = () => {
    if (link) {
      navigate(link);
    } else if (onLearnMore) {
      onLearnMore();
    }
  };
  
  // Get image source
  const imageSrc = imageId ? getImagePath(imageId) : image;
  
  // Determine if this is a touchscreen device
  const isTouch = isMobile || isTablet;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: animationDelay }}
      className={cn(
        "bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300",
        "border border-gray-100 h-full flex flex-col",
        className
      )}
      onClick={handleClick}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        {imageSrc ? (
          <ResponsiveImage
            src={imageSrc}
            alt={name}
            aspectRatio={4/3}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No image</span>
          </div>
        )}
        
        {/* Price Tag - if provided */}
        {price && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {price}
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="flex-grow p-5 flex flex-col">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm flex-grow mb-4">{description}</p>
        
        {/* Call to Action */}
        <div className="mt-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
            className={cn(
              "text-sm font-medium px-4 py-2 rounded transition-colors",
              "bg-blue-600 text-white hover:bg-blue-700",
              isTouch ? "w-full text-center" : ""
            )}
          >
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
