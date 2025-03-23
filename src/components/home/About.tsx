
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../ui/FadeIn';
import AnimatedButton from '../ui/AnimatedButton';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const imageTranslateY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  return (
    <section ref={ref} className="section-padding bg-aztec-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent-50 rounded-full opacity-30 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-aztec-100 rounded-full opacity-50 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Images with parallax effect */}
          <div className="relative">
            <motion.div 
              style={{ y: imageTranslateY }}
              className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-aztec-800 flex items-center justify-center text-white text-xl font-medium">
                About Image
              </div>
            </motion.div>
            
            <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square bg-white p-3 rounded-xl shadow-lg hidden lg:block">
              <div className="w-full h-full bg-aztec-200 rounded-lg flex items-center justify-center">
                Detail Image
              </div>
            </div>
          </div>
          
          {/* Right column: Content */}
          <div className="lg:pl-8">
            <FadeIn direction="right" className="max-w-xl">
              <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white text-aztec-800 text-sm font-medium">
                Our Story
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-aztec-900">
                Committed to Excellence Since the Beginning
              </h2>
              
              <div className="space-y-4 text-aztec-700 mb-8">
                <p>
                  Founded on the principles of exceptional craftsmanship and innovative design, our journey began with a simple mission: to create products that inspire and endure.
                </p>
                <p>
                  Every step of our process reflects our dedication to quality and attention to detail. We believe that true excellence comes from the careful consideration of every element, no matter how small.
                </p>
                <p>
                  Our team of passionate professionals brings diverse expertise to each project, ensuring that we deliver experiences that exceed expectations and stand the test of time.
                </p>
              </div>
              
              <AnimatedButton href="/about" withArrow className="bg-aztec-900 hover:bg-aztec-800 text-white">
                Learn More About Us
              </AnimatedButton>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
