import React from "react";
import Title from "../component/Title";
import { assets } from "../assets/assets";
import NewsLetter from "../component/NewsLetter";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <Title text1="CONTACT" text2="US" />
      </div>

      <div className="contact-content">
        <div className="contact-image">
          <img src={assets.contact_img} alt="" />
        </div>

        <div className="contact-info">
          <h3>OUR STORE</h3>

          <p>54709 Willms Station</p>
          <p>Suite 350, Washington, USA</p>

          <p className="contact-space">Tel: (415) 555-0132</p>
          <p>Email: greatstackdev@gmail.com</p>

          <h3 className="career-title">CAREERS AT FOREVER</h3>

          <p>Learn more about our teams and job openings.</p>

          <button>Explore Jobs</button>
        </div>
      </div>

      <NewsLetter />
    </div>
  );
};

export default Contact;
