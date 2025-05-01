import React from 'react';
import { ProductCard } from '@/components/shared/ProductCard';

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  slug: string;
}

interface ProductsShowcaseProps {
  title: string;
  description: string;
  products: Product[];
}

const ProductsShowcase: React.FC<ProductsShowcaseProps> = ({ title, description, products }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title and Description */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">{title}</h2>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              image={product.imageUrl}
              link={`/products/${product.slug}`}
              index={index}
              variant="default"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
