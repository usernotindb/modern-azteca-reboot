
import React, { useState, useEffect } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className,
  sizes = '100vw',
  priority = false,
  objectFit = 'cover'
}) => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    // If priority, preload the image
    if (priority && src) {
      const img = new Image();
      img.src = src;
    }
  }, [src, priority]);
  
  return (
    <div className={`relative overflow-hidden ${className || ''}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setLoaded(true)}
        className={`
          w-full h-auto transition-opacity duration-500
          ${loaded ? 'opacity-100' : 'opacity-0'}
          ${objectFit === 'cover' ? 'object-cover' : ''}
          ${objectFit === 'contain' ? 'object-contain' : ''}
          ${objectFit === 'fill' ? 'object-fill' : ''}
          ${objectFit === 'none' ? 'object-none' : ''}
          ${objectFit === 'scale-down' ? 'object-scale-down' : ''}
        `}
      />
    </div>
  );
};

export default ResponsiveImage;
