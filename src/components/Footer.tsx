import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-navy'} py-16`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-2xl font-bold mb-4 block">
              <span className="text-turquoise">Sky</span>
              <span>nex</span>
            </Link>
            <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Creating the digital difference through innovative solutions and exceptional design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-turquoise/20 rounded-lg hover:bg-turquoise/30 transition-colors" data-cursor-hover>
                <Facebook className="w-5 h-5 text-turquoise" />
              </a>
              <a href="#" className="p-2 bg-turquoise/20 rounded-lg hover:bg-turquoise/30 transition-colors" data-cursor-hover>
                <Twitter className="w-5 h-5 text-turquoise" />
              </a>
              <a href="#" className="p-2 bg-turquoise/20 rounded-lg hover:bg-turquoise/30 transition-colors" data-cursor-hover>
                <Instagram className="w-5 h-5 text-turquoise" />
              </a>
              <a href="#" className="p-2 bg-turquoise/20 rounded-lg hover:bg-turquoise/30 transition-colors" data-cursor-hover>
                <Linkedin className="w-5 h-5 text-turquoise" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Portfolio', 'About', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className={`hover:text-turquoise transition-colors ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                    data-cursor-hover
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Web Development',
                'UI/UX Design',
                'SEO & Marketing',
                'Branding',
                'Mobile Development',
                'Content Creation',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className={`hover:text-turquoise transition-colors ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                    data-cursor-hover
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-turquoise mt-1" />
                <div>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    123 Creative Street<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-turquoise" />
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                  +1 (555) 123-4567
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-turquoise" />
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                  hello@skaynex.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className={`mt-12 pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                Subscribe to our newsletter for the latest updates and insights
              </p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className={`flex-1 md:w-80 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-turquoise ${
                  isDark
                    ? 'bg-gray-800 border-gray-700 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
              <button
                className="px-6 py-3 bg-turquoise text-navy font-semibold rounded-lg hover:bg-turquoise/90 transition-colors"
                data-cursor-hover
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-8 pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'} text-center`}>
          <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>
            © 2024 Skaynex. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;