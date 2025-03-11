"use client";

import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 px-[10%]">
    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
      <div className="flex items-center mb-4 md:mb-0">
        <div className="w-9 h-9 bg-gradient-to-br from-pink-500 to-pink-300 rounded-full mr-2 relative overflow-hidden">
          <div className="w-5 h-5 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <span className="font-bold text-xl text-pink-500">Breast Cancer Detection Model</span>
      </div>
      <div className="flex gap-8">
        <div className="flex flex-col">
          <h4 className="font-bold mb-2">Resources</h4>
          <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">Research</a>
          <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">Technology</a>
          <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">Case Studies</a>
          <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">For Physicians</a>
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold mb-2">Company</h4>
          <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">About Us</a>
          <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">Team</a>
          <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">Careers</a>
          <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">Contact</a>
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold mb-2">Legal</h4>
          <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">Privacy Policy</a>
          <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">Terms of Use</a>
          <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">HIPAA Compliance</a>
        </div>
      </div>
    </div>
    <div className="flex justify-between items-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()} Breast Cancer Detection Model. All rights reserved.</p>
      <div className="flex gap-4">
        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
