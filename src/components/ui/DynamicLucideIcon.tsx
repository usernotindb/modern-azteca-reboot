import React from 'react';
import * as Icons from 'lucide-react';

interface DynamicLucideIconProps extends Icons.LucideProps {
  name: string;
}

const DynamicLucideIcon: React.FC<DynamicLucideIconProps> = ({ name, ...props }) => {
  // Ensure the name starts with an uppercase letter as Lucide exports
  const iconName = name.charAt(0).toUpperCase() + name.slice(1);
  const LucideIcon = (Icons as any)[iconName];

  if (!LucideIcon) {
    // Return a default icon or null if the icon name is invalid
    console.warn(`Icon "${iconName}" not found in lucide-react`);
    return <Icons.HelpCircle {...props} />; // Default fallback icon
  }

  return <LucideIcon {...props} />;
};

export default DynamicLucideIcon;