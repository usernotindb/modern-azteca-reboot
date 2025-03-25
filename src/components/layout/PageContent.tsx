
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageContentProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  withContainer?: boolean;
  background?: 'white' | 'light' | 'transparent';
}

const PageContent = ({ 
  children, 
  className = "", 
  delay = 0,
  withContainer = true,
  background = 'transparent'
}: PageContentProps) => {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-aztec-50',
    transparent: ''
  };
  
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`${className} ${bgClasses[background]}`}
    >
      {children}
    </motion.div>
  );
  
  if (withContainer) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {content}
      </div>
    );
  }
  
  return content;
};

export default PageContent;
