
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Computer, Link as LinkIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-aztec-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Azteca Technology</h3>
            <p className="text-aztec-300 mb-4">
              Your trusted partner for comprehensive IT solutions, providing hardware, software, and services for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" icon={<Facebook size={18} />} />
              <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} />
              <SocialLink href="https://instagram.com" icon={<Instagram size={18} />} />
            </div>
          </div>
          
          {/* Column 2: Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <FooterLink href="/products/software-solutions" text="Software Solutions" />
              <FooterLink href="/products/hardware-solutions" text="Hardware Solutions" />
              <FooterLink href="/products/laptops" text="Laptops" />
              <FooterLink href="/products/servers" text="Servers" />
              <FooterLink href="/products/workstations" text="Workstations" />
              <FooterLink href="/products/it-services" text="IT Services" />
              <FooterLink href="/products/security-solutions" text="Security Solutions" />
            </ul>
          </div>
          
          {/* Column 3: Company */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="/about" text="About Us" />
              <FooterLink href="/services" text="Services" />
              <FooterLink href="/contact" text="Contact" />
              <FooterLink href="/privacy-policy" text="Privacy Policy" />
              <FooterLink href="/terms-of-service" text="Terms of Service" />
              <FooterLink href="/cookie-policy" text="Cookie Policy" />
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-aztec-300">3111 Tustin St, Suite 235<br />Orange, CA 92865</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-aztec-300">(714) 363-0006</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-aztec-300">hello@aztecas.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-aztec-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-aztec-400 text-sm">
          <p>&copy; {currentYear} Azteca Technology. All rights reserved.</p>
          
          {/* Quick Support Links */}
          <div className="flex items-center space-x-4 my-4 md:my-0 order-first md:order-none">
            <span className="text-aztec-300">Quick Support:</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SupportLink 
                    href="https://download.teamviewer.com/download/TeamViewerQS_x64.exe" 
                    icon={<Computer size={16} />} 
                    label="TeamViewer"
                  />
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Download TeamViewer</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SupportLink 
                    href="https://secure.logmein.com/i?l=en&c=00_binmfp9cvpog8bl9lsttqa37qkujwlebifil7" 
                    icon={<LinkIcon size={16} />} 
                    label="LogMeIn"
                  />
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Access LogMeIn</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-blue-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <li>
    <Link to={href} className="text-aztec-300 hover:text-white transition-colors">
      {text}
    </Link>
  </li>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-aztec-800 hover:bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center transition-colors"
  >
    {icon}
  </a>
);

const SupportLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label={label}
    className="bg-aztec-800 hover:bg-blue-600 h-7 w-7 rounded-full flex items-center justify-center transition-colors"
  >
    {icon}
  </a>
);

export default Footer;
