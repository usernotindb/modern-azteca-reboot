
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/layout/Section';
import ContentCard from '@/components/ui/ContentCard';
import { Clock, Users, Award, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Clock size={24} />,
      title: "Responsiveness",
      description: "We understand that time is critical in IT. Our team responds quickly to ensure minimal disruption to your business."
    },
    {
      icon: <Users size={24} />,
      title: "Client Partnership",
      description: "We view our clients as partners, working together to achieve shared goals and success."
    },
    {
      icon: <Award size={24} />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from the solutions we provide to the service we deliver."
    },
    {
      icon: <Target size={24} />,
      title: "Results-Driven",
      description: "We focus on delivering measurable results that positively impact your business."
    }
  ];

  return (
    <PageLayout 
      title="About Azteca Technology" 
      subtitle="Our journey of excellence and innovation has made us who we are today."
    >
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.img 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              src="/lovable-uploads/aafd8b1b-4480-41c4-9f11-0d6862cff6dd.png" 
              alt="Azteca Technology Team" 
              className="w-full h-auto rounded-lg shadow-lg mb-6"
            />
            <div className="grid grid-cols-2 gap-4">
              <motion.img 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                src="/lovable-uploads/74da57e4-5aa3-4a37-aa85-c1c28943253c.png" 
                alt="IT Services" 
                className="w-full h-auto rounded-lg shadow-md"
              />
              <motion.img 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                src="/lovable-uploads/9f23050e-b4e0-417a-bc5f-cf88dd8c3e82.png" 
                alt="Team Collaboration" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-4 text-aztec-900">Our Mission</h2>
              <p className="text-aztec-600">
                At Azteca Technology, our mission is to empower businesses through technology. We believe that the right IT solutions can transform the way you work, enhance productivity, and drive growth.
              </p>
              <p className="text-aztec-600">
                We are committed to providing reliable, innovative, and cost-effective IT services that help our clients achieve their business objectives. Our team of experts works tirelessly to ensure that your technology infrastructure supports your business goals and gives you a competitive edge.
              </p>
              
              <h2 className="text-3xl font-bold mb-4 text-aztec-900 pt-6">Our Story</h2>
              <p className="text-aztec-600">
                Founded in 2005, Azteca Technology began with a simple idea: to provide businesses with IT solutions that actually work. Over the years, we've grown from a small team of passionate technologists to a comprehensive IT service provider serving clients across various industries.
              </p>
              <p className="text-aztec-600">
                Our journey has been marked by continuous learning, innovation, and a relentless focus on client satisfaction. As technology has evolved, so have we, constantly expanding our expertise and refining our services to meet the changing needs of our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>
      
      <Section background="light" title="Our Values" label="What We Stand For" centered>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ContentCard 
              key={value.title} 
              title={value.title} 
              icon={value.icon}
              delay={0.1 * index}
            >
              <p>{value.description}</p>
            </ContentCard>
          ))}
        </div>
      </Section>
      
      <Section background="gradient" centered>
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl mb-8">
            Partner with Azteca Technology for innovative solutions that drive your business forward.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="/contact" 
              className="bg-white text-blue-800 hover:bg-yellow-400 transition-colors px-8 py-3 rounded-lg font-medium"
            >
              Get Started Today
            </a>
            <a 
              href="tel:+17143630006" 
              className="border border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-colors px-8 py-3 rounded-lg font-medium text-white"
            >
              Call 714-363-0006
            </a>
          </motion.div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default About;
