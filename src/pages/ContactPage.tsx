import React, { useState, useEffect, useRef } from "react";
import ContactNavBar from "../components/ContactNavBar";
import RedFooter from "../components/RedFooter";
import LargeRedBoot from "../images/contact/big_red_boot.png";
import MenuBar from "../components/MenuBar";
import { CloseOutIcon } from "../components/images";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const [menu, setMenu] = useState(false);
  const [fadeMenu, setFadeMenu] = useState(false);
  const [fadeEffect, setFadeEffect] = useState("");
  const service_ID = process.env.REACT_APP_SERVICE_ID;
  const template_ID = process.env.REACT_APP_TEMPLATE_ID;
  const user_ID = process.env.REACT_APP_PUBLIC_KEY;

  const fadeInMenu = () => {
    setFadeEffect("fade-in-content");
  };

  const fadeOutMenu = () => {
    setFadeEffect("fade-out-content");
  };

  const emailForm = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (emailForm === null) return;

    if (service_ID && template_ID && user_ID) {
      emailjs
        .sendForm(service_ID, template_ID, emailForm.current!, user_ID)
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    window.location.reload();
  };

  useEffect(() => {
    fadeMenu ? fadeInMenu() : fadeOutMenu();
  }, [fadeMenu]);

  return (
    <div className="fade-in-content">
      {menu ? (
        <div className={fadeEffect}>
          <div>
            <button
              className="close-out"
              onClick={() => {
                setFadeMenu(false);
                setTimeout(() => {
                  setMenu(false);
                }, 300);
              }}
            >
              {CloseOutIcon()}
            </button>
          </div>
          <MenuBar />
        </div>
      ) : (
        <div>
          <div className="end-box small-right-margin">
            <button
              className="end-box"
              onClick={() => {
                setMenu(true);
                setFadeMenu(true);
              }}
            >
              <p className="color-red mini-top-margin absolute home-layer-up">
                MENU
              </p>
            </button>
          </div>
          <div className="vertical-box white fade-in-content">
            <ContactNavBar />
            <div className="horizontal-box">
              <div className="contact-box">
                <div className="medium-left-margin contact-text">
                  <h1 className="color-red">LET'S TALK!</h1>
                  <h5 className="color-red">
                    Send a message about inquiries, auditions, or any other
                    questions we could possibly answer for you!
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
                    <form ref={emailForm} onSubmit={sendEmail}>
                      <div className="vertical-box">
                        <h6 className="color-red">Name</h6>
                        <input
                          className="contact-text-box"
                          id="name"
                          type="name"
                          name="name"
                        />
                        <h6 className="color-red">Email</h6>
                        <input
                          className="contact-text-box"
                          id="email"
                          type="email"
                          name="email"
                        />
                        <h6 className="color-red">Message</h6>
                        <textarea id="message" name="message" />
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
        </div>
      )}
    </div>
  );
}

export default ContactPage;
