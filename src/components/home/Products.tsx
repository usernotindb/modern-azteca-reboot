
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProductCard from '@/components/shared/ProductCard';
import ProductsHeader from './ProductsHeader';
import ProductsShowcase from './ProductsShowcase';
import { productsList } from './ProductsData';
import { useNavigate } from 'react-router-dom';
import { getImagePath } from '@/config/images';

const Products = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const translateX = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  // Handle navigation to the specific product page using the link property
  const handleLearnMore = (productIndex: number) => {
    const product = productsList[productIndex];
    if (product && product.link) {
      navigate(product.link);
    }
  };
  
  return (
    <section 
      ref={ref} 
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ProductsHeader />
        
        <ProductsShowcase />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          style={{ 
            position: 'relative',
            translateX 
          }}
        >
          {productsList.map((product, index) => (
            <ProductCard 
              key={product.id} 
              name={product.name} 
              description={product.description} 
              imageId={product.imageId}
              link={product.link}
              index={index} 
              variant="home" 
              onLearnMore={() => handleLearnMore(index)} 
              className="hover:shadow-lg"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
