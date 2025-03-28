
import { motion } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { ChevronDown } from 'lucide-react';
import { ProductCategory } from '@/data/productData';

interface HeroSectionProps {
  category: ProductCategory;
}

const HeroSection = ({ category }: HeroSectionProps) => {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/9f23050e-b4e0-417a-bc5f-cf88dd8c3e82.png')] bg-cover bg-center mix-blend-overlay"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-gray-100 text-gray-800 text-sm font-medium">
            High Performance Equipment
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            {category.name}
          </h1>
          <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            {category.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <AnimatedButton 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              Get a Quote
            </AnimatedButton>
            <AnimatedButton 
              href="#products" 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              icon={<ChevronDown className="h-4 w-4" />}
              iconPosition="right"
            >
              View Hardware
            </AnimatedButton>
          </div>
        </FadeIn>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
