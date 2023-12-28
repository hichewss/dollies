import React from "react";
import Dollies from "../images/home/dollies.png";
import { DolliesNeverDie } from "./ArchivePage";
import { RightArrow } from "../components/images";

function HomePage() {
  return (
    <div className="vertical-box">
      <div className="end-box small-right-margin">
        <p className="color-white absolute">MENU</p>
      </div>
      <img
        src={Dollies}
        width="100%"
        height="100%"
        alt="Stanford Dollies 23-24"
      />
      <div className="absolute home-header-box center-box">
        <div className="home-header color-white">THE STANFORD DOLLIES</div>
      </div>
      <DolliesNeverDie />
    </div>
  );
}

export default HomePage;
