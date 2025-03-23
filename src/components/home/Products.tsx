
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
      name: "Premium Collection",
      description: "Our flagship line featuring the finest materials and craftsmanship",
      image: "product-1.jpg"
    },
    {
      id: 2,
      name: "Essentials Series",
      description: "Everyday excellence with our signature attention to detail",
      image: "product-2.jpg"
    },
    {
      id: 3,
      name: "Limited Edition",
      description: "Exclusive designs created in small batches for discerning customers",
      image: "product-3.jpg"
    },
    {
      id: 4,
      name: "Custom Solutions",
      description: "Tailored to your exact specifications with personalized service",
      image: "product-4.jpg"
    }
  ];

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <SlideUp>
            <SlideUpItem>
              <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent-50 text-accent-600 text-sm font-medium">
                Our Collections
              </span>
            </SlideUpItem>
            
            <SlideUpItem>
              <h2 className="text-3xl md:text-4xl font-bold text-aztec-900 max-w-xl">
                Discover Our Premium Product Lines
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
        
        <motion.div style={{ x: translateX }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id}
              name={product.name}
              description={product.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProductCard = ({ name, description, index }: { 
  name: string; 
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group"
    >
      <div className="relative aspect-square rounded-xl overflow-hidden mb-5 bg-aztec-100">
        <div className="absolute inset-0 flex items-center justify-center text-aztec-500 font-medium">
          Product Image
        </div>
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
      
      <h3 className="text-xl font-semibold mb-2 text-aztec-900 group-hover:text-accent-600 transition-colors">
        {name}
      </h3>
      
      <p className="text-aztec-600">
        {description}
      </p>
    </motion.div>
  );
};

export default Products;
