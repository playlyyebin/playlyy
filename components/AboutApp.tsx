import React from 'react';

const AboutApp: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your all-in-one sports companion
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Powered by smart AI to make finding and booking sports venues easier than ever before. 
              Stop calling venues and start playing.
            </p>
          </div>

          {/* Visual/Mockup Placeholder */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-[500px] bg-gray-900 rounded-[3rem] shadow-2xl border-[8px] border-gray-800 overflow-hidden">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-20"></div>
              
              {/* Screen Content */}
              <div className="w-full h-full bg-gray-50 flex flex-col relative">
                {/* App Header */}
                <div className="h-32 bg-playlyy-blue p-6 pt-12 text-white rounded-b-3xl z-10 relative">
                  <div className="text-xs uppercase opacity-70 mb-1">Welcome back</div>
                  <div className="font-bold text-xl">Find a Court</div>
                </div>
                
                {/* Search Bar Mockup */}
                <div className="mx-4 -mt-5 bg-white rounded-xl shadow-md p-3 flex items-center gap-2 z-20">
                  <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                  <div className="h-2 w-24 bg-gray-100 rounded"></div>
                </div>

                {/* List Items Mockup */}
                <div className="p-4 space-y-3 mt-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 flex gap-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0"></div>
                      <div className="flex-1 space-y-2 py-1">
                        <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
                        <div className="h-2 w-1/2 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating Action Button */}
                <div className="absolute bottom-6 right-6 w-12 h-12 bg-playlyy-accent rounded-full shadow-lg flex items-center justify-center">
                    <div className="w-6 h-6 text-playlyy-dark font-bold text-xl">+</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 w-80 h-80 bg-playlyy-blue/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutApp;