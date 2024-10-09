import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Orangi Town, Karachi</p>
            <p className="mb-2">Pakistan</p>
            <p className="mb-2">+92 317 2472531</p>
            <p>Email: <a href="mailto:umarofficial0121@gmail.com" className="text-blue-400 hover:underline">umarofficial0121@gmail.com</a></p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link href="/project" className="hover:text-blue-400">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-white text-2xl hover:text-blue-600 transition-colors duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-white text-2xl hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white text-2xl hover:text-pink-600 transition-colors duration-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-white text-2xl hover:text-blue-700 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Umar Farooq. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
