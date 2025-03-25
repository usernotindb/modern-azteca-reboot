
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import FadeIn from '@/components/ui/FadeIn';
import Section from '@/components/layout/Section';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { ChevronLeft } from 'lucide-react';
import { Product } from './ProductCategory';

interface ProductCategoryPageProps {
  title: string;
  subtitle: string;
  description: ReactNode;
  products: Product[];
  icon?: ReactNode;
  heroImage?: string;
  additionalContent?: ReactNode;
  ctaText?: string;
  ctaLink?: string;
  bgColor?: string;
}

const ProductCategoryPage = ({
  title,
  subtitle,
  description,
  products,
  icon,
  heroImage,
  additionalContent,
  ctaText = "Get a Quote",
  ctaLink = "/contact",
  bgColor = "bg-gradient-to-br from-blue-50 to-white",
}: ProductCategoryPageProps) => {
  return (
    <Layout>
      <div className="mt-16 lg:mt-24">
        {/* Hero Section */}
        <div className={`py-16 ${bgColor}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-start mb-8">
              <AnimatedButton
                href="/products"
                variant="outline"
                className="text-aztec-700 border-aztec-200"
                icon={<ChevronLeft className="h-4 w-4" />}
                iconPosition="left"
              >
                Back to Products
              </AnimatedButton>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn className="max-w-2xl">
                <div className="flex items-center mb-6">
                  {icon && <div className="mr-3 text-accent-600">{icon}</div>}
                  <span className="inline-block px-4 py-1.5 rounded-full bg-accent-50 text-accent-600 text-sm font-medium">
                    {subtitle}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-aztec-900">
                  {title}
                </h1>
                
                <div className="text-aztec-600 text-lg space-y-4">
                  {description}
                </div>
                
                <div className="mt-8">
                  <AnimatedButton
                    href={ctaLink}
                    className="bg-accent-600 hover:bg-accent-700 text-white"
                    withArrow
                  >
                    {ctaText}
                  </AnimatedButton>
                </div>
              </FadeIn>
              
              {heroImage && (
                <FadeIn direction="left">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="rounded-2xl overflow-hidden shadow-xl"
                  >
                    <img
                      src={heroImage}
                      alt={title}
                      className="w-full h-auto"
                    />
                  </motion.div>
                </FadeIn>
              )}
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        <Section background="white" title="Featured Products" label="Solutions" centered>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </Section>
        
        {/* Additional Content */}
        {additionalContent}
        
        {/* CTA Section */}
        <Section background="gradient">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to get started?</h2>
            <p className="text-white/80 mb-8">
              Contact our team today to learn more about our {title.toLowerCase()} and how they can benefit your business.
            </p>
            <AnimatedButton
              href={ctaLink}
              className="bg-white text-accent-700 hover:bg-yellow-100"
              withArrow
            >
              {ctaText}
            </AnimatedButton>
          </div>
        </Section>
      </div>
    </Layout>
  );
};

// Product Card component specifically for the category page
const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-white border border-aztec-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
    >
      <div className="aspect-video bg-aztec-50 relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-aztec-900">
            {product.name}
          </h3>
          <span className="bg-accent-50 text-accent-700 px-3 py-1 rounded-full text-sm font-medium">
            {product.price}
          </span>
        </div>
        
        <p className="text-aztec-600 mb-6">
          {product.description}
        </p>
        
        <AnimatedButton
          href="/contact"
          className="w-full justify-center bg-aztec-50 text-aztec-800 hover:bg-accent-50 hover:text-accent-700"
        >
          Request Information
        </AnimatedButton>
      </div>
    </motion.div>
  );
};

export default ProductCategoryPage;
