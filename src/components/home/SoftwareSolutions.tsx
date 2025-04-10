
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedButton from '@/components/ui/AnimatedButton';
import FadeIn from '@/components/ui/FadeIn';

const SoftwareSolutions = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  return <section className="relative py-24 overflow-hidden">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100 -z-10"></div>
      
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <FadeIn direction="up" duration={0.8}>
          <div className="text-center">
            <img 
              src="/lovable-uploads/atssoftware.png" 
              alt="Azteca Tax Software" 
              className="max-h-24 mx-auto mb-4"
            />
            <p className="text-blue-600 text-lg">
              Empowering your business with cutting-edge software solutions tailored to your unique needs.
            </p>
          </div>
        </FadeIn>
        
        <div className="relative mt-12 md:mt-16 lg:mt-20">
          {/* Main feature box with gradient background */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-[500px] md:h-[600px]">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            
            {/* Azteca Tax Software image as background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img src="/lovable-uploads/atssoftware.png" alt="Azteca Tax Software" className="w-full h-full object-cover opacity-20" />
            </div>
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-blue-900/30"></div>
            
            {/* Content inside the main feature box */}
            
          </div>
          
          {/* Feature cards and additional content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Card 1 */}
            <FadeIn delay={0.1} direction="up">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-blue-800 mb-2">The Best Tax Software in the Industry</h4>
                <p className="text-blue-600">Use ATS (Azteca Tax Systems) stands out as the best tax software in the industry due to its comprehensive solutions, user-friendly interface, and dedicated support tailored to meet the needs of tax professionals</p>
              </div>
            </FadeIn>
            
            {/* Card 2 */}
            <FadeIn delay={0.2} direction="up">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-blue-800 mb-2">IT Must have!!</h4>
                <p className="text-blue-600">We're not just another IT tech company—we're your partner in success. With a wide range of tailored solutions and unwavering support, we ensure your business is empowered with cutting-edge technology, backed by a team that's always here to help you thrive.</p>
              </div>
            </FadeIn>
            
            {/* Card 3 */}
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-blue-800 mb-2">Businesses Solutions</h4>
                <p className="text-blue-600">Implement robust enterprise software solutions that improve collaboration, productivity, and decision-making.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>;
};

export default SoftwareSolutions;
