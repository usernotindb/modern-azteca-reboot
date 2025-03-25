
import { Link } from 'react-router-dom';
import SlideUp, { SlideUpItem } from '@/components/ui/SlideUp';
import ProductCard from './ProductCard';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

interface ProductCategoryProps {
  category: {
    id: number;
    name: string;
    description: string;
    products: Product[];
  };
  isFirst: boolean;
}

const ProductCategory = ({ category, isFirst }: ProductCategoryProps) => {
  const getCategoryUrl = (name: string) => {
    return `/products/${name.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <div className={`py-16 ${!isFirst ? 'border-t border-aztec-100' : ''}`}>
      <SlideUp>
        <SlideUpItem className="mb-8 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <span className="inline-block px-3 py-1 mb-2 rounded-full bg-accent-50 text-accent-600 text-xs font-medium">
              Solutions
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-aztec-900">{category.name}</h2>
            <p className="text-aztec-600 mt-2 max-w-2xl">{category.description}</p>
          </div>
          <AnimatedButton
            href={getCategoryUrl(category.name)}
            variant="outline"
            className="self-start md:self-end border-accent-200 text-accent-700 hover:bg-accent-50"
            icon={<ChevronRight className="h-4 w-4" />}
            iconPosition="right"
          >
            View All
          </AnimatedButton>
        </SlideUpItem>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {category.products.map((product, productIndex) => (
            <SlideUpItem key={product.id}>
              <ProductCard 
                name={product.name} 
                price={product.price} 
                description={product.description}
                image={product.image}
                delay={0.1 * productIndex}
              />
            </SlideUpItem>
          ))}
        </div>
        
        <SlideUpItem>
          <motion.div 
            className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 mt-8 relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute -right-6 -bottom-6 opacity-10">
              <div className="text-blue-500 transform rotate-12 scale-150">
                {getCategoryIcon(category.name)}
              </div>
            </div>
            <Link to={getCategoryUrl(category.name)} className="block relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-aztec-900 mb-2">Explore All {category.name}</h3>
                  <p className="text-aztec-700 max-w-2xl">
                    Discover our complete range of {category.name.toLowerCase()} and find the perfect solution for your business.
                  </p>
                </div>
                <AnimatedButton
                  href={getCategoryUrl(category.name)}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  withArrow
                >
                  Learn More
                </AnimatedButton>
              </div>
            </Link>
          </motion.div>
        </SlideUpItem>
      </SlideUp>
    </div>
  );
};

// Helper function to get the appropriate icon for each category
const getCategoryIcon = (categoryName: string) => {
  switch (categoryName) {
    case "Software Solutions":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 8l-5-5-5 5M12 3v16" />
        </svg>
      );
    case "Hardware Solutions":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      );
    case "IT Services":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
          <path d="M7 12h10" />
          <path d="M12 7v10" />
        </svg>
      );
    case "Security Solutions":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m21 8-2 2-6-6 2-2 6 6Z" />
          <path d="m19 10-6-6-9 9-3 9 9-3 9-9Z" />
          <path d="m18 12-6-6" />
          <path d="M9 3v4" />
          <path d="M3 9h4" />
        </svg>
      );
  }
};

export default ProductCategory;
