
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

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
          "glass max-w-md w-full rounded-2xl shadow-2xl overflow-hidden",
          isClosing ? "animate-fade-out scale-95" : "animate-scale-in"
        )}
      >
        <div className="p-6 sm:p-8">
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-900">Choose Your Impact</h3>
            <p className="mt-2 text-gray-600">
              Would you like to make this a recurring monthly donation or a one-time gift?
            </p>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={() => onChoose('monthly')}
              className="w-full relative overflow-hidden group bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="absolute inset-0 w-3 bg-blue-400 transform -skew-x-12 opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-lg font-medium">Monthly Donation</span>
                <span className="text-sm opacity-90 mt-1">
                  {formattedAmount} every month
                </span>
              </div>
            </button>
            
            <button
              onClick={() => onChoose('one-time')}
              className="w-full bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-800 py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex flex-col items-center justify-center">
                <span className="text-lg font-medium">One-time Donation</span>
                <span className="text-sm text-gray-600 mt-1">
                  {formattedAmount} just once
                </span>
              </div>
            </button>
          </div>
          
          <button
            onClick={handleClose}
            className="mt-6 w-full text-gray-500 hover:text-gray-700 py-2 text-center text-sm transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationFrequencyModal;
