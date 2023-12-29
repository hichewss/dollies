import React from "react";
import Dollies from "../images/home/dollies.png";
import Sash from "../images/home/sash.png";
import { DolliesNeverDie } from "./ArchivePage";
import BlackFooter from "../components/BlackFooter";

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
      <div className="home-text-box">
        <div className="home-text-margin">
          <h1 className="color-red">
            SINCE 1953, DOLLIES HAVE APPEARED AT SPORTING EVENTS AND RALLIES
            WITH THE STANFORD BAND AND TREE
          </h1>
          <div className="small-bottom-margin" />
          <div className="home-text-margin">
            <p className="color-red">
              Dollies dance entirely of their own choreography and past Dollies’
              design. Their style ranges from modern to ballet to jazz, but is
              always unique and impressive.
            </p>
            <div className="small-bottom-margin" />
            <p className="color-red">
              They can always be recognized, not only by their stunning attire,
              but also by their charming smiles and throng of adoring fans.
              Dollies are often involved in various dance ensembles on campus
              and off as members of and choreographers for many programs.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="white-triangle" />
      </div>
      <DolliesNeverDie />
      <BlackFooter />
    </div>
  );
}

export default HomePage;
