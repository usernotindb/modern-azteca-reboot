
import { useEffect, useRef } from 'react';
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
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              className="max-w-xl"
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="inline-block px-6 py-2 mb-6 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 text-sm font-bold"
              >
                YOUR STRATEGIC IT PARTNER
              </motion.span>
              
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
              >
                Technology Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">Business Success</span>
              </motion.h1>
              
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-blue-50 text-xl mb-8 leading-relaxed"
              >
                From hardware to software, cybersecurity to cloud services, we provide comprehensive technology solutions to help your business thrive in the digital age.
              </motion.p>
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <AnimatedButton 
                  href="/products" 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 text-lg"
                  withArrow
                >
                  Explore Solutions
                </AnimatedButton>
                
                <AnimatedButton 
                  href="/contact" 
                  variant="outline" 
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
                >
                  Contact Us
                </AnimatedButton>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right column: Animated graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Circle background */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 8, repeat: Infinity, repeatType: "reverse" }
                }}
                className="absolute inset-0 rounded-full border-4 border-blue-400/30"
              />
              
              {/* Inner circle with icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 20px 5px rgba(59,130,246,0.3)", 
                      "0 0 40px 10px rgba(59,130,246,0.5)", 
                      "0 0 20px 5px rgba(59,130,246,0.3)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center p-10"
                >
                  <img 
                    src="/lovable-uploads/aafd8b1b-4480-41c4-9f11-0d6862cff6dd.png" 
                    alt="Azteca Technology Logo" 
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </div>
              
              {/* Orbiting service icons */}
              <ServiceIconOrbit />
            </div>
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
