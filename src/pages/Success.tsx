
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ReceiptPreview from '@/components/ReceiptPreview';
import { cn } from '@/lib/utils';
import { CheckCircle2, ArrowLeft, Printer, Home } from 'lucide-react';
import LanguageSelector from '@/components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const Success = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const frequency = queryParams.get('frequency') as 'one-time' | 'monthly' || 'one-time';
  
  const [isVisible, setIsVisible] = useState(false);
  const { t, language } = useLanguage();
  
  // Retrieve mock data from localStorage (would be from API in real app)
  const mockData = {
    name: localStorage.getItem('donorName') || 'John Doe',
    amount: localStorage.getItem('amount') || '1000',
    pan: localStorage.getItem('pan') || 'ABCDE1234F',
    date: new Date().toLocaleDateString(),
    transactionId: 'TXN' + Math.floor(Math.random() * 1000000000),
  };
  
  useEffect(() => {
    // Animate in
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 flex flex-col">
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
      
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/80 shadow-sm border-b border-orange-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-orange-600 font-medium text-lg flex items-center">
                <img src="/logo.svg" alt="Logo" className="h-8 w-8 mr-2" />
                <span className="font-bold">सेवा संस्था</span>
              </Link>
            </div>
            <div className="flex items-center space-x-1">
              <LanguageSelector className="mr-2" />
              <Link 
                to="/" 
                className="px-4 py-2 text-sm text-gray-700 hover:text-orange-600 rounded-lg transition-colors flex items-center"
              >
                <Home size={16} className="mr-1" />
                {t('nav.home')}
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
        <div className={cn(
          "max-w-lg w-full opacity-0 transform translate-y-4",
          isVisible && "opacity-100 translate-y-0 transition-all duration-500"
        )}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-100 text-orange-600 mb-4">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h1 className="text-3xl font-bold mb-2 text-gray-900">
              {language === 'hi' ? 'धन्यवाद!' : 'धन्यवाद!'} 
              <span className="text-orange-600">({t('success.title')})</span>
            </h1>
            <p className="text-gray-600">
              {language === 'hi' 
                ? (frequency === 'monthly' 
                  ? 'आपका मासिक दान सफलतापूर्वक शुरू हो गया है।' 
                  : 'आपका एकल दान सफलतापूर्वक प्रसंस्करित किया गया है।')
                : ''
              }
            </p>
            <p className="text-sm text-gray-600">
              {t('success.desc')}
            </p>
          </div>
          
          <div className="mb-8 bg-white rounded-xl shadow-sm border border-orange-100 p-1">
            <ReceiptPreview 
              name={mockData.name}
              amount={mockData.amount}
              pan={mockData.pan}
              date={mockData.date}
              transactionId={mockData.transactionId}
              frequency={frequency}
            />
          </div>
          
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              {language === 'hi' ? 'हमने आपको एक रसीद ईमेल की है। आपकी उदारता के लिए धन्यवाद!' : ''}
            </p>
            <p className="text-sm text-gray-600">
              {t('success.receipt')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <Link 
                to="/"
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] text-center shadow-sm flex items-center justify-center w-full sm:w-auto"
              >
                <ArrowLeft size={18} className="mr-2" />
                {t('success.return')}
              </Link>
              
              <button 
                className="px-6 py-3 bg-white border border-gray-200 hover:border-gray-300 text-gray-800 font-medium rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center w-full sm:w-auto"
                onClick={() => window.print()}
              >
                <Printer size={18} className="mr-2" />
                {t('success.print')}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-orange-100">
        <p>&copy; {new Date().getFullYear()} सेवा संस्था (Seva Sanstha). {t('footer.rights')}</p>
      </footer>
    </div>
  );
};

export default Success;
