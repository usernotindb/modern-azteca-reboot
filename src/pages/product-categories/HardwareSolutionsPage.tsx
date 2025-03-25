
import Layout from '@/components/layout/Layout';
import { productCategories } from '@/data/productData';
import HeroSection from '@/components/hardware-solutions/HeroSection';
import ProductsShowcase from '@/components/hardware-solutions/ProductsShowcase';
import DetailsSection from '@/components/hardware-solutions/DetailsSection';
import CTASection from '@/components/hardware-solutions/CTASection';

const HardwareSolutionsPage = () => {
  const hardwareCategory = productCategories.find(category => category.slug === 'hardware-solutions');
  
  if (!hardwareCategory) return null;
  
  return (
    <Layout>
      <HeroSection category={hardwareCategory} />
      <ProductsShowcase category={hardwareCategory} />
      <DetailsSection category={hardwareCategory} />
      <CTASection />
    </Layout>
  );
};

export default HardwareSolutionsPage;
