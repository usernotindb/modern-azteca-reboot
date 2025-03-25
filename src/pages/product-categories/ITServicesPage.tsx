
import { Server, Shield, Cloud, Headphones } from 'lucide-react';
import ProductCategoryPage from '@/components/products/ProductCategoryPage';
import { productCategories } from '@/data/productData';
import Section from '@/components/layout/Section';
import ContentCard from '@/components/ui/ContentCard';

const ITServicesPage = () => {
  const itServicesCategory = productCategories.find(category => category.name === "IT Services");
  
  const services = [
    {
      icon: <Server size={24} />,
      title: "24/7 Monitoring",
      description: "Continuous monitoring of your systems to prevent issues before they impact your business."
    },
    {
      icon: <Shield size={24} />,
      title: "Proactive Support",
      description: "Regular maintenance and updates to keep your systems running at peak performance."
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud Solutions",
      description: "Seamless migration to cloud platforms and ongoing management of cloud infrastructure."
    },
    {
      icon: <Headphones size={24} />,
      title: "Responsive Helpdesk",
      description: "Expert technical support whenever you need it, with fast response times."
    }
  ];

  const additionalContent = (
    <>
      <Section background="light" title="Our IT Services" label="Support" centered>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ContentCard 
              key={service.title} 
              title={service.title} 
              icon={service.icon}
              delay={0.1 * index}
            >
              <p>{service.description}</p>
            </ContentCard>
          ))}
        </div>
      </Section>
      
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold mb-6 text-aztec-900">Comprehensive IT Management</h2>
            <p className="text-aztec-600 mb-4">
              Our managed IT services provide everything your business needs to maintain a reliable, 
              secure, and efficient technology infrastructure. We take a proactive approach to IT management, 
              addressing potential issues before they impact your operations.
            </p>
            <p className="text-aztec-600 mb-6">
              With our team of experienced IT professionals at your service, you can focus on running your 
              business while we handle all your technology needs.
            </p>
            
            <div className="bg-accent-50 rounded-lg p-6 border border-accent-100">
              <h3 className="text-xl font-semibold text-accent-800 mb-4">Our Service Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center text-accent-700 mr-3 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-medium text-accent-800">Assessment</h4>
                    <p className="text-accent-700">Thorough evaluation of your current IT infrastructure and needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center text-accent-700 mr-3 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-medium text-accent-800">Planning</h4>
                    <p className="text-accent-700">Development of a customized IT management strategy</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center text-accent-700 mr-3 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-medium text-accent-800">Implementation</h4>
                    <p className="text-accent-700">Deployment of solutions with minimal disruption to your business</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center text-accent-700 mr-3 flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-medium text-accent-800">Ongoing Support</h4>
                    <p className="text-accent-700">Continuous monitoring, maintenance, and improvement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/8d93ccd6-f135-4472-ad9a-677825e40020.png"
              alt="IT Services" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="bg-aztec-50 rounded-lg p-5 mt-6">
              <h3 className="text-lg font-semibold text-aztec-900 mb-3">Why Choose Our IT Services?</h3>
              <ul className="space-y-2 text-aztec-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                  Predictable monthly costs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                  Reduced downtime and improved efficiency
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                  Enhanced security and compliance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                  Access to the latest technology
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                  Single point of contact for all IT needs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );

  return (
    <ProductCategoryPage
      title="IT Services"
      subtitle="Managed Solutions"
      description={
        <>
          <p>
            Our comprehensive IT services take the burden of technology management off your shoulders,
            allowing you to focus on what you do best—running your business. With our expert team managing
            your IT infrastructure, you can enjoy improved efficiency, enhanced security, and peace of mind.
          </p>
          <p className="mt-4">
            From proactive monitoring to disaster recovery planning, we provide the complete IT support
            your business needs to thrive in today's technology-driven world.
          </p>
        </>
      }
      products={itServicesCategory?.products || []}
      icon={<Server size={28} />}
      heroImage="/lovable-uploads/8d93ccd6-f135-4472-ad9a-677825e40020.png"
      additionalContent={additionalContent}
      bgColor="bg-gradient-to-br from-slate-50 to-blue-100"
    />
  );
};

export default ITServicesPage;
