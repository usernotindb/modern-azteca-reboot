
/**
 * Optimized centralized image configuration system
 * 
 * This file now uses lazy loading for better performance
 */

// Import the type first
import type { ImageConfig } from './types';
import { PLACEHOLDER_IMAGE } from './types';

// Re-export types and constants
export type { ImageConfig };
export { PLACEHOLDER_IMAGE } from './types';

// Import static configs for immediate use
export { LOGO_IMAGES } from './logoImages';
export { PRODUCT_IMAGES } from './productImages';
export { ICON_IMAGES } from './iconImages';
export { BACKGROUND_IMAGES } from './backgroundImages';

// Re-export optimized utilities
export {
  getImageById,
  getImageByIdSync,
  getImagePath,
  getImage,
  preloadCriticalImages
} from './utils';

// Legacy compatibility - maintain existing API
export function getImagePathLegacy(id: string): string {
  // For backward compatibility, import all configs synchronously
  const { LOGO_IMAGES } = require('./logoImages');
  const { PRODUCT_IMAGES } = require('./productImages');
  const { ICON_IMAGES } = require('./iconImages');
  const { BACKGROUND_IMAGES } = require('./backgroundImages');
  
  const allImages = {
    ...LOGO_IMAGES,
    ...PRODUCT_IMAGES,
    ...ICON_IMAGES,
    ...BACKGROUND_IMAGES
  };
  
  const image = allImages[id];
  return image ? image.path : PLACEHOLDER_IMAGE;
}
