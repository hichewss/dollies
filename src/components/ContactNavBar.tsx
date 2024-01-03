import React, { useState } from "react";

function ContactNavBar() {
  return (
    <div>
      <div className="side-button side-margin">
        <a href="/home">
          <p className="color-red">DOLLIES</p>
        </a>
      </div>
      <div className="center-box side-margin">
        <h2 className="color-red">CONTACT</h2>
      </div>
    </div>
  );
}

export default ContactNavBar;
