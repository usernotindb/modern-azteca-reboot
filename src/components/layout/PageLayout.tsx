
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Layout from './Layout';
import FadeIn from '@/components/ui/FadeIn';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  label?: string;
  className?: string;
}

const PageLayout = ({ 
  children, 
  title, 
  subtitle, 
  label = "Azteca Technology", 
  className = "" 
}: PageLayoutProps) => {
  return (
    <Layout>
      <div className="mt-16 lg:mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent-50 text-accent-600 text-sm font-medium">
              {label}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-aztec-900">
              {title}
            </h1>
            {subtitle && (
              <p className="text-aztec-600 text-lg mb-8 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </FadeIn>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={className}
        >
          {children}
        </motion.div>
      </div>
    </Layout>
  );
};

export default PageLayout;
