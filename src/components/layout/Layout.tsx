
import { ReactNode } from 'react';
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
      
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>
      
      <Footer />
      
      {/* Add scroll to top button */}
      <ScrollToTop threshold={300} />
    </div>
  );
};

export default Layout;
