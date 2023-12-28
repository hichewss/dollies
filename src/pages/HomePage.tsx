import React from "react";
import Dollies from "../images/home/dollies.png";
import { DolliesNeverDie } from "./ArchivePage";

function HomePage() {
  return (
    <div className="vertical-box">
      <div>
        <img
          src={Dollies}
          width="100%"
          height="100%"
          alt="Stanford Dollies 23-24"
        />
      </div>
      <DolliesNeverDie />
    </div>
  );
}

export default HomePage;
