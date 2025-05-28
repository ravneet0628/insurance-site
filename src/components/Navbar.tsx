import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Quote', href: '/quote' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-ubuntu font-bold text-primary">
                SecureChoice
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative ${
                  isActive(item.href)
                    ? 'text-primary'
                    : 'text-neutral-text hover:text-primary'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-200"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="flex items-center text-sm text-neutral-text hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 mr-1" />
              (123) 456-7890
            </a>
            <a
              href="mailto:info@securechoice.com"
              className="flex items-center text-sm text-neutral-text hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 mr-1" />
              info@securechoice.com
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-text hover:text-primary focus:outline-none focus:text-primary transition-colors"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        data-testid="mobile-nav"
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-96 opacity-100 translate-x-0'
            : 'max-h-0 opacity-0 overflow-hidden translate-x-full'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                isActive(item.href)
                  ? 'text-primary bg-primary/10'
                  : 'text-neutral-text hover:text-primary hover:bg-gray-50'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t">
            <a
              href="tel:+1234567890"
              className="flex items-center px-3 py-2 text-sm text-neutral-text hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              (123) 456-7890
            </a>
            <a
              href="mailto:info@securechoice.com"
              className="flex items-center px-3 py-2 text-sm text-neutral-text hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              info@securechoice.com
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 