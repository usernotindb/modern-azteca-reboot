import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/shared/ProductCard';
import FadeIn from '@/components/ui/FadeIn';
import SlideUp, { SlideUpItem } from '@/components/ui/SlideUp';
import { Laptop, Cpu, Battery, Zap } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';

const laptops = [
  {
    id: 1,
    name: "Business Pro Laptop",
    price: "$1,299",
    description: "High performance laptop designed for business professionals with enhanced security features.",
    image: "/lovable-uploads/6d1b82c7-3784-46ea-9384-d24ef9ad8509.png",
    categorySlug: "laptops"
  },
  {
    id: 2,
    name: "Developer Powerhouse",
    price: "$1,899",
    description: "Maximum performance for developers with extra RAM and storage for intensive tasks.",
    image: "/lovable-uploads/6d1b82c7-3784-46ea-9384-d24ef9ad8509.png",
    categorySlug: "laptops"
  },
  {
    id: 3,
    name: "Executive Ultrabook",
    price: "$1,599",
    description: "Ultra-thin, lightweight design with premium build quality and long battery life.",
    image: "/lovable-uploads/6d1b82c7-3784-46ea-9384-d24ef9ad8509.png",
    categorySlug: "laptops"
  }
];

const LaptopsPage = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    });
  }, [controls]);

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900 -z-10"></div>
          <div className="absolute inset-0 opacity-20 bg-[url('/lovable-uploads/6d1b82c7-3784-46ea-9384-d24ef9ad8509.png')] bg-no-repeat bg-cover bg-center mix-blend-overlay"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn direction="up">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Business-Grade Laptops
                </h1>
                <p className="text-blue-100 text-lg mb-8">
                  Azteca Technology offers high-performance laptops designed for business productivity, security, and reliability. Our devices are built to handle your most demanding workloads.
                </p>
                <AnimatedButton
                  href="/contact"
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900"
                >
                  Request a Custom Configuration
                </AnimatedButton>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SlideUp>
              <SlideUpItem>
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Laptops?</h2>
              </SlideUpItem>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <FeatureCard 
                  icon={<Cpu />}
                  title="Enterprise Performance"
                  description="Latest-generation processors and ample RAM to handle resource-intensive applications."
                />
                <FeatureCard 
                  icon={<Laptop />}
                  title="Business Security"
                  description="Advanced security features including biometric authentication and hardware encryption."
                />
                <FeatureCard 
                  icon={<Battery />}
                  title="All-Day Battery"
                  description="Extended battery life to keep you productive throughout your workday."
                />
                <FeatureCard 
                  icon={<Zap />}
                  title="Rapid Support"
                  description="Next business day on-site support available for all business laptops."
                />
              </div>
            </SlideUp>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SlideUp>
              <SlideUpItem>
                <h2 className="text-3xl font-bold text-center mb-4">Our Laptop Selection</h2>
                <p className="text-aztec-600 text-center max-w-3xl mx-auto mb-12">
                  Explore our range of business laptops designed to meet the needs of modern professionals.
                </p>
              </SlideUpItem>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {laptops.map((laptop) => (
                  <SlideUpItem key={laptop.id}>
                    <ProductCard
                      name={laptop.name}
                      price={laptop.price}
                      description={laptop.description}
                      image={laptop.image}
                      categorySlug={laptop.categorySlug}
                    />
                  </SlideUpItem>
                ))}
              </div>
            </SlideUp>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <FadeIn direction="up" className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Need a Custom Configuration?
              </h2>
              <p className="text-blue-700 mb-8">
                We understand that businesses have unique requirements. Contact our team to discuss customized laptop solutions tailored to your specific needs.
              </p>
              <AnimatedButton
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white"
                withArrow
              >
                Contact Sales Team
              </AnimatedButton>
            </FadeIn>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
};

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => (
  <SlideUpItem className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-aztec-600">{description}</p>
  </SlideUpItem>
);

export default LaptopsPage;
