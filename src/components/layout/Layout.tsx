
import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { useScrollToTopOnMount } from '@/lib/hooks/useScroll';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  // Scroll to top on route change
  useScrollToTopOnMount();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-grow pt-16 md:pt-20" // Add padding for fixed header
        >
          {children}
        </motion.main>
      </AnimatePresence>
      
      <Footer />
      
      {/* Add scroll to top button */}
      <ScrollToTop threshold={300} />
    </div>
  );
};

export default Layout;
