
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Calendar, CalendarCheck } from 'lucide-react';

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
          "bg-[#EDF5FB] max-w-md w-full rounded-xl shadow-xl overflow-hidden",
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
          
          {/* Header */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Make your impact sustainable</h3>
            <p className="mt-2 text-gray-600">
              A small monthly gift creates a lasting impact and helps us plan for the future.
            </p>
          </div>
          
          {/* Options Grid */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Monthly Option */}
            <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center">
              <div className="w-12 h-12 mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                <Calendar size={24} />
              </div>
              <h4 className="text-lg font-bold mb-1">Monthly Donation</h4>
              <p className="text-sm text-gray-600 text-center mb-1">
                Support our work every month with ₹{amountValue}
              </p>
              <p className="text-xl font-bold text-blue-500 mb-4">
                ₹{amountValue}/month
              </p>
              <button
                onClick={() => onChoose('monthly')}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Donate Monthly
              </button>
            </div>
            
            {/* One-time Option */}
            <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center">
              <div className="w-12 h-12 mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                <CalendarCheck size={24} />
              </div>
              <h4 className="text-lg font-bold mb-1">One-time Donation</h4>
              <p className="text-sm text-gray-600 text-center mb-1">
                Make a single donation today
              </p>
              <p className="text-xl font-bold text-blue-500 mb-4">
                ₹{amountValue}
              </p>
              <button
                onClick={() => onChoose('one-time')}
                className="w-full border border-blue-500 text-blue-500 hover:bg-blue-50 py-2 px-4 rounded-lg transition-colors"
              >
                Donate Once
              </button>
            </div>
          </div>
          
          {/* Footer note */}
          <p className="text-center text-sm text-gray-500 mt-4">
            You can cancel your monthly donation at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationFrequencyModal;
