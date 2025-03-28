
import React, { useState, useRef } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Edit, Upload, X } from 'lucide-react';

// Available image options - you can extend this list
const availableImages = [
  { id: 1, src: "/lovable-uploads/a5167f02-2752-40d9-87ca-96dea7253d13.png", alt: "Product showcase" },
  { id: 2, src: "/lovable-uploads/6d1b82c7-3784-46ea-9384-d24ef9ad8509.png", alt: "Laptop" },
  { id: 3, src: "/lovable-uploads/78f56f78-5618-46cc-87a1-bbb19df328bb.png", alt: "Laptop alt" },
  { id: 4, src: "/lovable-uploads/881ea460-231f-4a79-9b8a-a49b932665d7.png", alt: "Workstation" },
  { id: 5, src: "/lovable-uploads/9f952ca9-69ce-4ab5-8239-0dbdcdae2c6b.png", alt: "Server" },
  { id: 6, src: "/lovable-uploads/bec2f6ea-6fb3-4073-9c82-38aea9579aab.png", alt: "Server alt" },
  { id: 7, src: "/lovable-uploads/fd6981e3-b5e5-4a03-9cd8-38fac8167126.png", alt: "Generic product" },
  { id: 8, src: "/lovable-uploads/8d93ccd6-f135-4472-ad9a-677825e40020.png", alt: "Security" },
];

interface ImageSelectorProps {
  currentImage: string;
  onImageChange: (newImageSrc: string) => void;
  label?: string;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  imageAlt?: string;
  allowUpload?: boolean;
}

const ImageSelector: React.FC<ImageSelectorProps> = ({
  currentImage,
  onImageChange,
  label = 'Change Image',
  position = 'top-right',
  className = '',
  size = 'md',
  imageAlt = 'Image',
  allowUpload = true
}) => {
  const [selectedImage, setSelectedImage] = useState<string>(currentImage);
  const [open, setOpen] = useState<boolean>(false);
  const [uploadedImages, setUploadedImages] = useState<{ id: number, src: string, alt: string }[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const positionClasses = {
    'top-right': 'top-2 right-2',
    'top-left': 'top-2 left-2',
    'bottom-right': 'bottom-2 right-2',
    'bottom-left': 'bottom-2 left-2',
  };

  const sizeClasses = {
    'sm': 'w-8 h-8',
    'md': 'w-10 h-10',
    'lg': 'w-12 h-12',
  };

  const handleImageSelect = (src: string) => {
    setSelectedImage(src);
  };

  const handleConfirm = () => {
    onImageChange(selectedImage);
    setOpen(false);
  };

  const handleCancel = () => {
    setSelectedImage(currentImage);
    setOpen(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImage = {
          id: Date.now(),
          src: event.target?.result as string,
          alt: file.name
        };
        setUploadedImages((prev) => [...prev, newImage]);
        setSelectedImage(newImage.src);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImage = {
          id: Date.now(),
          src: event.target?.result as string,
          alt: file.name
        };
        setUploadedImages((prev) => [...prev, newImage]);
        setSelectedImage(newImage.src);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`group relative ${className}`}>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button 
            className={`absolute ${positionClasses[position]} ${sizeClasses[size]} rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10`}
            aria-label={label}
          >
            <Edit className="w-1/2 h-1/2 text-gray-700" />
          </button>
        </DialogTrigger>
        
        <DialogContent className="w-[90vw] max-w-3xl">
          <DialogHeader>
            <DialogTitle>Select an Image</DialogTitle>
          </DialogHeader>

          {allowUpload && (
            <div 
              className="p-4 border-2 border-dashed rounded-lg mb-4 text-center cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => fileInputRef.current?.click()}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
              <p>Click to upload or drag and drop</p>
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*" 
                onChange={handleFileChange} 
              />
            </div>
          )}

          <div className="overflow-y-auto max-h-[50vh]">
            <h3 className="font-medium mb-2">Uploaded Images</h3>
            {uploadedImages.length > 0 ? (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mb-6">
                {uploadedImages.map((img) => (
                  <div 
                    key={`uploaded-${img.id}`} 
                    className={`relative aspect-square border rounded-md overflow-hidden cursor-pointer ${selectedImage === img.src ? 'ring-2 ring-blue-500' : 'hover:opacity-80'}`}
                    onClick={() => handleImageSelect(img.src)}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    <button 
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 hover:opacity-100 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation();
                        setUploadedImages(uploadedImages.filter(i => i.id !== img.id));
                        if (selectedImage === img.src) {
                          setSelectedImage(currentImage);
                        }
                      }}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 mb-6">No uploaded images yet</p>
            )}

            <h3 className="font-medium mb-2">Available Images</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {availableImages.map((img) => (
                <div 
                  key={img.id} 
                  className={`aspect-square border rounded-md overflow-hidden cursor-pointer ${selectedImage === img.src ? 'ring-2 ring-blue-500' : 'hover:opacity-80'}`}
                  onClick={() => handleImageSelect(img.src)}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <DialogFooter className="mt-4">
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button onClick={handleConfirm}>
              Apply
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <img src={currentImage} alt={imageAlt} className="w-full h-full object-cover" />
    </div>
  );
};

export default ImageSelector;
