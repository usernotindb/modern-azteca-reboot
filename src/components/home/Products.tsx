
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SlideUp, { SlideUpItem } from '../ui/SlideUp';
import AnimatedButton from '../ui/AnimatedButton';
import { ChevronRight } from 'lucide-react';

const Products = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const translateX = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const products = [
    {
      id: 1,
      name: "Laptops",
      description: "Get everything done faster, from booting up to accessing your data, with a 256GB solid state hard drive.",
      image: "/lovable-uploads/0cc76fb6-7912-43fd-9e88-c94137d92a37.png"
    },
    {
      id: 2,
      name: "Servers",
      description: "Operate reliably, manage easily, and scale your business. Ideal for growing businesses with remote offices focused on collaboration and file sharing.",
      image: "/lovable-uploads/9f23050e-b4e0-417a-bc5f-cf88dd8c3e82.png"
    },
    {
      id: 3,
      name: "Work Stations",
      description: "Fully customizable Workstation-class performance and affordability in a new, small form factor design. Featuring optional next generation graphics and Intel® processors.",
      image: "/lovable-uploads/628857d0-dac0-42fc-b3e9-4528eee9ef00.png"
    }
  ];

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <SlideUp>
            <SlideUpItem>
              <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent-50 text-accent-600 text-sm font-medium">
                Hardware Solutions
              </span>
            </SlideUpItem>
            
            <SlideUpItem>
              <h2 className="text-3xl md:text-4xl font-bold text-aztec-900 max-w-xl">
                For businesses that require value, flexibility and a range of performance options
              </h2>
            </SlideUpItem>
          </SlideUp>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 md:mt-0"
          >
            <AnimatedButton href="/products" withArrow variant="ghost" className="text-accent-600 hover:text-accent-700">
              View All Products
            </AnimatedButton>
          </motion.div>
        </div>
        
        <div className="bg-aztec-50 p-6 rounded-xl mb-16">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img 
                src="/lovable-uploads/0cc76fb6-7912-43fd-9e88-c94137d92a37.png" 
                alt="Dell hardware products" 
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
              />
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
              <AnimatedButton 
                href="/products" 
                className="bg-accent-600 hover:bg-accent-700 text-white"
              >
                Explore Our Hardware
              </AnimatedButton>
            </div>
          </div>
        </div>
        
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProductCard = ({ name, description, image, index }: { 
  name: string; 
  description: string;
  image: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group bg-white border border-aztec-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="aspect-square relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-aztec-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
          <AnimatedButton
            href={`/products/${name.toLowerCase().replace(/\s+/g, '-')}`}
            className="bg-white text-aztec-900 hover:bg-aztec-50"
            size="sm"
            icon={<ChevronRight className="h-4 w-4" />}
            iconPosition="right"
          >
            View Details
          </AnimatedButton>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-aztec-900 group-hover:text-accent-600 transition-colors">
          {name}
        </h3>
        
        <p className="text-aztec-600 mb-4">
          {description}
        </p>
        
        <AnimatedButton
          href={`/products/${name.toLowerCase().replace(/\s+/g, '-')}`}
          variant="outline"
          className="w-full justify-center bg-blue-600 hover:bg-blue-700 text-white border-0"
          size="sm"
        >
          Learn More...
        </AnimatedButton>
      </div>
    </motion.div>
  );
};

export default Products;
