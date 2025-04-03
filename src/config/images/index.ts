
/**
 * Centralized image configuration system with improved organization
 * 
 * Image configurations are now split into separate files by category
 * and re-exported from this central index file for easier usage
 */

import { PLACEHOLDER_IMAGE } from './types';
import { LOGO_IMAGES } from './logoImages';
import { PRODUCT_IMAGES } from './productImages';
import { ICON_IMAGES } from './iconImages';
import { BACKGROUND_IMAGES } from './backgroundImages';

// Re-export everything for backward compatibility
export type { ImageConfig } from './types';
export { PLACEHOLDER_IMAGE } from './types';
export { LOGO_IMAGES } from './logoImages';
export { PRODUCT_IMAGES } from './productImages';
export { ICON_IMAGES } from './iconImages';
export { BACKGROUND_IMAGES } from './backgroundImages';

// Utility function to get an image by ID from any category
export function getImageById(id: string): ImageConfig | undefined {
  // Search in all image categories
  const allImages = {
    ...LOGO_IMAGES,
    ...PRODUCT_IMAGES,
    ...ICON_IMAGES,
    ...BACKGROUND_IMAGES
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

// Need to import the type for the utility functions to work
import type { ImageConfig } from './types';
