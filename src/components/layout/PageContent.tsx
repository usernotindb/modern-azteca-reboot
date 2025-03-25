
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageContentProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const PageContent = ({ 
  children, 
  className = "", 
  delay = 0 
}: PageContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`container mx-auto px-4 sm:px-6 lg:px-8 py-16 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default PageContent;
