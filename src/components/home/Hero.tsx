
import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import ServiceIconGrid from './ServiceIconGrid';
import AnimatedButton from '../ui/AnimatedButton';

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <section className="relative overflow-hidden min-h-[100vh] flex items-center">
      {/* Video Background */}
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

      {/* Animated particles overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff20_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-2 h-2 rounded-full bg-blue-400"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%", 
                opacity: 0.2 + Math.random() * 0.5 
              }}
              animate={{ 
                y: [
                  Math.random() * 100 + "%", 
                  Math.random() * 100 + "%", 
                  Math.random() * 100 + "%"
                ],
                x: [
                  Math.random() * 100 + "%", 
                  Math.random() * 100 + "%", 
                  Math.random() * 100 + "%"
                ],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 20 + Math.random() * 30,
                repeatType: 'reverse'
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Text content */}
          <div>
            <HeroContent controls={controls} reference={ref} />
          </div>
          
          {/* Right column: 3D Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <GlassmorphismCard />
          </motion.div>
        </div>
      </div>
      
      {/* Down arrow animated */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#services" className="flex flex-col items-center text-white/70 hover:text-white transition-colors">
          <span className="text-sm mb-2">Discover More</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

// 3D Glassmorphism Card with mouse tracking
const GlassmorphismCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the center of the card
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Get mouse distance from center
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Set maximum rotation (degrees)
    const maxRotation = 10;
    
    // Calculate rotation based on mouse position
    // Normalize the rotation to our max range based on card dimensions
    const rotateY = (mouseX / (rect.width / 2)) * maxRotation;
    const rotateX = -(mouseY / (rect.height / 2)) * maxRotation;
    
    setRotateX(rotateX);
    setRotateY(rotateY);
    setMouseX(mouseX);
    setMouseY(mouseY);
  };

  const handleMouseLeave = () => {
    // Smoothly reset to default position
    setRotateX(0);
    setRotateY(0);
  };

  const icons = [
    { src: "/lovable-uploads/74da57e4-5aa3-4a37-aa85-c1c28943253c.png", label: "Cloud" },
    { src: "/lovable-uploads/881ea460-231f-4a79-9b8a-a49b932665d7.png", label: "Hardware" },
    { src: "/lovable-uploads/8d93ccd6-f135-4472-ad9a-677825e40020.png", label: "Security" },
    { src: "/lovable-uploads/9f23050e-b4e0-417a-bc5f-cf88dd8c3e82.png", label: "Support" },
  ];

  return (
    <div 
      className="relative w-full h-[400px] flex items-center justify-center"
      style={{ perspective: "1200px" }}
    >
      {/* Main card container */}
      <motion.div
        ref={cardRef}
        className="w-full h-full rounded-2xl overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glassmorphism card */}
        <div 
          className="absolute inset-0 rounded-2xl overflow-hidden bg-blue-600/20 backdrop-blur-[12px] border border-blue-300/30 shadow-xl"
          style={{
            transform: "translateZ(-10px)",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Depth effects and highlights */}
          <div 
            className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-400/60 via-transparent to-blue-900/60"
            style={{
              transform: `translateX(${mouseX * 0.02}px) translateY(${mouseY * 0.02}px)`,
            }}
          />
          
          {/* Additional lighting effect based on mouse position */}
          <div 
            className="absolute inset-0 bg-gradient-radial from-blue-400/30 to-transparent opacity-70"
            style={{
              transformStyle: "preserve-3d",
              transform: `translateX(${mouseX * 0.03}px) translateY(${mouseY * 0.03}px) translateZ(20px)`,
              backgroundPosition: `${50 + mouseX * 0.05}% ${50 + mouseY * 0.05}%`,
            }}
          />
          
          {/* Glossy highlight */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-40"
            style={{
              transform: `translateX(${mouseX * -0.01}px) translateY(${mouseY * -0.01}px)`,
            }}
          />
        </div>
        
        {/* Card content */}
        <div 
          className="relative h-full w-full p-8 flex flex-col items-center justify-center"
          style={{
            transform: "translateZ(20px)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Center logo */}
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 20px 5px rgba(59,130,246,0.3)", 
                "0 0 40px 10px rgba(59,130,246,0.5)", 
                "0 0 20px 5px rgba(59,130,246,0.3)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center p-8 mb-6 z-10"
            style={{
              transform: "translateZ(30px)",
            }}
          >
            <img 
              src="/lovable-uploads/aafd8b1b-4480-41c4-9f11-0d6862cff6dd.png" 
              alt="Azteca Technology Logo" 
              className="w-full h-full object-contain"
            />
          </motion.div>
          
          {/* Orbiting icons with 3D effect */}
          {icons.map((icon, index) => {
            const angle = (index * Math.PI * 2) / icons.length;
            const radius = 160; // Distance from center
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const delay = index * 0.2;
            
            return (
              <motion.div
                key={index}
                initial={{ 
                  x,
                  y,
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{ 
                  x,
                  y,
                  opacity: 1,
                  scale: 1,
                  z: 40 + (Math.sin(mouseX * 0.01 + index) * 20),
                }}
                transition={{
                  opacity: { duration: 0.5, delay },
                  scale: { duration: 0.5, delay },
                  z: { duration: 0.8, ease: "easeOut" }
                }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  transformStyle: "preserve-3d",
                  zIndex: mouseX > x ? 20 : 10,
                }}
              >
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md p-3 flex items-center justify-center border border-white/20 shadow-lg">
                  <img src={icon.src} alt={icon.label} className="w-full h-full object-contain" />
                </div>
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-white text-sm font-medium whitespace-nowrap">
                  {icon.label}
                </div>
              </motion.div>
            );
          })}
          
          {/* Floating particles for depth */}
          {Array.from({ length: 12 }).map((_, index) => (
            <motion.div
              key={`particle-${index}`}
              className="absolute w-1 h-1 rounded-full bg-white/40"
              initial={{
                x: (Math.random() - 0.5) * 300, 
                y: (Math.random() - 0.5) * 300,
                opacity: Math.random() * 0.5 + 0.2,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: (Math.random() - 0.5) * 300,
                y: (Math.random() - 0.5) * 300,
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
                z: Math.random() * 50 - 25,
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const ServiceIconOrbit = () => {
  const icons = [
    { src: "/lovable-uploads/74da57e4-5aa3-4a37-aa85-c1c28943253c.png", label: "Cloud" },
    { src: "/lovable-uploads/881ea460-231f-4a79-9b8a-a49b932665d7.png", label: "Hardware" },
    { src: "/lovable-uploads/8d93ccd6-f135-4472-ad9a-677825e40020.png", label: "Security" },
    { src: "/lovable-uploads/9f23050e-b4e0-417a-bc5f-cf88dd8c3e82.png", label: "Support" },
  ];

  return (
    <>
      {icons.map((icon, index) => {
        const angle = (index * Math.PI * 2) / icons.length;
        const delay = index * 0.2;
        
        return (
          <motion.div
            key={index}
            initial={{ 
              x: Math.cos(angle) * 120 + 'px',
              y: Math.sin(angle) * 120 + 'px',
              opacity: 0 
            }}
            animate={{ 
              x: Math.cos(angle) * 120 + 'px',
              y: Math.sin(angle) * 120 + 'px',
              opacity: 1,
              rotate: [0, 360]
            }}
            transition={{
              opacity: { duration: 0.5, delay },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            className="absolute w-16 h-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md p-3 flex items-center justify-center">
              <img src={icon.src} alt={icon.label} className="w-full h-full object-contain" />
            </div>
            <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-white text-sm font-medium">
              {icon.label}
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default Hero;
