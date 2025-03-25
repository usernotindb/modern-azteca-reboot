
import { motion } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { ArrowRight, Cpu, Server, Laptop } from 'lucide-react';
import { ProductCategory } from '@/data/productData';

interface ProductsShowcaseProps {
  category: ProductCategory;
}

const ProductsShowcase = ({ category }: ProductsShowcaseProps) => {
  const getIcon = (name: string) => {
    if (name.includes("Laptop")) return <Laptop className="w-8 h-8" />;
    if (name.includes("Server")) return <Server className="w-8 h-8" />;
    return <Cpu className="w-8 h-8" />;
  };

  return (
    <section className="py-20 bg-white" id="products">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Hardware That Powers Your Success
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Discover our range of high-performance hardware solutions designed to meet the needs of modern businesses.
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
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all group"
            >
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 flex justify-between items-center">
                <div className="bg-white p-3 rounded-full shadow-md">
                  {getIcon(product.name)}
                </div>
                <span className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {product.price}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <AnimatedButton 
                    href="/contact" 
                    className="w-full justify-center bg-gray-800 hover:bg-gray-900 text-white"
                  >
                    Get a Quote
                  </AnimatedButton>
                  
                  <AnimatedButton 
                    href={`#${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                    variant="outline"
                    className="w-full justify-center border-gray-300 text-gray-700 hover:bg-gray-100"
                    icon={<ArrowRight className="h-4 w-4" />}
                    iconPosition="right"
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

export default ProductsShowcase;
