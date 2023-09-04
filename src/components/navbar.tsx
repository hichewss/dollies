import React from "react";
import { CloseOutIcon } from "./images";
import BootOne from "../images/navbar/boot_one.png";
import BootTwo from "../images/navbar/boot_two.png";
import BootThree from "../images/navbar/boot_three.png";
import BootFour from "../images/navbar/boot_four.png";

function Navbar() {
  return (
    <div className="navbar vertical-box">
      <img
        className="boots-background about-logos top boot-short-left"
        src={BootOne}
      />
      <img
        className="boots-background about-logos top boot-far-left"
        src={BootTwo}
      />
      <img
        className="boots-background about-logos bottom boot-left"
        src={BootThree}
      />
      <img
        className="boots-background about-logos bottom boot-right"
        src={BootFour}
      />
      <button className="close-out">{CloseOutIcon()}</button>
      <div className="navbar-options">HOME</div>
      <div className="navbar-options">ARCHIVE</div>
      <div className="navbar-options">AUDITION</div>
      <div className="navbar-options">CONTACT</div>
    </div>
  );
}

export default Navbar;
