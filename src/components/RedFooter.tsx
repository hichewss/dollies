import React from "react";
import WhiteBoot from "../images/footer/white_boot.png";

function RedFooter() {
  return (
    <div className="vertical-box">
      <div className="white-triangle"></div>
      <div className="red-footer">
        <div className="absolute boot-bottom">
          <img src={WhiteBoot} className="red-boot" />
        </div>
        <div className="full-container">
          <div className="footer-text-container">
            <div className="spaced-box">
              <a href="/home">
                <div className="footer-text color-white">Home</div>
              </a>
              <div className="footer-text color-white">|</div>
              <a href="/archive">
                <div className="footer-text color-white">Archive</div>
              </a>
              <div className="footer-text color-white">|</div>
              <a href="/audition">
                <div className="footer-text color-white">Auditions</div>
              </a>
              <div className="footer-text color-white">|</div>
              <a href="/contact">
                <div className="footer-text color-white">Contact</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedFooter;
