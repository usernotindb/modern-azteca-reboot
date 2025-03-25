
import { Shield, Camera, Lock, AlertTriangle } from 'lucide-react';
import ProductCategoryPage from '@/components/products/ProductCategoryPage';
import { productCategories } from '@/data/productData';
import Section from '@/components/layout/Section';
import ContentCard from '@/components/ui/ContentCard';
import FadeIn from '@/components/ui/FadeIn';
import AnimatedButton from '@/components/ui/AnimatedButton';

const SecuritySolutionsPage = () => {
  const securityCategory = productCategories.find(category => category.name === "Security Solutions");
  
  const securityFeatures = [
    {
      icon: <Camera size={24} />,
      title: "Surveillance Systems",
      description: "High-definition camera systems with advanced monitoring capabilities."
    },
    {
      icon: <Lock size={24} />,
      title: "Access Control",
      description: "Secure entry systems to restrict unauthorized access to your facilities."
    },
    {
      icon: <Shield size={24} />,
      title: "Network Security",
      description: "Comprehensive protection for your digital assets and information."
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "Threat Detection",
      description: "Early warning systems to identify and mitigate potential security threats."
    }
  ];

  const additionalContent = (
    <>
      <Section background="light" title="Security Features" label="Protection" centered>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => (
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
          <div>
            <img 
              src="/lovable-uploads/74da57e4-5aa3-4a37-aa85-c1c28943253c.png"
              alt="Security Camera System" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <FadeIn>
              <h2 className="text-3xl font-bold mb-4 text-aztec-900">Complete Security Solutions</h2>
              <p className="text-aztec-600 mb-4">
                Protect your business with our comprehensive security solutions that address both physical 
                and digital vulnerabilities. Our expert team will assess your specific security needs and 
                design a customized system to safeguard your assets.
              </p>
              <p className="text-aztec-600 mb-4">
                From high-definition surveillance cameras to advanced network security, we provide the 
                tools and expertise you need to keep your business safe from threats.
              </p>
              
              <div className="bg-red-50 border border-red-100 rounded-lg p-5 mb-6">
                <div className="flex items-start">
                  <div className="text-red-600 mr-3">
                    <AlertTriangle size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-800 mb-2">Did You Know?</h3>
                    <p className="text-red-700">
                      Businesses without security systems are 300% more likely to experience a break-in compared 
                      to those with security systems installed.
                    </p>
                  </div>
                </div>
              </div>
              
              <AnimatedButton
                href="/contact"
                className="bg-aztec-900 hover:bg-aztec-800 text-white"
                withArrow
              >
                Schedule a Security Assessment
              </AnimatedButton>
            </FadeIn>
          </div>
        </div>
      </Section>
      
      <Section background="accent" title="Security Camera Systems" label="Surveillance" centered>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-aztec-900 mb-4">Professional Security Camera Installation</h3>
                <p className="text-aztec-600 mb-4">
                  Our team of security experts specializes in the design and installation of high-quality 
                  camera systems for businesses of all sizes. We use only the latest technology to ensure 
                  crystal-clear video quality and reliable performance.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-accent-600 mr-2" />
                    <span className="text-aztec-700">Professional installation by certified technicians</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-accent-600 mr-2" />
                    <span className="text-aztec-700">Remote viewing capabilities via smartphone or computer</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-accent-600 mr-2" />
                    <span className="text-aztec-700">Night vision and motion detection technologies</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-accent-600 mr-2" />
                    <span className="text-aztec-700">Scalable solutions that grow with your business</span>
                  </div>
                </div>
                <AnimatedButton
                  href="/contact"
                  className="bg-accent-600 hover:bg-accent-700 text-white"
                >
                  Get a Custom Quote
                </AnimatedButton>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
              <div className="aspect-square">
                <img 
                  src="/lovable-uploads/74da57e4-5aa3-4a37-aa85-c1c28943253c.png"
                  alt="Security Camera" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-aztec-800 mb-2">4 MP Mini Bullet IP Camera</h4>
                <p className="text-aztec-600 text-sm mb-4">
                  4 MP, Mini Bullet IP Camera, 2.8mm, True WDR, Micro SD Card up to 128G, H.265+, Black housing
                </p>
                <div className="flex justify-between items-center">
                  <p className="font-medium text-aztec-700">For pricing:</p>
                  <a href="tel:+17143630006" className="text-lg font-bold text-accent-600 hover:text-accent-700 transition-colors">
                    714-363-0006
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );

  return (
    <ProductCategoryPage
      title="Security Solutions"
      subtitle="Protection Systems"
      description={
        <>
          <p>
            Safeguard your business with our comprehensive security solutions designed to protect
            your physical assets and digital information. From advanced camera systems to robust
            network security, we provide the protection your business needs.
          </p>
          <p className="mt-4">
            Our security solutions are tailored to your specific requirements, ensuring that you
            receive the right level of protection without unnecessary complexity or cost.
          </p>
        </>
      }
      products={securityCategory?.products || []}
      icon={<Shield size={28} />}
      heroImage="/lovable-uploads/74da57e4-5aa3-4a37-aa85-c1c28943253c.png"
      additionalContent={additionalContent}
      bgColor="bg-gradient-to-br from-red-50 to-blue-50"
      ctaText="Schedule a Security Assessment"
    />
  );
};

export default SecuritySolutionsPage;
