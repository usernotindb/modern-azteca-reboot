
import { Shield, Lock, FileCode, AlertTriangle, Server, Users, Eye, Fingerprint } from 'lucide-react';
import React from 'react';

// Get an icon based on the solution name for security products
export const getSecurityIcon = (name: string): React.ReactNode => {
  const nameLower = name.toLowerCase();
  
  if (nameLower.includes('firewall') || nameLower.includes('protection')) {
    return <Shield className="w-6 h-6" />;
  } else if (nameLower.includes('encryption') || nameLower.includes('secure')) {
    return <Lock className="w-6 h-6" />;
  } else if (nameLower.includes('software') || nameLower.includes('testing')) {
    return <FileCode className="w-6 h-6" />;
  } else if (nameLower.includes('monitor') || nameLower.includes('detection')) {
    return <AlertTriangle className="w-6 h-6" />;
  } else if (nameLower.includes('server') || nameLower.includes('network')) {
    return <Server className="w-6 h-6" />;
  } else if (nameLower.includes('access') || nameLower.includes('identity')) {
    return <Users className="w-6 h-6" />;
  } else if (nameLower.includes('surveillance') || nameLower.includes('video')) {
    return <Eye className="w-6 h-6" />;
  } else {
    return <Fingerprint className="w-6 h-6" />;
  }
};

// Get a section ID for a product to create anchor links
export const getProductSectionId = (name: string): string => {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};
