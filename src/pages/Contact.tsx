
import Layout from '@/components/layout/Layout';
import FadeIn from '@/components/ui/FadeIn';
import ContactItem from '@/components/contact/ContactItem';
import ContactForm from '@/components/contact/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <div className="mt-16 lg:mt-24">
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <FadeIn direction="up" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-aztec-900 mb-6">Contact Information</h2>
                  <p className="text-aztec-600 mb-8">
                    Feel free to reach out to us. We're here to help and answer any questions you might have.
                  </p>
                </div>
                
                <ContactItem 
                  icon={<Mail className="h-5 w-5" />}
                  title="Email Us"
                  content="info@aztecas.com"
                  href="mailto:info@aztecas.com"
                />
                
                <ContactItem 
                  icon={<Phone className="h-5 w-5" />}
                  title="Call Us"
                  content="714-363-0006"
                  href="tel:+17143630006"
                />
                
                <ContactItem 
                  icon={<MapPin className="h-5 w-5" />}
                  title="Visit Us"
                  content="3111 Tustin St, Suite 235, Orange, CA 92865"
                  href="https://maps.google.com/?q=3111+Tustin+St+Suite+235+Orange+CA+92865"
                />
              </FadeIn>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
