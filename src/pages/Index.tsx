import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Products from '@/components/home/Products';
import Contact from '@/components/home/Contact';
import ITServices from '@/components/home/ITServices';
import SoftwareSolutions from '@/components/home/SoftwareSolutions';
import SecuritySolutions from '@/components/home/SecuritySolutions';
import FadeIn from '@/components/ui/FadeIn';
import { Check, Award, Clock, Users } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';
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
  return <Layout>
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={controls}>
        <Hero />
        
        {/* Stats Section */}
        <section id="stats" className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StatCard number="15+" label="Years of Experience" icon={<Clock className="w-6 h-6 text-blue-500" />} />
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
              <ServiceCard title="IT Infrastructure" description="Build robust networks, server systems, and cloud infrastructure tailored to your business needs." image="/lovable-uploads/881ea460-231f-4a79-9b8a-a49b932665d7.png" link="/products/hardware-solutions" />
              <ServiceCard title="Software Solutions" description="Custom software development, enterprise applications, and digital workspace solutions." image="/lovable-uploads/6d1b82c7-3784-46ea-9384-d24ef9ad8509.png" link="/products/software-solutions" />
              <ServiceCard title="Cybersecurity" description="Protect your business with comprehensive security assessments, monitoring, and threat response." image="/lovable-uploads/8d93ccd6-f135-4472-ad9a-677825e40020.png" link="/products/security-solutions" />
            </div>
          </div>
        </section>
        
        <SoftwareSolutions />
        <Products />
        <ITServices />
        <SecuritySolutions />
        <About />
        
        {/* Testimonials Section */}
        
        
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
              <AnimatedButton href="/contact" className="bg-white hover:bg-blue-50 text-blue-800 px-8 py-4 text-lg font-medium" withArrow>
                Schedule a Consultation
              </AnimatedButton>
            </div>
          </div>
        </section>
        
        <Contact />
      </motion.div>
    </Layout>;
};
const StatCard = ({
  number,
  label,
  icon
}: {
  number: string;
  label: string;
  icon: React.ReactNode;
}) => <FadeIn direction="up" className="text-center p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
      {icon}
    </div>
    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{number}</div>
    <div className="text-aztec-600">{label}</div>
  </FadeIn>;
const ServiceCard = ({
  title,
  description,
  image,
  link
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) => <FadeIn direction="up" className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow">
    <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-blue-900/0 z-10"></div>
    <img src={image} alt={title} className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500" />
    
    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-blue-100 mb-4">{description}</p>
      <AnimatedButton href={link} variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800" withArrow>
        Learn More
      </AnimatedButton>
    </div>
  </FadeIn>;
const TestimonialCard = ({
  quote,
  author,
  title
}: {
  quote: string;
  author: string;
  title: string;
}) => <FadeIn direction="up" className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <div className="flex mb-6">
      {[1, 2, 3, 4, 5].map(star => <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>)}
    </div>
    
    <blockquote className="text-aztec-700 text-lg italic mb-6">
      "{quote}"
    </blockquote>
    
    <div className="flex items-center">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
        <span className="text-blue-600 font-bold text-lg">
          {author.charAt(0)}
        </span>
      </div>
      <div>
        <h4 className="font-semibold text-aztec-900">{author}</h4>
        <p className="text-aztec-500 text-sm">{title}</p>
      </div>
    </div>
  </FadeIn>;
export default Index;