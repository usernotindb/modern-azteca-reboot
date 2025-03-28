
import { Send } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';
import FadeIn from '@/components/ui/FadeIn';

const ContactForm = () => {
  return (
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
            className="bg-blue-600 hover:bg-blue-700 text-white py-3"
          >
            Send Message
          </AnimatedButton>
        </div>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
