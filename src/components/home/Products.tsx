
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProductCard from '../shared/ProductCard';
import ProductsHeader from './ProductsHeader';
import ProductsShowcase from './ProductsShowcase';
import { productsList } from './ProductsData';

const Products = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const translateX = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
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
            />
          ))}
        </motion.div>
        
        {/* Product detail sections that can be scrolled to */}
        <div className="mt-20 space-y-12">
          {productsList.map((product) => {
            // Create ID from product name
            const productId = product.name.toLowerCase().replace(/\s+/g, '-');
            
            return (
              <div 
                key={product.id} 
                id={productId}
                className="border-t border-gray-100 pt-12"
              >
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/3 mb-8 lg:mb-0">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                  <div className="lg:w-2/3 lg:pl-12">
                    <h3 className="text-2xl font-bold mb-4 text-aztec-900">
                      {product.name}
                    </h3>
                    <p className="text-aztec-600 mb-6">
                      {product.description}
                    </p>
                    <p className="text-aztec-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget
                      urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus.
                      Maecenas sed diam eget risus varius blandit sit amet non magna.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
