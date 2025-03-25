
import { Package, FileCode, ShieldCheck } from 'lucide-react';
import ProductCategoryPage from '@/components/products/ProductCategoryPage';
import { productCategories } from '@/data/productData';
import Section from '@/components/layout/Section';
import ContentCard from '@/components/ui/ContentCard';

const SoftwareSolutionsPage = () => {
  const softwareCategory = productCategories.find(category => category.name === "Software Solutions");
  
  const features = [
    {
      icon: <FileCode size={24} />,
      title: "Custom Software Development",
      description: "Tailored solutions designed specifically for your business needs and workflows."
    },
    {
      icon: <Package size={24} />,
      title: "Software Integration",
      description: "Seamlessly connect your existing systems with new software solutions."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Software Security",
      description: "Enhanced security measures to protect your data and applications."
    }
  ];

  const additionalContent = (
    <>
      <Section background="light" title="Software Features" label="Benefits" centered>
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
          <div>
            <img 
              src="/lovable-uploads/f9ca7c28-be78-46ba-9cdc-eff03c287cb7.png"
              alt="Software Solutions" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-aztec-900">Enterprise-Grade Software</h2>
            <p className="text-aztec-600 mb-4">
              Our software solutions are designed with enterprise-level security and scalability in mind. 
              Whether you're a small business or a large corporation, our software grows with you.
            </p>
            <p className="text-aztec-600 mb-4">
              With regular updates and dedicated support, you can rest assured that your software 
              investment will continue to deliver value for years to come.
            </p>
            <ul className="space-y-2 text-aztec-600 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                Ongoing support and maintenance
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                Regular updates and security patches
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                Customizable to your specific needs
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                Seamless integration with existing systems
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );

  return (
    <ProductCategoryPage
      title="Software Solutions"
      subtitle="Digital Tools"
      description={
        <>
          <p>
            Elevate your business with our professional software solutions designed to streamline operations, 
            enhance productivity, and drive growth. From specialized tax software to comprehensive 
            productivity suites, we have the tools your business needs.
          </p>
          <p className="mt-4">
            Our software solutions are tailored to meet the unique demands of modern businesses, 
            with a focus on security, usability, and performance.
          </p>
        </>
      }
      products={softwareCategory?.products || []}
      icon={<FileCode size={28} />}
      heroImage="/lovable-uploads/f9ca7c28-be78-46ba-9cdc-eff03c287cb7.png"
      additionalContent={additionalContent}
      bgColor="bg-gradient-to-br from-blue-50 to-indigo-50"
    />
  );
};

export default SoftwareSolutionsPage;
