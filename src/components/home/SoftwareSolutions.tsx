
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../ui/FadeIn';
import SlideUp, { SlideUpItem } from '../ui/SlideUp';
import AnimatedButton from '../ui/AnimatedButton';

const SoftwareSolutions = () => {
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
            Software Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-aztec-900">
            Professional Software for Your Business
          </h2>
          <p className="text-aztec-600 text-lg">
            From tax preparation to productivity suites, we provide industry-leading software solutions to help your business thrive.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* ATS Tax Software */}
          <motion.div style={{ y }} className="order-2 lg:order-1">
            <FadeIn direction="right" className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] bg-gradient-to-r from-green-100 to-green-50 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="bg-white inline-block p-6 rounded-xl shadow-md mb-4">
                      <h3 className="text-xl font-bold text-aztec-900">ATS SOFTWARE 2019</h3>
                      <p className="text-accent-600 font-medium">PROFESSIONAL TAX SOFTWARE</p>
                    </div>
                    <p className="text-aztec-800 font-medium">For High Volume Tax Businesses</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-aztec-900">ATS Tax Software</h3>
                <ul className="space-y-2 mb-6">
                  <FeatureItem>Fast, Easy and Efficient</FeatureItem>
                  <FeatureItem>In-Depth Calculations</FeatureItem>
                  <FeatureItem>Bank Products</FeatureItem>
                  <FeatureItem>1040 & Corp Forms</FeatureItem>
                  <FeatureItem>Comprehensive Depreciation Capabilities</FeatureItem>
                  <FeatureItem>Payperless Solutions</FeatureItem>
                </ul>
                <AnimatedButton 
                  href="/products/tax-software" 
                  className="w-full justify-center bg-accent-600 hover:bg-accent-700 text-white"
                >
                  Learn More
                </AnimatedButton>
              </div>
            </FadeIn>
          </motion.div>
          
          <FadeIn direction="left" className="order-1 lg:order-2">
            <SlideUp>
              <SlideUpItem>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-aztec-900">
                  Industry Leading Software for High Volume Tax Businesses
                </h3>
              </SlideUpItem>
              <SlideUpItem>
                <p className="text-aztec-600 mb-6">
                  Compare ATS Tax Software 2019 industry-leading professional tax software solutions and discover the right one for your business.
                </p>
              </SlideUpItem>
              <SlideUpItem>
                <h4 className="text-xl font-semibold mb-3 text-aztec-800">Software Features:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-8">
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>System encryption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>In-depth calculations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>Document archive</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>1040/ Corporate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>All States available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>Amend & E-file state returns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>W-7 Form Preparation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span>Remote/Digital Signatures</span>
                  </li>
                </ul>
              </SlideUpItem>
              <SlideUpItem>
                <AnimatedButton 
                  href="/contact" 
                  className="bg-accent-600 hover:bg-accent-700 text-white"
                >
                  Get a Quote
                </AnimatedButton>
              </SlideUpItem>
            </SlideUp>
          </FadeIn>
        </div>
        
        {/* Office 365 Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="up" className="order-1">
            <SlideUp>
              <SlideUpItem>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-aztec-900">
                  Office When and Where You Need It
                </h3>
              </SlideUpItem>
              <SlideUpItem>
                <p className="text-aztec-600 mb-6">
                  Work anywhere, anytime, on any device. Office 365 is ready when you are.
                </p>
              </SlideUpItem>
              <SlideUpItem>
                <p className="text-aztec-600 mb-6">
                  Whether you're working in your office or on the go, you get a familiar, top-of-the-line set of productivity tools. Office applications —always the latest versions—let you create, edit, and share from your PC/Mac or your iOS, Android™, or Windows device with anyone in real time.
                </p>
              </SlideUpItem>
              <SlideUpItem>
                <div className="bg-aztec-100 p-4 rounded-lg inline-block mb-6">
                  <p className="font-medium text-aztec-900">Starting at $149.99 a year</p>
                </div>
              </SlideUpItem>
              <SlideUpItem>
                <AnimatedButton 
                  href="/contact" 
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Talk to an Expert
                </AnimatedButton>
              </SlideUpItem>
            </SlideUp>
          </FadeIn>
          
          <motion.div style={{ y }} className="order-2">
            <FadeIn direction="up" className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] bg-gradient-to-r from-blue-50 to-red-50 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="max-w-xs mx-auto">
                    <img 
                      src="/lovable-uploads/f9ca7c28-be78-46ba-9cdc-eff03c287cb7.png" 
                      alt="Office 365 devices" 
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-bold text-aztec-900">Microsoft Office 365</h3>
                </div>
                <p className="text-aztec-600 mb-6">
                  Get access to the latest versions of Word, Excel, PowerPoint, Outlook, and more, installed on all your devices. Plus, get 1TB of cloud storage with OneDrive.
                </p>
                <AnimatedButton 
                  href="/products/office-365" 
                  className="w-full justify-center bg-accent-600 hover:bg-accent-700 text-white"
                >
                  Learn More
                </AnimatedButton>
              </div>
            </FadeIn>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center">
    <span className="h-5 w-5 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center mr-3">
      ✓
    </span>
    <span className="text-aztec-800">{children}</span>
  </li>
);

export default SoftwareSolutions;
