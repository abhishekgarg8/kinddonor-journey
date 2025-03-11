
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
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-500"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <span className="text-orange-500 mr-2">सेवा संस्था</span>
                (Seva Sanstha)
              </h3>
              <p className="text-gray-400 mb-4">
                {t('footer.mission')}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">{t('footer.contact')}</h3>
              <p className="text-gray-400 mb-2">
                123 NGO Street, New Delhi, India
              </p>
              <p className="text-gray-400 mb-2">
                info@sevasanstha.org
              </p>
              <p className="text-gray-400">
                +91 98765 43210
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">{t('footer.links')}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>
                    Our Programs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>
                    Get Involved
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>
                    Donate
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
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
