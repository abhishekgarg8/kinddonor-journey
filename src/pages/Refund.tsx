
import React from 'react';
import PageLayout from '@/components/PageLayout';

const Refund = () => {
  return (
    <PageLayout title="Cancellation and Refund Policy">
      <div className="prose prose-orange max-w-none">
        <p className="text-gray-600 mb-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <h2>1. One-Time Donations</h2>
        <p>
          In general, one-time donations to सेवा संस्था (Seva Sanstha) are non-refundable. However, if you believe there has been an error in your donation, please contact us within 7 days of making the donation, and we will work with you to resolve the issue.
        </p>
        
        <h2>2. Monthly Donations</h2>
        <p>
          You can cancel your monthly donation at any time by contacting us through our Contact page. Once cancelled, no further donations will be processed. No refund will be issued for donations already processed.
        </p>
        
        <h2>3. Errors in Donation Amount</h2>
        <p>
          If you have made a donation with an incorrect amount, please contact us immediately. We will review your request and may issue a refund at our discretion.
        </p>
        
        <h2>4. Duplicate Donations</h2>
        <p>
          If you have accidentally made a duplicate donation, please contact us with your donation details. After verification, we will issue a refund for the duplicate donation.
        </p>
        
        <h2>5. Fraudulent Transactions</h2>
        <p>
          If you believe your payment method has been used fraudulently to make a donation to us, please contact your financial institution immediately and notify us. We will cooperate with any investigation and take appropriate action.
        </p>
        
        <h2>6. Refund Process</h2>
        <p>
          Approved refunds will be processed using the same payment method used for the original donation. The time it takes for the refund to appear in your account depends on your financial institution.
        </p>
        
        <h2>7. Changes to This Policy</h2>
        <p>
          We reserve the right to modify this Cancellation and Refund Policy at any time. Changes will be effective immediately upon posting on our website.
        </p>
        
        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this Cancellation and Refund Policy, please contact us through our Contact page.
        </p>
      </div>
    </PageLayout>
  );
};

export default Refund;
