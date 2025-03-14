
import React from 'react';
import PageLayout from '@/components/PageLayout';

const Shipping = () => {
  return (
    <PageLayout title="Shipping and Exchange Policy">
      <div className="prose prose-orange max-w-none">
        <p className="text-gray-600 mb-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <h2>1. Thank You Gifts</h2>
        <p>
          For certain donation tiers, सेवा संस्था (Seva Sanstha) may offer physical thank you gifts. These gifts are shipped to the address provided during the donation process.
        </p>
        
        <h2>2. Shipping Timeframes</h2>
        <p>
          We aim to dispatch all thank you gifts within 10 business days of receiving your donation. Delivery times may vary depending on your location. Domestic shipments typically arrive within 5-7 business days, while international shipments may take 2-4 weeks.
        </p>
        
        <h2>3. Shipping Costs</h2>
        <p>
          Shipping costs for thank you gifts are covered by सेवा संस्था (Seva Sanstha). There are no additional charges for shipping within India. For international shipments, additional charges may apply.
        </p>
        
        <h2>4. Damaged or Lost Items</h2>
        <p>
          If your thank you gift arrives damaged or does not arrive at all, please contact us within 30 days of making your donation. We will arrange for a replacement to be sent to you at no additional cost.
        </p>
        
        <h2>5. Exchanges</h2>
        <p>
          Thank you gifts cannot be exchanged for different items. However, if you have received the wrong item, please contact us, and we will arrange for the correct item to be sent to you.
        </p>
        
        <h2>6. Returns</h2>
        <p>
          Since thank you gifts are provided as tokens of appreciation for your donation, we do not accept returns. If you have any issues with your gift, please contact us, and we will do our best to resolve the issue.
        </p>
        
        <h2>7. Changes to This Policy</h2>
        <p>
          We reserve the right to modify this Shipping and Exchange Policy at any time. Changes will be effective immediately upon posting on our website.
        </p>
        
        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this Shipping and Exchange Policy, please contact us through our Contact page.
        </p>
      </div>
    </PageLayout>
  );
};

export default Shipping;
