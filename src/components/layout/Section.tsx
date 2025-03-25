
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  label?: string;
  className?: string;
  background?: 'white' | 'light' | 'dark' | 'accent' | 'gradient';
  centered?: boolean;
}

const Section = ({
  children,
  title,
  subtitle,
  label,
  className = "",
  background = 'white',
  centered = false
}: SectionProps) => {
  const bgClasses = {
    white: "bg-white",
    light: "bg-aztec-50",
    dark: "bg-aztec-900 text-white",
    accent: "bg-accent-50",
    gradient: "bg-gradient-to-b from-blue-600 to-blue-900 text-white"
  };

  return (
    <section className={`py-16 md:py-24 overflow-hidden relative ${bgClasses[background]} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle || label) && (
          <FadeIn className={`${centered ? 'text-center max-w-3xl mx-auto' : ''} mb-12`}>
            {label && (
              <span className={`inline-block px-4 py-1.5 mb-4 rounded-full ${
                background === 'dark' ? 'bg-white/10 text-white' : 'bg-accent-50 text-accent-600'
              } text-sm font-medium`}>
                {label}
              </span>
            )}
            
            {title && (
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                background === 'dark' ? 'text-white' : 'text-aztec-900'
              }`}>
                {title}
              </h2>
            )}
            
            {subtitle && (
              <p className={`text-lg ${
                background === 'dark' ? 'text-white/80' : 'text-aztec-600'
              }`}>
                {subtitle}
              </p>
            )}
          </FadeIn>
        )}
        
        {children}
      </div>
    </section>
  );
};

export default Section;
