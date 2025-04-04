
import React, { useState } from 'react';
import { 
  LOGO_IMAGES,
  PRODUCT_IMAGES,
  ICON_IMAGES,
  BACKGROUND_IMAGES,
  ImageConfig
} from '@/config/images';
import ImageGenerator from '@/components/shared/ImageGenerator';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';

type ImageCategory = 'logo' | 'product' | 'icon' | 'background';

const ImageManagement = () => {
  const [generatedImages, setGeneratedImages] = useState<Record<string, string>>({});
  
  const handleImageGenerated = (imageId: string, imageUrl: string) => {
    setGeneratedImages(prev => ({
      ...prev,
      [imageId]: imageUrl
    }));
  };
  
  const getAllImages = () => {
    return {
      logo: Object.values(LOGO_IMAGES),
      product: Object.values(PRODUCT_IMAGES),
      icon: Object.values(ICON_IMAGES),
      background: Object.values(BACKGROUND_IMAGES)
    };
  };
  
  const images = getAllImages();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Image Management</h1>
      <p className="text-gray-600 mb-8">
        Generate new AI images for your application based on the context of each section.
      </p>
      
      <Tabs defaultValue="logo" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="logo">Logos ({images.logo.length})</TabsTrigger>
          <TabsTrigger value="product">Products ({images.product.length})</TabsTrigger>
          <TabsTrigger value="icon">Icons ({images.icon.length})</TabsTrigger>
          <TabsTrigger value="background">Backgrounds ({images.background.length})</TabsTrigger>
        </TabsList>
        
        {(Object.keys(images) as ImageCategory[]).map(category => (
          <TabsContent key={category} value={category}>
            <ScrollArea className="h-[600px] pr-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images[category].map((image) => (
                  <ImageCard 
                    key={image.id} 
                    image={image} 
                    generatedImageUrl={generatedImages[image.id]}
                    onImageGenerated={(url) => handleImageGenerated(image.id, url)}
                  />
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

interface ImageCardProps {
  image: ImageConfig;
  generatedImageUrl?: string;
  onImageGenerated: (url: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ 
  image, 
  generatedImageUrl,
  onImageGenerated 
}) => {
  const imageUrl = generatedImageUrl || image.path;
  const context = image.context || image.alt;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">{image.alt}</CardTitle>
        <CardDescription className="text-xs">{image.id}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-square bg-gray-100 rounded-md overflow-hidden">
          <img 
            src={imageUrl} 
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <p className="text-xs text-gray-500 mb-2">
          Context: {context}
        </p>
        <ImageGenerator 
          imageId={image.id}
          context={context}
          onImageGenerated={(url) => onImageGenerated(url)}
        />
      </CardFooter>
    </Card>
  );
};

export default ImageManagement;
