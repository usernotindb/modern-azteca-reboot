import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../ui/FadeIn';
import AnimatedButton from '../ui/AnimatedButton';
import { Send } from 'lucide-react';
import ContactItem from '../contact/ContactItem';
import { Mail, MapPin, Phone } from 'lucide-react';
import { z } from 'zod';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { submitContactForm } from '@/lib/api';

// Define validation schema with Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
  
  const [formState, setFormState] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    
    // Clear the error for this field when the user starts typing
    if (errors[id as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
    
    setFormState(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const validateForm = (): boolean => {
    try {
      contactFormSchema.parse(formState);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send data to the server API
      await submitContactForm(formState);
      
      // Show success message
      toast({
        title: "Message sent successfully",
        description: "Thank you for contacting us. We'll get back to you soon!",
      });
      
      // Reset the form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      // Show error message
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section ref={ref} className="section-padding bg-aztec-900 text-white relative overflow-hidden">
      <motion.div style={{ opacity }} className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 right-[10%] w-64 h-64 bg-aztec-700 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-accent-900 rounded-full blur-3xl opacity-20" />
      </motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Content */}
          <div>
            <FadeIn direction="up" className="max-w-xl">
              <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-aztec-700 text-aztec-50 text-sm font-medium">
                Get in Touch
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Let's Start a Conversation
              </h2>
              
              <p className="text-aztec-200 text-lg mb-10">
                We're here to answer any questions you might have about our products, services, or company. Feel free to reach out to us through any of the channels below.
              </p>
              
              <div className="space-y-6 mb-8">
                <HomeContactItem 
                  icon={<Mail className="h-5 w-5" />}
                  title="Email Us"
                  content="info@aztecas.com"
                  href="mailto:info@aztecas.com"
                />
                
                <HomeContactItem 
                  icon={<Phone className="h-5 w-5" />}
                  title="Call Us"
                  content="714-363-0006"
                  href="tel:+17143630006"
                />
                
                <HomeContactItem 
                  icon={<MapPin className="h-5 w-5" />}
                  title="Visit Us"
                  content="3111 Tustin St, Suite 235, Orange, CA 92865"
                  href="https://maps.google.com/?q=3111+Tustin+St+Suite+235+Orange+CA+92865"
                />
              </div>
            </FadeIn>
          </div>
          
          {/* Right column: Form */}
          <FadeIn direction="left" delay={0.2} className="bg-white text-aztec-900 rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-aztec-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${errors.name ? 'border-red-500' : 'border-aztec-200'} focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-aztec-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-red-500' : 'border-aztec-200'} focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all`}
                    placeholder="Your email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-aztec-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-aztec-200'} focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all`}
                  placeholder="Subject of your message"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-aztec-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${errors.message ? 'border-red-500' : 'border-aztec-200'} focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-none`}
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>
              
              <div>
                <AnimatedButton 
                  icon={<Send className="h-4 w-4" />} 
                  iconPosition="right"
                  className="w-full bg-accent-600 hover:bg-accent-700 text-white py-3"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </AnimatedButton>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// Home-specific contact item with white styling
const HomeContactItem = ({ icon, title, content, href }: { 
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
      <div className="h-10 w-10 rounded-full bg-aztec-800 flex items-center justify-center mr-4 group-hover:bg-accent-600 transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="text-aztec-200 font-medium mb-1">{title}</h4>
        <p className="text-white group-hover:text-accent-200 transition-colors">{content}</p>
      </div>
    </a>
  );
};

export default Contact;
