import React from "react";

// eslint-disable-next-line no-unused-vars
import ContactForm from "../../components/ContactForm";
import SocialLinks from "../../components/SocialLinks";
import "./style.css";

function Contact() {
  return (
    <div className="viewFive" id="contact">
      <div className="row contact-row">
        <div className="formDiv" id="contact">
          <h3 className="viewTitle" id="contactTitle">
            GET IN TOUCH
          </h3>

          <hr></hr>

          {<ContactForm />}
          <SocialLinks />
          
          <div className="container-fluid pt-4 bg-transparent">
      <p className="text-center">© 2022 Asra Pervez</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;