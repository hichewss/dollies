import React from "react";
import ContactNavBar from "../components/ContactNavBar";
import RedFooter from "../components/RedFooter";
import LargeRedBoot from "../images/contact/big_red_boot.png";

function ContactPage() {
  return (
    <div className="vertical-box white fade-in-content">
      <ContactNavBar />
      <div className="horizontal-box">
        <div className="contact-box">
          <div className="medium-left-margin contact-text">
            <h1 className="color-red">LET'S TALK!</h1>
            <h5 className="color-red">
              Send a message about inquiries, auditions, or any other questions
              we could possibly answer for you!
            </h5>
          </div>
          <div className="medium-top-margin">
            <img src={LargeRedBoot} />
          </div>
        </div>
        <div className="contact-box">
          <div className="small-top-margin" />
          <div className="contact-light-red-box">
            <div className="mini-center-margin">
              <form>
                <div className="vertical-box">
                  <h6 className="color-red">Name</h6>
                  <input className="contact-text-box" id="name" type="name" />
                  <h6 className="color-red">Email</h6>
                  <input className="contact-text-box" id="email" type="email" />
                  <h6 className="color-red">Message</h6>
                  <textarea id="message" />
                  <input
                    className="contact-submit-box"
                    id="submit"
                    type="submit"
                  ></input>
                </div>
              </form>
            </div>
          </div>
          <div className="contact-red-box"></div>
        </div>
      </div>
      <div className="small-bottom-margin"></div>
      <div className="small-bottom-margin"></div>
      <RedFooter />
    </div>
  );
}

export default ContactPage;
