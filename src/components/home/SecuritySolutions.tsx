
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../ui/FadeIn';
import AnimatedButton from '../ui/AnimatedButton';
import { Shield, Camera } from 'lucide-react';

const SecuritySolutions = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  return (
    <section ref={ref} className="section-padding bg-aztec-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent-50 text-accent-600 text-sm font-medium">
            Security Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-aztec-900">
            Protect Your Business & Data
          </h2>
          <p className="text-aztec-600 text-lg">
            From antivirus to surveillance systems, we provide comprehensive security solutions to keep your business safe.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Anti-Virus Section */}
          <FadeIn direction="right">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
              <div className="p-6 bg-gradient-to-r from-accent-50 to-blue-50">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-accent-600 mr-3" />
                  <h3 className="text-2xl font-bold text-aztec-900">Anti-Virus</h3>
                </div>
                <p className="text-aztec-600 font-medium">WiFi Security + Virus Protection</p>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-aztec-600 mb-6">
                  The WiFi Security VPN and antivirus protection go hand in hand. To stay safe online, you need both. 
                  One protects your devices, one protects your connection, and both work together to give you security 
                  and privacy as you work, share, bank, and browse.
                </p>
                <div className="bg-aztec-50 p-4 rounded-lg mb-6">
                  <p className="font-medium text-accent-600 text-xl">$49.99 / year</p>
                </div>
                <AnimatedButton 
                  href="/products/anti-virus" 
                  className="w-full justify-center bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Learn More
                </AnimatedButton>
              </div>
            </div>
          </FadeIn>
          
          {/* IP Cameras Section */}
          <FadeIn direction="left">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
              <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50">
                <div className="flex items-center mb-4">
                  <Camera className="h-8 w-8 text-indigo-600 mr-3" />
                  <h3 className="text-2xl font-bold text-aztec-900">IP Cameras</h3>
                </div>
                <p className="text-aztec-600 font-medium">We are experts providing security camera systems and installation.</p>
              </div>
              <div className="p-6 flex-grow">
                <div className="rounded-lg overflow-hidden mb-6">
                  <img 
                    src="/lovable-uploads/74da57e4-5aa3-4a37-aa85-c1c28943253c.png" 
                    alt="IP Camera" 
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-aztec-700 font-bold mb-6">
                  Your home or business is 300% more likely to be burglarized without a security system.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-aztec-800 mb-2">4 MP Mini Bullet IP Camera</h4>
                  <p className="text-aztec-600 text-sm mb-4">
                    4 MP, Mini Bullet IP Camera, 2.8mm, True WDR, Micro SD Card up to 128G, H.265+, Black housing
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-medium text-aztec-600">For pricing information:</p>
                  <a href="tel:+17143630006" className="text-lg font-bold text-accent-600 hover:text-accent-700 transition-colors">
                    714-363-0006
                  </a>
                </div>
              </div>
              <div className="p-6 bg-aztec-50">
                <AnimatedButton 
                  href="/contact" 
                  className="w-full justify-center bg-blue-600 hover:bg-blue-700 text-white"
                >
                  GET A QUOTE NOW!
                </AnimatedButton>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default SecuritySolutions;
