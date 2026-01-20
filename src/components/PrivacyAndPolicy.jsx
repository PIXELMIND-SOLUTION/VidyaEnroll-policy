import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Privacy Policy – Vegiffy Rider App</h2>

      <p>
        At Vegiffy, we respect your privacy and are committed to safeguarding your personal information. This Privacy Policy outlines how we collect, use, store, and protect your data when you register and use the Vegiffy Rider App.
      </p>

      <h5 className="mt-4">1. Information We Collect</h5>
      <ul>
        <li>Rider profile photo</li>
        <li>Government-issued ID (Aadhaar card image)</li>
        <li>Driving license image</li>
        <li>Full name, email address, and mobile number</li>
        <li>Securely encrypted password</li>
        <li>Real-time precise location (GPS coordinates) for ride assignment and tracking</li>
        <li>Bank account details: account number, bank name, account holder name, IFSC code</li>
        <li>Optional UPI ID for withdrawals</li>
        <li>OTP for mobile verification and login</li>
      </ul>

      <h5 className="mt-4">2. Use of Information</h5>
      <ul>
        <li>Identity and document verification during onboarding</li>
        <li>Authentication and secure login</li>
        <li>Real-time ride allocation and navigation</li>
        <li>Crediting earnings to your in-app wallet</li>
        <li>Processing withdrawals to your verified bank account or UPI</li>
        <li>Fraud detection, safety, and regulatory compliance</li>
      </ul>

      <h5 className="mt-4">3. Document & Data Security</h5>
      <p>
        All uploaded documents (Aadhaar, license, etc.) are stored in encrypted form on secure servers. Access is restricted to authorized personnel only. Sensitive data like bank account numbers are masked in the app interface.
      </p>

      <h5 className="mt-4">4. Wallet & Financial Data</h5>
      <p>
        Your earnings are held in a secure in-app wallet. Bank details are collected solely for withdrawal purposes. We never store or access your UPI PIN, net banking credentials, or CVV.
      </p>

      <h5 className="mt-4">5. Location Data</h5>
      <p>
        Precise GPS location is collected only while the app is active to enable efficient ride matching and ensure rider safety. Location access stops when the app is closed or backgrounded (unless required by law or safety protocols).
      </p>

      <h5 className="mt-4">6. Data Sharing</h5>
      <p>
        We do not sell, rent, or share your personal data with third parties except:
        <ul>
          <li>When required by law or government authorities</li>
          <li>With trusted payment processors for wallet and withdrawal operations</li>
        </ul>
      </p>

      <h5 className="mt-4">7. Policy Updates</h5>
      <p>
        We may update this Privacy Policy periodically. Continued use of the Vegiffy Rider App constitutes your acceptance of any changes.
      </p>
    </div>
  );
};

export default PrivacyPolicy;