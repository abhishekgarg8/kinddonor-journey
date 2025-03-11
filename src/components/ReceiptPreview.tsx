
import React from 'react';

interface ReceiptPreviewProps {
  name: string;
  amount: string;
  pan: string;
  date: string;
  transactionId: string;
  frequency: 'one-time' | 'monthly';
}

const ReceiptPreview: React.FC<ReceiptPreviewProps> = ({
  name,
  amount,
  pan,
  date,
  transactionId,
  frequency
}) => {
  const formattedAmount = parseFloat(amount) ? 
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(parseFloat(amount)) : 
    '₹0';
  
  const maskedPan = pan ? `${pan.substring(0, 5)}XXXX${pan.substring(9)}` : 'ABCDEXXXXF';
  
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      <div className="p-6 sm:p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Donation Receipt</div>
            <h3 className="text-xl font-semibold">Thank You!</h3>
          </div>
          <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium">
            {frequency === 'monthly' ? 'Monthly' : 'One-time'}
          </div>
        </div>
        
        <div className="space-y-4 mb-6">
          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-600 text-sm">Donor</span>
            <span className="font-medium">{name || 'John Doe'}</span>
          </div>
          
          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-600 text-sm">Amount</span>
            <span className="font-medium">{formattedAmount}</span>
          </div>
          
          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-600 text-sm">PAN</span>
            <span className="font-medium">{maskedPan}</span>
          </div>
          
          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-600 text-sm">Date</span>
            <span className="font-medium">{date || new Date().toLocaleDateString()}</span>
          </div>
          
          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-600 text-sm">Transaction ID</span>
            <span className="font-medium text-xs sm:text-sm font-mono">{transactionId || 'TXN123456789'}</span>
          </div>
        </div>
        
        <div className="text-center p-4 rounded-xl bg-blue-50 text-blue-700 text-sm">
          <p>An official receipt has been sent to your email address.</p>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            This donation is tax-deductible under Section 80G of the Income Tax Act.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPreview;
