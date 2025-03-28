
import { motion } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Upgrade Your Hardware Today
                </h2>
                <p className="text-gray-300 mb-6">
                  Whether you need new laptops, servers, or workstations, our team can help you 
                  select the right hardware for your business needs and budget.
                </p>
                <div className="flex flex-wrap gap-4">
                  <AnimatedButton 
                    href="/contact" 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    withArrow
                  >
                    Schedule a Consultation
                  </AnimatedButton>
                  <AnimatedButton 
                    href="/products" 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Back to All Products
                  </AnimatedButton>
                </div>
              </div>
              <div className="md:w-1/3">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                >
                  <div className="text-center">
                    <h3 className="text-white font-bold text-lg mb-2">Need Help Choosing?</h3>
                    <p className="text-gray-300 text-sm mb-4">Our experts are ready to assist you</p>
                    <span className="block text-white text-2xl font-bold mb-2">714-363-0006</span>
                    <span className="block text-gray-400 text-sm">or</span>
                    <AnimatedButton 
                      href="/contact" 
                      className="mt-4 bg-blue-600 hover:bg-blue-700 text-white w-full justify-center"
                      icon={<ArrowRight className="h-4 w-4" />}
                      iconPosition="right"
                    >
                      Contact Us
                    </AnimatedButton>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTASection;
