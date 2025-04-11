
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/layout/Section';
import ContentCard from '@/components/ui/ContentCard';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { 
  Headphones, Link, 
} from 'lucide-react';

const Support = () => {
  const supportOptions = [
    {
      icon: <Headphones size={24} />,
      title: "Remote Support Options",
      description: "Choose from our trusted remote support tools to get assistance from our technical team."
    },
    {
      icon: <Link size={24} />,
      title: "TeamViewer",
      description: "Fast and secure remote access solution that allows our technicians to view and control your computer.",
      link: "https://download.teamviewer.com/download/TeamViewerQS_x64.exe",
      buttonText: "Download TeamViewer"
    },
    {
      icon: <Link size={24} />,
      title: "LogMeIn",
      description: "Reliable remote desktop software that provides secure access to your computer from anywhere.",
      link: "https://secure.logmein.com/i?l=en&c=00_binmfp9cvpog8bl9lsttqa37qkujwlebifil7",
      buttonText: "Download LogMeIn"
    }
  ];

  return (
    <PageLayout 
      title="Remote Support" 
      subtitle="Get immediate technical assistance from our experienced technicians."
    >
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.img 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              src="/lovable-uploads/remote-support.png" 
              alt="Remote Support" 
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
                Instant Technical Support
              </h2>
              <p className="text-aztec-600 mb-6">
                At Azteca Technology, we provide immediate remote support to help you resolve technical issues quickly and efficiently. Our experienced team can remotely access your computer to diagnose and fix problems without the need for an on-site visit.
              </p>
              <p className="text-aztec-600 mb-6">
                Choose one of our secure remote support tools below to get started. Our technicians will guide you through the process to establish a secure connection to your system.
              </p>
              <AnimatedButton href="/contact" withArrow className="bg-blue-600 hover:bg-blue-700 text-white">
                Contact Support Team
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section background="light" title="Remote Support Tools" label="Support" centered>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {supportOptions.map((option, index) => (
            <ContentCard 
              key={option.title} 
              title={option.title} 
              icon={option.icon}
              delay={0.1 * index}
            >
              <p className="mb-4">{option.description}</p>
              {option.link && (
                <AnimatedButton 
                  href={option.link}
                  isExternal={true}
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full justify-center"
                >
                  {option.buttonText}
                </AnimatedButton>
              )}
            </ContentCard>
          ))}
        </div>
      </Section>

      <Section background="gradient" title="How Remote Support Works" label="Process" centered>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Download & Install</h3>
            <p className="text-blue-100">Download and install one of our recommended remote support tools from the links above.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Contact Us</h3>
            <p className="text-blue-100">Call our support team at 714-363-0006 or use our contact form to request assistance.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Get Support</h3>
            <p className="text-blue-100">Our technician will connect to your computer and resolve your technical issues promptly.</p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <AnimatedButton href="/contact" className="bg-white  text-black-900 hover:bg-white-400">
            Schedule a Support Session
          </AnimatedButton>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Support;
