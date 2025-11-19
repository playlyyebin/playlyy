import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
  const toggleLanguage = () => {
    setLanguage(language === Language.EN ? Language.ES : Language.EN);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 md:px-12">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-playlyy-accent rounded-lg flex items-center justify-center transform -rotate-12 shadow-lg">
          <span className="font-bold text-playlyy-dark text-xl">P</span>
        </div>
        <span className="text-white font-bold text-xl tracking-tight drop-shadow-md">Playlyy</span>
      </div>

      <button
        onClick={toggleLanguage}
        className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 text-sm font-medium text-white hover:bg-white/20 transition-all"
        aria-label="Switch Language"
      >
        <Globe className="w-4 h-4" />
        <span>{language}</span>
      </button>
    </nav>
  );
};

export default Navbar;