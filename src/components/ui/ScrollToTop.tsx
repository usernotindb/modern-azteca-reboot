
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScroll, scrollToTop } from '@/lib/hooks/useScroll';

interface ScrollToTopProps {
  threshold?: number;
  smooth?: boolean;
  size?: 'sm' | 'default' | 'lg';
}

const ScrollToTop = ({ 
  threshold = 300, 
  smooth = true, 
  size = 'default' 
}: ScrollToTopProps) => {
  const visible = useScroll(threshold);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed right-5 bottom-5 z-50"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          <Button
            onClick={() => scrollToTop(smooth)}
            size={size}
            variant="outline"
            className="rounded-full p-2 shadow-md bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
