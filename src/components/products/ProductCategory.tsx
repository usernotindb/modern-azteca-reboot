
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
  productImages?: Record<string, string>;
  onImageChange?: (imageId: string, newImageSrc: string) => void;
}

const ProductCategory = ({
  category,
  isFirst,
  productImages = {},
  onImageChange
}: ProductCategoryProps) => {
  // Helper function to get product ID from name
  const getProductId = (name: string): string => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <div className={`py-12 ${!isFirst ? 'border-t border-aztec-100' : ''}`}>
      <SlideUp>
        <SlideUpItem className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-aztec-900">{category.name}</h2>
          <p className="text-aztec-600 mt-2">{category.description}</p>
        </SlideUpItem>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {category.products.map((product, productIndex) => {
            const imageId = `category-list-${category.slug}-product-${productIndex}`;
            const currentImage = productImages?.[imageId] || product.image;
            
            return (
              <SlideUpItem key={product.id}>
                <ProductCard 
                  name={product.name} 
                  price={product.price} 
                  description={product.description} 
                  image={currentImage} 
                  categorySlug={category.slug} 
                  delay={0.1 * productIndex} 
                  variant="product" 
                  onLearnMore={() => scrollToElement(getProductId(product.name), 100)}
                  imageId={imageId}
                  onImageChange={onImageChange}
                />
              </SlideUpItem>
            );
          })}
        </div>
      </SlideUp>
    </div>
  );
};

export default ProductCategory;
