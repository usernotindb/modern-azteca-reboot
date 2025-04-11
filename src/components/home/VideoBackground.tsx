
import * as React from 'react';
import { useState, useEffect } from 'react';
import { getImagePath } from '@/config/images';

const VideoBackground = () => {
  const [videoError, setVideoError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Handle video load errors
  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error("Video failed to load:", e);
    const video = e.target as HTMLVideoElement;
    console.log("Video source:", video.currentSrc);
    setVideoError(true);
    setIsLoading(false);
  };
  
  // Handle video load success
  const handleVideoLoad = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.log("Video loaded successfully");
    const video = e.target as HTMLVideoElement;
    console.log("Video source:", video.currentSrc);
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
    <div className="absolute inset-0 w-full h-full">
      {!videoError ? (
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="metadata"
          className="object-cover w-full h-full"
          poster={getImagePath('azteca-Bg')}
          onError={handleVideoError}
          onLoadedData={handleVideoLoad}
        >
          <source src="/lovable-uploads/loopvideo.webm" type="video/webm" />
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
