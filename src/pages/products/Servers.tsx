import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/shared/ProductCard';
import FadeIn from '@/components/ui/FadeIn';
import SlideUp, { SlideUpItem } from '@/components/ui/SlideUp';
import { Server, Shield, HardDrive, Network } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';

const servers = [
  {
    id: 1,
    name: "Entry-Level Server",
    price: "$2,499",
    description: "Reliable server solution for small businesses with essential performance and storage capabilities.",
    image: "/lovable-uploads/9f23050e-b4e0-417a-bc5f-cf88dd8c3e82.png",
    categorySlug: "servers"
  },
  {
    id: 2,
    name: "Mid-Range Business Server",
    price: "$4,899",
    description: "Powerful server with expanded storage and processing capabilities for medium-sized businesses.",
    image: "/lovable-uploads/9f952ca9-69ce-4ab5-8239-0dbdcdae2c6b.png",
    categorySlug: "servers"
  },
  {
    id: 3,
    name: "Enterprise Data Server",
    price: "$9,299",
    description: "High-capacity, redundant server system for mission-critical enterprise applications and data.",
    image: "/lovable-uploads/bec2f6ea-6fb3-4073-9c82-38aea9579aab.png",
    categorySlug: "servers"
  }
];

const ServersPage = () => {
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
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 -z-10"></div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px] mix-blend-overlay"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn direction="up">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Enterprise-Grade Servers
                </h1>
                <p className="text-gray-300 text-lg mb-8">
                  Build your business infrastructure with our high-performance, reliable server solutions designed for security, scalability, and uptime.
                </p>
                <AnimatedButton
                  href="/contact"
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Get Server Infrastructure Consultation
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
                <h2 className="text-3xl font-bold text-center mb-12">Server Solutions Advantages</h2>
              </SlideUpItem>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <FeatureCard 
                  icon={<Server />}
                  title="Performance-Optimized"
                  description="Enterprise-grade processors and memory configurations for maximum throughput."
                />
                <FeatureCard 
                  icon={<Shield />}
                  title="Security-Focused"
                  description="Hardware-level security features and encryption capabilities to protect your data."
                />
                <FeatureCard 
                  icon={<HardDrive />}
                  title="Scalable Storage"
                  description="Flexible storage options with easy expansion to grow with your business needs."
                />
                <FeatureCard 
                  icon={<Network />}
                  title="Network Integration"
                  description="Advanced networking capabilities for seamless integration with your infrastructure."
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
                <h2 className="text-3xl font-bold text-center mb-4">Server Solutions</h2>
                <p className="text-aztec-600 text-center max-w-3xl mx-auto mb-12">
                  From entry-level to enterprise-grade, we offer server solutions to match your business requirements.
                </p>
              </SlideUpItem>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {servers.map((server) => (
                  <SlideUpItem key={server.id}>
                    <ProductCard
                      name={server.name}
                      price={server.price}
                      description={server.description}
                      image={server.image}
                      categorySlug={server.categorySlug}
                    />
                  </SlideUpItem>
                ))}
              </div>
            </SlideUp>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <FadeIn direction="up" className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Need Help Designing Your Server Infrastructure?
              </h2>
              <p className="text-blue-100 mb-8">
                Our server experts can help you design, implement, and maintain a server infrastructure that meets your business requirements and budget.
              </p>
              <AnimatedButton
                href="/contact"
                className="bg-white hover:bg-gray-100 text-blue-900"
                withArrow
              >
                Schedule a Consultation
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
    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-aztec-600">{description}</p>
  </SlideUpItem>
);

export default ServersPage;
