
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedButton from '@/components/ui/AnimatedButton';
import FadeIn from '@/components/ui/FadeIn';
import { useState } from 'react';
import { z } from 'zod';
import { toast } from '@/hooks/use-toast';

// Define validation schema with Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const GlassContactForm = () => {
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
      // Simulate an API call - in a real app, you would connect this to a backend service
      await new Promise(resolve => setTimeout(resolve, 1000));
      
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
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FadeIn direction="up" delay={0.2} className="relative">
      {/* Background elements */}
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-accent-200 via-accent-100 to-blue-100 blur-md opacity-50"></div>
      
      <div className="relative bg-white/80 backdrop-blur-md border border-white/40 rounded-xl p-8 shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-accent-100/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-100/30 rounded-full blur-2xl"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-aztec-900 mb-6">Send us a message</h2>
          
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
                  className={`w-full px-4 py-2 rounded-lg bg-white/70 border ${errors.name ? 'border-red-500' : 'border-aztec-200'} focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all`}
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
                  className={`w-full px-4 py-2 rounded-lg bg-white/70 border ${errors.email ? 'border-red-500' : 'border-aztec-200'} focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all`}
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
                className={`w-full px-4 py-2 rounded-lg bg-white/70 border ${errors.subject ? 'border-red-500' : 'border-aztec-200'} focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all`}
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
                rows={6}
                value={formState.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg bg-white/70 border ${errors.message ? 'border-red-500' : 'border-aztec-200'} focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-none`}
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
                className="bg-gradient-to-r from-blue-600 to-accent-600 hover:from-blue-700 hover:to-accent-700 text-white py-3"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </AnimatedButton>
            </div>
          </form>
        </motion.div>
      </div>
    </FadeIn>
  );
};

export default GlassContactForm;
