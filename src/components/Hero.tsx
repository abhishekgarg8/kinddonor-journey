
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const ngoLogo = "/logo.svg"; // Placeholder for NGO logo

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setLoaded(true);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:py-32 flex flex-col items-center">
        <div className={cn(
          "flex justify-center mb-6 opacity-0 transform translate-y-4",
          loaded && "opacity-100 translate-y-0 transition-all duration-700 ease-out"
        )}>
          {ngoLogo && (
            <div className="w-28 h-28 rounded-full overflow-hidden bg-white shadow-xl flex items-center justify-center p-4">
              <img 
                src={ngoLogo} 
                alt="NGO Logo" 
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  // Fallback if logo doesn't load
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=NGO';
                }}
              />
            </div>
          )}
        </div>
        
        <h1 className={cn(
          "text-center font-bold text-4xl md:text-5xl lg:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 transform translate-y-4",
          loaded && "opacity-100 translate-y-0 transition-all duration-700 delay-100 ease-out"
        )}>
          Make a Difference Today
        </h1>
        
        <p className={cn(
          "text-center text-gray-600 text-lg md:text-xl max-w-2xl mb-10 opacity-0 transform translate-y-4",
          loaded && "opacity-100 translate-y-0 transition-all duration-700 delay-200 ease-out"
        )}>
          Your contribution helps us continue our mission to provide support to those in need.
          Every donation, no matter the size, creates a meaningful impact.
        </p>
        
        <div className={cn(
          "opacity-0 transform translate-y-4",
          loaded && "opacity-100 translate-y-0 transition-all duration-700 delay-300 ease-out"
        )}>
          <div className="glass rounded-2xl p-1.5 shadow-lg">
            <button
              onClick={() => document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              Donate Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1L15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
