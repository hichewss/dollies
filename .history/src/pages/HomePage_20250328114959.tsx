import React, { useEffect, useState } from "react";
import Dollies from "../images/home/dollies.jpg";
import { DolliesNeverDie } from "./ArchivePage";
import BlackFooter from "../components/BlackFooter";
import { BlackRedirectArrow, HomeBoot } from "../components/images";
import Dresses from "../components/dresses";
import PastYears from "../components/years";
import { FutureYears } from "../components/years";
import PhotoAlbum from "../components/HomeAlbum";
import Slideshow from "../components/Slideshow";
import MenuBar from "../components/MenuBar";
import { CloseOutIcon } from "../components/images";

function HomePageMainContents() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1024);
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fade-in-content page-container">
      <div className="vertical-box">
        <div className="vertical-box relative">
          <img
            src={Dollies}
            width="100%"
            height="auto"
            alt="Stanford Dollies 23-24"
            className="home"
          />
          <div className="home-header-box center-box">
            <div className="home-header color-white home-layer-up">
              THE STANFORD DOLLIES
            </div>
          </div>
        </div>
        <div className="home-text-box">
          <div className="boot-right absolute">{HomeBoot()}</div>
          <div className="color-light-pink home-background-text">
            THE DOLLIES
          </div>
          <div className="relative home-text-margin">
            <h1 className="color-red home-layer-up relative">
              The Stanford Dollies are a group of five dancers who dazzle at
              sporting events and rallies, as part of The Stanford Band.
            </h1>
            <div className="small-bottom-margin" />
            <div className="home-text-margin">
              <p className="color-red">
                Dollies dance entirely of their own choreography and past
                Dollies’ design. Their style ranges from modern to ballet to
                jazz, but is always unique and impressive.
              </p>
              <div className="small-bottom-margin" />
              <p className="color-red">
                They can always be recognized, not only by their stunning
                attire, but also by their charming smiles and throng of adoring
                fans. Dollies are often involved in various dance ensembles on
                campus and off as members of and choreographers for many
                programs.
              </p>
            </div>
            <div className="medium-bottom-margin" />
            <div className="additional-margin" />
          </div>
        </div>
        <div className="white-triangle" />
        <Dresses />
        <div className="resp-bottom-margin" />
        <div>
          {isWideScreen && (
            <div className="vertical-box center-box scale-down">
              <div className="photo-album-text color-white">PHOTO ALBUM</div>
              <div className="photo-album-subtext color-white">
                Photos from the 1950s to the 2020s. The Dollie Legacy has lasted
                over 70+ years, and continues to live on.{" "}
              </div>
              <PhotoAlbum />
            </div>
          )}
        </div>
        {isWideScreen && <div className="small-bottom-margin" />}
        <DolliesNeverDie />
        <div className="small-bottom-margin" />
        <Slideshow />
        <div className="medium-bottom-margin" />
        <div className="home-text-box">
          <FutureYears />
          <div className="red-triangle" />
          <div className="interested-box-padding center-box">
            <div className="vertical-box">
              <div className="small-bottom-margin" />
              <div className="interested-margin" />
              <h1 className="color-black center-box">INTERESTED?</h1>
              <h1 className="color-black center-box"> YOU COULD BE NEXT!</h1>
              <div className="small-bottom-margin" />
              <div className="center-box">
                <a href="/audition" className="horizontal-box">
                  <h4 className="color-black">Auditions</h4>
                  <div className="mini-left-margin center-box scale-down">
                    {BlackRedirectArrow()}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <BlackFooter />
      </div>
    </div>
  );
}

function HomePage() {
  const [menu, setMenu] = useState(false);
  const [fadeOutMain, setFadeOutMain] = useState(false);
  const [fadeInMenu, setFadeInMenu] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 767);
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 767);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuOpen = () => {
    setFadeOutMain(true);
    setTimeout(() => {
      setMenu(true);
      setFadeOutMain(false);
      setFadeInMenu(true);
    }, 300);
  };

  const handleMenuClose = () => {
    setFadeInMenu(false);
    setTimeout(() => {
      setMenu(false);
      setFadeOutMain(false);
      setFadeInMenu(false);
    }, 300);
  };

  return (
    <div className="fade-in-content">
      {menu ? (
        <div className={fadeInMenu ? "fade-in-content" : "fade-out-content"}>
          <div>
            <button className="close-out" onClick={handleMenuClose}>
              {CloseOutIcon()}
            </button>
          </div>
          <MenuBar />
        </div>
      ) : (
        <div className={fadeOutMain ? "fade-out-content" : "fade-in-content"}>
          <div className="end-box small-right-margin">
            <button className="end-box" onClick={handleMenuOpen}>
              <p className="color-white mini-top-margin absolute home-layer-up menu">
                MENU
              </p>
            </button>
          </div>
          <HomePageMainContents />
        </div>
      )}
    </div>
  );
}

export default HomePage;
