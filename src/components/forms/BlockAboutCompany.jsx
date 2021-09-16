import React from 'react';

const BlockAboutCompany = () => {
  return (
    <div className="col-lg-4 ml-auto">
      <div className="bg-white p-3 p-md-5">
        <h3 className="text-black mb-4">Contact Info</h3>
        <ul className="list-unstyled footer-link">
          <li className="d-block mb-3">
            <span className="d-block text-black">Address:</span>
            <span>34 Street Name, City Name Here, United States</span></li>
          <li className="d-block mb-3"><span className="d-block text-black">Phone:</span><span>+1 242 4942 290</span>
          </li>
          <li className="d-block mb-3"><span
            className="d-block text-black">Email:</span><span>info@yourdomain.com</span></li>
        </ul>
      </div>
    </div>
  );
};

export default BlockAboutCompany;
