/**
 * Centralized image configuration file
 * This allows each image to be referenced by a unique ID
 * and updated independently throughout the application
 */

// Type definitions
export interface ImageConfig {
  id: string;
  path: string;
  alt: string;
  category: 'logo' | 'product' | 'service' | 'icon' | 'background' | 'hero' | 'team';
  context?: string; // Additional context about where the image is used
}

// Default placeholder image
export const PLACEHOLDER_IMAGE = "/placeholder.svg";

// Company logos
export const LOGO_IMAGES: Record<string, ImageConfig> = {
  mainLogo: {
    id: 'main-logo',
    path: "/lovable-uploads/aafd8b1b-4480-41c4-9f11-0d6862cff6dd.png",
    alt: "Azteca Technology Logo",
    category: 'logo',
    context: 'Company main logo'
  }
};

// Product images
export const PRODUCT_IMAGES: Record<string, ImageConfig> = {
  laptop1: {
    id: 'laptop-business-pro',
    path: "/lovable-uploads/78f56f78-5618-46cc-87a1-bbb19df328bb.png",
    alt: "Business Pro Laptop",
    category: 'product',
    context: 'Business laptop product'
  },
  laptop2: {
    id: 'laptop-developer',
    path: "/lovable-uploads/0cc76fb6-7912-43fd-9e88-c94137d92a37.png",
    alt: "Developer Powerhouse Laptop",
    category: 'product',
    context: 'Developer laptop product'
  },
  laptop3: {
    id: 'laptop-executive',
    path: "/lovable-uploads/6d1b82c7-3784-46ea-9384-d24ef9ad8509.png",
    alt: "Executive Ultrabook",
    category: 'product',
    context: 'Executive laptop product'
  },
  server1: {
    id: 'server-entry-level',
    path: "/lovable-uploads/9f23050e-b4e0-417a-bc5f-cf88dd8c3e82.png",
    alt: "Entry-Level Server",
    category: 'product',
    context: 'Entry level server product'
  },
  server2: {
    id: 'server-mid-range',
    path: "/lovable-uploads/9f952ca9-69ce-4ab5-8239-0dbdcdae2c6b.png",
    alt: "Mid-Range Business Server",
    category: 'product',
    context: 'Mid-range server product'
  },
  server3: {
    id: 'server-enterprise',
    path: "/lovable-uploads/bec2f6ea-6fb3-4073-9c82-38aea9579aab.png",
    alt: "Enterprise Data Server",
    category: 'product',
    context: 'Enterprise server product'
  },
  workstation1: {
    id: 'workstation-design',
    path: "/lovable-uploads/628857d0-dac0-42fc-b3e9-4528eee9ef00.png",
    alt: "Design Pro Workstation",
    category: 'product',
    context: 'Design workstation product'
  },
  workstation2: {
    id: 'workstation-engineering',
    path: "/lovable-uploads/881ea460-231f-4a79-9b8a-a49b932665d7.png",
    alt: "Engineering Powerhouse",
    category: 'product',
    context: 'Engineering workstation product'
  },
  workstation3: {
    id: 'workstation-content',
    path: "/lovable-uploads/fd6981e3-b5e5-4a03-9cd8-38fac8167126.png",
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

// Service/Tech Icons
export const ICON_IMAGES: Record<string, ImageConfig> = {
  cloudIcon: {
    id: 'icon-cloud',
    path: "/lovable-uploads/74da57e4-5aa3-4a37-aa85-c1c28943253c.png",
    alt: "Cloud Services",
    category: 'icon',
    context: 'Cloud services icon'
  },
  hardwareIcon: {
    id: 'icon-hardware',
    path: "/lovable-uploads/881ea460-231f-4a79-9b8a-a49b932665d7.png",
    alt: "Hardware Solutions",
    category: 'icon',
    context: 'Hardware solutions icon'
  },
  securityIcon: {
    id: 'icon-security',
    path: "/lovable-uploads/8d93ccd6-f135-4472-ad9a-677825e40020.png",
    alt: "Security Solutions",
    category: 'icon',
    context: 'Security solutions icon'
  },
  supportIcon: {
    id: 'icon-support',
    path: "/lovable-uploads/9f23050e-b4e0-417a-bc5f-cf88dd8c3e82.png",
    alt: "IT Support",
    category: 'icon',
    context: 'IT support icon'
  },
  softwareIcon: {
    id: 'icon-software',
    path: "/lovable-uploads/6d1b82c7-3784-46ea-9384-d24ef9ad8509.png",
    alt: "Software",
    category: 'icon',
    context: 'Software icon'
  },
  appsIcon: {
    id: 'icon-apps',
    path: "/lovable-uploads/9f952ca9-69ce-4ab5-8239-0dbdcdae2c6b.png",
    alt: "Applications",
    category: 'icon',
    context: 'Applications icon'
  },
  devIcon: {
    id: 'icon-dev',
    path: "/lovable-uploads/f9ca7c28-be78-46ba-9cdc-eff03c287cb7.png",
    alt: "Development",
    category: 'icon',
    context: 'Development icon'
  },
  webIcon: {
    id: 'icon-web',
    path: "/lovable-uploads/628857d0-dac0-42fc-b3e9-4528eee9ef00.png",
    alt: "Web Solutions",
    category: 'icon',
    context: 'Web solutions icon'
  },
  accessIcon: {
    id: 'icon-access',
    path: "/lovable-uploads/15740d59-746e-4979-ae0f-e377879839ee.png",
    alt: "Access Control",
    category: 'icon',
    context: 'Access control icon'
  },
  monitorIcon: {
    id: 'icon-monitor',
    path: "/lovable-uploads/944ad356-757c-4847-bb03-8e643c5032fc.png",
    alt: "System Monitoring",
    category: 'icon',
    context: 'System monitoring icon'
  },
  protectionIcon: {
    id: 'icon-protection',
    path: "/lovable-uploads/bec2f6ea-6fb3-4073-9c82-38aea9579aab.png",
    alt: "Data Protection",
    category: 'icon',
    context: 'Data protection icon'
  }
};

// Utility function to get an image by ID from any category
export function getImageById(id: string): ImageConfig | undefined {
  // Search in all image categories
  const allImages = {
    ...LOGO_IMAGES,
    ...PRODUCT_IMAGES,
    ...ICON_IMAGES
  };
  
  return allImages[id] || undefined;
}

// Utility function to get image path with fallback to placeholder
export function getImagePath(id: string): string {
  const image = getImageById(id);
  return image ? image.path : PLACEHOLDER_IMAGE;
}

// Utility function to get full image config with fallback
export function getImage(id: string): ImageConfig {
  const image = getImageById(id);
  if (!image) {
    return {
      id: 'placeholder',
      path: PLACEHOLDER_IMAGE,
      alt: 'Image not found',
      category: 'background'
    };
  }
  return image;
}
