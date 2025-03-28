
import * as React from 'react';
import { useState, useEffect } from 'react';

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
          playsInline // Add playsInline for better mobile support
          className="object-cover h-full w-full"
          poster="/lovable-uploads/6d1b82c7-3784-46ea-9384-d24ef9ad8509.png"
          onError={handleVideoError}
          onLoadedData={handleVideoLoad}
        >
          <source src="https://static.videezy.com/system/resources/previews/000/042/194/original/business19.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: 'url("/lovable-uploads/6d1b82c7-3784-46ea-9384-d24ef9ad8509.png")' }}
          aria-label="Background image"
        ></div>
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
    </div>
  );
};

export default VideoBackground;
