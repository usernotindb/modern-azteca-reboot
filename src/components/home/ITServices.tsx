
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../ui/FadeIn';
import AnimatedButton from '../ui/AnimatedButton';
import { Wifi, HardDrive, ServerCrash, Network } from 'lucide-react';

const ITServices = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Enhanced gradient background without the image */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 opacity-90"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-700 text-blue-100 text-sm font-medium">
            IT Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            The Ultimate IT Department
          </h2>
          <p className="text-blue-100 text-lg">
            We understand practical deployment of technology. Whether it's solving problems, planning for growth, or optimization.
          </p>
          <p className="text-xl font-medium mt-4">
            Azteca Technology has you covered.
          </p>
        </FadeIn>
        
        <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <ServiceCard 
            icon={<Wifi size={32} />}
            title="I.T. Management"
            description="Our Managed IT Services provide regular management of systems and networks that keep your PCs, servers and networks up and running, minimizing downtime and maximizing productivity."
          />
          
          <ServiceCard 
            icon={<ServerCrash size={32} />}
            title="Disaster Recovery"
            description="Server crashes can affect any business. Our server backup solution uses an easy-to-deploy dedicated local appliance that incorporates local backup, cloud backup, and object-level exchange restore."
          />
          
          <ServiceCard 
            icon={<HardDrive size={32} />}
            title="Server Management"
            description="We will actively monitor your servers for potential problems, keeping your server up-to date with the latest security patches, and efficiently communicating with you to ensure 100% customer satisfaction."
          />
          
          <ServiceCard 
            icon={<Network size={32} />}
            title="Network Management"
            description="Your network infrastructure needs to be secure, up-to-date and operating at the speed of business. With managed network services, we can help you build, maintain or upgrade your network."
          />
        </motion.div>
        
        <FadeIn className="text-center max-w-3xl mx-auto pt-8 border-t border-blue-700">
          <h3 className="text-2xl font-bold mb-6">GET RESULTS TODAY</h3>
          <p className="mb-8">
            Technology changes all the time. Understanding how systems are related to one another is critical. 
            Azteca Technology builds sustainable solutions to help you scale, provide security for peace of mind, 
            and allow for backup services to run automatically.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <p className="text-lg font-medium">For pricing information:</p>
            <AnimatedButton 
              href="/products/it-services" 
              className="bg-green-600 hover:bg-green-700 text-white min-w-40"
            >
              Learn more
            </AnimatedButton>
            <a href="tel:+17143630006" className="text-xl font-bold hover:text-blue-200 transition-colors">
              714-363-0006
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <FadeIn direction="up" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors group">
      <div className="w-16 h-16 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-5 group-hover:bg-blue-500 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-blue-100">{description}</p>
    </FadeIn>
  );
};

export default ITServices;
