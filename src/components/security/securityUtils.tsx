
import React from 'react';
import { Camera, Lock, Shield, Fingerprint } from 'lucide-react';

// Function to get the appropriate icon based on product name
export const getSecurityIcon = (name: string): React.ReactNode => {
  if (name.includes("Camera")) return <Camera className="w-8 h-8" />;
  if (name.includes("Anti-Virus")) return <Shield className="w-8 h-8" />;
  if (name.includes("Network")) return <Lock className="w-8 h-8" />;
  return <Fingerprint className="w-8 h-8" />;
};

// Function to convert product name to ID format
export const getProductSectionId = (name: string): string => {
  return name.toLowerCase().replace(/\s+/g, '-');
};
