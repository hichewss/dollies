import React from "react";
import RedBoot from "../images/footer/red_boot.png";

function WhiteFooter() {
  return (
    <div className="vertical-box">
      <div className="red-triangle"></div>
      <div className="white-footer">
        <div className="boot-footer">
          <img src={RedBoot} />
        </div>
        <div className="center-align-box">
          <div className="footer-text-container">
            <div className="spaced-box">
              <h4 className="color-red">Home</h4>
              <h4 className="color-red">|</h4>
              <h4 className="color-red">Archive</h4>
              <h4 className="color-red">|</h4>
              <h4 className="color-red">Auditions</h4>
              <h4 className="color-red">|</h4>
              <h4 className="color-red">Contact</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhiteFooter;
