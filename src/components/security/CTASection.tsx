
import FadeIn from '@/components/ui/FadeIn';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="bg-gradient-to-r from-purple-700 to-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Secure Your Business Today
                </h2>
                <p className="text-purple-100 mb-6">
                  Don't wait until it's too late. Contact us today to schedule a free security assessment
                  and learn how our solutions can protect your business, data, and assets.
                </p>
                <div className="flex flex-wrap gap-4">
                  <AnimatedButton 
                    href="/contact" 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    withArrow
                  >
                    Get Started Today
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
                    <h3 className="text-white font-bold text-lg mb-2">Emergency Security Support</h3>
                    <p className="text-purple-200 text-sm mb-4">Available 24/7 for urgent security needs</p>
                    <span className="block text-white text-2xl font-bold mb-2">714-363-0006</span>
                    <span className="block text-purple-300 text-sm">or</span>
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
