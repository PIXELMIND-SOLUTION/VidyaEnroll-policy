import React from "react";

const PrivacyAndPolicy = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Privacy Policy</h2>

      <p>
        We value your privacy and are committed to protecting your personal and
        business information. This Privacy Policy explains how we collect, use,
        store, and safeguard your data when you register or use our platform.
      </p>

      <h5 className="mt-4">1. Information We Collect</h5>
      <ul>
        <li>Restaurant / Business details (name, description, location)</li>
        <li>Contact information (email, mobile number)</li>
        <li>Authentication details (encrypted passwords, OTPs)</li>
        <li>Legal documents (GST, FSSAI, PAN, Aadhaar)</li>
        <li>Geolocation data (latitude, longitude)</li>
        <li>Bank account details (masked for display)</li>
      </ul>

      <h5 className="mt-4">2. Use of Information</h5>
      <ul>
        <li>Vendor verification and onboarding</li>
        <li>Order, payout, and commission processing</li>
        <li>Legal and regulatory compliance</li>
        <li>Fraud prevention and security monitoring</li>
      </ul>

      <h5 className="mt-4">3. Document Handling</h5>
      <p>
        Uploaded documents (images or PDFs) are stored securely. Sensitive files
        like Aadhaar, PAN, and bank details are accessible only to authorized
        personnel.
      </p>

      <h5 className="mt-4">4. Data Security</h5>
      <ul>
        <li>Passwords are hashed and encrypted</li>
        <li>Secure servers and restricted access</li>
        <li>Masked display of sensitive bank details</li>
      </ul>

      <h5 className="mt-4">5. Generated Documents</h5>
      <p>
        Generated PDFs such as Vendor Agreements and Declarations are created
        using your submitted data and are available for download only by you.
      </p>

      <h5 className="mt-4">6. Data Sharing</h5>
      <p>
        We do not sell or rent your data. Information is shared only when legally
        required or for essential operational purposes.
      </p>

      <h5 className="mt-4">7. Policy Updates</h5>
      <p>
        We may update this policy from time to time. Continued use of the
        platform implies acceptance of changes.
      </p>
    </div>
  );
};

export default PrivacyAndPolicy;
