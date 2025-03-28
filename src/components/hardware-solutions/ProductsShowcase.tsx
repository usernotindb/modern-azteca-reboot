
import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { ArrowRight, Cpu, Server, Laptop } from 'lucide-react';
import { ProductCategory } from '@/data/productData';
import ProductCard from '@/components/shared/ProductCard';

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
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              categorySlug={category.slug}
              index={index}
              variant="product"
              imageId={`category-${category.slug}-product-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
