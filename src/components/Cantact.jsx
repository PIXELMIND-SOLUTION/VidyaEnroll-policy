import React from "react";

const Contact = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Contact Us</h2>

      <p className="text-center mb-5">
        If you have any questions regarding vendor registration, payments,
        verification, or support, feel free to reach out to us.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Email:</strong> support@yourplatform.com
            </li>
            <li className="list-group-item">
              <strong>Phone:</strong> +91 XXXXXXXXXX
            </li>
            <li className="list-group-item">
              <strong>Business Hours:</strong> Mon – Sat (9:00 AM – 6:00 PM)
            </li>
            <li className="list-group-item">
              <strong>Address:</strong> Hyderabad, Telangana, India
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
