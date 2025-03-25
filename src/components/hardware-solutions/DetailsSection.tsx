
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { Check } from 'lucide-react';
import { ProductCategory } from '@/data/productData';

interface DetailsSectionProps {
  category: ProductCategory;
}

const DetailsSection = ({ category }: DetailsSectionProps) => {
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  return (
    <section ref={parallaxRef} className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative">
      <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Hardware Specifications & Details
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our hardware solutions are built with the latest technology to ensure optimal performance, 
            reliability, and scalability for your business.
          </p>
        </FadeIn>
        
        {category.products.map((product, index) => (
          <div 
            key={product.id} 
            id={product.name.toLowerCase().replace(/\s+/g, '-')}
            className={`mb-16 ${index !== 0 ? 'pt-12 border-t border-gray-200' : ''}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <FadeIn direction={index % 2 === 0 ? "right" : "left"}>
                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Specifications:</h4>
                    <ul className="space-y-3">
                      {[
                        "Latest generation processors for optimal performance",
                        "High-speed memory for multitasking efficiency",
                        "Reliable storage solutions with backup capabilities",
                        "Enhanced graphics for demanding applications",
                        "Energy-efficient design for reduced operating costs"
                      ].map((spec, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start"
                        >
                          <span className="flex-shrink-0 bg-green-500 rounded-full p-1 mr-3 mt-1">
                            <Check className="h-3 w-3 text-white" />
                          </span>
                          <span className="text-gray-600">{spec}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <AnimatedButton 
                      href="/contact" 
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Request a Quote
                    </AnimatedButton>
                    <span className="inline-flex items-center text-gray-600 font-semibold">
                      Starting at <span className="text-blue-600 ml-1">{product.price}</span>
                    </span>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn direction={index % 2 === 0 ? "left" : "right"}>
                <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="bg-white p-2 rounded-xl shadow-lg overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default DetailsSection;
