
import React from 'react';
import PageLayout from '@/components/PageLayout';

const Terms = () => {
  return (
    <PageLayout title="Terms and Conditions">
      <div className="prose prose-orange max-w-none">
        <p className="text-gray-600 mb-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the services of सेवा संस्था (Seva Sanstha), you agree to be bound by these Terms and Conditions. If you do not agree to all the terms, please do not use our services.
        </p>
        
        <h2>2. Donations</h2>
        <p>
          All donations made through our website are voluntary. By making a donation, you acknowledge that you are donating to support our charitable activities. Donations are used in accordance with our mission statement.
        </p>
        
        <h2>3. Tax Benefits</h2>
        <p>
          Donations made to सेवा संस्था (Seva Sanstha) may be eligible for tax benefits under Section 80G of the Income Tax Act. We provide donation receipts that can be used for tax purposes.
        </p>
        
        <h2>4. Privacy</h2>
        <p>
          We respect your privacy and are committed to protecting it. Please refer to our Privacy Policy for information on how we collect, use, and disclose information.
        </p>
        
        <h2>5. Intellectual Property</h2>
        <p>
          All content on our website, including text, graphics, logos, images, and software, is the property of सेवा संस्था (Seva Sanstha) and is protected by intellectual property laws.
        </p>
        
        <h2>6. Limitation of Liability</h2>
        <p>
          सेवा संस्था (Seva Sanstha) shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
        </p>
        
        <h2>7. Governing Law</h2>
        <p>
          These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
        </p>
        
        <h2>8. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes indicates your acceptance of the modified terms.
        </p>
        
        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please contact us through our Contact page.
        </p>
      </div>
    </PageLayout>
  );
};

export default Terms;
