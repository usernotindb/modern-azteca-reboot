
import { Link } from 'react-router-dom';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { ChevronRight } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: string;
  description: string;
  image: string;
  delay?: number;
}

const ProductCard = ({ 
  name, 
  price, 
  description, 
  image, 
  delay = 0 
}: ProductCardProps) => {
  // Get category name from product name to create proper link
  const getCategoryForProduct = (productName: string): string => {
    // Map product names to their categories
    const categoryMap: Record<string, string> = {
      'ATS Tax Software': 'software-solutions',
      'Office 365': 'software-solutions',
      'Anti-Virus Solutions': 'software-solutions',
      'Laptops': 'hardware-solutions',
      'Servers': 'hardware-solutions',
      'Workstations': 'hardware-solutions',
      'Managed IT Services': 'it-services',
      'Disaster Recovery': 'it-services',
      'Network Management': 'it-services',
      'IP Camera Systems': 'security-solutions',
      'Anti-Virus Protection': 'security-solutions',
      'Network Security': 'security-solutions',
    };
    
    return categoryMap[productName] || 'products';
  };

  return (
    <div className="group bg-white border border-aztec-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="aspect-video bg-aztec-50 relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-aztec-900 group-hover:text-accent-600 transition-colors">
            {name}
          </h3>
          <span className="bg-aztec-50 text-aztec-800 px-3 py-1 rounded-full text-sm font-medium">
            {price}
          </span>
        </div>
        
        <p className="text-aztec-600 mb-6 flex-grow">
          {description}
        </p>
        
        <AnimatedButton
          href="/contact"
          variant="outline"
          className="w-full justify-center border-aztec-200 text-aztec-800 hover:bg-accent-50 hover:text-accent-700 hover:border-accent-200"
          icon={<ChevronRight className="h-4 w-4" />}
          iconPosition="right"
        >
          Get a Quote
        </AnimatedButton>
      </div>
    </div>
  );
};

export default ProductCard;
