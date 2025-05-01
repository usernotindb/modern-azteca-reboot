
import Layout from '@/components/layout/Layout';
import { productCategories } from '@/data/productData';
import HeroSection from '@/components/hardware-solutions/HeroSection';
import ProductsShowcase from '@/components/hardware-solutions/ProductsShowcase';
import DetailsSection from '@/components/hardware-solutions/DetailsSection';
import CTASection from '@/components/hardware-solutions/CTASection';

const HardwareSolutionsPage = () => {
  const hardwareCategory = productCategories.find(category => category.slug === 'hardware-solutions');
  
  if (!hardwareCategory) return null;
  
  // Map the products to the format expected by ProductsShowcase
  const showcaseProducts = hardwareCategory.products.map(product => ({
    id: String(product.id),
    name: product.name,
    description: product.description,
    imageUrl: product.image || '',
    slug: product.slug || ''
  }));
  
  return (
    <Layout>
      <HeroSection category={hardwareCategory} />
      <ProductsShowcase 
        title={`${hardwareCategory.name} Showcase`} 
        description="Explore our range of hardware solutions"
        products={showcaseProducts}
      />
      <DetailsSection category={hardwareCategory} />
      <CTASection />
    </Layout>
  );
};

export default HardwareSolutionsPage;
