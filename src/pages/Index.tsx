
import React from 'react';
import Hero from '@/components/Hero';
import DonationForm from '@/components/DonationForm';
import LanguageSelector from '@/components/LanguageSelector';
import { Link } from 'react-router-dom';
import { HandHeart, Sparkles, IndianRupee, Shield, ReceiptText, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/80 shadow-sm border-b border-orange-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-orange-600 font-medium text-lg flex items-center">
                <img src="/logo.svg" alt="Logo" className="h-8 w-8 mr-2" />
                <span className="font-bold">सेवा संस्था</span>
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <LanguageSelector className="mr-2" />
              <Link 
                to="/dashboard" 
                className="px-4 py-2 text-sm text-gray-700 hover:text-orange-600 rounded-lg transition-colors"
              >
                {t('nav.admin')}
              </Link>
              <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-medium rounded-lg transition-colors shadow-sm flex items-center">
                <HandHeart className="mr-1" size={16} />
                {t('nav.donate')}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <Hero />
      
      {/* Donation Form Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-amber-50 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-7xl relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <div className="text-sm text-orange-600 font-medium mb-2 flex items-center">
                  <Sparkles size={16} className="mr-1" />
                  {t('donation.why')}
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('donation.title')}</h2>
                <p className="text-gray-600">
                  {t('donation.desc')}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <IndianRupee size={20} />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{t('donation.tax')}</h3>
                  <p className="text-gray-600 text-sm">
                    {t('donation.tax.desc')}
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <Shield size={20} />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{t('donation.secure')}</h3>
                  <p className="text-gray-600 text-sm">
                    {t('donation.secure.desc')}
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <ReceiptText size={20} />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{t('donation.receipt')}</h3>
                  <p className="text-gray-600 text-sm">
                    {t('donation.receipt.desc')}
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <Users size={20} />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{t('donation.impact')}</h3>
                  <p className="text-gray-600 text-sm">
                    {t('donation.impact.desc')}
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <DonationForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Simple Copyright Footer with Links */}
      <footer className="bg-gray-900 text-white py-6 relative">
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
              <Link to="/shipping" className="hover:text-orange-400 transition-colors">
                {t('footer.shipping')}
              </Link>
              <Link to="/contact" className="hover:text-orange-400 transition-colors">
                {t('footer.contact')}
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

export default Index;
