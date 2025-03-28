import SlideUp, { SlideUpItem } from '@/components/ui/SlideUp';
import ProductCard from '@/components/shared/ProductCard';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { Product } from '@/lib/types/product';
import { scrollToElement } from '@/lib/hooks/useScroll';

interface ProductCategoryProps {
  category: {
    id: number;
    name: string;
    description: string;
    products: Product[];
    slug: string;
  };
  isFirst: boolean;
}

const ProductCategory = ({
  category,
  isFirst
}: ProductCategoryProps) => {
  // Helper function to get product ID from name
  const getProductId = (name: string): string => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };

  // Helper function to get the product detail page URL
  const getProductDetailUrl = (product: Product) => {
    if (category.slug === 'hardware-solutions') {
      if (product.name.toLowerCase().includes('laptop')) return '/products/laptops';
      if (product.name.toLowerCase().includes('server')) return '/products/servers';
      if (product.name.toLowerCase().includes('workstation')) return '/products/workstations';
    }
    return `/products/${category.slug}`;
  };

  return (
    <div className={`py-12 ${!isFirst ? 'border-t border-aztec-100' : ''}`}>
      <SlideUp>
        <SlideUpItem className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-aztec-900">{category.name}</h2>
          <p className="text-aztec-600 mt-2">{category.description}</p>
        </SlideUpItem>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {category.products.map((product, productIndex) => (
            <SlideUpItem key={product.id}>
              <ProductCard 
                name={product.name} 
                price={product.price} 
                description={product.description} 
                image={product.image} 
                categorySlug={category.slug} 
                delay={0.1 * productIndex} 
                variant="product" 
                onLearnMore={() => {
                  // If we're viewing the hardware solutions category, redirect to the specific product page
                  if (category.slug === 'hardware-solutions') {
                    window.location.href = getProductDetailUrl(product);
                  } else {
                    // Otherwise, scroll to the product section in the current page
                    scrollToElement(getProductId(product.name), 100);
                  }
                }} 
              />
            </SlideUpItem>
          ))}
        </div>
      </SlideUp>
    </div>
  );
};

export default ProductCategory;
