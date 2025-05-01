
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Computer, Link as LinkIcon } from 'lucide-react'; // Import Computer and LinkIcon
import { useScroll } from '@/lib/hooks/useScroll';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; // Import Tooltip components

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScroll(10);
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/support', label: 'Support' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/80 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-aztec-900"
              >
                AZTECAS
              </motion.div>
            </Link>
          </div>

          {/* Centered Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex space-x-8"
            >
              {navLinks.map((link, index) => (
                <NavLink 
                  key={link.href} 
                  href={link.href} 
                  label={link.label}
                  active={location.pathname === link.href}
                  delay={0.1 + index * 0.05}
                />
              ))}
            </motion.nav>
          </div>

          {/* Quick Support Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="https://download.teamviewer.com/download/TeamViewerQS_x64.exe" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Download TeamViewer QuickSupport"
                    className="text-aztec-700 hover:text-accent-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                  >
                    <Computer size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>TeamViewer QuickSupport</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="https://secure.logmein.com/i?l=en&c=00_binmfp9cvpog8bl9lsttqa37qkujwlebifil7" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Access LogMeIn Rescue"
                    className="text-aztec-700 hover:text-accent-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                  >
                    <LinkIcon size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>LogMeIn Rescue</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="md:hidden"
          >
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-aztec-900" />
              ) : (
                <Menu className="h-6 w-6 text-aztec-900" />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-white/90 backdrop-blur-lg"
      >
        <div className="px-4 py-5 space-y-3">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : -10 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                to={link.href}
                className={`block py-2 px-3 text-lg rounded-md ${
                  location.pathname === link.href
                    ? 'text-accent-600 font-medium'
                    : 'text-aztec-800 hover:text-accent-600'
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

// NavLink with animation
const NavLink = ({ href, label, active, delay }: { href: string; label: string; active: boolean; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <Link
      to={href}
      className={`relative px-1 py-2 rounded-md text-sm font-medium transition-colors ${
        active ? 'text-accent-600' : 'text-aztec-800 hover:text-accent-600'
      }`}
    >
      {label}
      {active && (
        <motion.div
          layoutId="activeNavIndicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  </motion.div>
);

export default Header;
