
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-aztec-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">Azteca</span>
            </Link>
            <p className="text-aztec-400 text-sm">
              Providing enterprise-grade IT solutions for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="#" icon="facebook" />
              <SocialIcon href="#" icon="twitter" />
              <SocialIcon href="#" icon="linkedin" />
              <SocialIcon href="#" icon="instagram" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/products">Products</FooterLink>
              <FooterLink href="/support">Support</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <FooterLink href="/products/software-solutions">Software Solutions</FooterLink>
              <FooterLink href="/products/hardware-solutions">Hardware Solutions</FooterLink>
              <FooterLink href="/products/it-services">IT Services</FooterLink>
              <FooterLink href="/products/security-solutions">Security Solutions</FooterLink>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-aztec-400">
              <li className="flex items-start">
                <span className="text-white mr-2">📍</span>
                <span>123 Tech Street, Irvine, CA 92618</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">📱</span>
                <a href="tel:+17143630006" className="hover:text-white transition-colors">
                  (714) 363-0006
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">✉️</span>
                <a href="mailto:info@aztecas.com" className="hover:text-white transition-colors">
                  info@aztecas.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-aztec-800 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-aztec-400 text-sm">
            © {year} Azteca Technology. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm text-aztec-400">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link 
      to={href} 
      className="text-aztec-400 hover:text-white transition-colors flex items-center group"
    >
      <span>{children}</span>
      <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
    </Link>
  </li>
);

const SocialIcon = ({ href, icon }: { href: string; icon: string }) => {
  // Use a simple span for demo - in real implementation, you'd use actual social icons
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="h-8 w-8 rounded-full bg-aztec-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
    >
      <span className="sr-only">{icon}</span>
      <span className="text-sm">{icon.charAt(0).toUpperCase()}</span>
    </a>
  );
};

export default Footer;
