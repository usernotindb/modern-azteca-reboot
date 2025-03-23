
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
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
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-aztec-50 to-white"></div>
        
        {/* Abstract shapes */}
        <motion.div
          className="absolute top-20 right-[10%] w-64 h-64 bg-accent-50 rounded-full opacity-40 blur-3xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-[5%] w-80 h-80 bg-aztec-100 rounded-full opacity-50 blur-3xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column: Text content */}
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
              className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent-50 text-accent-600 text-sm font-medium"
            >
              Redefining Excellence
            </motion.span>
            
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Crafted with Precision and Elegance
            </motion.h1>
            
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-aztec-600 text-lg mb-8 leading-relaxed"
            >
              We combine innovative design with exceptional craftsmanship to create experiences that inspire. Every detail is meticulously considered to ensure perfection.
            </motion.p>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <AnimatedButton href="/products" withArrow className="bg-accent-600 hover:bg-accent-700 text-white">
                Discover Our Products
              </AnimatedButton>
              
              <AnimatedButton href="/about" variant="outline" className="border-aztec-300 text-aztec-800">
                About Us
              </AnimatedButton>
            </motion.div>
          </motion.div>
          
          {/* Right column: Image/visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative aspect-square md:aspect-auto md:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-aztec-900/30 to-transparent z-10"></div>
            <div className="w-full h-full bg-aztec-300 flex items-center justify-center text-white text-xl font-medium">
              Your Hero Image Here
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
