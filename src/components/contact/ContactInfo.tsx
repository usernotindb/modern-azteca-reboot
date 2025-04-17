import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import ContactItem from './ContactItem';

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-aztec-900 mb-6">Contact Information</h2>
      <p className="text-aztec-600 mb-8">
        Feel free to reach out to us. We're here to help and answer any questions you might have.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Column 1: Traditional Contact Methods */}
        <div className="space-y-6">
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
        </div>
        
        {/* Column 2: Social Media */}
        <div className="space-y-6">
          <ContactItem
            icon={<Facebook className="h-5 w-5" />}
            title="Facebook"
            content="Follow us on Facebook"
            href="https://www.facebook.com/aztecatechnology"
          />
          
          <ContactItem
            icon={<Twitter className="h-5 w-5" />}
            title="Twitter"
            content="Follow us on Twitter"
            href="https://twitter.com/aztecatech"
          />
          
          <ContactItem
            icon={<Instagram className="h-5 w-5" />}
            title="Instagram"
            content="Follow us on Instagram"
            href="https://www.instagram.com/aztecatechnology"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 