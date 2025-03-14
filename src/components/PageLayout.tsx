
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import { HandHeart } from 'lucide-react';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
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
                to="/dashboard" 
                className="px-4 py-2 text-sm text-gray-700 hover:text-orange-600 rounded-lg transition-colors"
              >
                {t('nav.admin')}
              </Link>
              <Link 
                to="/" 
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-medium rounded-lg transition-colors shadow-sm flex items-center"
              >
                <HandHeart className="mr-1" size={16} />
                {t('nav.donate')}
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Page Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">{title}</h1>
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            {children}
          </div>
        </div>
      </div>
      
      {/* Simple Copyright Footer with Links */}
      <footer className="bg-gray-900 text-white py-6 relative mt-auto">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-500"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm text-gray-400">
              <Link to="/terms" className="hover:text-orange-400 transition-colors">
                {t('footer.terms')}
              </Link>
              <Link to="/privacy" className="hover:text-orange-400 transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link to="/refund" className="hover:text-orange-400 transition-colors">
                {t('footer.refund')}
              </Link>
              <Link to="/contact" className="hover:text-orange-400 transition-colors">
                {t('footer.contact.link')}
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} सेवा संस्था (Seva Sanstha). {t('footer.rights')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;
