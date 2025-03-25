
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/products/ProductCard';
import FadeIn from '@/components/ui/FadeIn';
import SlideUp, { SlideUpItem } from '@/components/ui/SlideUp';
import { Monitor, PenTool, FileVideo, Database } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';

const workstations = [
  {
    id: 1,
    name: "Design Pro Workstation",
    price: "$3,499",
    description: "High-performance workstation optimized for graphic design, CAD, and creative applications.",
    image: "/lovable-uploads/881ea460-231f-4a79-9b8a-a49b932665d7.png",
    categorySlug: "workstations"
  },
  {
    id: 2,
    name: "Engineering Powerhouse",
    price: "$4,999",
    description: "Maximum compute power for engineering simulations, 3D modeling, and computational tasks.",
    image: "/lovable-uploads/881ea460-231f-4a79-9b8a-a49b932665d7.png",
    categorySlug: "workstations"
  },
  {
    id: 3,
    name: "Content Creation Station",
    price: "$5,299",
    description: "Specialized workstation for video editing, animation, and high-end content production.",
    image: "/lovable-uploads/881ea460-231f-4a79-9b8a-a49b932665d7.png",
    categorySlug: "workstations"
  }
];

const WorkstationsPage = () => {
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
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-purple-900 -z-10"></div>
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn direction="up">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Professional Workstations
                </h1>
                <p className="text-indigo-100 text-lg mb-8">
                  Purpose-built workstations for demanding professional applications, designed for maximum performance and reliability.
                </p>
                <AnimatedButton
                  href="/contact"
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white"
                >
                  Configure Your Workstation
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
                <h2 className="text-3xl font-bold text-center mb-12">Specialized for Your Industry</h2>
              </SlideUpItem>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <FeatureCard 
                  icon={<PenTool />}
                  title="Design & Creative"
                  description="Workstations optimized for graphic design, CAD, and creative applications."
                />
                <FeatureCard 
                  icon={<Database />}
                  title="Engineering & Science"
                  description="High-performance computing for simulations, modeling, and analysis."
                />
                <FeatureCard 
                  icon={<FileVideo />}
                  title="Media & Entertainment"
                  description="Specialized for video editing, animation, VFX, and content creation."
                />
                <FeatureCard 
                  icon={<Monitor />}
                  title="Data Analysis"
                  description="Workstations configured for large datasets, visualization, and AI applications."
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
                <h2 className="text-3xl font-bold text-center mb-4">Featured Workstations</h2>
                <p className="text-aztec-600 text-center max-w-3xl mx-auto mb-12">
                  Explore our range of professional workstations designed for specialized industry applications.
                </p>
              </SlideUpItem>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {workstations.map((workstation) => (
                  <SlideUpItem key={workstation.id}>
                    <ProductCard
                      name={workstation.name}
                      price={workstation.price}
                      description={workstation.description}
                      image={workstation.image}
                      categorySlug={workstation.categorySlug}
                    />
                  </SlideUpItem>
                ))}
              </div>
            </SlideUp>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-indigo-50">
          <div className="container mx-auto px-4">
            <FadeIn direction="up" className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-indigo-100">
                <div className="flex flex-col items-center text-center">
                  <blockquote className="text-xl italic text-gray-700 mb-4">
                    "Azteca's engineering workstation has transformed our product development process. The performance difference is remarkable, and our team is now able to run complex simulations in a fraction of the time."
                  </blockquote>
                  <p className="font-semibold text-indigo-800">Maria Rodriguez</p>
                  <p className="text-sm text-gray-500">Chief Engineering Officer, Innovate Design Solutions</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <FadeIn direction="up" className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Need a Custom-Configured Workstation?
              </h2>
              <p className="text-indigo-100 mb-8">
                Our workstation specialists can help you configure the perfect system for your specific application requirements.
              </p>
              <AnimatedButton
                href="/contact"
                className="bg-white hover:bg-gray-100 text-indigo-900"
                withArrow
              >
                Get Expert Consultation
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
    <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-aztec-600">{description}</p>
  </SlideUpItem>
);

export default WorkstationsPage;
