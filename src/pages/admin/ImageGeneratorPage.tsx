
import React from 'react';
import Layout from '@/components/layout/Layout';
import ImageManagement from '@/components/admin/ImageManagement';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ImageGeneratorPage = () => {
  return (
    <Layout>
      <div className="mt-8 container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            size="sm" 
            asChild
            className="mr-4"
          >
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">AI Image Generator</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <ImageManagement />
        </div>
      </div>
    </Layout>
  );
};

export default ImageGeneratorPage;
