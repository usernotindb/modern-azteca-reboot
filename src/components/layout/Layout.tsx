
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { useScrollToTopOnMount } from '@/lib/hooks/useScroll';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Scroll to top on route change
  useScrollToTopOnMount();

  return (
    <div className="flex flex-col min-h-screen max-w-full overflow-hidden">
      <Header />
      
      <main className={`flex-grow w-full ${isMobile ? 'pt-16' : 'pt-20'}`}>
        <div className="w-full mx-auto">
          {children}
        </div>
      </main>
      
      <Footer />
      
      {/* Add scroll to top button */}
      <ScrollToTop threshold={300} />
    </div>
  );
};

export default Layout;
