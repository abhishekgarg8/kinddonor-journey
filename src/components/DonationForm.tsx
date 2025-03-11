
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import DonationFrequencyModal from './DonationFrequencyModal';

type FormData = {
  name: string;
  pan: string;
  amount: string;
  phone: string;
  email: string;
};

const DonationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    pan: '',
    amount: '',
    phone: '',
    email: '',
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [showModal, setShowModal] = useState(false);
  const [formTouched, setFormTouched] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // PAN validation (Indian PAN format: ABCDE1234F)
    if (!formData.pan.trim()) {
      newErrors.pan = 'PAN is required';
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan)) {
      newErrors.pan = 'Invalid PAN format (e.g., ABCDE1234F)';
    }
    
    // Amount validation
    if (!formData.amount.trim()) {
      newErrors.amount = 'Amount is required';
    } else if (isNaN(Number(formData.amount)) || Number(formData.amount) <= 0) {
      newErrors.amount = 'Amount must be a positive number';
    }
    
    // Phone validation (Indian format)
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number format';
    }
    
    // Email validation (optional)
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    
    if (!formTouched) {
      setFormTouched(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // If validation passes, show the modal
      setShowModal(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handlePaymentChoice = (frequency: 'one-time' | 'monthly') => {
    // In a real application, this would initiate the payment flow
    console.log('Payment choice:', frequency, 'with data:', formData);
    
    // For demo purposes, navigate to success page
    // In reality, would redirect to payment gateway
    window.location.href = `/success?frequency=${frequency}`;
  };

  const amountSuggestions = ['500', '1000', '2000', '5000'];

  return (
    <>
      <div id="donation-form" className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:shadow-xl">
        <div className="p-6 sm:p-8">
          <div className="flex flex-col space-y-1.5 mb-6">
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-2">Make a Donation</h3>
            <p className="text-sm text-gray-500 text-center">Your contribution makes a real difference</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <div className="fancy-input">
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" " 
                  className={cn(
                    "w-full px-4 py-3 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all",
                    errors.name ? "border-red-300" : "border-gray-200"
                  )}
                />
                <label htmlFor="name" className="text-sm">Full Name</label>
              </div>
              {errors.name && <p className="text-sm text-red-500 mt-1 ml-1">{errors.name}</p>}
            </div>
            
            {/* PAN Field */}
            <div className="space-y-2">
              <div className="fancy-input">
                <input
                  id="pan"
                  name="pan"
                  value={formData.pan}
                  onChange={handleChange}
                  placeholder=" "
                  className={cn(
                    "w-full px-4 py-3 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all uppercase",
                    errors.pan ? "border-red-300" : "border-gray-200"
                  )}
                  maxLength={10}
                />
                <label htmlFor="pan" className="text-sm">PAN Number</label>
              </div>
              {errors.pan && <p className="text-sm text-red-500 mt-1 ml-1">{errors.pan}</p>}
            </div>
            
            {/* Amount Field with Suggestions */}
            <div className="space-y-2">
              <div className="fancy-input">
                <input
                  id="amount"
                  name="amount"
                  type="text"
                  inputMode="numeric"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder=" "
                  className={cn(
                    "w-full px-4 py-3 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all",
                    errors.amount ? "border-red-300" : "border-gray-200"
                  )}
                />
                <label htmlFor="amount" className="text-sm">Amount (₹)</label>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {amountSuggestions.map(amount => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, amount }))}
                    className={cn(
                      "px-3 py-1 text-sm rounded-lg transition-all",
                      formData.amount === amount 
                        ? "bg-blue-100 text-blue-700 border border-blue-200" 
                        : "bg-gray-100 text-gray-600 border border-transparent hover:bg-gray-200"
                    )}
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
              
              {errors.amount && <p className="text-sm text-red-500 mt-1 ml-1">{errors.amount}</p>}
            </div>
            
            {/* Phone Field */}
            <div className="space-y-2">
              <div className="fancy-input">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder=" "
                  className={cn(
                    "w-full px-4 py-3 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all",
                    errors.phone ? "border-red-300" : "border-gray-200"
                  )}
                  maxLength={10}
                />
                <label htmlFor="phone" className="text-sm">Phone Number</label>
              </div>
              {errors.phone && <p className="text-sm text-red-500 mt-1 ml-1">{errors.phone}</p>}
            </div>
            
            {/* Email Field (Optional) */}
            <div className="space-y-2">
              <div className="fancy-input">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  className={cn(
                    "w-full px-4 py-3 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all",
                    errors.email ? "border-red-300" : "border-gray-200"
                  )}
                />
                <label htmlFor="email" className="text-sm">Email (Optional)</label>
              </div>
              {errors.email && <p className="text-sm text-red-500 mt-1 ml-1">{errors.email}</p>}
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className={cn(
                "w-full py-3 rounded-xl text-white font-medium text-lg transition-all duration-300",
                formTouched
                  ? "bg-blue-600 hover:bg-blue-700 transform hover:scale-[1.02] active:scale-[0.98]"
                  : "bg-blue-400 cursor-not-allowed"
              )}
              disabled={!formTouched}
            >
              Donate Now
            </button>
          </form>
        </div>
      </div>
      
      {/* Donation Frequency Modal */}
      <DonationFrequencyModal 
        isOpen={showModal} 
        onClose={handleModalClose}
        onChoose={handlePaymentChoice}
        amount={formData.amount}
      />
    </>
  );
};

export default DonationForm;
