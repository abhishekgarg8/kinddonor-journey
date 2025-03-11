
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { HandHeart, Award, Heart, Star } from 'lucide-react';
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
        
        {/* Reciprocity-Based Thank You Certificate/Badge */}
        <div className={cn(
          "max-w-2xl w-full mb-10 opacity-0 transform translate-y-4",
          loaded && "opacity-100 translate-y-0 transition-all duration-700 delay-100 ease-out"
        )}>
          <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-100 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-amber-100 rounded-full"></div>
            <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-orange-100 rounded-full"></div>
            
            {/* Certificate content */}
            <div className="relative text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
                  <Award className="text-white" size={32} />
                </div>
              </div>
              
              <div className="mb-2 text-xl font-medium text-gray-700 flex items-center justify-center gap-1">
                <Star className="text-amber-500" size={16} />
                <span className="mx-1">{language === 'hi' ? 'आपकी उदारता के लिए धन्यवाद!' : t('certificate.title')}</span>
                <Star className="text-amber-500" size={16} />
              </div>
              
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-4">
                {language === 'hi' ? 'आप हमारे लिए पहले से ही नायक हैं!' : t('certificate.subtitle')}
              </h2>
              
              <p className="text-gray-600 mb-6">
                {language === 'hi' ? 'आपकी दयालुता जीवन बदलती है।' : t('certificate.message')}
              </p>
              
              <div className="flex justify-center space-x-2 mb-2">
                <Heart className="text-orange-500" size={20} fill="currentColor" />
                <Heart className="text-orange-500" size={20} fill="currentColor" />
                <Heart className="text-orange-500" size={20} fill="currentColor" />
              </div>
              
              <p className="text-sm text-gray-500 italic">
                {language === 'hi' ? 'हमने आपके लिए हमारे हीरोज़ की दीवार पर एक विशेष स्थान आरक्षित किया है!' : t('certificate.special')}
              </p>
            </div>
          </div>
        </div>
        
        {/* Reciprocity message */}
        <p className={cn(
          "text-center text-gray-600 text-lg max-w-2xl mb-8 opacity-0 transform translate-y-4",
          loaded && "opacity-100 translate-y-0 transition-all duration-700 delay-200 ease-out"
        )}>
          {language === 'hi' 
            ? 'आपका समर्थन सब कुछ का मतलब है - आज अपना दयालुता का बैज प्राप्त करें!' 
            : t('reciprocity.message')}
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
              {language === 'hi' ? 'दान करें' : t('hero.button')}
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
