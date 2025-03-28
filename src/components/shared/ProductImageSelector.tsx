
import React, { useState, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedButton from '@/components/ui/AnimatedButton';
import { Upload, Image as ImageIcon } from 'lucide-react';
import { toast } from 'sonner';

// Image options for products
const imageOptions = [
  {
    id: 'laptop-image-1',
    src: '/lovable-uploads/78f56f78-5618-46cc-87a1-bbb19df328bb.png',
    alt: 'Laptop',
    category: 'laptops'
  },
  {
    id: 'server-image-1',
    src: '/lovable-uploads/9f952ca9-69ce-4ab5-8239-0dbdcdae2c6b.png',
    alt: 'Server',
    category: 'servers'
  },
  {
    id: 'workstation-image-1',
    src: '/lovable-uploads/fd6981e3-b5e5-4a03-9cd8-38fac8167126.png',
    alt: 'Workstation',
    category: 'workstations'
  },
  {
    id: 'generic-image-1',
    src: '/lovable-uploads/bb23fb03-32ed-4252-be3b-5367a5ca4b19.png',
    alt: 'Computer Hardware',
    category: 'all'
  }
];

interface ProductImageSelectorProps {
  imageId: string;
  currentImage: string;
  onImageChange: (imageId: string, newImageSrc: string) => void;
  className?: string;
}

const ProductImageSelector = ({
  imageId,
  currentImage,
  onImageChange,
  className = '',
}: ProductImageSelectorProps) => {
  const [selectedImage, setSelectedImage] = useState(currentImage);
  const [open, setOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleImageSelect = (src: string) => {
    setSelectedImage(src);
    setUploadedImage(null);
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    // Check file type
    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image must be less than 5MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setUploadedImage(e.target.result as string);
        setSelectedImage(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleSave = () => {
    if (selectedImage) {
      onImageChange(imageId, selectedImage);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button 
          className={`absolute top-2 right-2 z-10 bg-blue-600 text-white p-1 rounded-full hover:bg-blue-700 transition-colors ${className}`}
          aria-label="Change image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Select Product Image</DialogTitle>
          <DialogDescription>
            Choose an image for this product card or upload your own.
          </DialogDescription>
        </DialogHeader>

        {/* Upload area */}
        <div 
          className="border-2 border-dashed border-gray-300 rounded-lg p-4 mb-4 text-center hover:bg-gray-50 transition-colors cursor-pointer"
          onClick={handleUploadClick}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            className="hidden" 
            accept="image/*"
          />
          <Upload className="mx-auto h-10 w-10 text-gray-400 mb-2" />
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-400 mt-1">
            PNG, JPG or GIF up to 5MB
          </p>
        </div>

        {/* Uploaded image preview */}
        {uploadedImage && (
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">Uploaded Image:</h3>
            <div className={`border rounded-md overflow-hidden ${selectedImage === uploadedImage ? 'ring-2 ring-blue-600' : ''}`}>
              <img 
                src={uploadedImage} 
                alt="Uploaded" 
                className="w-full h-40 object-contain p-2"
                onClick={() => setSelectedImage(uploadedImage)}
              />
            </div>
          </div>
        )}

        {/* Preset images */}
        <div className="grid grid-cols-2 gap-4 py-4">
          <h3 className="text-sm font-medium col-span-2">Preset Images:</h3>
          {imageOptions.map((image) => (
            <Card 
              key={image.id} 
              className={`cursor-pointer overflow-hidden ${selectedImage === image.src ? 'ring-2 ring-blue-600' : 'hover:ring-1 hover:ring-blue-400'}`}
              onClick={() => handleImageSelect(image.src)}
            >
              <CardContent className="p-2">
                <div className="aspect-video overflow-hidden rounded-md">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-sm mt-2">{image.alt}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <DialogFooter className="sm:justify-between">
          <AnimatedButton
            variant="outline"
            onClick={() => setOpen(false)}
          >
            Cancel
          </AnimatedButton>
          <AnimatedButton
            onClick={handleSave}
            disabled={!selectedImage}
          >
            Save Changes
          </AnimatedButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProductImageSelector;
