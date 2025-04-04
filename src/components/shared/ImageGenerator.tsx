
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';

interface ImageGeneratorProps {
  imageId: string;
  context: string;
  onImageGenerated: (imageUrl: string) => void;
}

const ImageGenerator: React.FC<ImageGeneratorProps> = ({ 
  imageId,
  context,
  onImageGenerated
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();
  
  // This function would be implemented with an actual AI image generation API
  // For now we're mocking the behavior
  const generateImage = async () => {
    try {
      setIsGenerating(true);
      
      // Mock image generation - in a real implementation, this would call an AI image API
      toast({
        title: "Generating image",
        description: `Creating image for: ${context}`,
      });
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // For demonstration, we'd return a URL to the generated image
      // In reality, this would be the URL returned by the AI image generation API
      const mockImageUrl = `https://source.unsplash.com/random/800x600?${encodeURIComponent(context)}`;
      
      // Call the callback with the generated image URL
      onImageGenerated(mockImageUrl);
      
      toast({
        title: "Image generated",
        description: "Your new image is now ready",
        variant: "success"
      });
    } catch (error) {
      console.error("Error generating image:", error);
      toast({
        title: "Error generating image",
        description: "Please try again later",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };
  
  return (
    <Button 
      onClick={generateImage} 
      disabled={isGenerating}
      variant="outline"
      size="sm"
      className="mt-2"
    >
      {isGenerating ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>Generate Image</>
      )}
    </Button>
  );
};

export default ImageGenerator;
