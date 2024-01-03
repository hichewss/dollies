import React, { useState } from "react";

function AuditionNavBar() {
  return (
    <div>
      <div className="side-button side-margin">
        <a href="/home">
          <p className="color-white">DOLLIES</p>
        </a>
      </div>
      <div className="center-box side-margin">
        <h2 className="color-white">AUDITIONS</h2>
      </div>
    </div>
  );
}

export default AuditionNavBar;
