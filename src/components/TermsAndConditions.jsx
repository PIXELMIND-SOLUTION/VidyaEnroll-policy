import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Terms & Conditions – VidyaEnroll Admission App</h2>

      <p>
        By using the VidyaEnroll App to submit an admission application, you agree to the following terms and conditions.
      </p>

      <h5 className="mt-4">1. Application Accuracy</h5>
      <ul>
        <li>All information provided (name, mobile, email, Aadhaar, PAN, stream, etc.) must be accurate, complete, and truthful.</li>
        <li>Submission of false, forged, or misleading documents may result in immediate rejection of your application and potential blacklisting.</li>
      </ul>

      <h5 className="mt-4">2. Document Requirements</h5>
      <ul>
        <li>Aadhaar is mandatory for identity verification.</li>
        <li>PAN may be required for scholarship, fee waiver, or tax-related processes.</li>
        <li>Providing a UPI ID is optional and used only for payment/refund purposes.</li>
      </ul>

      <h5 className="mt-4">3. Data Submission</h5>
      <p>
        By submitting your application, you authorize VidyaEnroll to share your data with the selected college(s) or university(ies) for admission processing.
      </p>

      <h5 className="mt-4">4. Account Responsibility</h5>
      <ul>
        <li>You are responsible for ensuring your mobile number and email are active for communication.</li>
        <li>VidyaEnroll is not liable for missed communications due to incorrect contact details.</li>
      </ul>

      <h5 className="mt-4">5. Application Fees & Payments</h5>
      <p>
        If applicable, application or admission fees may be collected via UPI or other methods. You must ensure your UPI ID (if used) is valid and linked to your bank account. VidyaEnroll is not responsible for transaction failures due to user-side errors.
      </p>

      <h5 className="mt-4">6. Termination & Rejection</h5>
      <p>
        VidyaEnroll or the receiving institution reserves the right to reject or cancel your application at any stage if discrepancies are found or terms are violated.
      </p>

      <h5 className="mt-4">7. Acceptance of Terms</h5>
      <p>
        Your submission of an application through the VidyaEnroll App confirms that you have read, understood, and agreed to these Terms & Conditions.
      </p>
    </div>
  );
};

export default TermsAndConditions;