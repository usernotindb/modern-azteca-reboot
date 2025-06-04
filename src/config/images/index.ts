
/**
 * Optimized centralized image configuration system
 * 
 * This file now ensures images are available immediately
 */

// Import the type first
import type { ImageConfig } from './types';
import { PLACEHOLDER_IMAGE } from './types';

// Import all configs synchronously for immediate availability
import { LOGO_IMAGES } from './logoImages';
import { PRODUCT_IMAGES } from './productImages';
import { ICON_IMAGES } from './iconImages';
import { BACKGROUND_IMAGES } from './backgroundImages';

// Re-export types and constants
export type { ImageConfig };
export { PLACEHOLDER_IMAGE } from './types';

// Re-export all image collections
export { LOGO_IMAGES, PRODUCT_IMAGES, ICON_IMAGES, BACKGROUND_IMAGES };

// Create a consolidated image registry for immediate access
export const ALL_IMAGES: Record<string, ImageConfig> = {
  ...LOGO_IMAGES,
  ...PRODUCT_IMAGES,
  ...ICON_IMAGES,
  ...BACKGROUND_IMAGES
};

// Optimized utility functions that work immediately
export function getImageById(id: string): ImageConfig | undefined {
  return ALL_IMAGES[id];
}

export function getImagePath(id: string): string {
  const image = ALL_IMAGES[id];
  return image ? image.path : PLACEHOLDER_IMAGE;
}

export function getImage(id: string): ImageConfig {
  const image = ALL_IMAGES[id];
  if (!image) {
    console.warn(`Image with id '${id}' not found, using placeholder`);
    return {
      id: 'placeholder',
      path: PLACEHOLDER_IMAGE,
      alt: 'Image not found',
      category: 'background'
    };
  }
  return image;
}

// Legacy compatibility - maintain existing API
export function getImagePathLegacy(id: string): string {
  return getImagePath(id);
}

// Preload critical images (now works immediately since images are already loaded)
export function preloadCriticalImages(): Promise<void> {
  const criticalImageIds = ['laptops', 'servers', 'Workstations', 'softwareIcon', 'office365Icon', 'webrootIcon'];
  
  return Promise.all(
    criticalImageIds.map(id => {
      const image = ALL_IMAGES[id];
      if (image) {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Continue even if image fails to load
          img.src = image.path;
        });
      }
      return Promise.resolve();
    })
  ).then(() => {});
}
