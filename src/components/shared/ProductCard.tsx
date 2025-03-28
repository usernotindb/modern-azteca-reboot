
import { motion } from 'framer-motion';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { Product } from '@/lib/types/product';
import ProductImageSelector from './ProductImageSelector';
import { useState } from 'react';

interface ProductCardProps extends Partial<Product> {
  variant?: 'home' | 'product' | 'featured';
  index?: number;
  delay?: number;
  onLearnMore?: () => void;
  className?: string;
  imageId?: string;
  onImageChange?: (imageId: string, newImageSrc: string) => void;
}

const ProductCard = ({
  name,
  description,
  price,
  image,
  categorySlug,
  variant = 'product',
  index = 0,
  delay = 0,
  onLearnMore,
  className = '',
  imageId,
  onImageChange
}: ProductCardProps) => {
  const [currentImage, setCurrentImage] = useState(image);
  const variantStyles = {
    home: 'p-4 bg-white border border-aztec-50 rounded-lg shadow-sm hover:shadow-md transition-shadow',
    product: 'p-4 bg-white border border-aztec-50 rounded-lg shadow-sm hover:shadow-md transition-shadow',
    featured: 'p-6 bg-white border-2 border-accent-100 rounded-xl shadow-md hover:shadow-lg transition-shadow'
  };

  // Handle the click for the Learn More button
  const handleLearnMoreClick = (e: React.MouseEvent) => {
    if (onLearnMore) {
      e.preventDefault();
      onLearnMore();
    }
  };

  // Get the appropriate image source - prioritizing our current image
  const getImageSource = () => {
    return currentImage || "/lovable-uploads/fd6981e3-b5e5-4a03-9cd8-38fac8167126.png";
  };

  // Handle image change
  const handleImageChange = (id: string, newImage: string) => {
    setCurrentImage(newImage);
    if (onImageChange) {
      onImageChange(id, newImage);
    }
  };

  const uniqueImageId = imageId || `product-image-${index}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay + (index * 0.1) }}
      className={`${variantStyles[variant]} ${className} relative`}
    >
      {currentImage && (
        <div className="mb-4 aspect-video overflow-hidden rounded-md relative">
          <img
            src={getImageSource()}
            alt={name || 'Product image'}
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
            id={uniqueImageId}
          />
          {onImageChange && (
            <ProductImageSelector
              imageId={uniqueImageId}
              currentImage={getImageSource()}
              onImageChange={handleImageChange}
            />
          )}
        </div>
      )}

      <div>
        {name && (
          <h3 className="text-lg md:text-xl font-semibold text-aztec-900 mb-2">
            {name}
          </h3>
        )}

        {price && (
          <div className="mb-2">
            <span className="bg-aztec-50 text-aztec-800 px-2 py-1 rounded-full text-sm font-medium">
              {price}
            </span>
          </div>
        )}

        {description && (
          <p className="text-aztec-600 text-sm mb-4 line-clamp-3">
            {description}
          </p>
        )}

        <div className="flex justify-center">
          <AnimatedButton
            href={categorySlug ? `/products/${categorySlug}` : '#'}
            variant="outline"
            className="text-sm px-4 py-2 bg-blue-600 text-black border-blue-300 hover:bg-blue-500 font-medium shadow-sm w-full justify-center"
            onClick={handleLearnMoreClick}
          >
            Learn More
          </AnimatedButton>

          {variant === 'product' && (
            <AnimatedButton
              href="/contact"
              variant="link"
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Contact Us
            </AnimatedButton>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
