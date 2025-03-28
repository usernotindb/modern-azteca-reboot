
import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import { ShieldCheck, Server, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedButton from '../ui/AnimatedButton';

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const heroItems = [
    {
      title: "IT Management",
      description: "Comprehensive services to manage your entire IT infrastructure.",
      icon: <Server className="w-8 h-8" />,
      link: "/products/it-services"
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with advanced security solutions.",
      icon: <ShieldCheck className="w-8 h-8" />,
      link: "/products/security-solutions"
    },
    {
      title: "Software Solutions",
      description: "Custom software development for your business needs.",
      icon: <Code className="w-8 h-8" />,
      link: "/products/software-solutions"
    }
  ];
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroItems.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [heroItems.length]);
  
  return (
    <section className="relative min-h-[85vh] overflow-hidden flex items-center">
      <HeroBackground />
      
      <div className="container mx-auto px-4 relative z-10 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <HeroContent controls={controls} reference={contentRef} />
          </div>
          
          {/* Card style element */}
          <div className="lg:col-span-5">
            <div className="hidden lg:block">
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 gap-6">
                    {heroItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: currentIndex === index ? 1 : 0.5, 
                          y: 0,
                          scale: currentIndex === index ? 1 : 0.95
                        }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 transition-all"
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-full bg-blue-600/20 text-blue-100">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-blue-100 mb-4">{item.description}</p>
                            <AnimatedButton
                              href={item.link}
                              variant="outline"
                              className="border-blue-300 bg-blue-600 text-black hover:bg-blue-500 font-medium shadow-sm w-full justify-center"
                              withArrow
                            >
                              Learn More
                            </AnimatedButton>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
