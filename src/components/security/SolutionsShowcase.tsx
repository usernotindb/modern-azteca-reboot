
import { motion } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { ArrowRight } from 'lucide-react';
import { ProductCategory } from '@/data/productData';
import { Product } from '@/lib/types/product';
import { getSecurityIcon, getProductSectionId } from './securityUtils';

interface SolutionsShowcaseProps {
  category: ProductCategory;
}

const SolutionsShowcase = ({ category }: SolutionsShowcaseProps) => {
  const scrollToProductSection = (productName: string) => {
    const targetId = getProductSectionId(productName);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Security Solutions for Every Need
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of security solutions designed to protect 
            your business, data, and assets from threats.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {category.products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-slate-50 rounded-xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-all group"
            >
              <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-8">
                <div className="flex items-center justify-between">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl text-white">
                    {getSecurityIcon(product.name)}
                  </div>
                  <span className="bg-yellow-500 text-purple-900 px-4 py-1 rounded-full text-sm font-semibold">
                    {product.price}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-600 mb-6">{product.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <AnimatedButton 
                    href="/contact" 
                    className="w-full justify-center bg-purple-700 hover:bg-purple-800 text-white"
                  >
                    Get a Quote
                  </AnimatedButton>
                  
                  <AnimatedButton 
                    href={`#${getProductSectionId(product.name)}`}
                    variant="outline"
                    className="w-full justify-center border-purple-300 text-purple-700 hover:bg-purple-50"
                    icon={<ArrowRight className="h-4 w-4" />}
                    iconPosition="right"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToProductSection(product.name);
                    }}
                  >
                    Learn More
                  </AnimatedButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsShowcase;
