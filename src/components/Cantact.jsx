import React from "react";

const Contact = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Contact Us – VidyaEnroll Admission Support</h2>

      <p className="text-center mb-5">
        Need help with your admission application, document upload, college selection, or form submission? Our support team is here to assist you.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Email:</strong> admissions@vidyaenroll.com
            </li>
            <li className="list-group-item">
              <strong>Phone:</strong> +91 9573817475
            </li>
            <li className="list-group-item">
              <strong>Support Hours:</strong> Monday to Saturday (9:00 AM – 8:00 PM IST)
            </li>
            <li className="list-group-item">
              <strong>Office Address:</strong> VidyaEnroll EdTech Pvt. Ltd., Hyderabad, Telangana, India
            </li>
          </ul>
        </div>
      </div>

      <p className="text-center mt-4 text-muted">
        For urgent queries, use the “Help” or “Contact Support” option inside the VidyaEnroll App after logging in.
      </p>
    </div>
  );
};

export default Contact;