import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-aztec-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand/Logo Section */}
          <div className="md:col-span-1">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="flex flex-col space-y-4">
              <Link to="/" className="text-2xl font-bold text-aztec-900">AZTECAS</Link>
              <p className="text-aztec-600 max-w-xs">
                Crafting exceptional experiences with attention to detail and passion for excellence.
              </p>
              <div className="flex space-x-4 mt-4">
                <SocialIcon icon={<Facebook size={18} />} href="https://facebook.com" label="Facebook" />
                <SocialIcon icon={<Twitter size={18} />} href="https://twitter.com" label="Twitter" />
                <SocialIcon icon={<Instagram size={18} />} href="https://instagram.com" label="Instagram" />
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }}>
              <h3 className="text-lg font-semibold mb-4 text-aztec-900">Quick Links</h3>
              <ul className="space-y-2">
                <FooterLink href="/" label="Home" />
                <FooterLink href="/products" label="Products" />
                <FooterLink href="/about" label="About Us" />
                <FooterLink href="/contact" label="Contact" />
              </ul>
            </motion.div>
          </div>

          {/* Legal */}
          <div className="md:col-span-1">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }}>
              <h3 className="text-lg font-semibold mb-4 text-aztec-900">Legal</h3>
              <ul className="space-y-2">
                <FooterLink href="/privacy" label="Privacy Policy" />
                <FooterLink href="/terms" label="Terms of Service" />
                <FooterLink href="/cookies" label="Cookie Policy" />
              </ul>
            </motion.div>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }}>
              <h3 className="text-lg font-semibold mb-4 text-aztec-900">Contact Us</h3>
              <address className="not-italic text-aztec-600 space-y-2">
                <p>3111 Tustin St, Suite 235, Orange, CA 92865</p>
                <p>New York, NY 10001</p>
                <p className="mt-4">
                  <a href="mailto:info@aztecas.com" className="hover:text-accent-600 transition-colors">
                    info@aztecas.com
                  </a>
                </p>
                <p>
                  <a href="tel:+1234567890" className="hover:text-accent-600 transition-colors">
                    +1 (234) 567-890
                  </a>
                </p>
              </address>
            </motion.div>
          </div>
        </div>

        {/* Bottom section with copyright and back to top */}
        <div className="border-t border-aztec-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <motion.p initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-aztec-500 text-sm">
            © {new Date().getFullYear()} Aztecas. All rights reserved.
          </motion.p>
          
          <motion.button initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} onClick={scrollToTop} className="mt-4 md:mt-0 flex items-center text-aztec-600 hover:text-accent-600 transition-colors text-sm">
            <span className="mr-2">Back to top</span>
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>;
};

// Helper components
const SocialIcon = ({
  icon,
  href,
  label
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) => <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="bg-white h-9 w-9 rounded-full flex items-center justify-center text-aztec-600 hover:text-accent-600 hover:shadow-md transition-all">
    {icon}
  </a>;
const FooterLink = ({
  href,
  label
}: {
  href: string;
  label: string;
}) => <li>
    <Link to={href} className="text-aztec-600 hover:text-accent-600 transition-colors">
      {label}
    </Link>
  </li>;
export default Footer;