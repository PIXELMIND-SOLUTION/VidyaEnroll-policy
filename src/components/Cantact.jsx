import React from "react";

const Contact = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Contact Us – Vegiffy Rider Support</h2>

      <p className="text-center mb-5">
        Need help with registration, document verification, wallet balance, or withdrawals? Our support team is here for you.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Email:</strong> ridersupport@vegiffy.com
            </li>
            <li className="list-group-item">
              <strong>Phone:</strong> +91 98765 43210
            </li>
            <li className="list-group-item">
              <strong>Support Hours:</strong> Daily (8:00 AM – 10:00 PM IST)
            </li>
            <li className="list-group-item">
              <strong>Office Address:</strong> Jainity eats India Pvt. Ltd., Hyderabad, Telangana, India
            </li>
          </ul>
        </div>
      </div>

      <p className="text-center mt-4 text-muted">
        For urgent issues, use the “Help” section inside the Vegiffy Rider App for faster resolution.
      </p>
    </div>
  );
};

export default Contact;