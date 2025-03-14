
import React from 'react';
import PageLayout from '@/components/PageLayout';

const Privacy = () => {
  return (
    <PageLayout title="Privacy Policy">
      <div className="prose prose-orange max-w-none">
        <p className="text-gray-600 mb-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <h2>1. Information We Collect</h2>
        <p>
          When you make a donation or sign up for our newsletter, we collect personal information such as your name, email address, phone number, and payment details. We also collect non-personal information such as browser type, IP address, and pages visited on our website.
        </p>
        
        <h2>2. How We Use Your Information</h2>
        <p>
          We use your information to process donations, send donation receipts, communicate about our work, improve our website, and comply with legal obligations. We will never sell or rent your personal information to third parties.
        </p>
        
        <h2>3. Information Sharing</h2>
        <p>
          We may share your information with trusted service providers who help us operate our website, process donations, and deliver our services. We require these parties to keep your information confidential and use it only for the purposes for which we disclose it to them.
        </p>
        
        <h2>4. Security</h2>
        <p>
          We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. All payment transactions are encrypted using industry-standard SSL technology.
        </p>
        
        <h2>5. Cookies</h2>
        <p>
          We use cookies to enhance your experience on our website. You can set your browser to refuse all or some browser cookies, but this may affect your ability to use some features of our website.
        </p>
        
        <h2>6. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information. You can also object to the processing of your information or request that we restrict certain processing. To exercise these rights, please contact us through our Contact page.
        </p>
        
        <h2>7. Changes to This Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. Changes will be effective immediately upon posting on our website. We will notify you of any material changes by posting a notice on our website or sending you an email.
        </p>
        
        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us through our Contact page.
        </p>
      </div>
    </PageLayout>
  );
};

export default Privacy;
