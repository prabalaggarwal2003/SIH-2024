import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">Sansthaein Aur Samvidhan</h3>
          <p className="text-gray-400">Spreading constitutional literacy among citizens</p>
        </div>

        <div className="space-y-2">
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#services" className="hover:text-gray-300">Services</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            <li><a href="#privacy" className="hover:text-gray-300">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <p>&copy; 2024 Sansthaein Aur Samvidhan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;