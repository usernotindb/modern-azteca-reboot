
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
        imageId: "softwareIcon",
        link: "/products/software-solutions#ats-tax-software"
      },
      { 
        id: 102, 
        name: "Office 365", 
        price: "Starting at $179/year",
        description: "Work anywhere, anytime, on any device with Microsoft's industry-leading productivity suite.",
        imageId: "office365Icon",
        link: "/products/software-solutions#office-365"
      },
      { 
        id: 103, 
        name: "Anti-Virus Solutions", 
        price: "$49.99/year",
        description: "Complete protection for your devices with WiFi Security VPN and antivirus protection.",
        imageId: "webrootIcon",
        link: "/products/software-solutions#anti-virus-solutions"
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
        price: "Starting at $999",
        description: "Get everything done faster with solid state drives, powerful processors, and sleek designs.",
        imageId: "laptops",
        link: "/products/laptops"
      },
      { 
        id: 202, 
        name: "Servers", 
        price: "Starting at $1,699",
        description: "Operate reliably, manage easily, and scale your business with our server solutions.",
        imageId: "servers",
        link: "/products/servers"
      },
      { 
        id: 203, 
        name: "Workstations", 
        price: "Starting at $1,499",
        description: "Fully customizable Workstation-class performance for demanding professional applications.",
        imageId: "Workstations",
        link: "/products/workstations"
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
        imageId: "managed-it-services",
        link: "/products/it-services#managed-it-services"
      },
      { 
        id: 302, 
        name: "Disaster Recovery", 
        price: "Custom pricing",
        description: "Protect your business with our robust backup and disaster recovery solutions.",
        imageId: "icon-protection",
        link: "/products/it-services#disaster-recovery"
      },
      { 
        id: 303, 
        name: "Network Management", 
        price: "Custom pricing",
        description: "Keep your network infrastructure secure, up-to-date and operating at peak performance.",
        imageId: "icon-monitor",
        link: "/products/it-services#network-management"
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
        imageId: "icon-security",
        link: "/products/security-solutions#ip-camera-systems"
      },
      { 
        id: 402, 
        name: "Anti-Virus Protection", 
        price: "$49.99/year",
        description: "Complete protection for your devices with WiFi Security VPN and antivirus protection.",
        imageId: "webrootIcon",
        link: "/products/security-solutions#anti-virus-protection"
      },
      { 
        id: 403, 
        name: "Network Security", 
        price: "Custom pricing",
        description: "Comprehensive network security solutions to protect your business from threats.",
        imageId: "icon-server",
        link: "/products/security-solutions#network-security"
      },
    ]
  }
];
