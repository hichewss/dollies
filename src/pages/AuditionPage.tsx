import React, { useEffect, useState } from "react";
import AuditionNavBar from "../components/AuditionNavBar";
import auditionInfo from "../data/audition.json";
import DownBoot from "../images/audition/down.png";
import UpBoot from "../images/audition/up.png";
import RightBoot from "../images/audition/right.png";
import WhiteFooter from "../components/WhiteFooter";
import MenuBar from "../components/MenuBar";
import { CloseOutIcon } from "../components/images";

function AuditionPage() {
  const [menu, setMenu] = useState(false);
  const [fadeMenu, setFadeMenu] = useState(false);
  const [fadeEffect, setFadeEffect] = useState("");
  const boots = [DownBoot, UpBoot, RightBoot];

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
          <div className="side-button menu-side-margin fade-in-content">
            <p
              className="color-white fade-in-content"
              onClick={() => {
                setMenu(true);
                setFadeMenu(true);
              }}
            >
              MENU
            </p>
          </div>
          <div className="fade-in-content">
            <div className="vertical-box">
              <AuditionNavBar />
              <div>
                <div className="medium-center-margin">
                  <h1 className="color-white">AUDITION INFO</h1>
                </div>
                <div className="small-bottom-margin" />
              </div>
              <div>
                <div className="vertical-box">
                  {auditionInfo.audition.map((item, index) => {
                    return (
                      <div className="right-box">
                        <div className="line" />
                        <div className="audition-box">
                          <h1 className="color-white title-box center-box small-left-margin">
                            {item.title}
                          </h1>
                          <h5 className="color-white detail-box">
                            {item.detail}
                          </h5>
                          <div className="center-box small-right-margin">
                            <img src={boots[index % 3]} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="right-box">
                    <div className="line" />
                  </div>
                  <div className="small-bottom-margin" />
                  <WhiteFooter />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AuditionPage;
