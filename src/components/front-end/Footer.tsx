import React from 'react';
import { 
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin, 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaCreditCard,
  FaTruck, FaShieldAlt, FaHeadset 
} from 'react-icons/fa';
import { SiVisa, SiMastercard } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-green-800 to-green-900 text-white">
      {/* Trust Badges */}
      <div className="bg-green-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <FaTruck className="text-xl text-green-300" />
              <span className="text-sm">Free Delivery Nationwide</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCreditCard className="text-xl text-green-300" />
              <span className="text-sm">Secure Payment</span>
            </div>
            <div className="flex items-center gap-3">
              <FaShieldAlt className="text-xl text-green-300" />
              <span className="text-sm">1-Year Warranty</span>
            </div>
            <div className="flex items-center gap-3">
              <FaHeadset className="text-xl text-green-300" />
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand Column */}
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="bg-white text-green-700 px-2 py-1 rounded">Lynrose</span>
            <span>Kenya</span>
          </h3>
          <p className="text-green-100 mb-6 max-w-md">
            Your premier destination for quality fashion in Kenya. We blend style, comfort, and sustainability in every piece we offer.
          </p>
          
          {/* Newsletter */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3">Subscribe to our newsletter</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 text-gray-800 w-full rounded-l focus:outline-none"
              />
              <button className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-r transition-colors">
                Join
              </button>
            </div>
          </div>
          
          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-3">Connect with us</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-green-700 hover:bg-green-600 p-3 rounded-full transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="bg-green-700 hover:bg-green-600 p-3 rounded-full transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="bg-green-700 hover:bg-green-600 p-3 rounded-full transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="bg-green-700 hover:bg-green-600 p-3 rounded-full transition-colors">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 pb-2 border-b border-green-600">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-green-100 hover:text-white transition-colors flex items-center gap-2"><span className="text-green-400">›</span> Home</a></li>
            <li><a href="#" className="text-green-100 hover:text-white transition-colors flex items-center gap-2"><span className="text-green-400">›</span> Shop Collection</a></li>
            <li><a href="#" className="text-green-100 hover:text-white transition-colors flex items-center gap-2"><span className="text-green-400">›</span> New Arrivals</a></li>
            <li><a href="#" className="text-green-100 hover:text-white transition-colors flex items-center gap-2"><span className="text-green-400">›</span> Best Sellers</a></li>
            <li><a href="#" className="text-green-100 hover:text-white transition-colors flex items-center gap-2"><span className="text-green-400">›</span> Special Offers</a></li>
            <li><a href="#" className="text-green-100 hover:text-white transition-colors flex items-center gap-2"><span className="text-green-400">›</span> Size Guide</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-bold mb-4 pb-2 border-b border-green-600">Customer Service</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-green-100 hover:text-white transition-colors flex items-center gap-2"><span className="text-green-400">›</span> Contact Us</a></li>
            <li><a href="#" className="text-green-100 hover:text-white transition-colors flex items-center gap-2"><span className="text-green-400">›</span> FAQs</a></li>
            <li><a href="#" className="text-green-100 hover:text-white transition-colors flex items-center gap-2"><span className="text-green-400">›</span> Shipping Policy</a></li>
            <li><a href="#" className="text-green-100 hover:text-white transition-colors flex items-center gap-2"><span className="text-green-400">›</span> Returns & Exchanges</a></li>
            <li><a href="#" className="text-green-100 hover:text-white transition-colors flex items-center gap-2"><span className="text-green-400">›</span> Privacy Policy</a></li>
            <li><a href="#" className="text-green-100 hover:text-white transition-colors flex items-center gap-2"><span className="text-green-400">›</span> Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4 pb-2 border-b border-green-600">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-green-300 mt-1 flex-shrink-0" />
              <span>123 Fashion Avenue, Westlands<br />Nairobi, Kenya</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-green-300 flex-shrink-0" />
              <span>+254 700 107 582</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-green-300 flex-shrink-0" />
              <span>support@lynrose.co.ke</span>
            </li>
          </ul>
          
          <div className="mt-6">
            <h4 className="font-semibold mb-3">We Accept</h4>
            <div className="flex gap-3 flex-wrap">
              <div className="bg-white p-2 rounded">
                <SiVisa className="text-blue-900 text-2xl" />
              </div>
              <div className="bg-white p-2 rounded">
                <SiMastercard className="text-red-700 text-2xl" />
              </div>
              <div className="bg-yellow-500 p-2 rounded">
                {/* <SiMpesa className="text-white text-2xl" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-green-950 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Lynrose Kenya. All rights reserved.
          </p>
          <div className="flex gap-4 text-green-300">
            <a href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-sm hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;