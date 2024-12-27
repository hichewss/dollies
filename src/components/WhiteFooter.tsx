import React from "react";
import RedBoot from "../images/footer/red_boot.png";

function WhiteFooter() {
  return (
    <div className="vertical-box">
      <div className="red-triangle"></div>
      <div className="white-footer">
        <div className="absolute boot-bottom">
          <img src={RedBoot} className="red-boot" />
        </div>
        <div className="full-container">
          <div className="footer-text-container">
            <div className="spaced-box">
              <a href="/home">
                <div className="footer-text color-red">Home</div>
              </a>
              <div className="footer-text color-red">|</div>
              <a href="/archive">
                <div className="footer-text color-red">Archive</div>
              </a>
              <div className="footer-text color-red">|</div>
              <a href="/audition">
                <div className="footer-text color-red">Auditions</div>
              </a>
              <div className="footer-text color-red">|</div>
              <a href="/contact">
                <div className="footer-text color-red">Contact</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhiteFooter;
