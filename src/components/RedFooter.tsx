import React from "react";
import WhiteBoot from "../images/footer/white_boot.png";

function RedFooter() {
  return (
    <div className="vertical-box">
      <div className="white-triangle"></div>
      <div className="red-footer">
        <div className="absolute">
          <img src={WhiteBoot} />
        </div>
        <div className="center-align-box">
          <div className="footer-text-container">
            <div className="spaced-box">
              <a href="/home">
                <h4 className="color-white">Home</h4>
              </a>
              <h4 className="color-white">|</h4>
              <a href="/archive">
                <h4 className="color-white">Archive</h4>
              </a>
              <h4 className="color-white">|</h4>
              <a href="/audition">
                <h4 className="color-white">Auditions</h4>
              </a>
              <h4 className="color-white">|</h4>
              <a href="/contact">
                <h4 className="color-white">Contact</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedFooter;
