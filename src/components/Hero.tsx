
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { HandHeart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ngoLogo = "/logo.svg"; // Placeholder for NGO logo

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    // Trigger animation after component mounts
    setLoaded(true);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background with Indian-inspired pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-amber-50"></div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-30 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
      
      <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:py-32 flex flex-col items-center">
        <div className={cn(
          "flex justify-center mb-6 opacity-0 transform translate-y-4",
          loaded && "opacity-100 translate-y-0 transition-all duration-700 ease-out"
        )}>
          {ngoLogo && (
            <div className="w-28 h-28 rounded-full overflow-hidden bg-white shadow-xl flex items-center justify-center p-4 border-2 border-orange-100">
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
          "text-center font-bold text-4xl md:text-5xl lg:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 transform translate-y-4",
          loaded && "opacity-100 translate-y-0 transition-all duration-700 delay-100 ease-out"
        )}>
          {language === 'hi' ? 'सेवा के माध्यम से परिवर्तन' : 'सेवा के माध्यम से परिवर्तन'}
          <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-gray-700 font-medium">
            {t('hero.title')}
          </span>
        </h1>
        
        <p className={cn(
          "text-center text-gray-600 text-lg md:text-xl max-w-2xl mb-10 opacity-0 transform translate-y-4",
          loaded && "opacity-100 translate-y-0 transition-all duration-700 delay-200 ease-out"
        )}>
          {language === 'hi' ? 'आपका योगदान जरूरतमंदों की सहायता के लिए हमारे मिशन को जारी रखने में मदद करता है।' : ''}
          <span className={language === 'hi' ? 'hidden' : 'block'}>
            {t('hero.subtitle')}
          </span>
        </p>
        
        <div className={cn(
          "opacity-0 transform translate-y-4",
          loaded && "opacity-100 translate-y-0 transition-all duration-700 delay-300 ease-out"
        )}>
          <div className="glass rounded-2xl p-1.5 shadow-lg bg-gradient-to-r from-orange-500/10 to-amber-500/10 backdrop-blur-sm">
            <button
              onClick={() => document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium text-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 shadow-md"
            >
              <HandHeart className="mr-1" size={20} />
              {language === 'hi' ? 'दान करें' : 'दान करें'} ({t('hero.button')})
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
