import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  withArrow?: boolean;
}
const AnimatedButton = ({
  children,
  onClick,
  href,
  className,
  variant = 'default',
  size = 'default',
  icon,
  iconPosition = 'right',
  withArrow = false
}: AnimatedButtonProps) => {
  // Handle hover animation for arrow or icon
  const rightIcon = withArrow ? <ArrowRight className="ml-2 h-4 w-4" /> : icon && iconPosition === 'right' ? icon : null;
  const leftIcon = icon && iconPosition === 'left' ? icon : null;
  const buttonContent = <span className="flex items-center justify-center">
      {leftIcon && <motion.span className="mr-2" initial={{
      x: 0
    }} whileHover={{
      x: -3
    }} transition={{
      duration: 0.2
    }}>
          {leftIcon}
        </motion.span>}
      
      {rightIcon && <motion.span className="ml-2" initial={{
      x: 0
    }} whileHover={{
      x: 3
    }} transition={{
      duration: 0.2
    }}>
          {rightIcon}
        </motion.span>}
    </span>;

  // If href is provided, render an anchor tag
  if (href) {
    return <motion.div whileHover={{
      scale: 1.02
    }} whileTap={{
      scale: 0.98
    }} className="inline-block">
        <Button asChild variant={variant} size={size} className={cn("font-medium", className)}>
          
        </Button>
      </motion.div>;
  }

  // Otherwise, render a button
  return <motion.div whileHover={{
    scale: 1.02
  }} whileTap={{
    scale: 0.98
  }} className="inline-block">
      <Button variant={variant} size={size} onClick={onClick} className={cn("font-medium", className)}>
        {buttonContent}
      </Button>
    </motion.div>;
};
export default AnimatedButton;