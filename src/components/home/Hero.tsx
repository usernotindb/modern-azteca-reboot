
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
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-800"></div>
        
        {/* Abstract shapes */}
        <motion.div
          className="absolute top-20 right-[10%] w-64 h-64 bg-blue-700 rounded-full opacity-20 blur-3xl"
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
          className="absolute bottom-20 left-[5%] w-80 h-80 bg-blue-600 rounded-full opacity-30 blur-3xl"
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
        
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/lovable-uploads/8d93ccd6-f135-4472-ad9a-677825e40020.png')] bg-no-repeat bg-cover opacity-20" />
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
              className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-700 text-blue-100 text-sm font-medium"
            >
              The Ultimate IT Department
            </motion.span>
            
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
            >
              Azteca Technology Has You Covered
            </motion.h1>
            
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-blue-100 text-lg mb-8 leading-relaxed"
            >
              We understand practical deployment of technology. Whether it's solving problems, planning for growth, or optimization, our team of experts is ready to help your business thrive.
            </motion.p>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <AnimatedButton href="/products" withArrow className="bg-blue-500 hover:bg-blue-600 text-white">
                Explore Our Solutions
              </AnimatedButton>
              
              <AnimatedButton href="/contact" variant="outline" className="border-blue-400 text-white hover:bg-blue-700">
                Contact Us
              </AnimatedButton>
            </motion.div>
          </motion.div>
          
          {/* Right column: IT Services Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-6">
              <ServiceIcon 
                title="IT Management" 
                icon="/lovable-uploads/8d93ccd6-f135-4472-ad9a-677825e40020.png"
                delay={0.1}
              />
              <ServiceIcon 
                title="Disaster Recovery" 
                icon="/lovable-uploads/8d93ccd6-f135-4472-ad9a-677825e40020.png"
                delay={0.2}
              />
              <ServiceIcon 
                title="Server Management" 
                icon="/lovable-uploads/8d93ccd6-f135-4472-ad9a-677825e40020.png"
                delay={0.3}
              />
              <ServiceIcon 
                title="Network Management" 
                icon="/lovable-uploads/8d93ccd6-f135-4472-ad9a-677825e40020.png"
                delay={0.4}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServiceIcon = ({ title, icon, delay = 0 }: { title: string; icon: string; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/15 transition-all"
    >
      <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <div className="text-white text-4xl">
          {title.charAt(0)}
        </div>
      </div>
      <h3 className="text-white font-medium">{title}</h3>
    </motion.div>
  );
};

export default Hero;
