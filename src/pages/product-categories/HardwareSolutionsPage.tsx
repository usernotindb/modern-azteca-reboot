
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import FadeIn from '@/components/ui/FadeIn';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { productCategories } from '@/data/productData';
import { ArrowRight, ChevronDown, Check, Cpu, Server, Laptop } from 'lucide-react';

const HardwareSolutionsPage = () => {
  const hardwareCategory = productCategories.find(category => category.slug === 'hardware-solutions');
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  if (!hardwareCategory) return null;
  
  const getIcon = (name: string) => {
    if (name.includes("Laptop")) return <Laptop className="w-8 h-8" />;
    if (name.includes("Server")) return <Server className="w-8 h-8" />;
    return <Cpu className="w-8 h-8" />;
  };
  
  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/9f23050e-b4e0-417a-bc5f-cf88dd8c3e82.png')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-gray-100 text-gray-800 text-sm font-medium">
              High Performance Equipment
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              {hardwareCategory.name}
            </h1>
            <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              {hardwareCategory.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedButton 
                href="/contact" 
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold"
              >
                Get a Quote
              </AnimatedButton>
              <AnimatedButton 
                href="#products" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                icon={<ChevronDown className="h-4 w-4" />}
                iconPosition="right"
              >
                View Hardware
              </AnimatedButton>
            </div>
          </FadeIn>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Products Showcase Section */}
      <section className="py-20 bg-white" id="products">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Hardware That Powers Your Success
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Discover our range of high-performance hardware solutions designed to meet the needs of modern businesses.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
            {hardwareCategory.products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all group"
              >
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 flex justify-between items-center">
                  <div className="bg-white p-3 rounded-full shadow-md">
                    {getIcon(product.name)}
                  </div>
                  <span className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {product.price}
                  </span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <AnimatedButton 
                      href="/contact" 
                      className="w-full justify-center bg-gray-800 hover:bg-gray-900 text-white"
                    >
                      Get a Quote
                    </AnimatedButton>
                    
                    <AnimatedButton 
                      href={`#${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                      variant="outline"
                      className="w-full justify-center border-gray-300 text-gray-700 hover:bg-gray-100"
                      icon={<ArrowRight className="h-4 w-4" />}
                      iconPosition="right"
                    >
                      Learn More
                    </AnimatedButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Details Section with Parallax */}
      <section ref={parallaxRef} className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative">
        <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Hardware Specifications & Details
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our hardware solutions are built with the latest technology to ensure optimal performance, 
              reliability, and scalability for your business.
            </p>
          </FadeIn>
          
          {hardwareCategory.products.map((product, index) => (
            <div 
              key={product.id} 
              id={product.name.toLowerCase().replace(/\s+/g, '-')}
              className={`mb-16 ${index !== 0 ? 'pt-12 border-t border-gray-200' : ''}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <FadeIn direction={index % 2 === 0 ? "right" : "left"}>
                  <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    
                    <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Key Specifications:</h4>
                      <ul className="space-y-3">
                        {[
                          "Latest generation processors for optimal performance",
                          "High-speed memory for multitasking efficiency",
                          "Reliable storage solutions with backup capabilities",
                          "Enhanced graphics for demanding applications",
                          "Energy-efficient design for reduced operating costs"
                        ].map((spec, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start"
                          >
                            <span className="flex-shrink-0 bg-green-500 rounded-full p-1 mr-3 mt-1">
                              <Check className="h-3 w-3 text-white" />
                            </span>
                            <span className="text-gray-600">{spec}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <AnimatedButton 
                        href="/contact" 
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Request a Quote
                      </AnimatedButton>
                      <span className="inline-flex items-center text-gray-600 font-semibold">
                        Starting at <span className="text-blue-600 ml-1">{product.price}</span>
                      </span>
                    </div>
                  </div>
                </FadeIn>
                
                <FadeIn direction={index % 2 === 0 ? "left" : "right"}>
                  <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="bg-white p-2 rounded-xl shadow-lg overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl">
              <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Upgrade Your Hardware Today
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Whether you need new laptops, servers, or workstations, our team can help you 
                    select the right hardware for your business needs and budget.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <AnimatedButton 
                      href="/contact" 
                      className="bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                      withArrow
                    >
                      Schedule a Consultation
                    </AnimatedButton>
                    <AnimatedButton 
                      href="/products" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white/10"
                    >
                      Back to All Products
                    </AnimatedButton>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                  >
                    <div className="text-center">
                      <h3 className="text-white font-bold text-lg mb-2">Need Help Choosing?</h3>
                      <p className="text-gray-300 text-sm mb-4">Our experts are ready to assist you</p>
                      <span className="block text-white text-2xl font-bold mb-2">714-363-0006</span>
                      <span className="block text-gray-400 text-sm">or</span>
                      <AnimatedButton 
                        href="/contact" 
                        className="mt-4 bg-white text-gray-900 hover:bg-gray-100 w-full justify-center"
                        icon={<ArrowRight className="h-4 w-4" />}
                        iconPosition="right"
                      >
                        Contact Us
                      </AnimatedButton>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default HardwareSolutionsPage;
