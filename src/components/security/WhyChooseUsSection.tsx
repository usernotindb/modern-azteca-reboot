
import { motion } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';
import { Shield, Camera, Lock } from 'lucide-react';

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Choose Azteca for Security?</h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            With years of experience and a team of certified security professionals,
            we deliver solutions that provide peace of mind and robust protection.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: <Shield className="w-12 h-12" />,
              title: "Expert Security Assessment",
              description: "We analyze your unique security needs and vulnerabilities to design the perfect solution."
            },
            {
              icon: <Camera className="w-12 h-12" />,
              title: "Professional Installation",
              description: "Our certified technicians ensure your security systems are installed correctly and optimized."
            },
            {
              icon: <Lock className="w-12 h-12" />,
              title: "Ongoing Support",
              description: "We provide continuous monitoring, maintenance, and support for all security solutions."
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
            >
              <div className="mb-6 text-yellow-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-purple-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
