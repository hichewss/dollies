import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { QuoteIcon, RightArrow } from "../components/images";
import NavBar from "../components/NavBar";
import WhiteFooter from "../components/WhiteFooter";
import headers from "../data/archive";
import MenuBar from "../components/MenuBar";
import { CloseOutIcon } from "../components/images";
import YearPage from "./YearPage";
export function DolliesNeverDie() {
  return (
    <div className="vertical-box archive xtra-large-side-margin">
      <div className="horizontal-box">
        <div className="mini-right-margin">{QuoteIcon()}</div>
        <div className="archive-title-header">DOLLIES NEVER DIE</div>
        <div className="archive-main-header">,</div>
      </div>
      <div className="archive-main-header">OUR KICKS JUST GET</div>
      <div className="archive-main-header">LOWER</div>
    </div>
  );
}

function ArchivePage() {
  const [menu, setMenu] = useState(false);
  const [fadeMenu, setFadeMenu] = useState(false);
  const [fadeEffect, setFadeEffect] = useState("");
  const [yearSelected, setYearSelected] = useState(false);

  const fadeInMenu = () => {
    setFadeEffect("fade-in-content");
  };

  const fadeOutMenu = () => {
    setFadeEffect("fade-out-content");
  };

  useEffect(() => {
    fadeMenu ? fadeInMenu() : fadeOutMenu();
  }, [fadeMenu]);

  useEffect(() => {
    var params = new URLSearchParams(window.location.search);
    if (params.size !== 0) {
      setYearSelected(true);
    }
  });

  return (
    <div>
      {yearSelected ? (
        <YearPage />
      ) : (
        <div>
          <div className="fade-in-content">
            {menu ? (
              <div className={fadeEffect}>
                <div>
                  <button
                    className="close-out"
                    onClick={() => {
                      setFadeMenu(false);
                      setTimeout(() => {
                        setMenu(false);
                      }, 300);
                    }}
                  >
                    {CloseOutIcon()}
                  </button>
                </div>
                <MenuBar />
              </div>
            ) : (
              <div>
                <div className="side-button menu-side-margin fade-in-content">
                  <p
                    className="color-white"
                    onClick={() => {
                      setMenu(true);
                      setFadeMenu(true);
                    }}
                  >
                    MENU
                  </p>
                </div>
                <div className="fade-in-content">
                  <NavBar />
                  <div className="mini-top-margin" />
                  <div className="small-top-margin" />
                  <DolliesNeverDie />
                  <div className="color-white large-center-margin">
                    <p>
                      Although they may no longer put on the red dress, their
                      elegant kicks and Honky Tonk grinds have left an indelible
                      mark on generations of Stanford fans. They have added
                      charm, grace, and good looks to LSJUMB's already
                      impressive repertoire.
                    </p>
                    <p>
                      Explore the full photo albums on the top of the page to
                      learn more about a specific year of dollies! Or, explore
                      reunion photos below to learn more about their growing
                      history.
                    </p>
                  </div>
                  <div className="small-bottom-margin" />
                  <div className="medium-side-margin">
                    <div className="hide-scrollbar horizontal-scroll-box">
                      {headers.map((header, index) => (
                        <div className="archive-photo-box">
                          <img
                            key={index}
                            src={headers[index][0]}
                            alt={`image-${index}`}
                          />
                          <div className="mini-top-margin" />
                          <div className="archive-photo-header-box">
                            <div className="archive-photo-header">
                              {headers[index][1]}
                            </div>
                            <div className="archive-photo-subheader">
                              {headers[index][2]}
                            </div>
                          </div>
                          <div className="archive-photo-subheader">
                            {headers[index][3]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="medium-bottom-margin" />
                  <WhiteFooter />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ArchivePage;
