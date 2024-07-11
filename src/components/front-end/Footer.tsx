import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-green-700 text-white py-10">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-bold mb-4">About Us</h3>
                    <p className="text-sm">
                        We are a leading ecommerce platform in Kenya, providing a seamless shopping experience for our customers.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                    <ul className="text-sm">
                        <li className="mb-2"><a href="#" className="hover:text-gray-400">Home</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-400">Shop</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-400">Contact Us</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-400">About</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                    <p className="text-sm mb-2">123 Ecommerce St.</p>
                    <p className="text-sm mb-2">Nairobi, Kenya</p>
                    <p className="text-sm mb-2">Email: support@lynrose.co.ke</p>
                    <p className="text-sm">Phone: +254 700 107582</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-gray-400"><FaFacebook size={24} /></a>
                        <a href="#" className="text-white hover:text-gray-400"><FaTwitter size={24} /></a>
                        <a href="#" className="text-white hover:text-gray-400"><FaInstagram size={24} /></a>
                        <a href="#" className="text-white hover:text-gray-400"><FaLinkedin size={24} /></a>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} lynrose Kenya. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
