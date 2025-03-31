
export interface Product {
  id: number;
  name: string;
  description: string;
  price?: string;
  image?: string; // Keep for backward compatibility
  imageId?: string; // New field for image ID
  categorySlug?: string;
  features?: string[];
}
