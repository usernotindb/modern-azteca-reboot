
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Products from '@/components/home/Products';
import Contact from '@/components/home/Contact';
import ITServices from '@/components/home/ITServices';
import SoftwareSolutions from '@/components/home/SoftwareSolutions';
import SecuritySolutions from '@/components/home/SecuritySolutions';
import FadeIn from '@/components/ui/FadeIn';
import { Check, Award, Clock, Users } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';
import StatCard from '@/components/home/StatCard';
import ServiceCard from '@/components/home/ServiceCard';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    });
  }, [controls]);
  
  return (
    <Layout>
      <motion.div 
        initial={{
          opacity: 0,
          y: 20
        }} 
        animate={controls}
      >
        <Hero />
        
        {/* Stats Section */}
        <section id="stats" className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StatCard number="20+" label="Years of Experience" icon={<Clock className="w-6 h-6 text-blue-500" />} />
              <StatCard number="500+" label="Satisfied Clients" icon={<Users className="w-6 h-6 text-blue-500" />} />
              <StatCard number="1000+" label="Projects Completed" icon={<Check className="w-6 h-6 text-blue-500" />} />
              <StatCard number="25+" label="Industry Awards" icon={<Award className="w-6 h-6 text-blue-500" />} />
            </div>
          </div>
        </section>

        {/* Services Intro */}
        <section id="services" className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                OUR SERVICES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-aztec-900">
                Comprehensive IT Solutions for Your Business
              </h2>
              <p className="text-aztec-600 text-lg">
                We provide end-to-end technology services designed to enhance your operations, 
                improve security, and drive business growth through digital transformation.
              </p>
            </FadeIn>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <ServiceCard 
                title="IT Infrastructure" 
                description="Build robust networks, server systems, and cloud infrastructure tailored to your business needs." 
                image="/lovable-uploads/managed-it-services.png" 
                link="/products/hardware-solutions" 
              />
              <ServiceCard 
                title="Software Solutions" 
                description="Custom software development, enterprise applications, and digital workspace solutions." 
                image="/lovable-uploads/software-solutions.png" 
                link="/products/software-solutions" 
              />
              <ServiceCard 
                title="Cybersecurity" 
                description="Safeguard your business with security assessments, monitoring, & response.." 
                image="/lovable-uploads/cybersecurity.png" 
                link="/products/security-solutions" 
              />
            </div>
          </div>
        </section>
        
        <SoftwareSolutions />
        <Products />
        <ITServices />
        <SecuritySolutions />
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-8 lg:mb-0 lg:max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Transform Your IT Infrastructure?
                </h2>
                <p className="text-blue-100 text-lg">
                  Contact us today to schedule a consultation with our technology experts. 
                  We'll help you identify opportunities to enhance your IT operations and build
                  a strategic roadmap for your business.
                </p>
              </div>
              <AnimatedButton 
                href="/contact" 
                className="bg-white hover:bg-blue-50 text-blue-800 px-8 py-4 text-lg font-medium" 
                withArrow
              >
                Schedule a Consultation
              </AnimatedButton>
            </div>
          </div>
        </section>
        
        <Contact />
      </motion.div>
      
      {/* Add Toaster component for displaying notifications */}
      <Toaster />
    </Layout>
  );
};

export default Index;
