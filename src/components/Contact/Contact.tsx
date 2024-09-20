import React from "react";
import { Image } from "../../Images/Image";

function Contact() {
  return (
    <section className="contact">
      <div className="contact__container _container">
        <div className="contact-title">
          <h2>Contact us!</h2>
          <p>
            We are here to help you. If you have questions, comments or simply want to know more about our services, don't hesitate to
            contact us. We are available to listen and give you the support you need to achieve your business goals.
          </p>
          <div className="contact-info">
            <button>
              <img src={Image.contactImg} alt="img" />
            </button>
            <ul>
              <li>Call us</li>
              <a href="/">+8801613968687</a>
            </ul>
          </div>
          <div className="contact-info">
            <button>
              <img src={Image.contactImg2} alt="img" />
            </button>
            <ul>
              <li>Email me</li>
              <a href="/">ahmedtanvir8687@gmail.com</a>
            </ul>
          </div>
          <div className="contact-info">
            <button>
              <img src={Image.contactImg3} alt="img" />
            </button>
            <ul>
              <li>Visit us </li>
              <a href="/">Zakigonj, Sylhet, Bangladesh.</a>
            </ul>
          </div>
        </div>
        <div className="contact-input">
          <div className="contact-elem">
            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="Your email" />
          </div>
          <div className="contact-elem">
            <input type="text" placeholder="Phone number" />
            <input type="text" placeholder="Budget" />
          </div>
          <input type="area" placeholder="Message" />
          <button>Send a message</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
