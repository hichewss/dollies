import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import PinkFooter from "../components/PinkFooter";
import Dresses from "../components/dresses";
import MenuBar from "../components/MenuBar";
import { CloseOutIcon } from "../components/images";
import { RedPastYears, RedFutureYears } from "../components/years";
import { useLocation } from "react-router-dom";
import dollieData from "../data/years";
import { importAll } from "../components/dresses";

function YearPage() {
  const [menu, setMenu] = useState(false);
  const [fadeOutMain, setFadeOutMain] = useState(false);
  const [fadeInMenu, setFadeInMenu] = useState(false);
  var location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedYear = params.get("year");
  const [curYear, setCurYear] = useState(selectedYear || "2024-2025");
  const year = dollieData.pages.find((year) => year[curYear]);
  // const photos = importAll(
  //   require.context("../images/years/2020-2022", false, /\.(png|jpe?g|svg)$/)
  // );

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
    <div>
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
              <div className="side-button menu-side-margin">
                <p className="color-white" onClick={handleMenuOpen}>
                  MENU
                </p>
              </div>
              <div className="dark-pink vertical-box">
                <NavBar />
                <div className="archive-year-header absolute archive-year-placement color-white">
                  {curYear}
                </div>
                <div className="xtra-large-bottom-margin" />
              </div>
              <div className="vertical-box">
                <div className="white">
                  <div className="vertical-box">
                    <div className="pink-triangle" />
                    <Dresses />
                    <div className="white-separator small-rotate white">
                      <RedPastYears />
                    </div>
                  </div>
                </div>
              </div>
              <div className="white archive-text-background">
                <div className="color-red archive-page-margin">
                  <div className="center-box">
                    {year ? (
                      <div className="archive-text-font color-red">
                        {Object.entries(year[curYear]).map(
                          ([key, value], index, entries) => (
                            <div style={{ display: "inline" }}>
                              {"#"}
                              {key} {value}
                              {index != entries.length - 1 && "・"}
                            </div>
                          )
                        )}
                      </div>
                    ) : (
                      <div className="archive-text-font color-red">
                        No Data Available on This Year!
                      </div>
                    )}
                  </div>
                </div>
                <p className="color-red center-box">Photos Coming Soon!</p>
              </div>
              <div className="white archive-photo-background">
                {/* <div className="archive-photo-margin center-box photo-album">
                  {photos.map((image: any, index: any) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Image ${index + 1}`}
                      width="30%"
                      height="30%"
                    />
                  ))}
                </div> */}
              </div>
              <div className="home-text-box">
                <RedFutureYears />
              </div>
              <div className="vertical-box">
                <PinkFooter />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default YearPage;
