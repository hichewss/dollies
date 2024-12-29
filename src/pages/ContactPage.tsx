import React, { useState, useEffect, useRef } from "react";
import ContactNavBar from "../components/ContactNavBar";
import RedFooter from "../components/RedFooter";
import LargeRedBoot from "../images/contact/big_red_boot.png";
import MenuBar from "../components/MenuBar";
import { CloseOutIcon } from "../components/images";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const [menu, setMenu] = useState(false);
  const [fadeOutMain, setFadeOutMain] = useState(false);
  const [fadeInMenu, setFadeInMenu] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1023);
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1023);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuOpen = () => {
    setFadeOutMain(true);
    setTimeout(() => {
      setMenu(true);
      setFadeOutMain(false);
      setFadeInMenu(true);
    }, 300);
  };

  const handleMenuClose = () => {
    setFadeInMenu(false);
    setTimeout(() => {
      setMenu(false);
      setFadeOutMain(false);
      setFadeInMenu(false);
    }, 300);
  };

  const service_ID = process.env.REACT_APP_SERVICE_ID;
  const template_ID = process.env.REACT_APP_TEMPLATE_ID;
  const user_ID = process.env.REACT_APP_PUBLIC_KEY;
  const dollies = process.env.REACT_APP_DOLLIES;
  const lsjumb = process.env.REACT_APP_LSJUMB;
  const webmaster = process.env.REACT_APP_WEBMASTER;
  const [toEmail, setToEmail] = useState(dollies);

  const emailForm = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (emailForm === null) return;

    if (service_ID && template_ID && user_ID) {
      console.log(emailForm.current);
      emailjs
        .sendForm(service_ID, template_ID, emailForm.current!, user_ID)
        .then(
          (result) => {
            console.log(result.text);
            emailForm.current?.reset();
            alert("Your email has been sent successfully! 🎉");
          },
          (error) => {
            console.log(error.text);
            alert("Something went wrong. Please try again. 😢");
          }
        );
    }
  };

  return (
    <div className="fade-in-content">
      {menu ? (
        <div className={fadeInMenu ? "fade-in-content" : "fade-out-content"}>
          <div>
            <button className="close-out" onClick={handleMenuClose}>
              {CloseOutIcon()}
            </button>
          </div>
          <MenuBar />
        </div>
      ) : (
        <div className="page-container">
          <div className={fadeOutMain ? "fade-out-content" : "fade-in-content"}>
            <div className="end-box small-right-margin">
              <button className="end-box" onClick={handleMenuOpen}>
                <p className="color-red mini-top-margin absolute home-layer-up menu">
                  MENU
                </p>
              </button>
            </div>
            <div className="vertical-box white fade-in-content">
              <ContactNavBar />
              <div className={isWideScreen ? "horizontal-box" : "vertical-box"}>
                <div
                  className={
                    isWideScreen ? "contact-box" : "contact-box center-box"
                  }
                >
                  <div
                    className={
                      isWideScreen
                        ? "medium-left-margin contact-text"
                        : "contact-text"
                    }
                  >
                    <h1 className="color-red">LET'S TALK!</h1>
                    <h5 className="color-red">
                      Send a message about inquiries, auditions, or any other
                      questions we could possibly answer for you!
                    </h5>
                  </div>
                  <div className="medium-top-margin">
                    {isWideScreen && (
                      <img src={LargeRedBoot} className="large-boot" />
                    )}
                  </div>
                </div>
                <div
                  className={
                    isWideScreen ? "contact-box" : "contact-box center-box"
                  }
                >
                  <div className="mini-top-margin" />
                  <div className="contact-light-red-box">
                    <div className="mini-center-margin home-layer-up">
                      <form ref={emailForm} onSubmit={sendEmail}>
                        <input
                          type="hidden"
                          name="to_email"
                          id="to_email"
                          value={toEmail}
                        />
                        <div className="vertical-box">
                          <h6 className="color-red start-box">To</h6>
                          <select
                            className="contact-text-box selected"
                            id="to"
                            name="to"
                            onChange={(e) => setToEmail(e.target.value)}
                            value={toEmail}
                          >
                            <option value={dollies}>Current Dollies</option>
                            <option value={webmaster}>Webmaster</option>
                            <option value={lsjumb}>LSJUMB</option>
                          </select>
                          <h6 className="color-red start-box">Name</h6>
                          <input
                            className="contact-text-box"
                            id="name"
                            type="name"
                            name="name"
                          />
                          <h6 className="color-red start-box">Email</h6>
                          <input
                            className="contact-text-box"
                            id="email"
                            type="email"
                            name="email"
                          />
                          <h6 className="color-red start-box">Message</h6>
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
                  {isWideScreen && <div className="contact-red-box"></div>}
                </div>
              </div>
              <div className="small-bottom-margin"></div>
              <div className="small-bottom-margin"></div>
              <div className="small-bottom-margin"></div>
              <RedFooter />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactPage;
