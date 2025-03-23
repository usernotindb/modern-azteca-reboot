
import Layout from '@/components/layout/Layout';
import FadeIn from '@/components/ui/FadeIn';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

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
              <FadeIn direction="up" delay={0.2} className="bg-white border border-aztec-100 rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-aztec-900 mb-6">Send us a message</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-aztec-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-lg border border-aztec-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-aztec-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-lg border border-aztec-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-aztec-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 rounded-lg border border-aztec-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                      placeholder="Subject of your message"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-aztec-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-2 rounded-lg border border-aztec-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <div>
                    <AnimatedButton 
                      icon={<Send className="h-4 w-4" />} 
                      iconPosition="right"
                      className="bg-accent-600 hover:bg-accent-700 text-white py-3"
                    >
                      Send Message
                    </AnimatedButton>
                  </div>
                </form>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const ContactItem = ({ icon, title, content, href }: { 
  icon: React.ReactNode; 
  title: string; 
  content: string;
  href: string;
}) => {
  return (
    <a 
      href={href}
      target={href.startsWith('http') ? "_blank" : undefined}
      rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
      className="flex items-start group"
    >
      <div className="h-10 w-10 rounded-full bg-accent-50 flex items-center justify-center mr-4 text-accent-600 group-hover:bg-accent-100 transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="text-aztec-900 font-medium mb-1">{title}</h4>
        <p className="text-aztec-600 group-hover:text-accent-600 transition-colors">{content}</p>
      </div>
    </a>
  );
};

export default Contact;
