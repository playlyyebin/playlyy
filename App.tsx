import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyJoin from './components/WhyJoin';
import SignupForm from './components/SignupForm';
import Footer from './components/Footer';
import { Language } from './types';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-playlyy-accent selection:text-playlyy-dark">
      <Navbar language={language} setLanguage={setLanguage} />
      
      <main className="flex-grow">
        <Hero scrollToForm={scrollToForm} />
        
        <WhyJoin />
        
        <section 
          ref={formRef} 
          className="py-24 px-4 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
        >
          {/* Decorative blobs for the form section */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-playlyy-accent/20 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-playlyy-blue/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
          
          <div className="container mx-auto relative z-10">
            <SignupForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;