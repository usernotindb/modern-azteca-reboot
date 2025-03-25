
import SlideUp, { SlideUpItem } from '@/components/ui/SlideUp';
import ProductCard from '../shared/ProductCard';

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
    slug: string;
  };
  isFirst: boolean;
}

const ProductCategory = ({ category, isFirst }: ProductCategoryProps) => {
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
              />
            </SlideUpItem>
          ))}
        </div>
      </SlideUp>
    </div>
  );
};

export default ProductCategory;
