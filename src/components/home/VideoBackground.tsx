
import * as React from 'react';
import { useState, useEffect } from 'react';
import { getImagePath } from '@/config/images';

const VideoBackground = () => {
  const [videoError, setVideoError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Handle video load errors
  const handleVideoError = () => {
    console.log("Video failed to load, displaying fallback image");
    setVideoError(true);
    setIsLoading(false);
  };
  
  // Handle video load success
  const handleVideoLoad = () => {
    setIsLoading(false);
  };
  
  // Set a timeout to use fallback image if video takes too long to load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        console.log("Video load timeout, using fallback image");
        setVideoError(true);
        setIsLoading(false);
      }
    }, 5000); // 5 second timeout
    
    return () => clearTimeout(timer);
  }, [isLoading]);
  
  return (
    <div className="absolute inset-0 z-0">
      {!videoError ? (
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="object-cover h-full w-full"
          poster={getImagePath('azteca-Bg')}
          onError={handleVideoError}
          onLoadedData={handleVideoLoad}
        >
          <source src="/public/lovable-uploads/ezgif-5b59843ec79df7.webp" type="video/webp" />
                 Your browser does not support the video tag.
        </video>
      ) : (
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: `url("${getImagePath('azteca-Bg')}")` }}
          aria-label="Background image"
        ></div>
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
    </div>
  );
};

export default VideoBackground;
