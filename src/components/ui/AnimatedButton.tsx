
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  className?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  isExternal?: boolean;
}

const AnimatedButton = ({
  children,
  href,
  variant = 'default',
  className = '',
  size = 'default',
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false,
  isExternal = false
}: AnimatedButtonProps) => {
  // Button content with animation
  const buttonContent = (
    <motion.span
      className="inline-block w-full"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.span>
  );

  // Determine if the button should be full width
  const widthClass = fullWidth ? 'w-full' : '';

  // Common button props
  const commonProps = {
    variant,
    size,
    onClick,
    disabled,
    type,
    className: cn(widthClass, className)
  };

  // If there's an href, render as Link or anchor, otherwise render as button
  if (href) {
    if (isExternal || href.startsWith('http')) {
      return (
        <Button asChild {...commonProps}>
          <a href={href} target="_blank" rel="noopener noreferrer">
            {buttonContent}
          </a>
        </Button>
      );
    }
    
    return (
      <Button asChild {...commonProps}>
        <Link to={href}>
          {buttonContent}
        </Link>
      </Button>
    );
  }

  return (
    <Button {...commonProps}>
      {buttonContent}
    </Button>
  );
};

export default AnimatedButton;
