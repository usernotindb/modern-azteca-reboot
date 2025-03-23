
import Layout from '@/components/layout/Layout';
import FadeIn from '@/components/ui/FadeIn';
import SlideUp, { SlideUpItem } from '@/components/ui/SlideUp';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { ChevronRight } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      id: 1,
      name: "Software Solutions",
      description: "Professional software for businesses of all sizes",
      products: [
        { 
          id: 101, 
          name: "ATS Tax Software", 
          price: "Contact for pricing",
          description: "Professional tax software for high volume tax businesses with comprehensive features for tax preparation and filing.",
          image: "/lovable-uploads/628857d0-dac0-42fc-b3e9-4528eee9ef00.png" 
        },
        { 
          id: 102, 
          name: "Office 365", 
          price: "Starting at $149.99/year",
          description: "Work anywhere, anytime, on any device with Microsoft's industry-leading productivity suite.",
          image: "/lovable-uploads/f9ca7c28-be78-46ba-9cdc-eff03c287cb7.png" 
        },
        { 
          id: 103, 
          name: "Anti-Virus Solutions", 
          price: "$49.99/year",
          description: "Complete protection for your devices with WiFi Security VPN and antivirus protection.",
          image: "/lovable-uploads/74da57e4-5aa3-4a37-aa85-c1c28943253c.png" 
        },
      ]
    },
    {
      id: 2,
      name: "Hardware Solutions",
      description: "Premium hardware for optimal performance",
      products: [
        { 
          id: 201, 
          name: "Laptops", 
          price: "Starting at $899",
          description: "Get everything done faster with solid state drives, powerful processors, and sleek designs.",
          image: "/lovable-uploads/0cc76fb6-7912-43fd-9e88-c94137d92a37.png" 
        },
        { 
          id: 202, 
          name: "Servers", 
          price: "Starting at $1,499",
          description: "Operate reliably, manage easily, and scale your business with our server solutions.",
          image: "/lovable-uploads/9f23050e-b4e0-417a-bc5f-cf88dd8c3e82.png" 
        },
        { 
          id: 203, 
          name: "Workstations", 
          price: "Starting at $1,299",
          description: "Fully customizable Workstation-class performance for demanding professional applications.",
          image: "/lovable-uploads/628857d0-dac0-42fc-b3e9-4528eee9ef00.png" 
        },
      ]
    },
    {
      id: 3,
      name: "IT Services",
      description: "Comprehensive IT support and management",
      products: [
        { 
          id: 301, 
          name: "Managed IT Services", 
          price: "Custom pricing",
          description: "Comprehensive IT management to keep your systems running smoothly and securely.",
          image: "/lovable-uploads/8d93ccd6-f135-4472-ad9a-677825e40020.png" 
        },
        { 
          id: 302, 
          name: "Disaster Recovery", 
          price: "Custom pricing",
          description: "Protect your business with our robust backup and disaster recovery solutions.",
          image: "/lovable-uploads/8d93ccd6-f135-4472-ad9a-677825e40020.png" 
        },
        { 
          id: 303, 
          name: "Network Management", 
          price: "Custom pricing",
          description: "Keep your network infrastructure secure, up-to-date and operating at peak performance.",
          image: "/lovable-uploads/8d93ccd6-f135-4472-ad9a-677825e40020.png" 
        },
      ]
    },
    {
      id: 4,
      name: "Security Solutions",
      description: "Protect your business data and assets",
      products: [
        { 
          id: 401, 
          name: "IP Camera Systems", 
          price: "Custom pricing",
          description: "Expert installation of security camera systems for homes and businesses.",
          image: "/lovable-uploads/74da57e4-5aa3-4a37-aa85-c1c28943253c.png" 
        },
        { 
          id: 402, 
          name: "Anti-Virus Protection", 
          price: "$49.99/year",
          description: "Complete protection for your devices with WiFi Security VPN and antivirus protection.",
          image: "/lovable-uploads/74da57e4-5aa3-4a37-aa85-c1c28943253c.png" 
        },
        { 
          id: 403, 
          name: "Network Security", 
          price: "Custom pricing",
          description: "Comprehensive network security solutions to protect your business from threats.",
          image: "/lovable-uploads/8d93ccd6-f135-4472-ad9a-677825e40020.png" 
        },
      ]
    }
  ];

  return (
    <Layout>
      <div className="mt-16 lg:mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent-50 text-accent-600 text-sm font-medium">
              Our Products & Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-aztec-900">
              Technology Solutions
            </h1>
            <p className="text-aztec-600 text-lg mb-8 max-w-2xl mx-auto">
              Explore our comprehensive range of software, hardware, and IT services designed to help your business thrive.
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
                        description={product.description}
                        image={product.image}
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

const ProductCard = ({ 
  name, 
  price, 
  description, 
  image, 
  delay = 0 
}: { 
  name: string; 
  price: string; 
  description: string;
  image: string;
  delay?: number 
}) => {
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

export default Products;
