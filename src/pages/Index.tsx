
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import About from '@/components/home/About';
import Products from '@/components/home/Products';
import Contact from '@/components/home/Contact';

const Index = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    });
  }, [controls]);

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        <Hero />
        <Features />
        <About />
        <Products />
        <Contact />
      </motion.div>
    </Layout>
  );
};

export default Index;
