
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceIconProps {
  title: string;
  icon: string;
  delay?: number;
}

const ServiceIcon = ({ title, icon, delay = 0 }: ServiceIconProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/15 transition-all"
    >
      <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
        <div className="text-blue-900 text-4xl">
          {title.charAt(0)}
        </div>
      </div>
      <h3 className="text-white font-medium">{title}</h3>
    </motion.div>
  );
};

export default ServiceIcon;
