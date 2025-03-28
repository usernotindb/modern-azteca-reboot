
import { useState } from 'react';
import { ProductCategory } from '@/data/productData';
import FadeIn from '@/components/ui/FadeIn';
import AnimatedButton from '@/components/ui/AnimatedButton';
import ImageSelector from '@/components/ui/ImageSelector';

interface DetailsSectionProps {
  category: ProductCategory;
}

const DetailsSection = ({ category }: DetailsSectionProps) => {
  // Store images state for each product
  const [productImages, setProductImages] = useState<Record<number, string>>({});

  const getProductImage = (productId: number, defaultImage: string) => {
    return productImages[productId] || defaultImage;
  };

  const handleImageChange = (productId: number, newImage: string) => {
    setProductImages(prev => ({
      ...prev,
      [productId]: newImage
    }));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Detailed Hardware Specifications
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Learn more about our high-quality hardware solutions and how they can benefit your business.
          </p>
        </FadeIn>
        
        <div className="space-y-16">
          {category.products.map((product) => {
            // Create ID from product name
            const productId = product.name.toLowerCase().replace(/\s+/g, '-');
            
            return (
              <div key={product.id} id={productId} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3">
                    <div className="h-full">
                      <ImageSelector
                        currentImage={getProductImage(product.id, product.image)}
                        onImageChange={(newImage) => handleImageChange(product.id, newImage)}
                        imageAlt={product.name}
                        position="top-left"
                        size="lg"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3 p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {product.name}
                      </h3>
                      {product.price && (
                        <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">
                          {product.price}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-700 mb-6">
                      {product.description}
                    </p>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                      <h4 className="text-lg font-semibold mb-4">Key Specifications</h4>
                      <ul className="space-y-2 text-gray-700">
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
                        className="sm:w-auto justify-center bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Request a Quote
                      </AnimatedButton>
                      
                      <AnimatedButton
                        href="/products"
                        variant="outline"
                        className="sm:w-auto justify-center border-gray-200"
                      >
                        Browse More Products
                      </AnimatedButton>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
