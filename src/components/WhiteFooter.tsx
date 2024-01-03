import React from "react";
import RedBoot from "../images/footer/red_boot.png";

function WhiteFooter() {
  return (
    <div className="vertical-box">
      <div className="red-triangle"></div>
      <div className="white-footer">
        <div className="absolute boot-bottom">
          <img src={RedBoot} />
        </div>
        <div className="center-align-box">
          <div className="footer-text-container">
            <div className="spaced-box">
              <a href="/home">
                <h4 className="color-red">Home</h4>
              </a>
              <h4 className="color-red">|</h4>
              <a href="/archive">
                <h4 className="color-red">Archive</h4>
              </a>
              <h4 className="color-red">|</h4>
              <a href="/audition">
                <h4 className="color-red">Auditions</h4>
              </a>
              <h4 className="color-red">|</h4>
              <a href="/contact">
                <h4 className="color-red">Contact</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhiteFooter;
