
import Layout from '@/components/layout/Layout';
import { productCategories } from '@/data/productData';

// Import our newly created components
import HeroSection from '@/components/security/HeroSection';
import StatisticsSection from '@/components/security/StatisticsSection';
import SolutionsShowcase from '@/components/security/SolutionsShowcase';
import DetailedProductSection from '@/components/security/DetailedProductSection';
import WhyChooseUsSection from '@/components/security/WhyChooseUsSection';
import CTASection from '@/components/security/CTASection';

const SecuritySolutionsPage = () => {
  const securityCategory = productCategories.find(category => category.slug === 'security-solutions');
  
  if (!securityCategory) return null;
  
  return (
    <Layout>
      <HeroSection category={securityCategory} />
      <StatisticsSection />
      <SolutionsShowcase category={securityCategory} />
      <DetailedProductSection products={securityCategory.products} />
      <WhyChooseUsSection />
      <CTASection />
    </Layout>
  );
};

export default SecuritySolutionsPage;
