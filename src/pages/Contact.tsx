import Layout from '@/components/layout/Layout';
import FadeIn from '@/components/ui/FadeIn';
import GradientBackground from '@/components/ui/GradientBackground';
import GlassContactForm from '@/components/contact/GlassContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';

const Contact = () => {
  return (
    <Layout>
      <GradientBackground className="mt-16 lg:mt-2 min-h-[calc(100vh-64px)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent-50 text-accent-600 text-sm font-medium">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-aztec-900">
              Contact Us
            </h1>
            <p className="text-aztec-600 text-lg mb-8 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out to us through any of the channels below.
            </p>
          </FadeIn>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <FadeIn direction="up">
              <ContactInfo />
            </FadeIn>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <GlassContactForm />
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="w-full h-96 mt-16 rounded-xl overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.2343105893676!2d-117.84044642432155!3d33.79033227259236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7d12f6b649b%3A0x9f89f3529c9d9228!2s3111%20E%20Tustin%20St%2C%20Orange%2C%20CA%2092865%2C%20USA!5e0!3m2!1sen!2sus!4v1712621442036!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </GradientBackground>
      
      {/* Add Toaster component for displaying notifications */}
      <Toaster />
    </Layout>
  );
};

export default Contact;
