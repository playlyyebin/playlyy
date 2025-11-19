import React from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-playlyy-dark mb-1">Playlyy</p>
            <p className="text-sm text-gray-500">
              Made with <span className="text-red-500">❤️</span> for players everywhere.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-playlyy-blue transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-playlyy-blue transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-playlyy-blue transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-playlyy-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-playlyy-blue transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Playlyy Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;