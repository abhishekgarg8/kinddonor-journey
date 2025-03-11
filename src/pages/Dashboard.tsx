
import React from 'react';
import AdminDashboard from '@/components/AdminDashboard';
import { Link } from 'react-router-dom';
import { LogOut, Home } from 'lucide-react';
import LanguageSelector from '@/components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const Dashboard = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/80 shadow-sm border-b border-orange-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-orange-600 font-medium text-lg flex items-center">
                <img src="/logo.svg" alt="Logo" className="h-8 w-8 mr-2" />
                <span className="font-bold">सेवा संस्था</span>
                <span className="ml-2 text-sm px-2 py-0.5 bg-gray-100 text-gray-800 rounded">Admin</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <LanguageSelector className="mr-2" />
              <Link 
                to="/" 
                className="px-4 py-2 text-sm text-gray-700 hover:text-orange-600 rounded-lg transition-colors flex items-center"
              >
                <Home size={16} className="mr-1" />
                {t('nav.home')}
              </Link>
              <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-medium rounded-lg transition-colors shadow-sm flex items-center">
                <LogOut size={16} className="mr-1" />
                {t('nav.logout')}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Admin Dashboard Component */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
          <span className="text-orange-600 mr-2">प्रशासन डैशबोर्ड</span>
          ({t('dashboard.title')})
        </h1>
        <AdminDashboard />
      </div>
      
      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-200 mt-8">
        <p>&copy; {new Date().getFullYear()} सेवा संस्था (Seva Sanstha). {t('footer.rights')}</p>
      </footer>
    </div>
  );
};

export default Dashboard;
