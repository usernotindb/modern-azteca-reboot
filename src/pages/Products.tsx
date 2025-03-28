
import Layout from '@/components/layout/Layout';
import FadeIn from '@/components/ui/FadeIn';
import ProductCategory from '@/components/products/ProductCategory';
import { productCategories } from '@/data/productData';

const Products = () => {
  return (
    <Layout>
      <div className="mt-16 lg:mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent-50 text-accent-600 text-sm font-medium">
              Our Products & Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-aztec-900">
              Technology Solutions
            </h1>
            <p className="text-aztec-600 text-lg mb-8 max-w-2xl mx-auto">
              Explore our comprehensive range of software, hardware, and IT services designed to help your business thrive.
            </p>
          </FadeIn>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {productCategories.map((category, index) => (
            <ProductCategory 
              key={category.id} 
              category={category} 
              isFirst={index === 0} 
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
