import React from "react";
import BootOne from "../images/navbar/boot_one.png";
import BootTwo from "../images/navbar/boot_two.png";
import BootThree from "../images/navbar/boot_three.png";
import BootFour from "../images/navbar/boot_four.png";
import menuData from "../data/menu.json";
import { useEffect, useState } from "react";

function MenuBar() {
  const loc = window.location.pathname;
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 767);
  const [isTallScreen, setIsTallScreen] = useState(window.innerHeight > 800);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 767);
      setIsTallScreen(window.innerHeight > 800);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="keep-red">
      <div className="navbar vertical-box red">
        {isWideScreen && isTallScreen && (
          <img
            className="boots-background about-logos top boot-short-left"
            src={BootOne}
          />
        )}
        {isWideScreen && isTallScreen && (
          <img
            className="boots-background about-logos top boot-far-left absolute"
            src={BootTwo}
          />
        )}
        {isWideScreen && isTallScreen && (
          <img
            className="boots-background about-logos bottom boot-left"
            src={BootThree}
          />
        )}
        {isWideScreen && isTallScreen && (
          <img
            className="boots-background about-logos bottom boot-menu-right"
            src={BootFour}
          />
        )}
        <div className="medium-top-margin" />
        {menuData.menu.map((item) => {
          const cur = item.page.toLowerCase();
          return (
            <div
              className={
                isWideScreen ? "" : "center-box full-container-vertical"
              }
            >
              <div className={isWideScreen ? "" : "spaced-box-vertical"}>
                {cur === loc.substring(1) ||
                (!loc.substring(1) && cur === "home") ? (
                  <div className="navbar-options">
                    <a href={item.href} className="navbar-selected">
                      {item.page}
                    </a>
                  </div>
                ) : (
                  <div className="navbar-options">
                    <a href={item.href} className="navbar-unselected">
                      {item.page}
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MenuBar;
