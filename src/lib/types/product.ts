
export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  categorySlug?: string;
  imageId?: string; // Add imageId field
}

export interface ProductCategory {
  id: number;
  name: string;
  description: string;
  products: Product[];
  slug: string;
}
