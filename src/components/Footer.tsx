import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-ubuntu font-bold">Top Trust</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted insurance advisor providing comprehensive coverage solutions to protect what matters most.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-ubuntu font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/resources"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Resources
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
            <h4 className="text-lg font-ubuntu font-semibold">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/life-insurance"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Life Insurance
                </Link>
              </li>
              <li>
                <Link
                  to="/services/super-visa-insurance"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Super Visa Insurance
                </Link>
              </li>
              <li>
                <Link
                  to="/services/visitors-insurance"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Visitors Insurance
                </Link>
              </li>
              <li>
                <Link
                  to="/services/disability-insurance"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Disability Insurance
                </Link>
              </li>
              <li>
                <Link
                  to="/services/critical-illness-insurance"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Critical Illness Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-ubuntu font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-300 flex-shrink-0" />
                <a
                  href="tel:9059610050"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  (905) 961-0050
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-300 flex-shrink-0" />
                <a
                  href="mailto:sukhvirsingh31@yahoo.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  sukhvirsingh31@yahoo.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {currentYear} Top Trust Insurance. All rights reserved.
            </p>
            <div className="text-gray-300 text-sm">Licensed Insurance Advisor - Serving Canada</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
