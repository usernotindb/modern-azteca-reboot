
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceIconProps {
  title: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceIcon = ({ title, icon, delay = 0 }: ServiceIconProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center hover:bg-white/15 transition-all border border-white/5 shadow-lg group"
    >
      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
        <div className="text-white text-2xl">
          {icon}
        </div>
      </div>
      <h3 className="text-white font-medium text-lg group-hover:text-yellow-300 transition-colors">{title}</h3>
    </motion.div>
  );
};

export default ServiceIcon;
