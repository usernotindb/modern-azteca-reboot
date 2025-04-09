
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { Check } from 'lucide-react';
import { ProductCategory } from '@/data/productData';
import { Product } from '@/lib/types/product';
import { getProductSectionId } from './securityUtils';
import { getImagePath } from '@/config/images';

interface DetailedProductSectionProps {
  products: Product[];
}

const DetailedProductSection = ({ products }: DetailedProductSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 lg:px-8">
        {products.map((product, index) => {
          // Use the utility to create consistent section IDs
          const sectionId = getProductSectionId(product.name);
          
          return (
            <div 
              key={product.id}
              id={sectionId}
              className={`py-16 ${index !== 0 ? 'border-t border-slate-200 mt-16' : ''}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <FadeIn direction={index % 2 === 0 ? "right" : "left"} className={index % 2 === 0 ? "order-1" : "order-2 lg:order-1"}>
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                      {product.name}
                      <span className="block text-sm font-normal text-purple-600 mt-2">
                        {product.price}
                      </span>
                    </h2>
                    <p className="text-slate-600 mb-8 text-lg">{product.description}</p>
                    
                    <div className="bg-gradient-to-br from-purple-50 to-slate-50 rounded-xl p-6 shadow-md border border-slate-200">
                      <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Benefits</h3>
                      <ul className="space-y-4">
                        {[
                          `Enhanced security with ${product.name}`,
                          "Easy integration with existing systems",
                          "Cost-effective protection for your business",
                          "Professional installation and setup",
                          "Ongoing technical support and maintenance"
                        ].map((benefit, i) => (
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
                            <span className="text-slate-600">{benefit}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <AnimatedButton 
                        href="/contact" 
                        className="bg-purple-700 hover:bg-purple-800 text-white"
                        withArrow
                      >
                        Request a Quote
                      </AnimatedButton>
                      <AnimatedButton 
                        href="tel:+17143630006" 
                        variant="outline"
                        className="border-purple-300 text-purple-700 hover:bg-purple-50"
                      >
                        Call 714-363-0006
                      </AnimatedButton>
                    </div>
                  </div>
                </FadeIn>
                
                <FadeIn direction={index % 2 === 0 ? "left" : "right"} className={index % 2 === 0 ? "order-2" : "order-1 lg:order-2"}>
                  <div className="p-4 bg-gradient-to-br from-purple-100 to-slate-100 rounded-xl shadow-xl relative overflow-hidden">
                    <div className="aspect-square relative rounded-lg overflow-hidden border-4 border-white shadow-inner">
                      <img 
                        src={product.imageId ? getImagePath(product.imageId) : product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default DetailedProductSection;
