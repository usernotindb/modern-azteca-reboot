
const VideoBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <video 
        autoPlay 
        muted 
        loop 
        className="object-cover h-full w-full"
        poster="/lovable-uploads/6d1b82c7-3784-46ea-9384-d24ef9ad8509.png"
      >
        <source src="https://static.videezy.com/system/resources/previews/000/042/194/original/business19.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
    </div>
  );
};

export default VideoBackground;
