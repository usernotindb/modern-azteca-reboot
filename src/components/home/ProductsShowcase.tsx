import React from 'react';
import AnimatedButton from '../ui/AnimatedButton';
const ProductsShowcase = () => {
  return <div className="bg-aztec-50 p-6 rounded-xl mb-16">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img alt="Dell hardware products" className="w-full max-w-2xl mx-auto rounded-lg shadow-lg" src="/lovable-uploads/944ad356-757c-4847-bb03-8e643c5032fc.png" />
        </div>
        <div className="lg:w-1/2 lg:pl-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-aztec-900">
            Premium Hardware Solutions
          </h3>
          <p className="text-aztec-600 mb-6">
            Aztecas partners with leading manufacturers to provide reliable, powerful hardware solutions that 
            meet the demands of modern businesses. From laptops to servers, we offer only the best in technology 
            equipment.
          </p>
          <AnimatedButton href="/products" className="bg-accent-600 hover:bg-accent-700 text-white">
            Explore Our Hardware
          </AnimatedButton>
        </div>
      </div>
    </div>;
};
export default ProductsShowcase;