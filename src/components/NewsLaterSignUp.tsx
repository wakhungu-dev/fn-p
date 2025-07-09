import React from 'react';
import { Button } from "@/components/ui/button";

const NewsletterSignup = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for exclusive offers, style tips, and new arrivals
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-red-600 mr-2">✓</span> First access to sales
              </li>
              <li className="flex items-center">
                <span className="text-red-600 mr-2">✓</span> Style guides
              </li>
              <li className="flex items-center">
                <span className="text-red-600 mr-2">✓</span> Special discounts
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/2 w-full">
            <div className="flex flex-col space-y-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Button className="py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold">
                Subscribe Now
              </Button>
              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;