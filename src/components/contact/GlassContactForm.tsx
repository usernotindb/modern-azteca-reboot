
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedButton from '@/components/ui/AnimatedButton';
import FadeIn from '@/components/ui/FadeIn';
import { useState } from 'react';

const GlassContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling would go here
    console.log('Form submitted:', formState);
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
                  className="w-full px-4 py-2 rounded-lg bg-white/70 border border-aztec-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
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
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/70 border border-aztec-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
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
                value={formState.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/70 border border-aztec-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
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
                value={formState.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/70 border border-aztec-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            
            <div>
              <AnimatedButton 
                icon={<Send className="h-4 w-4" />} 
                iconPosition="right"
                className="bg-gradient-to-r from-blue-600 to-accent-600 hover:from-blue-700 hover:to-accent-700 text-white py-3"
                type="submit"
              >
                Send Message
              </AnimatedButton>
            </div>
          </form>
        </motion.div>
      </div>
    </FadeIn>
  );
};

export default GlassContactForm;
