
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ContentCardProps {
  children: ReactNode;
  title?: string;
  icon?: ReactNode;
  className?: string;
  iconClassName?: string;
  delay?: number;
  variant?: 'default' | 'outlined' | 'solid' | 'accent';
}

const ContentCard = ({
  children,
  title,
  icon,
  className = "",
  iconClassName = "",
  delay = 0,
  variant = 'default'
}: ContentCardProps) => {
  const variantClasses = {
    default: "bg-white border border-aztec-100 shadow-sm",
    outlined: "bg-transparent border border-aztec-200",
    solid: "bg-aztec-800 text-white",
    accent: "bg-accent-50 border border-accent-100"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-xl p-6 ${variantClasses[variant]} ${className}`}
    >
      {(icon || title) && (
        <div className="mb-4">
          {icon && (
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
              variant === 'solid' 
                ? 'bg-white/10 text-white' 
                : 'bg-accent-50 text-accent-600'
            } ${iconClassName}`}>
              {icon}
            </div>
          )}
          
          {title && (
            <h3 className={`text-xl font-semibold ${
              variant === 'solid' ? 'text-white' : 'text-aztec-900'
            }`}>
              {title}
            </h3>
          )}
        </div>
      )}
      
      <div className={variant === 'solid' ? 'text-white/80' : 'text-aztec-600'}>
        {children}
      </div>
    </motion.div>
  );
};

export default ContentCard;
