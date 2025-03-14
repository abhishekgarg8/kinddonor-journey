import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// English and Hindi translations
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.admin': 'Admin Dashboard',
    'nav.donate': 'Donate',
    'nav.logout': 'Logout',
    
    // Hero section
    'hero.title': 'Transform Lives Through Service',
    'hero.subtitle': 'Your contribution helps us continue our mission to provide support to those in need.',
    'hero.button': 'Donate Now',
    
    // Certificate/Badge
    'certificate.title': 'Thank you for your generosity!',
    'certificate.subtitle': 'You are already a hero to us!',
    'certificate.message': 'Your kindness transforms lives.',
    'certificate.special': 'We\'ve reserved a spot on our Wall of Heroes just for you!',
    'reciprocity.message': 'Your support means everything—receive your badge of kindness today!',
    
    // Donation section
    'donation.why': 'Why Donate?',
    'donation.title': 'Your Support Makes a Difference',
    'donation.desc': 'When you donate, you\'re directly contributing to our mission of helping those in need. Every rupee makes a difference in someone\'s life.',
    'donation.tax': 'Tax Benefits',
    'donation.tax.desc': 'Your donations are eligible for tax benefits under Section 80G of the Income Tax Act.',
    'donation.secure': '100% Secure',
    'donation.secure.desc': 'Your payment information is completely secure with bank-grade encryption.',
    'donation.receipt': 'Instant Receipt',
    'donation.receipt.desc': 'Receive your donation receipt immediately via email after your payment.',
    'donation.impact': 'Impact Lives',
    'donation.impact.desc': 'Your generosity directly impacts the lives of those we serve in our community.',
    
    // Footer
    'footer.mission': 'Our mission is to help those in need and create a better world for everyone.',
    'footer.contact': 'Contact Us',
    'footer.links': 'Quick Links',
    'footer.rights': 'All rights reserved.',
    'footer.terms': 'Terms and Conditions',
    'footer.privacy': 'Privacy Policy',
    'footer.refund': 'Cancellation and Refund',
    'footer.shipping': 'Shipping and Exchange',
    'footer.contact': 'Contact Us',
    
    // Dashboard
    'dashboard.title': 'Admin Dashboard',
    
    // Success page
    'success.title': 'Thank You!',
    'success.desc': 'Your donation has been processed successfully.',
    'success.receipt': 'We\'ve sent a receipt to your email. Thank you for your generosity!',
    'success.return': 'Return Home',
    'success.print': 'Print Receipt',
    
    // Donation modal
    'modal.title': 'Make Your Impact',
    'modal.subtitle': 'A small monthly gift creates a lasting impact and helps us plan for the future.',
    'modal.monthly': 'Monthly',
    'modal.monthly.desc': 'Support our work every month',
    'modal.onetime': 'One-time',
    'modal.onetime.desc': 'Make a single donation today',
    'modal.monthly.button': 'Donate Monthly',
    'modal.onetime.button': 'Donate Once',
    'modal.cancel': 'You can cancel your monthly donation at any time.'
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.admin': 'प्रशासन डैशबोर्ड',
    'nav.donate': 'दान करें',
    'nav.logout': 'लॉगआउट',
    
    // Hero section
    'hero.title': 'सेवा के माध्यम से परिवर्तन',
    'hero.subtitle': 'आपका योगदान जरूरतमंदों की सहायता के लिए हमारे मिशन को जारी रखने में मदद करता है।',
    'hero.button': 'दान करें',
    
    // Donation section
    'donation.why': 'दान क्यों करें?',
    'donation.title': 'आपका समर्थन अंतर लाता है',
    'donation.desc': 'जब आप दान करते हैं, तो आप सीधे जरूरतमंदों की मदद करने के हमारे मिशन में योगदान करते हैं। हर रुपया किसी के जीवन में अंतर लाता है।',
    'donation.tax': 'कर लाभ',
    'donation.tax.desc': 'आपके दान आयकर अधिनियम की धारा 80G के तहत कर लाभ के लिए पात्र हैं।',
    'donation.secure': '100% सुरक्षित',
    'donation.secure.desc': 'आपकी भुगतान जानकारी बैंक-ग्रेड एन्क्रिप्शन के साथ पूरी तरह सुरक्षित है।',
    'donation.receipt': 'तत्काल रसीद',
    'donation.receipt.desc': 'भुगतान के बाद तुरंत ईमेल के माध्यम से अपनी दान रसीद प्राप्त करें।',
    'donation.impact': 'जीवन पर प्रभाव',
    'donation.impact.desc': 'आपकी उदारता सीधे हमारे समुदाय में सेवा करने वालों के जीवन को प्रभावित करती है।',
    
    // Footer
    'footer.mission': 'हमारा मिशन जरूरतमंदों की मदद करना और सभी के लिए एक बेहतर दुनिया बनाना है।',
    'footer.contact': 'संपर्क करें',
    'footer.links': 'त्वरित लिंक',
    'footer.rights': 'सर्वाधिकार सुरक्षित।',
    'footer.terms': 'नियम और शर्तें',
    'footer.privacy': 'गोपनीयता नीति',
    'footer.refund': 'रद्दीकरण और वापसी',
    'footer.shipping': 'शिपिंग और विनिमय',
    'footer.contact': 'संपर्क करें',
    
    // Dashboard
    'dashboard.title': 'प्रशासन डैशबोर्ड',
    
    // Success page
    'success.title': 'धन्यवाद!',
    'success.desc': 'आपका दान सफलतापूर्वक प्रसंस्करित किया गया है।',
    'success.receipt': 'हमने आपको एक रसीद ईमेल की है। आपकी उदारता के लिए धन्यवाद!',
    'success.return': 'होम पर वापस जाएं',
    'success.print': 'रसीद प्रिंट करें',
    
    // Donation modal
    'modal.title': 'आपका प्रभाव बनाएं',
    'modal.subtitle': 'एक छोटा मासिक दान दीर्घकालिक प्रभाव बनाता है और भविष्य की योजना बनाने में हमारी मदद करता है।',
    'modal.monthly': 'मासिक सेवा',
    'modal.monthly.desc': 'हर महीने हमारे काम का समर्थन करें',
    'modal.onetime': 'एक बार दान',
    'modal.onetime.desc': 'आज एक बार दान करें',
    'modal.monthly.button': 'मासिक दान करें',
    'modal.onetime.button': 'एक बार दान करें',
    'modal.cancel': 'आप किसी भी समय अपना मासिक दान रद्द कर सकते हैं।'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Try to get language from localStorage, default to English
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage === 'hi' ? 'hi' : 'en') as Language;
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', language);
    // Also update document lang attribute for accessibility
    document.documentElement.lang = language;
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const value = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
