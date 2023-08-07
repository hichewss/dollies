import React from "react";
import { CloseOutIcon, DollieBoot } from "./images";

function Navbar() {
  return (
    <div className="navbar vertical-box">
      <div className="close-out">{CloseOutIcon()}</div>
      <div className="navbar-options">HOME</div>
      <div className="navbar-options">ARCHIVE</div>
      <div className="navbar-options">AUDITION</div>
      <div className="navbar-options">CONTACT</div>
    </div>
  );
}

export default Navbar;
