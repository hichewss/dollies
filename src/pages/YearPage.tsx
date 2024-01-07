import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import PinkFooter from "../components/PinkFooter";
import Dresses from "../components/dresses";
import MenuBar from "../components/MenuBar";
import { CloseOutIcon } from "../components/images";
import { RedPastYears, RedFutureYears } from "../components/years";
import { useLocation } from "react-router-dom";
import dollieData from "../data/years";

function YearPage() {
  const [menu, setMenu] = useState(false);
  const [fadeMenu, setFadeMenu] = useState(false);
  const [fadeEffect, setFadeEffect] = useState("");
  var location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedYear = params.get("year");
  const [curYear, setCurYear] = useState(selectedYear || "2023-2024");
  const year = dollieData.pages.find((year) => year[curYear]);

  const fadeInMenu = () => {
    setFadeEffect("fade-in-content");
  };

  const fadeOutMenu = () => {
    setFadeEffect("fade-out-content");
  };

  useEffect(() => {
    fadeMenu ? fadeInMenu() : fadeOutMenu();
  }, [fadeMenu]);

  return (
    <div>
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
              <div className="dark-pink fade-in-content vertical-box">
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
              <div className="white archive-photo-background">
                <div className="color-red archive-page-margin">
                  <div className="center-box">
                    {year ? (
                      <div className="archive-text-font color-red">
                        {Object.entries(year[curYear]).map(([key, value]) => (
                          <div style={{ display: "inline" }}>
                            {"#"}
                            {key} {value}
                            {key !== "5" && "・"}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                  <div className="small-bottom-margin" />
                  <p className="color-red">Photos go here</p>
                </div>
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
