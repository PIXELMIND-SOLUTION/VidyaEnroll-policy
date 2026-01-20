import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Terms & Conditions – Vegiffy Rider App</h2>

      <p>
        By registering and using the Vegiffy Rider App, you agree to comply with the following terms and conditions.
      </p>

      <h5 className="mt-4">1. Rider Registration</h5>
      <ul>
        <li>All submitted information (name, Aadhaar, license, etc.) must be accurate and genuine.</li>
        <li>Accounts with forged or misleading documents will be permanently deactivated.</li>
        <li>Vegiffy reserves the right to reject any application at its sole discretion.</li>
      </ul>

      <h5 className="mt-4">2. Account Security</h5>
      <ul>
        <li>You are solely responsible for maintaining the confidentiality of your OTP and password.</li>
        <li>Do not share your login credentials with anyone. Unauthorized access must be reported immediately.</li>
      </ul>

      <h5 className="mt-4">3. Location & Availability</h5>
      <ul>
        <li>You must keep location services enabled while logged in to receive ride requests.</li>
        <li>Providing false location or being offline without notice may affect your rating or eligibility.</li>
      </ul>

      <h5 className="mt-4">4. Wallet & Withdrawals</h5>
      <ul>
        <li>Earnings are credited to your in-app wallet after each successful delivery.</li>
        <li>Withdrawals can be initiated to a verified bank account or UPI ID.</li>
        <li>Incorrect bank details may delay or cancel payouts. Vegiffy is not liable for losses due to user errors.</li>
        <li>A minimum withdrawal amount may apply (as per platform policy).</li>
      </ul>

      <h5 className="mt-4">5. Document Compliance</h5>
      <p>
        You must maintain valid and up-to-date Aadhaar, driving license, and bank details. Failure to do so may result in suspension of ride access or wallet freeze.
      </p>

      <h5 className="mt-4">6. Termination</h5>
      <p>
        Vegiffy may suspend or terminate your account without prior notice if you violate these terms, provide false information, or engage in fraudulent activity.
      </p>

      <h5 className="mt-4">7. Acceptance of Terms</h5>
      <p>
        Your continued use of the Vegiffy Rider App confirms that you have read, understood, and agreed to these Terms & Conditions.
      </p>
    </div>
  );
};

export default TermsAndConditions;