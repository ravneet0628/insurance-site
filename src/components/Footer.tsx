import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-ubuntu font-bold">SecureChoice</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted insurance broker providing comprehensive coverage solutions 
              for auto, home, and life insurance since 2010.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/securechoiceinsurance"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
                target="_blank" rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/securechoiceca"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
                target="_blank" rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/securechoiceinsurance"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
                target="_blank" rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/securechoiceinsurance"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
                target="_blank" rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-ubuntu font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/quote"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-ubuntu font-semibold">Insurance Types</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/auto-insurance"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Auto Insurance
                </Link>
              </li>
              <li>
                <Link
                  to="/home-insurance"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Home Insurance
                </Link>
              </li>
              <li>
                <Link
                  to="/life-insurance"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Life Insurance
                </Link>
              </li>
              <li>
                <Link
                  to="/business-insurance"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Business Insurance
                </Link>
              </li>
              <li>
                <Link
                  to="/travel-insurance"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Travel Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-ubuntu font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Insurance Street<br />
                  Toronto, ON M5V 3A8<br />
                  Canada
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-300 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-300 flex-shrink-0" />
                <a
                  href="mailto:info@securechoice.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  info@securechoice.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {currentYear} SecureChoice Insurance. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy-policy"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookie-policy"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;