
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProductCard from '@/components/shared/ProductCard';
import ProductsHeader from './ProductsHeader';
import ProductsShowcase from './ProductsShowcase';
import { productsList } from './ProductsData';
import { scrollToElement } from '@/lib/hooks/useScroll';

const Products = () => {
  const ref = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const translateX = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Helper function to get product ID from name
  const getProductId = (name: string): string => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };
  
  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ProductsHeader />
        
        <ProductsShowcase />
        
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productsList.map((product, index) => (
            <ProductCard 
              key={product.id} 
              name={product.name} 
              description={product.description} 
              image={product.image} 
              index={index} 
              variant="home" 
              onLearnMore={() => scrollToElement(getProductId(product.name), 100)} 
              className="hover:shadow-lg"
            />
          ))}
        </motion.div>
        
        {/* Product detail sections that can be scrolled to */}
      </div>
    </section>
  );
};

export default Products;
