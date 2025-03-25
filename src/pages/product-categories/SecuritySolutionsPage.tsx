
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import FadeIn from '@/components/ui/FadeIn';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { productCategories } from '@/data/productData';
import { ArrowRight, ChevronDown, Check, Camera, Lock, Shield, Fingerprint } from 'lucide-react';

const SecuritySolutionsPage = () => {
  const securityCategory = productCategories.find(category => category.slug === 'security-solutions');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  if (!securityCategory) return null;
  
  const getIcon = (name: string) => {
    if (name.includes("Camera")) return <Camera className="w-8 h-8" />;
    if (name.includes("Anti-Virus")) return <Shield className="w-8 h-8" />;
    if (name.includes("Network")) return <Lock className="w-8 h-8" />;
    return <Fingerprint className="w-8 h-8" />;
  };

  // Function to convert product name to ID format
  const getProductSectionId = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Shield Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: 0.1 + Math.random() * 0.2,
                rotate: Math.random() * 360,
                scale: 0.5 + Math.random() * 0.5
              }}
              animate={{ 
                rotate: [null, Math.random() * 360 * (Math.random() > 0.5 ? 1 : -1)],
                scale: [null, 0.7 + Math.random() * 0.5],
                opacity: [null, 0.05 + Math.random() * 0.1]
              }}
              transition={{ 
                duration: 15 + Math.random() * 15, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute w-16 h-16 text-white/10"
              style={{ zIndex: 1 }}
            >
              <Shield className="w-full h-full" />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-purple-900/30 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-purple-100 text-purple-800 text-sm font-medium">
              Comprehensive Security
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              {securityCategory.name}
            </h1>
            <p className="text-purple-100 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              {securityCategory.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedButton 
                href="/contact" 
                className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-semibold"
              >
                Get a Free Security Assessment
              </AnimatedButton>
              <AnimatedButton 
                href="#solutions" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                icon={<ChevronDown className="h-4 w-4" />}
                iconPosition="right"
              >
                Explore Solutions
              </AnimatedButton>
            </div>
          </FadeIn>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Security Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "300%", text: "Businesses are more likely to be burglarized without security systems" },
              { number: "60%", text: "Of cyber attacks target small to mid-sized businesses" },
              { number: "94%", text: "Reduction in theft with proper security camera systems" },
              { number: "24/7", text: "Continuous protection with our security solutions" }
            ].map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-gradient-to-br from-purple-50 to-slate-50 p-6 rounded-xl shadow-md text-center h-full">
                  <div className="text-3xl md:text-4xl font-bold text-purple-800 mb-3">{stat.number}</div>
                  <p className="text-slate-600">{stat.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Solutions Showcase */}
      <section id="solutions" className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Security Solutions for Every Need
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Discover our comprehensive range of security solutions designed to protect 
              your business, data, and assets from threats.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
            {securityCategory.products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-slate-50 rounded-xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-all group"
              >
                <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-8">
                  <div className="flex items-center justify-between">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl text-white">
                      {getIcon(product.name)}
                    </div>
                    <span className="bg-yellow-500 text-purple-900 px-4 py-1 rounded-full text-sm font-semibold">
                      {product.price}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 mb-6">{product.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <AnimatedButton 
                      href="/contact" 
                      className="w-full justify-center bg-purple-700 hover:bg-purple-800 text-white"
                    >
                      Get a Quote
                    </AnimatedButton>
                    
                    <AnimatedButton 
                      href={`#${getProductSectionId(product.name)}`}
                      variant="outline"
                      className="w-full justify-center border-purple-300 text-purple-700 hover:bg-purple-50"
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
      
      {/* Detailed Product Sections */}
      <section ref={ref} className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 lg:px-8">
          {securityCategory.products.map((product, index) => (
            <div 
              key={product.id}
              id={getProductSectionId(product.name)}
              className={`py-16 ${index !== 0 ? 'border-t border-slate-200 mt-16' : ''}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <FadeIn direction={index % 2 === 0 ? "right" : "left"} className={index % 2 === 0 ? "order-1" : "order-2 lg:order-1"}>
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                      {product.name}
                      <span className="block text-sm font-normal text-purple-600 mt-2">
                        {product.price}
                      </span>
                    </h2>
                    <p className="text-slate-600 mb-8 text-lg">{product.description}</p>
                    
                    <div className="bg-gradient-to-br from-purple-50 to-slate-50 rounded-xl p-6 shadow-md border border-slate-200">
                      <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Benefits</h3>
                      <ul className="space-y-4">
                        {[
                          `Enhanced security with ${product.name}`,
                          "Easy integration with existing systems",
                          "Cost-effective protection for your business",
                          "Professional installation and setup",
                          "Ongoing technical support and maintenance"
                        ].map((benefit, i) => (
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
                            <span className="text-slate-600">{benefit}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <AnimatedButton 
                        href="/contact" 
                        className="bg-purple-700 hover:bg-purple-800 text-white"
                        withArrow
                      >
                        Request a Quote
                      </AnimatedButton>
                      <AnimatedButton 
                        href="tel:+17143630006" 
                        variant="outline"
                        className="border-purple-300 text-purple-700 hover:bg-purple-50"
                      >
                        Call 714-363-0006
                      </AnimatedButton>
                    </div>
                  </div>
                </FadeIn>
                
                <FadeIn direction={index % 2 === 0 ? "left" : "right"} className={index % 2 === 0 ? "order-2" : "order-1 lg:order-2"}>
                  <div className="p-4 bg-gradient-to-br from-purple-100 to-slate-100 rounded-xl shadow-xl relative overflow-hidden">
                    <div className="aspect-square relative rounded-lg overflow-hidden border-4 border-white shadow-inner">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay with product info */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                        <h3 className="text-white text-xl font-bold mb-2">{product.name}</h3>
                        <p className="text-purple-100 text-sm">{product.description}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Why Choose Azteca for Security?</h2>
            <p className="text-purple-200 max-w-2xl mx-auto">
              With years of experience and a team of certified security professionals,
              we deliver solutions that provide peace of mind and robust protection.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Expert Security Assessment",
                description: "We analyze your unique security needs and vulnerabilities to design the perfect solution."
              },
              {
                icon: <Camera className="w-12 h-12" />,
                title: "Professional Installation",
                description: "Our certified technicians ensure your security systems are installed correctly and optimized."
              },
              {
                icon: <Lock className="w-12 h-12" />,
                title: "Ongoing Support",
                description: "We provide continuous monitoring, maintenance, and support for all security solutions."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
              >
                <div className="mb-6 text-yellow-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-purple-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-gradient-to-r from-purple-700 to-slate-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Secure Your Business Today
                  </h2>
                  <p className="text-purple-100 mb-6">
                    Don't wait until it's too late. Contact us today to schedule a free security assessment
                    and learn how our solutions can protect your business, data, and assets.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <AnimatedButton 
                      href="/contact" 
                      className="bg-yellow-500 hover:bg-yellow-600 text-purple-900"
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
                      <h3 className="text-white font-bold text-lg mb-2">Emergency Security Support</h3>
                      <p className="text-purple-200 text-sm mb-4">Available 24/7 for urgent security needs</p>
                      <span className="block text-white text-2xl font-bold mb-2">714-363-0006</span>
                      <span className="block text-purple-300 text-sm">or</span>
                      <AnimatedButton 
                        href="/contact" 
                        className="mt-4 bg-white text-purple-900 hover:bg-purple-50 w-full justify-center"
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

export default SecuritySolutionsPage;
