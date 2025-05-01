import SlideUp, { SlideUpItem } from '@/components/ui/SlideUp';
import ProductCard from '@/components/shared/ProductCard';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { Product } from '@/lib/types/product';
import { scrollToElement } from '@/lib/hooks/useScroll';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  
  // Helper function to get product ID from name for anchors
  const getProductId = (name: string): string => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };

  // Handle the learn more action - use link if available or create appropriate navigation
  const handleLearnMore = (product: Product) => {
    // If the product has a link property, use it
    if (product.link) {
      // Check if the link contains a hash for anchor scrolling
      if (product.link.includes('#')) {
        const [path, anchor] = product.link.split('#');
        
        // If we're already on the correct page, just scroll
        if (window.location.pathname === path) {
          scrollToElement(anchor, 100);
        } else {
          // Otherwise navigate to the page and then scroll
          navigate(product.link);
        }
      } else {
        // Simple navigation to a page without anchors
        navigate(product.link);
      }
    } else {
      // Legacy fallback behavior
      if (category.slug === 'hardware-solutions') {
        if (product.name.toLowerCase().includes('laptop')) navigate('/products/laptops');
        else if (product.name.toLowerCase().includes('server')) navigate('/products/servers');
        else if (product.name.toLowerCase().includes('workstation')) navigate('/products/workstations');
      } else {
        // Otherwise, scroll to the product section in the current page
        scrollToElement(getProductId(product.name), 100);
      }
    }
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
            <SlideUpItem key={product.id} className="relative">
              {/* We wrap the product card in a div with the ID for anchor navigation */}
              <div id={getProductId(product.name)}>
                <ProductCard 
                  key={product.id}
                  name={product.name}
                  description={product.shortDescription || product.description}
                  imageId={product.imageId}
                  categorySlug={category}
                  price={product.price}
                  link={`/products/${product.slug || ''}`}
                  variant="default"
                  index={productIndex}
                  onLearnMore={() => handleLearnMore(product)} 
                />
              </div>
            </SlideUpItem>
          ))}
        </div>
      </SlideUp>
    </div>
  );
};

export default ProductCategory;
