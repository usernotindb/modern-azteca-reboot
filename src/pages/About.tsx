
import Layout from '@/components/layout/Layout';
import AboutHero from '@/components/about/AboutHero';
import AboutContent from '@/components/about/AboutContent';

const About = () => {
  return (
    <Layout>
      <div className="mt-16 lg:mt-24">
        <AboutHero />
        <AboutContent />
      </div>
    </Layout>
  );
};

export default About;
