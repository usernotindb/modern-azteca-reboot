
import { Laptop, Server, HardDrive } from 'lucide-react';
import ProductCategoryPage from '@/components/products/ProductCategoryPage';
import { productCategories } from '@/data/productData';
import Section from '@/components/layout/Section';
import ContentCard from '@/components/ui/ContentCard';
import { motion } from 'framer-motion';

const HardwareSolutionsPage = () => {
  const hardwareCategory = productCategories.find(category => category.name === "Hardware Solutions");
  
  const features = [
    {
      icon: <Laptop size={24} />,
      title: "High Performance",
      description: "Powerful hardware configurations designed for demanding business applications."
    },
    {
      icon: <Server size={24} />,
      title: "Reliable Infrastructure",
      description: "Enterprise-grade servers and networking equipment for maximum uptime."
    },
    {
      icon: <HardDrive size={24} />,
      title: "Scalable Solutions",
      description: "Hardware that can grow with your business needs and requirements."
    }
  ];

  const additionalContent = (
    <>
      <Section background="light" title="Hardware Specifications" label="Performance" centered>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <ContentCard 
              key={feature.title} 
              title={feature.title} 
              icon={feature.icon}
              delay={0.1 * index}
            >
              <p>{feature.description}</p>
            </ContentCard>
          ))}
        </div>
      </Section>
      
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-4 text-aztec-900">Built for Business</h2>
            <p className="text-aztec-600 mb-4">
              Our hardware solutions are specifically designed for business environments, with a focus on 
              reliability, performance, and longevity. We understand that downtime is not an option, 
              which is why we only partner with trusted manufacturers.
            </p>
            <p className="text-aztec-600 mb-4">
              From powerful workstations to robust servers, we provide the hardware foundation 
              your business needs to thrive in today's digital landscape.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-aztec-50 p-4 rounded-lg">
                <h4 className="font-semibold text-aztec-800 mb-2">Business Laptops</h4>
                <ul className="text-sm text-aztec-600 space-y-1">
                  <li>• Intel Core i5/i7/i9</li>
                  <li>• 16-32GB RAM</li>
                  <li>• 512GB-1TB SSD</li>
                  <li>• Windows 11 Pro</li>
                </ul>
              </div>
              <div className="bg-aztec-50 p-4 rounded-lg">
                <h4 className="font-semibold text-aztec-800 mb-2">Workstations</h4>
                <ul className="text-sm text-aztec-600 space-y-1">
                  <li>• Intel Xeon/AMD Ryzen</li>
                  <li>• 32-64GB RAM</li>
                  <li>• 1TB-2TB SSD</li>
                  <li>• Dedicated Graphics</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img 
                src="/lovable-uploads/0cc76fb6-7912-43fd-9e88-c94137d92a37.png"
                alt="Business Laptop" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-lg shadow-lg hidden md:block">
                <img 
                  src="/lovable-uploads/9f23050e-b4e0-417a-bc5f-cf88dd8c3e82.png"
                  alt="Server" 
                  className="w-32 h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );

  return (
    <ProductCategoryPage
      title="Hardware Solutions"
      subtitle="Business Equipment"
      description={
        <>
          <p>
            Equip your business with premium hardware solutions designed for optimal performance and reliability.
            From powerful laptops to enterprise-grade servers, our hardware offerings provide the solid foundation
            your business needs.
          </p>
          <p className="mt-4">
            We partner with leading manufacturers to ensure you receive only the highest quality
            hardware that meets your specific business requirements and budget.
          </p>
        </>
      }
      products={hardwareCategory?.products || []}
      icon={<Laptop size={28} />}
      heroImage="/lovable-uploads/628857d0-dac0-42fc-b3e9-4528eee9ef00.png"
      additionalContent={additionalContent}
      bgColor="bg-gradient-to-br from-slate-50 to-blue-50"
    />
  );
};

export default HardwareSolutionsPage;
