
import { ImageConfig } from './types';

/**
 * Product images
 */
export const PRODUCT_IMAGES: Record<string, ImageConfig> = {
  // Category images
  laptops: {
    id: 'laptops',
    path: "/lovable-uploads/laptops.png",
    alt: "Laptops Category",
    category: 'product',
    context: 'General Laptops Category Image'
  },
  servers: {
    id: 'servers',
    path: "/lovable-uploads/servers.png",
    alt: "Servers Category",
    category: 'product',
    context: 'General Servers Category Image'
  },
  Workstations: { // Note: Case matches imageId used in productData.ts
    id: 'Workstations',
    path: "/lovable-uploads/Workstations.png",
    alt: "Workstations Category",
    category: 'product',
    context: 'General Workstations Category Image'
  },
  
  // Software solution images
  softwareIcon: {
    id: 'softwareIcon',
    path: "/lovable-uploads/atssoftware.png",
    alt: "ATS Tax Software",
    category: 'product',
    context: 'ATS Tax Software icon'
  },
  office365Icon: {
    id: 'office365Icon',
    path: "/lovable-uploads/office365_new.png",
    alt: "Office 365",
    category: 'product',
    context: 'Office 365 icon'
  },
  webrootIcon: {
    id: 'webrootIcon',
    path: "/lovable-uploads/Webroot.png",
    alt: "Webroot Antivirus",
    category: 'product',
    context: 'Webroot Antivirus icon'
  },
  
  // IT Services images
  'managed-it-services': {
    id: 'managed-it-services',
    path: "/lovable-uploads/managed-it-services.png",
    alt: "Managed IT Services",
    category: 'product',
    context: 'Managed IT Services'
  },
  'icon-protection': {
    id: 'icon-protection',
    path: "/lovable-uploads/cybersecurity.png",
    alt: "Protection Services",
    category: 'product',
    context: 'Protection and security services'
  },
  'icon-monitor': {
    id: 'icon-monitor',
    path: "/lovable-uploads/remote-support.png",
    alt: "Network Monitoring",
    category: 'product',
    context: 'Network monitoring services'
  },
  'icon-security': {
    id: 'icon-security',
    path: "/lovable-uploads/cybersecurity.png",
    alt: "Security Solutions",
    category: 'product',
    context: 'Security solutions'
  },
  'icon-server': {
    id: 'icon-server',
    path: "/lovable-uploads/servers.png",
    alt: "Server Solutions",
    category: 'product',
    context: 'Server solutions'
  },
  
  // Specific product models
  'laptop-business-pro': {
    id: 'laptop-business-pro',
    path: "/lovable-uploads/laptops.png",
    alt: "Business Pro Laptop",
    category: 'product',
    context: 'Business laptop product'
  },
  'laptop-developer': {
    id: 'laptop-developer',
    path: "/lovable-uploads/laptops.png",
    alt: "Developer Powerhouse Laptop",
    category: 'product',
    context: 'Developer laptop product'
  },
  'laptop-executive': {
    id: 'laptop-executive',
    path: "/lovable-uploads/laptops.png",
    alt: "Executive Ultrabook",
    category: 'product',
    context: 'Executive laptop product'
  },
  'server-entry-level': {
    id: 'server-entry-level',
    path: "/lovable-uploads/servers.png",
    alt: "Entry-Level Server",
    category: 'product',
    context: 'Entry level server product'
  },
  'server-mid-range': {
    id: 'server-mid-range',
    path: "/lovable-uploads/servers.png",
    alt: "Mid-Range Business Server",
    category: 'product',
    context: 'Mid-range server product'
  },
  'server-enterprise': {
    id: 'server-enterprise',
    path: "/lovable-uploads/servers.png",
    alt: "Enterprise Data Server",
    category: 'product',
    context: 'Enterprise server product'
  },
  'workstation-design': {
    id: 'workstation-design',
    path: "/lovable-uploads/Workstations.png",
    alt: "Design Pro Workstation",
    category: 'product',
    context: 'Design workstation product'
  },
  'workstation-engineering': {
    id: 'workstation-engineering',
    path: "/lovable-uploads/Workstations.png",
    alt: "Engineering Powerhouse",
    category: 'product',
    context: 'Engineering workstation product'
  },
  'workstation-content': {
    id: 'workstation-content',
    path: "/lovable-uploads/Workstations.png",
    alt: "Content Creation Station",
    category: 'product',
    context: 'Content creation workstation product'
  },
  productShowcase: {
    id: 'product-showcase',
    path: "/lovable-uploads/be83f2fe-6c46-44a5-8294-16247227c695.png",
    alt: "Product Showcase",
    category: 'product',
    context: 'Product showcase display'
  }
};
