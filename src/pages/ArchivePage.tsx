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
  const [yearSelected, setYearSelected] = useState(false);
  const [fadeOutMain, setFadeOutMain] = useState(false);
  const [fadeInMenu, setFadeInMenu] = useState(false);

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
              <div
                className={fadeInMenu ? "fade-in-content" : "fade-out-content"}
              >
                <div>
                  <button className="close-out" onClick={handleMenuClose}>
                    {CloseOutIcon()}
                  </button>
                </div>
                <MenuBar />
              </div>
            ) : (
              <div
                className={fadeOutMain ? "fade-out-content" : "fade-in-content"}
              >
                <div className="end-box small-right-margin">
                  <button className="end-box" onClick={handleMenuOpen}>
                    <p className="color-white mini-top-margin absolute home-layer-up">
                      MENU
                    </p>
                  </button>
                </div>
                <div>
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
                  <div className="center-box">
                    <p className="color-white">
                      Photos by Alan Mela, Al Ponce, Robby Beyers, Robert
                      Siegel, Dominick Hing, and more!
                    </p>
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
