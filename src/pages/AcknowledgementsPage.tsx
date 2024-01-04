import React, { useState, useEffect } from "react";
import RedFooter from "../components/RedFooter";
import AcknowledgementsNavBar from "../components/AcknowledgementsNavBar";
import { CloseOutIcon } from "../components/images";
import MenuBar from "../components/MenuBar";
import LargeRedBoot from "../images/contact/big_red_boot.png";

function AcknowledgementsPage() {
  const [menu, setMenu] = useState(false);
  const [fadeMenu, setFadeMenu] = useState(false);
  const [fadeEffect, setFadeEffect] = useState("");

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
          <div className="end-box small-right-margin">
            <button
              className="end-box"
              onClick={() => {
                setMenu(true);
                setFadeMenu(true);
              }}
            >
              <p className="color-red mini-top-margin absolute home-layer-up">
                MENU
              </p>
            </button>
          </div>
          <div className="vertical-box white fade-in-content">
            <AcknowledgementsNavBar />
            <div className="small-top-margin" />
            <div className="center-box">
              <div className="small-top-margin" />
              <div className="acknowledgements-red-box" />
              <div className="acknowledgements-box">
                <div className="vertical-box side-margin center-box">
                  <div className="medium-top-margin" />
                  <h4 className="color-white">
                    The Stanford Dollies website was made using photos taken by
                    the LSJUMB, Al Ponce, Robby Beyers, Robert Siegel, Alan
                    Mela, and Dominic Hing.
                  </h4>
                  <div className="small-top-margin" />
                  <h4 className="color-white">
                    This website takes inspiration from the{" "}
                    <a
                      href="https://web.stanford.edu/group/lsjumb/cgi-bin/dollies/index2.php?pg=1"
                      className="color-white"
                    >
                      <u>original Stanford Dollie website</u>
                    </a>{" "}
                    created by Carrie Edwards (04/05).
                  </h4>
                  <div className="small-top-margin" />
                  <h4 className="color-white">
                    The designs were developed by Karina Chen (22/23) and
                    implemented by Chuyi Zhang (22/23).
                  </h4>
                </div>
              </div>
            </div>
            <div className="small-bottom-margin"></div>
            <div className="small-bottom-margin"></div>
            <RedFooter />
          </div>
        </div>
      )}
    </div>
  );
}

export default AcknowledgementsPage;
