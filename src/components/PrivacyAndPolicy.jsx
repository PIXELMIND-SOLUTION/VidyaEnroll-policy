import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Privacy Policy – VidyaEnroll Admission App</h2>

      <p>
        At VidyaEnroll, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard your data when you submit an admission application through the VidyaEnroll App.
      </p>

      <h5 className="mt-4">1. Information We Collect</h5>
      <ul>
        <li>Full name</li>
        <li>Mobile number</li>
        <li>Email address</li>
        <li>Aadhaar number (for identity verification)</li>
        <li>PAN card number (for financial or scholarship processing, if applicable)</li>
        <li>UPI ID (optional, for fee payment or refund purposes)</li>
        <li>Preferred academic stream (e.g., CSE, ECE, EEE, etc.)</li>
      </ul>

      <h5 className="mt-4">2. Use of Information</h5>
      <ul>
        <li>To process your admission application to selected colleges/universities</li>
        <li>To verify your identity and eligibility using Aadhaar and PAN</li>
        <li>To facilitate communication regarding your application status</li>
        <li>To enable secure fee payments or refunds via UPI (if provided)</li>
        <li>To share your application data securely with the college(s) you applied to</li>
        <li>To comply with government regulations and institutional requirements</li>
      </ul>

      <h5 className="mt-4">3. Data Storage & Security</h5>
      <p>
        All submitted data is encrypted in transit and at rest. Your Aadhaar and PAN details are stored securely and are accessible only to authorized personnel at the respective colleges and VidyaEnroll’s verification team. Sensitive data is never displayed in plain text within the app.
      </p>

      <h5 className="mt-4">4. Data Sharing</h5>
      <p>
        Your application data is shared **only** with the college(s) or university(ies) you select during submission. We do not sell, rent, or share your information with unrelated third parties, except:
        <ul>
          <li>When required by law or regulatory authorities</li>
          <li>With trusted payment processors (if UPI/fee transactions are enabled)</li>
        </ul>
      </p>

      <h5 className="mt-4">5. Retention</h5>
      <p>
        Your data will be retained for the duration necessary to process your admission and as required by educational institutions or legal obligations.
      </p>

      <h5 className="mt-4">6. Policy Updates</h5>
      <p>
        We may update this Privacy Policy periodically. Continued use of the VidyaEnroll App constitutes your acceptance of any changes.
      </p>
    </div>
  );
};

export default PrivacyPolicy;