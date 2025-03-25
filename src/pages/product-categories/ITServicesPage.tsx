
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import FadeIn from '@/components/ui/FadeIn';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { productCategories } from '@/data/productData';
import { ArrowRight, ChevronDown, Check, Shield, HardDrive, ServerCrash, Wifi } from 'lucide-react';

const ITServicesPage = () => {
  const itCategory = productCategories.find(category => category.slug === 'it-services');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  if (!itCategory) return null;
  
  const getIcon = (name: string) => {
    if (name.includes("Managed")) return <Wifi className="w-10 h-10" />;
    if (name.includes("Disaster")) return <ServerCrash className="w-10 h-10" />;
    if (name.includes("Network")) return <Shield className="w-10 h-10" />;
    return <HardDrive className="w-10 h-10" />;
  };
  
  return (
    <Layout>
      {/* Hero Section with Animated Background */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/lovable-uploads/8d93ccd6-f135-4472-ad9a-677825e40020.png')] bg-cover bg-center opacity-10"></div>
          
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 100 - 50 + "%", 
                y: Math.random() * 100 + "%",
                opacity: 0.1 + Math.random() * 0.2,
                scale: 0.5 + Math.random() * 1.5
              }}
              animate={{ 
                y: [null, Math.random() * -100 - 20 + "%"], 
                opacity: [null, 0]
              }}
              transition={{ 
                duration: 10 + Math.random() * 20, 
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="absolute w-10 h-10 rounded-full bg-blue-500 blur-xl"
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
              Professional IT Support
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              {itCategory.name}
            </h1>
            <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              {itCategory.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedButton 
                href="/contact" 
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold"
              >
                Get a Free Consultation
              </AnimatedButton>
              <AnimatedButton 
                href="#services" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                icon={<ChevronDown className="h-4 w-4" />}
                iconPosition="right"
              >
                Explore Services
              </AnimatedButton>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-20 bg-white" id="services">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
              Professional IT Services
            </h2>
            <p className="text-blue-700 text-lg max-w-2xl mx-auto">
              Our comprehensive IT services are designed to keep your business running smoothly,
              securely, and efficiently at all times.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {itCategory.products.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-xl border border-blue-100 group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-700 to-indigo-700 p-8 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                    {getIcon(service.name)}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-blue-700 mb-6">{service.description}</p>
                  
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-sm text-blue-600 font-medium block mb-1">Starting At</span>
                      <span className="text-blue-900 font-bold block">{service.price}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <AnimatedButton 
                        href={`#${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                        variant="outline"
                        className="text-sm border-blue-200 text-blue-800 hover:bg-blue-50"
                        icon={<ArrowRight className="h-4 w-4" />}
                        iconPosition="right"
                      >
                        Learn More
                      </AnimatedButton>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Service Sections */}
      <section ref={ref} className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 lg:px-8">
          {itCategory.products.map((service, index) => (
            <div 
              key={service.id}
              id={service.name.toLowerCase().replace(/\s+/g, '-')}
              className={`py-16 ${index !== 0 ? 'border-t border-blue-100' : ''}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <FadeIn direction={index % 2 === 0 ? "right" : "left"} className={index % 2 === 0 ? "order-1" : "order-2 lg:order-1"}>
                  <h2 className="text-3xl font-bold text-blue-900 mb-6">{service.name}</h2>
                  <p className="text-blue-700 mb-8">{service.description}</p>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg mb-8 border border-blue-100">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">Key Features</h3>
                    <ul className="space-y-4">
                      {[
                        `24/7 monitoring and support for ${service.name.toLowerCase()}`,
                        "Proactive maintenance to prevent issues before they occur",
                        "Rapid response times for critical issues",
                        "Regular reporting and performance analytics",
                        "Dedicated technical account manager"
                      ].map((feature, i) => (
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
                          <span className="text-blue-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <AnimatedButton 
                      href="/contact" 
                      className="bg-blue-700 hover:bg-blue-800 text-white"
                    >
                      Get a Quote
                    </AnimatedButton>
                    <AnimatedButton 
                      href="tel:+17143630006" 
                      variant="outline"
                      className="border-blue-300 text-blue-700 hover:bg-blue-50"
                    >
                      Call 714-363-0006
                    </AnimatedButton>
                  </div>
                </FadeIn>
                
                <FadeIn direction={index % 2 === 0 ? "left" : "right"} className={index % 2 === 0 ? "order-2" : "order-1 lg:order-2"}>
                  <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="w-full h-auto"
                    />
                    <div className="bg-gradient-to-r from-blue-700 to-indigo-700 p-4 text-white">
                      <div className="flex justify-between items-center">
                        <h4 className="text-lg font-semibold">{service.name}</h4>
                        <span className="bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-xs font-bold">
                          {service.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from some of our satisfied clients.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "Johnson Accounting",
                quote: "Azteca Technology transformed our IT infrastructure. Their managed services have reduced our downtime by 95% and increased productivity across all departments."
              },
              {
                name: "Michael Chen",
                company: "Chen Medical Group",
                quote: "The disaster recovery solutions from Azteca saved our business after a major server crash. Their team was responsive, professional, and got us back online quickly."
              },
              {
                name: "Rebecca Martinez",
                company: "Martinez Legal",
                quote: "Network management has never been easier since we partnered with Azteca Technology. They handle everything so we can focus on serving our clients."
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <div className="mb-4 text-yellow-400">
                  {"★".repeat(5)}
                </div>
                <p className="italic mb-4 text-blue-100">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-blue-300">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Ready to Elevate Your IT Infrastructure?
                  </h2>
                  <p className="text-blue-100 mb-6">
                    Contact us today to learn how our IT services can transform your business operations.
                    Our team of experts is ready to develop a customized solution for your specific needs.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <AnimatedButton 
                      href="/contact" 
                      className="bg-yellow-500 hover:bg-yellow-600 text-blue-900"
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
                      <h3 className="text-white font-bold text-lg mb-2">Need Immediate Support?</h3>
                      <p className="text-blue-200 text-sm mb-4">We're here to help with your IT needs</p>
                      <span className="block text-white text-2xl font-bold mb-2">714-363-0006</span>
                      <span className="block text-blue-300 text-sm">or</span>
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

export default ITServicesPage;
