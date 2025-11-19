import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  scrollToForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToForm }) => {
  return (
    <header className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="People playing sports"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-playlyy-dark/80 via-playlyy-dark/60 to-playlyy-dark/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-4xl mt-10">
        <div className="inline-block px-4 py-1 mb-6 rounded-full border border-playlyy-accent/50 bg-playlyy-accent/10 backdrop-blur-sm">
          <span className="text-playlyy-accent font-semibold text-sm tracking-wider uppercase">Coming Soon</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Find, Play, and Connect.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">All Sports. One App.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
          Playlyy helps you discover and book nearby courts effortlessly.
        </p>

        <button
          onClick={scrollToForm}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-playlyy-dark transition-all duration-200 bg-playlyy-accent rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-playlyy-accent hover:bg-white hover:scale-105 shadow-[0_0_20px_rgba(163,230,53,0.4)]"
        >
          Join Early Access
          <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown className="w-8 h-8" />
      </div>
    </header>
  );
};

export default Hero;