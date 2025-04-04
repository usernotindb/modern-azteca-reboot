
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../ui/FadeIn';
import AnimatedButton from '../ui/AnimatedButton';

const About = () => {
  const ref = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const imageTranslateY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <FadeIn>
              <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                ABOUT US
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-aztec-900">
                Your Trusted IT Partner Since 2000
              </h2>
              
              <div className="space-y-4 text-aztec-600">
                <p>
                  Azteca Technology has been providing cutting-edge IT solutions to businesses across industries for over 15 years. We're committed to delivering innovative, reliable, and secure technology services that help our clients achieve their strategic objectives.
                </p>
                
                <p>
                  Our team of experienced IT professionals brings a wealth of knowledge and expertise to every project, ensuring that our clients receive the highest quality of service and support.
                </p>
                
                <p>
                  We understand that every business is unique, which is why we take a personalized approach to each client relationship. We work closely with you to understand your specific needs and goals, and develop customized solutions that deliver measurable results.
                </p>
              </div>
              
              <div className="mt-8">
                <AnimatedButton 
                  href="/about" 
                  withArrow 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md"
                >
                  Learn More About Us
                </AnimatedButton>
              </div>
            </FadeIn>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative">
            <motion.div 
              style={{ y: imageTranslateY }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img 
                src="/lovable-uploads/aafd8b1b-4480-41c4-9f11-0d6862cff6dd.png" 
                alt="Azteca Technology Team" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
