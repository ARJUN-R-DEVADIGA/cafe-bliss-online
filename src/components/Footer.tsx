
import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cafe-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Coffee className="h-6 w-6" />
              <span className="font-playfair font-bold text-xl">Café Bliss</span>
            </Link>
            <p className="text-sm text-gray-300">
              Serving exceptional coffee and food in a warm, welcoming environment since 2010.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-playfair font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/menu" className="text-gray-300 hover:text-white transition-colors">Menu</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-white transition-colors">Reviews</Link></li>
              <li><Link to="/cart" className="text-gray-300 hover:text-white transition-colors">Cart</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div className="col-span-1">
            <h3 className="font-playfair font-bold text-lg mb-4">Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>7am - 7pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>8am - 8pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>8am - 6pm</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-playfair font-bold text-lg mb-4">Contact</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Coffee Street</p>
              <p>Beanville, CA 90210</p>
              <p className="mt-4">Phone: (555) 123-4567</p>
              <p>Email: hello@cafebliss.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Café Bliss. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
