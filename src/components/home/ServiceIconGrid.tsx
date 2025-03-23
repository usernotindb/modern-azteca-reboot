
import React from 'react';
import { motion } from 'framer-motion';
import ServiceIcon from './ServiceIcon';

const ServiceIconGrid = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative rounded-2xl overflow-hidden"
    >
      <div className="grid grid-cols-2 gap-6">
        <ServiceIcon 
          title="IT Management" 
          icon="/lovable-uploads/881ea460-231f-4a79-9b8a-a49b932665d7.png"
          delay={0.1}
        />
        <ServiceIcon 
          title="Disaster Recovery" 
          icon="/lovable-uploads/881ea460-231f-4a79-9b8a-a49b932665d7.png"
          delay={0.2}
        />
        <ServiceIcon 
          title="Server Management" 
          icon="/lovable-uploads/881ea460-231f-4a79-9b8a-a49b932665d7.png"
          delay={0.3}
        />
        <ServiceIcon 
          title="Network Management" 
          icon="/lovable-uploads/881ea460-231f-4a79-9b8a-a49b932665d7.png"
          delay={0.4}
        />
        <ServiceIcon 
          title="IP Cameras" 
          icon="/lovable-uploads/bec2f6ea-6fb3-4073-9c82-38aea9579aab.png"
          delay={0.5}
        />
      </div>
    </motion.div>
  );
};

export default ServiceIconGrid;
