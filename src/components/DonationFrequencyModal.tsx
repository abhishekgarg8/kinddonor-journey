
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Calendar, CalendarCheck, IndianRupee, HandHeart } from 'lucide-react';

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
          "bg-[#FFF7ED] max-w-md w-full rounded-xl shadow-xl overflow-hidden border-2 border-[#F97316]/20",
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
            <div className="flex justify-center mb-3">
              <div className="w-16 h-1 bg-[#F97316] rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">सतत प्रभाव बनाएं</h3>
            <p className="text-sm text-gray-600 mt-1">(Make your impact sustainable)</p>
            <p className="mt-3 text-gray-600">
              A small monthly seva creates lasting impact and helps us plan for the future.
            </p>
          </div>
          
          {/* Options Grid */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Monthly Option */}
            <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center border border-[#F97316]/20">
              <div className="w-12 h-12 mb-4 bg-[#FFEDD5] rounded-full flex items-center justify-center text-[#F97316]">
                <HandHeart size={24} />
              </div>
              <h4 className="text-lg font-bold mb-1">Monthly Seva</h4>
              <p className="text-sm text-gray-600 text-center mb-1">
                Support our work every month with ₹{amountValue}
              </p>
              <p className="text-xl font-bold text-[#F97316] mb-4">
                ₹{amountValue}/month
              </p>
              <button
                onClick={() => onChoose('monthly')}
                className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-2 px-4 rounded-lg transition-colors"
              >
                <span className="flex items-center justify-center gap-2">
                  <IndianRupee size={16} />
                  Donate Monthly
                </span>
              </button>
            </div>
            
            {/* One-time Option */}
            <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center border border-[#F97316]/10">
              <div className="w-12 h-12 mb-4 bg-[#FFEDD5] rounded-full flex items-center justify-center text-[#F97316]">
                <CalendarCheck size={24} />
              </div>
              <h4 className="text-lg font-bold mb-1">One-time Seva</h4>
              <p className="text-sm text-gray-600 text-center mb-1">
                Make a single donation today
              </p>
              <p className="text-xl font-bold text-[#F97316] mb-4">
                ₹{amountValue}
              </p>
              <button
                onClick={() => onChoose('one-time')}
                className="w-full border border-[#F97316] text-[#F97316] hover:bg-[#FFEDD5] py-2 px-4 rounded-lg transition-colors"
              >
                <span className="flex items-center justify-center gap-2">
                  <IndianRupee size={16} />
                  Donate Once
                </span>
              </button>
            </div>
          </div>
          
          {/* Footer note */}
          <p className="text-center text-sm text-gray-500 mt-4">
            आप कभी भी अपना मासिक दान रद्द कर सकते हैं | (You can cancel your monthly donation at any time.)
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationFrequencyModal;
