
import React from 'react';
import { motion } from 'framer-motion';
import ServiceIcon from './ServiceIcon';
import { Cpu, ShieldCheck, Cloud, Code, Database, Headphones } from 'lucide-react';

const ServiceIconGrid = () => {
  const services = [
    { title: "IT Management", icon: <Cpu size={28} /> },
    { title: "Security", icon: <ShieldCheck size={28} /> },
    { title: "Cloud Services", icon: <Cloud size={28} /> },
    { title: "Software Dev", icon: <Code size={28} /> },
    { title: "Database", icon: <Database size={28} /> },
    { title: "Support", icon: <Headphones size={28} /> }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="grid grid-cols-2 md:grid-cols-3 gap-4"
    >
      {services.map((service, index) => (
        <ServiceIcon
          key={service.title}
          title={service.title}
          icon={service.icon}
          delay={0.1 + index * 0.1}
        />
      ))}
    </motion.div>
  );
};

export default ServiceIconGrid;
