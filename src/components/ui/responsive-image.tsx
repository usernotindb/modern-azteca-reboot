
import React, { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  aspectRatio?: number;
  width?: number | string;
  height?: number | string;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  onLoad?: () => void;
  onError?: () => void;
  sizes?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  aspectRatio,
  width,
  height,
  priority = false,
  className,
  containerClassName,
  objectFit = 'cover',
  onLoad,
  onError,
  sizes = '100vw',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const imageStyles = {
    objectFit,
    width: width || '100%',
    height: height || 'auto',
  };

  // If we have an aspect ratio, use AspectRatio component
  if (aspectRatio) {
    return (
      <div className={cn("overflow-hidden", containerClassName)}>
        <AspectRatio ratio={aspectRatio}>
          <img
            src={src}
            alt={alt}
            className={cn(
              "transition-all duration-300",
              isLoaded ? "opacity-100" : "opacity-0",
              hasError ? "bg-gray-200" : "",
              className
            )}
            style={imageStyles as React.CSSProperties}
            loading={priority ? "eager" : "lazy"}
            onLoad={handleLoad}
            onError={handleError}
            sizes={sizes}
          />
        </AspectRatio>
      </div>
    );
  }

  // Without aspect ratio, render a simple image
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "transition-all duration-300",
        isLoaded ? "opacity-100" : "opacity-0",
        hasError ? "bg-gray-200" : "",
        className
      )}
      style={imageStyles as React.CSSProperties}
      loading={priority ? "eager" : "lazy"}
      onLoad={handleLoad}
      onError={handleError}
      sizes={sizes}
    />
  );
};

export { ResponsiveImage };
