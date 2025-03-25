
export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

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
        image: "/lovable-uploads/628857d0-dac0-42fc-b3e9-4528eee9ef00.png" 
      },
      { 
        id: 102, 
        name: "Office 365", 
        price: "Starting at $149.99/year",
        description: "Work anywhere, anytime, on any device with Microsoft's industry-leading productivity suite.",
        image: "/lovable-uploads/f9ca7c28-be78-46ba-9cdc-eff03c287cb7.png" 
      },
      { 
        id: 103, 
        name: "Anti-Virus Solutions", 
        price: "$49.99/year",
        description: "Complete protection for your devices with WiFi Security VPN and antivirus protection.",
        image: "/lovable-uploads/74da57e4-5aa3-4a37-aa85-c1c28943253c.png" 
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
        image: "/lovable-uploads/0cc76fb6-7912-43fd-9e88-c94137d92a37.png" 
      },
      { 
        id: 202, 
        name: "Servers", 
        price: "Starting at $1,499",
        description: "Operate reliably, manage easily, and scale your business with our server solutions.",
        image: "/lovable-uploads/9f23050e-b4e0-417a-bc5f-cf88dd8c3e82.png" 
      },
      { 
        id: 203, 
        name: "Workstations", 
        price: "Starting at $1,299",
        description: "Fully customizable Workstation-class performance for demanding professional applications.",
        image: "/lovable-uploads/628857d0-dac0-42fc-b3e9-4528eee9ef00.png" 
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
        image: "/lovable-uploads/8d93ccd6-f135-4472-ad9a-677825e40020.png" 
      },
      { 
        id: 302, 
        name: "Disaster Recovery", 
        price: "Custom pricing",
        description: "Protect your business with our robust backup and disaster recovery solutions.",
        image: "/lovable-uploads/8d93ccd6-f135-4472-ad9a-677825e40020.png" 
      },
      { 
        id: 303, 
        name: "Network Management", 
        price: "Custom pricing",
        description: "Keep your network infrastructure secure, up-to-date and operating at peak performance.",
        image: "/lovable-uploads/8d93ccd6-f135-4472-ad9a-677825e40020.png" 
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
        image: "/lovable-uploads/74da57e4-5aa3-4a37-aa85-c1c28943253c.png" 
      },
      { 
        id: 402, 
        name: "Anti-Virus Protection", 
        price: "$49.99/year",
        description: "Complete protection for your devices with WiFi Security VPN and antivirus protection.",
        image: "/lovable-uploads/74da57e4-5aa3-4a37-aa85-c1c28943253c.png" 
      },
      { 
        id: 403, 
        name: "Network Security", 
        price: "Custom pricing",
        description: "Comprehensive network security solutions to protect your business from threats.",
        image: "/lovable-uploads/8d93ccd6-f135-4472-ad9a-677825e40020.png" 
      },
    ]
  }
];
