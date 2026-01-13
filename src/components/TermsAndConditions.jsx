import React from "react";

const TermsandConditions = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Terms & Conditions</h2>

      <p>
        By registering as a vendor and using our platform, you agree to the
        following terms and conditions.
      </p>

      <h5 className="mt-4">1. Vendor Registration</h5>
      <ul>
        <li>All information provided must be accurate and authentic</li>
        <li>Mandatory documents must be uploaded for verification</li>
        <li>Accounts may be suspended for false or misleading data</li>
      </ul>

      <h5 className="mt-4">2. Account Security</h5>
      <ul>
        <li>You are responsible for maintaining login confidentiality</li>
        <li>Password misuse or sharing is strictly prohibited</li>
      </ul>

      <h5 className="mt-4">3. Commission & Payments</h5>
      <ul>
        <li>Commission percentages are agreed during onboarding</li>
        <li>Payouts are processed weekly to the primary bank account</li>
        <li>Incorrect bank details may delay payments</li>
      </ul>

      <h5 className="mt-4">4. Bank Account Rules</h5>
      <ul>
        <li>Only verified accounts are eligible for payouts</li>
        <li>Primary account selection is mandatory</li>
        <li>No card, CVV, UPI PIN, or net-banking passwords are collected</li>
      </ul>

      <h5 className="mt-4">5. Legal Compliance</h5>
      <p>
        Vendors must comply with applicable food safety, tax, and commercial
        regulations. Failure may result in account termination.
      </p>

      <h5 className="mt-4">6. Termination</h5>
      <p>
        We reserve the right to suspend or terminate accounts violating these
        terms without prior notice.
      </p>

      <h5 className="mt-4">7. Agreement Acceptance</h5>
      <p>
        By using this platform, you confirm that you have read, understood, and
        agreed to these Terms & Conditions.
      </p>
    </div>
  );
};

export default TermsandConditions;
