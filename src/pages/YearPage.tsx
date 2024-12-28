import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import PinkFooter from "../components/PinkFooter";
import Dresses from "../components/dresses";
import MenuBar from "../components/MenuBar";
import { CloseOutIcon } from "../components/images";
import { RedPastYears, RedFutureYears } from "../components/years";
import { useLocation } from "react-router-dom";
import dollieData from "../data/years";
import headers from "../data/archive";
import Dress from "../images/dresses/2010.png";

const allImages = require.context(
  "../images/years",
  true,
  /\.(png|jpe?g|svg|JPG)$/
);

function YearPage() {
  const [menu, setMenu] = useState(false);
  const [fadeOutMain, setFadeOutMain] = useState(false);
  const [fadeInMenu, setFadeInMenu] = useState(false);
  var location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedYear = params.get("year");
  const [curYear, setCurYear] = useState(selectedYear || "2024-2025");
  const [images, setImages] = useState<string[]>([]);
  const year = dollieData.pages.find((year) => year[curYear]);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1024);
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1023);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function importAll(r: any) {
    return r.keys().map(r);
  }

  useEffect(() => {
    const filteredImages = allImages
      .keys()
      .filter((key) => key.includes(`/${curYear}/`))
      .map((key) => allImages(key) as string);

    setImages(filteredImages);
  }, [curYear]);

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
    <div className="white">
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
              <div className="side-button menu-side-margin menu">
                <p className="color-white" onClick={handleMenuOpen}>
                  MENU
                </p>
              </div>
              <div className="dark-pink vertical-box">
                <NavBar />
                <div
                  className={
                    isWideScreen
                      ? "dark-pink archive-year-header color-white small-left-margin small-top-margin"
                      : "dark-pink archive-year-header color-white small-top-margin center-box"
                  }
                >
                  {curYear}
                </div>
                <div
                  className={
                    isWideScreen ? "large-bottom-margin" : "small-bottom-margin"
                  }
                />
              </div>
              <div className="vertical-box">
                <div className="vertical-box">
                  <div className="white">
                    <div className="vertical-box">
                      {isWideScreen && <div className="pink-triangle" />}
                      {isWideScreen && <Dresses />}
                      <div className="white-separator small-rotate white">
                        <RedPastYears />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`white archive-text-background ${
                    !isWideScreen && !year && selectedYear !== "Reunions"
                      ? "center-box"
                      : ""
                  }`}
                >
                  <div className="color-red archive-page-margin">
                    {!isWideScreen && <div className="" />}
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
                      ) : selectedYear === "Reunions" ? (
                        <div className="color-red">
                          <h1>Dollies of the past and present!</h1>
                        </div>
                      ) : (
                        <div
                          className={`vertical-box ${
                            !isWideScreen &&
                            "archive-no-info-background center-box"
                          }`}
                        >
                          <div className="color-red">
                            <h1>No Info on This Year 😞</h1>
                          </div>
                          <div className="mini-top-margin" />
                          <div className="center-box">
                            <img src={Dress} alt="No info image" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mini-top-margin" />
                {year && images.length <= 0 && (
                  <div className="center-box">
                    <img src={Dress} />
                  </div>
                )}
                <div className="medium-side-margin">
                  <div
                    className={`${
                      images && images.length > 3
                        ? isWideScreen
                          ? "hide-scrollbar vertical-scroll-box"
                          : "hide-scrollbar horizontal-scroll-box"
                        : ""
                    }`}
                  >
                    <div
                      className={`archive-gap ${
                        isWideScreen ? "center-box" : "vertical-center-box"
                      }`}
                    >
                      {images &&
                        images.length > 0 &&
                        images.map((src, index) => (
                          <img
                            key={index}
                            src={src}
                            alt={`archive-${index}`}
                            loading="lazy"
                            className="archive-photo-box-red"
                          />
                        ))}
                    </div>
                  </div>
                </div>
                {images.length > 0 ? (
                  <div className="medium-bottom-margin" />
                ) : (
                  <div className="small-bottom-margin" />
                )}
                <div className="home-text-box">
                  <RedFutureYears />
                </div>
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
