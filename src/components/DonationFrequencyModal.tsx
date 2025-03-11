
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Calendar, HandHeart, IndianRupee } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface DonationFrequencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onChoose: (frequency: 'one-time' | 'monthly') => void;
  amount: string;
}

const DonationFrequencyModal: React.FC<DonationFrequencyModalProps> = ({
  isOpen,
  onClose,
  onChoose,
  amount
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { t, language } = useLanguage();
  
  // Handle animation timing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (isOpen) {
      setIsVisible(true);
    } else if (isVisible) {
      setIsClosing(true);
      timeoutId = setTimeout(() => {
        setIsVisible(false);
        setIsClosing(false);
      }, 300); // Match the animation duration
    }
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isOpen, isVisible]);
  
  if (!isVisible) return null;
  
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };
  
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300); // Match the animation duration
  };
  
  const formattedAmount = parseFloat(amount) ? 
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(parseFloat(amount)) : 
    '₹0';
  
  // Remove the ₹ symbol for displaying just the number
  const amountValue = formattedAmount.replace('₹', '');
  
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",
        isClosing ? "animate-fade-out" : "animate-fade-in"
      )}
      onClick={handleBackdropClick}
    >
      <div
        className={cn(
          "bg-gradient-to-b from-orange-50 to-amber-50 max-w-md w-full rounded-xl shadow-xl overflow-hidden border border-orange-100",
          isClosing ? "animate-fade-out scale-95" : "animate-scale-in"
        )}
      >
        <div className="relative p-6">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {/* Decorative elements - Rangoli-inspired pattern */}
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-orange-500/10 rounded-full"></div>
          <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-amber-500/10 rounded-full"></div>
          
          {/* Header */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {t('modal.title')}
            </h3>
            <p className="text-sm text-gray-600">
              {t('modal.subtitle')}
            </p>
          </div>
          
          {/* Options Grid */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Monthly Option */}
            <div className="bg-gradient-to-br from-white to-orange-50 p-5 rounded-lg shadow-sm flex flex-col items-center border border-orange-100">
              <div className="w-12 h-12 mb-4 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                <HandHeart size={24} />
              </div>
              <h4 className="text-lg font-bold mb-1">
                {t('modal.monthly')}
              </h4>
              <p className="text-sm text-gray-600 text-center mb-1">
                {t('modal.monthly.desc')}
              </p>
              <div className="flex items-center justify-center text-xl font-bold text-orange-600 mb-4">
                <IndianRupee size={18} />
                <span>{amountValue}/month</span>
              </div>
              <button
                onClick={() => onChoose('monthly')}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                {t('modal.monthly.button')}
              </button>
            </div>
            
            {/* One-time Option */}
            <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center border border-gray-100">
              <div className="w-12 h-12 mb-4 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
                <Calendar size={24} />
              </div>
              <h4 className="text-lg font-bold mb-1">
                {t('modal.onetime')}
              </h4>
              <p className="text-sm text-gray-600 text-center mb-1">
                {t('modal.onetime.desc')}
              </p>
              <div className="flex items-center justify-center text-xl font-bold text-gray-600 mb-4">
                <IndianRupee size={18} />
                <span>{amountValue}</span>
              </div>
              <button
                onClick={() => onChoose('one-time')}
                className="w-full border border-orange-500 text-orange-500 hover:bg-orange-50 py-2 px-4 rounded-lg transition-colors"
              >
                {t('modal.onetime.button')}
              </button>
            </div>
          </div>
          
          {/* Footer note */}
          <p className="text-center text-sm text-gray-500 mt-4">
            {t('modal.cancel')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationFrequencyModal;
