
import Layout from '@/components/layout/Layout';
import FadeIn from '@/components/ui/FadeIn';
import SlideUp, { SlideUpItem } from '@/components/ui/SlideUp';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { ChevronRight } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      id: 1,
      name: "Premium Collection",
      description: "Our flagship line featuring the finest materials and craftsmanship",
      products: [
        { id: 101, name: "Premium Product 1", price: "$199" },
        { id: 102, name: "Premium Product 2", price: "$249" },
        { id: 103, name: "Premium Product 3", price: "$299" },
      ]
    },
    {
      id: 2,
      name: "Essentials Series",
      description: "Everyday excellence with our signature attention to detail",
      products: [
        { id: 201, name: "Essential Product 1", price: "$99" },
        { id: 202, name: "Essential Product 2", price: "$129" },
        { id: 203, name: "Essential Product 3", price: "$149" },
      ]
    },
    {
      id: 3,
      name: "Limited Edition",
      description: "Exclusive designs created in small batches for discerning customers",
      products: [
        { id: 301, name: "Limited Product 1", price: "$399" },
        { id: 302, name: "Limited Product 2", price: "$449" },
        { id: 303, name: "Limited Product 3", price: "$499" },
      ]
    },
    {
      id: 4,
      name: "Custom Solutions",
      description: "Tailored to your exact specifications with personalized service",
      products: [
        { id: 401, name: "Custom Product 1", price: "Custom" },
        { id: 402, name: "Custom Product 2", price: "Custom" },
        { id: 403, name: "Custom Product 3", price: "Custom" },
      ]
    }
  ];

  return (
    <Layout>
      <div className="mt-16 lg:mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent-50 text-accent-600 text-sm font-medium">
              Our Collections
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-aztec-900">
              Premium Products
            </h1>
            <p className="text-aztec-600 text-lg mb-8 max-w-2xl mx-auto">
              Explore our carefully crafted collections designed with precision and elegance.
            </p>
          </FadeIn>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {productCategories.map((category, index) => (
            <div key={category.id} className={`py-12 ${index !== 0 ? 'border-t border-aztec-100' : ''}`}>
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
                        delay={0.1 * productIndex}
                      />
                    </SlideUpItem>
                  ))}
                </div>
              </SlideUp>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

const ProductCard = ({ name, price, delay = 0 }: { name: string; price: string; delay?: number }) => {
  return (
    <div className="group bg-white border border-aztec-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-square bg-aztec-100 relative">
        <div className="absolute inset-0 flex items-center justify-center text-aztec-500 font-medium">
          Product Image
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-aztec-900 group-hover:text-accent-600 transition-colors">
            {name}
          </h3>
          <span className="bg-aztec-50 text-aztec-800 px-3 py-1 rounded-full text-sm font-medium">
            {price}
          </span>
        </div>
        
        <p className="text-aztec-600 mb-6">
          This is a short description of the product features and benefits. It highlights what makes this product special.
        </p>
        
        <AnimatedButton
          href="#"
          variant="outline"
          className="w-full justify-center border-aztec-200 text-aztec-800 hover:bg-accent-50 hover:text-accent-700 hover:border-accent-200"
          icon={<ChevronRight className="h-4 w-4" />}
          iconPosition="right"
        >
          View Details
        </AnimatedButton>
      </div>
    </div>
  );
};

export default Products;
