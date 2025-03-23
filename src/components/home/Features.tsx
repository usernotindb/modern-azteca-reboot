
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../ui/FadeIn';
import { Shield, Zap, RefreshCw, Award } from 'lucide-react';

const Features = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Uncompromising Quality",
      description: "We uphold the highest standards in every aspect of our products, ensuring exceptional durability and performance."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Innovative Design",
      description: "Our designs push boundaries while maintaining an elegant simplicity that stands the test of time."
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Sustainable Practices",
      description: "We're committed to environmentally responsible methods throughout our production processes."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Award-Winning Service",
      description: "Our dedication to customer satisfaction has earned us recognition across the industry."
    }
  ];

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-aztec-100 text-aztec-800 text-sm font-medium">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Excellence in Every Detail
          </h2>
          <p className="text-aztec-600 text-lg">
            Our commitment to perfection drives everything we do, from concept to creation.
            We believe that thoughtful design and meticulous execution create truly exceptional experiences.
          </p>
        </FadeIn>

        <motion.div 
          style={{ y }} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-aztec-50 rounded-full opacity-60 blur-3xl" />
    </section>
  );
};

const FeatureCard = ({ icon, title, description, index }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  index: number;
}) => {
  return (
    <FadeIn 
      direction="up" 
      delay={0.1 * index} 
      className="bg-white border border-aztec-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
    >
      <div className="w-12 h-12 rounded-lg bg-accent-50 flex items-center justify-center text-accent-600 mb-5 group-hover:bg-accent-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-aztec-900">{title}</h3>
      <p className="text-aztec-600">{description}</p>
    </FadeIn>
  );
};

export default Features;
