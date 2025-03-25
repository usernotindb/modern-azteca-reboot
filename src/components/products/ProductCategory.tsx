import SlideUp, { SlideUpItem } from '@/components/ui/SlideUp';
import ProductCard from '../shared/ProductCard';
import AnimatedButton from '@/components/ui/AnimatedButton';

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
        
        {/* Product detail sections with IDs for scrolling */}
        <div className="mt-16 space-y-16">
          {category.products.map((product) => {
            // Create ID from product name
            const productId = product.name.toLowerCase().replace(/\s+/g, '-');
            
            return (
              <SlideUpItem key={product.id}>
                <div 
                  id={productId} 
                  className="bg-white rounded-xl shadow-sm border border-aztec-50 overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3">
                      <div className="h-full">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    </div>
                    
                    <div className="lg:w-2/3 p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-aztec-900">
                          {product.name}
                        </h3>
                        {product.price && (
                          <span className="bg-aztec-50 text-aztec-800 px-3 py-1 rounded-full text-sm font-medium">
                            {product.price}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-aztec-600 mb-6">
                        {product.description}
                      </p>
                      
                      <div className="bg-aztec-50 p-6 rounded-lg mb-6">
                        <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                        <ul className="space-y-2 text-aztec-600">
                          <li>• High-performance components</li>
                          <li>• Enterprise-grade reliability</li>
                          <li>• Advanced security features</li>
                          <li>• Comprehensive warranty coverage</li>
                          <li>• Professional support services</li>
                        </ul>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <AnimatedButton
                          href="/contact"
                          className="sm:w-auto justify-center bg-accent-600 hover:bg-accent-700 text-white"
                        >
                          Request a Quote
                        </AnimatedButton>
                        
                        <AnimatedButton
                          href={`/products/${category.slug}`}
                          variant="outline"
                          className="sm:w-auto justify-center border-aztec-200"
                        >
                          View More Details
                        </AnimatedButton>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideUpItem>
            );
          })}
        </div>
      </SlideUp>
    </div>
  );
};

export default ProductCategory;
