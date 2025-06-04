
import type { ImageConfig } from './types';
import { PLACEHOLDER_IMAGE } from './types';

// Lazy loading utility for image configs
const imageConfigs = new Map<string, () => Promise<Record<string, ImageConfig>>>();

// Register image config loaders
imageConfigs.set('logo', () => import('./logoImages').then(m => m.LOGO_IMAGES));
imageConfigs.set('product', () => import('./productImages').then(m => m.PRODUCT_IMAGES));
imageConfigs.set('icon', () => import('./iconImages').then(m => m.ICON_IMAGES));
imageConfigs.set('background', () => import('./backgroundImages').then(m => m.BACKGROUND_IMAGES));

// Cache for loaded configs
const configCache = new Map<string, Record<string, ImageConfig>>();

// Optimized utility function to get an image by ID with lazy loading
export async function getImageById(id: string): Promise<ImageConfig | undefined> {
  // Check cache first
  for (const [category, configs] of configCache.entries()) {
    if (configs[id]) {
      return configs[id];
    }
  }
  
  // Load configs if not cached
  for (const [category, loader] of imageConfigs.entries()) {
    if (!configCache.has(category)) {
      const configs = await loader();
      configCache.set(category, configs);
      
      if (configs[id]) {
        return configs[id];
      }
    }
  }
  
  return undefined;
}

// Synchronous version that only checks cache (for immediate use)
export function getImageByIdSync(id: string): ImageConfig | undefined {
  for (const configs of configCache.values()) {
    if (configs[id]) {
      return configs[id];
    }
  }
  return undefined;
}

// Optimized utility function to get image path with fallback
export function getImagePath(id: string): string {
  const image = getImageByIdSync(id);
  return image ? image.path : PLACEHOLDER_IMAGE;
}

// Optimized utility function to get full image config with fallback
export function getImage(id: string): ImageConfig {
  const image = getImageByIdSync(id);
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

// Preload critical images
export async function preloadCriticalImages(): Promise<void> {
  const criticalCategories = ['logo', 'background'];
  
  await Promise.all(
    criticalCategories.map(async (category) => {
      const loader = imageConfigs.get(category);
      if (loader && !configCache.has(category)) {
        const configs = await loader();
        configCache.set(category, configs);
      }
    })
  );
}
