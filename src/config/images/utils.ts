
import type { ImageConfig } from './types';
import { ALL_IMAGES, PLACEHOLDER_IMAGE } from './index';

// Simple utility functions that use the consolidated image registry
export function getImageById(id: string): Promise<ImageConfig | undefined> {
  return Promise.resolve(ALL_IMAGES[id]);
}

export function getImageByIdSync(id: string): ImageConfig | undefined {
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

export async function preloadCriticalImages(): Promise<void> {
  const criticalImageIds = ['laptops', 'servers', 'Workstations', 'softwareIcon', 'office365Icon', 'webrootIcon'];
  
  await Promise.all(
    criticalImageIds.map(id => {
      const image = ALL_IMAGES[id];
      if (image) {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = image.path;
        });
      }
      return Promise.resolve();
    })
  );
}
