import React from "react";
import Dollies from "../images/home/dollies.png";
import Sash from "../images/home/sash.png";
import { DolliesNeverDie } from "./ArchivePage";
import BlackFooter from "../components/BlackFooter";
import { BlackRedirectArrow, HomeBoot } from "../components/images";
import Dresses from "../components/dresses";
import PastYears from "../components/years";

function HomePage() {
  return (
    <div className="vertical-box">
      <div className="end-box small-right-margin">
        <p className="color-white absolute">MENU</p>
      </div>
      <div className="vertical-box">
        <img
          src={Dollies}
          width="100%"
          height="100%"
          alt="Stanford Dollies 23-24"
        />
        <div className="absolute home-header-box center-box">
          <div className="home-header color-white">THE STANFORD DOLLIES</div>
        </div>
      </div>
      <div className="home-text-box">
        <div className="large-side-margin color-light-pink home-background-text">
          THE DOLLIES
        </div>
        <div className="boot-right absolute">{HomeBoot()}</div>
        <div className="home-text-margin home">
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
        <Dresses />
        <div className="medium-bottom-margin" />
        <PastYears />
      </div>
      <DolliesNeverDie />
      <div className="home-text-box">
        <div className="red-triangle" />
        <div className="interested-box-padding center-box">
          <div className="vertical-box">
            <h1 className="color-black center-box">INTERESTED?</h1>
            <h1 className="color-black center-box"> YOU COULD BE NEXT!</h1>
            <div className="small-bottom-margin" />
            <div className="center-box">
              <a href="/audition" className="horizontal-box">
                <h4 className="color-black">Auditions</h4>
                <div className="mini-left-margin center-box">
                  {BlackRedirectArrow()}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <BlackFooter />
    </div>
  );
}

export default HomePage;
