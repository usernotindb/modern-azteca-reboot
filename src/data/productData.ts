
import { getImagePath } from '@/config/images';
import { Product } from '@/lib/types/product';

export type { Product }; // Re-export Product type using 'export type' syntax

export interface ProductCategory {
  id: number;
  name: string;
  description: string;
  products: Product[];
  slug: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: 1,
    name: "Software Solutions",
    description: "Professional software for businesses of all sizes",
    slug: "software-solutions",
    products: [
      { 
        id: 101, 
        name: "ATS Tax Software", 
        price: "Contact for pricing",
        description: "Professional tax software for high volume tax businesses with comprehensive features for tax preparation and filing.",
        imageId: "workstation-design" 
      },
      { 
        id: 102, 
        name: "Office 365", 
        price: "Starting at $149.99/year",
        description: "Work anywhere, anytime, on any device with Microsoft's industry-leading productivity suite.",
        imageId: "icon-dev" 
      },
      { 
        id: 103, 
        name: "Anti-Virus Solutions", 
        price: "$49.99/year",
        description: "Complete protection for your devices with WiFi Security VPN and antivirus protection.",
        imageId: "icon-cloud" 
      },
    ]
  },
  {
    id: 2,
    name: "Hardware Solutions",
    description: "Premium hardware for optimal performance",
    slug: "hardware-solutions",
    products: [
      { 
        id: 201, 
        name: "Laptops", 
        price: "Starting at $899",
        description: "Get everything done faster with solid state drives, powerful processors, and sleek designs.",
        imageId: "laptop-business-pro" 
      },
      { 
        id: 202, 
        name: "Servers", 
        price: "Starting at $1,499",
        description: "Operate reliably, manage easily, and scale your business with our server solutions.",
        imageId: "server-mid-range" 
      },
      { 
        id: 203, 
        name: "Workstations", 
        price: "Starting at $1,299",
        description: "Fully customizable Workstation-class performance for demanding professional applications.",
        imageId: "workstation-engineering" 
      },
    ]
  },
  {
    id: 3,
    name: "IT Services",
    description: "Comprehensive IT support and management",
    slug: "it-services",
    products: [
      { 
        id: 301, 
        name: "Managed IT Services", 
        price: "Custom pricing",
        description: "Comprehensive IT management to keep your systems running smoothly and securely.",
        imageId: "icon-security" 
      },
      { 
        id: 302, 
        name: "Disaster Recovery", 
        price: "Custom pricing",
        description: "Protect your business with our robust backup and disaster recovery solutions.",
        imageId: "icon-access" 
      },
      { 
        id: 303, 
        name: "Network Management", 
        price: "Custom pricing",
        description: "Keep your network infrastructure secure, up-to-date and operating at peak performance.",
        imageId: "icon-monitor" 
      },
    ]
  },
  {
    id: 4,
    name: "Security Solutions",
    description: "Protect your business data and assets",
    slug: "security-solutions",
    products: [
      { 
        id: 401, 
        name: "IP Camera Systems", 
        price: "Custom pricing",
        description: "Expert installation of security camera systems for homes and businesses.",
        imageId: "icon-cloud" 
      },
      { 
        id: 402, 
        name: "Anti-Virus Protection", 
        price: "$49.99/year",
        description: "Complete protection for your devices with WiFi Security VPN and antivirus protection.",
        imageId: "icon-cloud" 
      },
      { 
        id: 403, 
        name: "Network Security", 
        price: "Custom pricing",
        description: "Comprehensive network security solutions to protect your business from threats.",
        imageId: "icon-security" 
      },
    ]
  }
];
