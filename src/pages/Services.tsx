
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import PageContent from '@/components/layout/PageContent';
import Section from '@/components/layout/Section';
import ContentCard from '@/components/ui/ContentCard';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { 
  Cpu, ShieldCheck, Cloud, Code, Database, Headphones, 
  Server, Network, Wifi, Clock, HardDrive, Users
} from 'lucide-react';

const Services = () => {
  const managedServices = [
    {
      icon: <Cpu size={24} />,
      title: "IT Management",
      description: "Comprehensive IT management solutions that keep your systems running smoothly and efficiently."
    },
    {
      icon: <Server size={24} />,
      title: "Server Management",
      description: "24/7 monitoring, maintenance, and optimization of your server infrastructure."
    },
    {
      icon: <Network size={24} />,
      title: "Network Management",
      description: "Design, implementation, and management of secure, reliable network infrastructure."
    },
    {
      icon: <Wifi size={24} />,
      title: "Wireless Solutions",
      description: "High-performance wireless networking solutions for your business needs."
    }
  ];

  const cloudServices = [
    {
      icon: <Cloud size={24} />,
      title: "Cloud Migration",
      description: "Seamless migration of your infrastructure and applications to the cloud."
    },
    {
      icon: <Database size={24} />,
      title: "Cloud Storage",
      description: "Secure, scalable cloud storage solutions for your data."
    },
    {
      icon: <Clock size={24} />,
      title: "Business Continuity",
      description: "Ensure your business operations continue without interruption, even in crisis situations."
    },
    {
      icon: <HardDrive size={24} />,
      title: "Disaster Recovery",
      description: "Comprehensive disaster recovery solutions to protect your critical data and systems."
    }
  ];

  const supportServices = [
    {
      icon: <Headphones size={24} />,
      title: "Help Desk Support",
      description: "Responsive technical support when you need it most."
    },
    {
      icon: <Users size={24} />,
      title: "On-Site Support",
      description: "Expert technicians available to provide hands-on assistance at your location."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Security Solutions",
      description: "Comprehensive security services to protect your business from threats."
    },
    {
      icon: <Code size={24} />,
      title: "Software Solutions",
      description: "Custom software development and implementation for your unique business needs."
    }
  ];

  return (
    <PageLayout 
      title="Our Services" 
      subtitle="Comprehensive IT solutions designed to help your business thrive in the digital age."
    >
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.img 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              src="/lovable-uploads/aafd8b1b-4480-41c4-9f11-0d6862cff6dd.png" 
              alt="IT Services" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-aztec-900">
                Comprehensive IT Solutions
              </h2>
              <p className="text-aztec-600 mb-6">
                At Azteca Technology, we provide end-to-end IT solutions tailored to your business needs. Our team of experts is dedicated to ensuring your technology infrastructure supports your business goals efficiently and effectively.
              </p>
              <p className="text-aztec-600 mb-6">
                Whether you're looking for managed IT services, cloud solutions, security systems, or technical support, we have the expertise and experience to deliver results that exceed your expectations.
              </p>
              <AnimatedButton href="/contact" withArrow className="bg-blue-600 hover:bg-blue-700 text-white">
                Get in Touch
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section background="light" title="Managed IT Services" label="Services" centered>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {managedServices.map((service, index) => (
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

      <Section background="white" title="Cloud Solutions" label="Services" centered>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cloudServices.map((service, index) => (
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

      <Section background="gradient" title="Technical Support" label="Services" centered>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportServices.map((service, index) => (
            <ContentCard 
              key={service.title} 
              title={service.title} 
              icon={service.icon}
              variant="solid"
              delay={0.1 * index}
            >
              <p>{service.description}</p>
            </ContentCard>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <AnimatedButton href="/contact" className="bg-white text-blue-900 hover:bg-yellow-400">
            Schedule a Consultation
          </AnimatedButton>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Services;
