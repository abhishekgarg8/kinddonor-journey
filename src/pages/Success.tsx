
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ReceiptPreview from '@/components/ReceiptPreview';
import { cn } from '@/lib/utils';

const Success = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const frequency = queryParams.get('frequency') as 'one-time' | 'monthly' || 'one-time';
  
  const [isVisible, setIsVisible] = useState(false);
  
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/80 shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-blue-600 font-medium text-lg">
                NGO Name
              </Link>
            </div>
            <div className="flex items-center space-x-1">
              <Link 
                to="/" 
                className="px-4 py-2 text-sm text-gray-700 hover:text-blue-600 rounded-lg transition-colors"
              >
                Home
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold mb-2 text-gray-900">Thank You!</h1>
            <p className="text-gray-600">
              {frequency === 'monthly' 
                ? 'Your monthly donation has been set up successfully.' 
                : 'Your one-time donation has been processed successfully.'}
            </p>
          </div>
          
          <div className="mb-8">
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
              We've sent a receipt to your email. Thank you for your generosity!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] text-center"
              >
                Return Home
              </Link>
              
              <button 
                className="px-6 py-3 bg-white border border-gray-200 hover:border-gray-300 text-gray-800 font-medium rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                onClick={() => window.print()}
              >
                Print Receipt
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} NGO Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Success;
