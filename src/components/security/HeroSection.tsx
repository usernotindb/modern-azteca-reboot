
import { motion } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { Shield, ChevronDown } from 'lucide-react';
import { ProductCategory } from '@/data/productData';

interface HeroSectionProps {
  category: ProductCategory;
}

const HeroSection = ({ category }: HeroSectionProps) => {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Shield Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0.1 + Math.random() * 0.2,
              rotate: Math.random() * 360,
              scale: 0.5 + Math.random() * 0.5
            }}
            animate={{ 
              rotate: [null, Math.random() * 360 * (Math.random() > 0.5 ? 1 : -1)],
              scale: [null, 0.7 + Math.random() * 0.5],
              opacity: [null, 0.05 + Math.random() * 0.1]
            }}
            transition={{ 
              duration: 15 + Math.random() * 15, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute w-16 h-16 text-white/10"
            style={{ zIndex: 1 }}
          >
            <Shield className="w-full h-full" />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-purple-900/30 mix-blend-multiply"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-purple-100 text-purple-800 text-sm font-medium">
            Comprehensive Security
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            {category.name}
          </h1>
          <p className="text-purple-100 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            {category.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <AnimatedButton 
              href="/contact" 
              className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-semibold"
            >
              Get a Free Security Assessment
            </AnimatedButton>
            <AnimatedButton 
              href="#solutions" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              icon={<ChevronDown className="h-4 w-4" />}
              iconPosition="right"
            >
              Explore Solutions
            </AnimatedButton>
          </div>
        </FadeIn>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
