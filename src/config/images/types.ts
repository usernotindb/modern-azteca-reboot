
/**
 * Shared type definitions for the image configuration system
 */

export interface ImageConfig {
  id: string;
  path: string;
  alt: string;
  category: 'logo' | 'product' | 'service' | 'icon' | 'background' | 'hero' | 'team';
  context?: string; // Additional context about where the image is used
}

// Default placeholder image
export const PLACEHOLDER_IMAGE = "/placeholder.svg";
