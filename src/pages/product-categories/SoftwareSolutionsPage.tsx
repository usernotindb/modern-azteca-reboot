
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import FadeIn from '@/components/ui/FadeIn';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { productCategories } from '@/data/productData';
import { ChevronDown, ArrowRight, Check } from 'lucide-react';

const SoftwareSolutionsPage = () => {
  const softwareCategory = productCategories.find(category => category.slug === 'software-solutions');
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  if (!softwareCategory) return null;
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/f9ca7c28-be78-46ba-9cdc-eff03c287cb7.png')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
              Business Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              {softwareCategory.name}
            </h1>
            <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              {softwareCategory.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedButton 
                href="/contact" 
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold"
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
                See Solutions
              </AnimatedButton>
            </div>
          </FadeIn>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-white" id="products">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
              Software That Transforms Your Business
            </h2>
            <p className="text-blue-700 text-lg max-w-2xl mx-auto">
              Our software solutions are designed to streamline your operations, enhance productivity, and drive growth.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {softwareCategory.products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-blue-50 relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold">{product.name}</h3>
                    <p className="text-blue-100 mt-1">{product.price}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-blue-700 mb-6">{product.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <AnimatedButton 
                      href="/contact" 
                      variant="outline"
                      className="text-sm border-blue-200 text-blue-800 hover:bg-blue-50"
                    >
                      Get a Quote
                    </AnimatedButton>
                    
                    <span className="text-blue-600 font-semibold text-sm">{product.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Parallax Section */}
      <section ref={parallaxRef} className="py-24 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden relative">
        <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
              Why Choose Our Software Solutions?
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn direction="right">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">Key Benefits</h3>
                
                <ul className="space-y-4">
                  {[
                    "Increased productivity and efficiency",
                    "Streamlined workflow and operations",
                    "Enhanced data security and protection",
                    "Reduced operational costs",
                    "Improved customer service and satisfaction"
                  ].map((benefit, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <span className="flex-shrink-0 bg-green-500 rounded-full p-1 mr-3 mt-1">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-blue-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            
            <FadeIn direction="left">
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Our Commitment</h3>
                <p className="mb-6">
                  At Azteca Technology, we're committed to providing software solutions that meet your
                  specific business needs. We understand that every business is unique, which is why we offer:
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Personalized consultation and needs assessment",
                    "Customized implementation and integration",
                    "Comprehensive training and support",
                    "Regular updates and maintenance",
                    "24/7 technical assistance"
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <span className="flex-shrink-0 bg-yellow-500 rounded-full p-1 mr-3 mt-1">
                        <Check className="h-3 w-3 text-blue-900" />
                      </span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <AnimatedButton 
                  href="/contact" 
                  className="w-full justify-center bg-yellow-500 hover:bg-yellow-600 text-blue-900"
                >
                  Schedule a Consultation
                </AnimatedButton>
              </div>
            </FadeIn>
          </div>
        </motion.div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-xl">
              <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-blue-100 mb-6">
                    Contact us today to learn how our software solutions can help your business thrive. 
                    Our team of experts is ready to assist you.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <AnimatedButton 
                      href="/contact" 
                      className="bg-yellow-500 hover:bg-yellow-600 text-blue-900"
                      withArrow
                    >
                      Get Started Today
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
                      <h3 className="text-white font-bold text-lg mb-2">Get a Free Consultation</h3>
                      <p className="text-blue-100 text-sm mb-4">Schedule a call with our experts</p>
                      <span className="block text-white text-2xl font-bold mb-2">714-363-0006</span>
                      <span className="block text-blue-200 text-sm">or</span>
                      <AnimatedButton 
                        href="/contact" 
                        className="mt-4 bg-white text-blue-900 hover:bg-blue-50 w-full justify-center"
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

export default SoftwareSolutionsPage;
