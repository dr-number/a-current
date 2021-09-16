import React from 'react';
import BlockFirst from "../components/block-first/BlockFirst";
import SiteSections from "../components/site-sections/SiteSections";
import ContactForm from "../components/forms/ContactForms";
import BlockAboutCompany from "../components/forms/BlockAboutCompany";

const Contact = () => {
  return (
    <>
      <BlockFirst title={<h2 className="text-white">Contact as</h2>} >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </BlockFirst>

      <SiteSections idSection="contact-section" classSection="bg-light">

        <div className="row justify-content-center text-center">
          <div className="col-7 text-center mb-5">
            <h2>Contact Us Or Use This Form To Rent A Car</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, dolorum necessitatibus eius
              earum voluptates sed!</p>
          </div>
        </div>

        <div className="row">
          <ContactForm />
          <BlockAboutCompany />
        </div>

      </SiteSections>
    </>
  );
};

export default Contact;
