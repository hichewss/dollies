import React, { useEffect, useState } from "react";
import AuditionNavBar from "../components/AuditionNavBar";
import auditionInfo from "../data/audition.json";
import DownBoot from "../images/audition/down.png";
import UpBoot from "../images/audition/up.png";
import RightBoot from "../images/audition/right.png";
import WhiteFooter from "../components/WhiteFooter";
import MenuBar from "../components/MenuBar";
import { CloseOutIcon } from "../components/images";

function AuditionPageMainContents() {
  const boots = [DownBoot, UpBoot, RightBoot];
  return (
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
                    <h5 className="color-white detail-box">{item.detail}</h5>
                    <div className="center-box small-right-margin">
                      <img src={boots[index % 3]} className="scale-down" />
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
  );
}

function AuditionPage() {
  const [menu, setMenu] = useState(false);
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
          <AuditionPageMainContents />
        </div>
      )}
    </div>
  );
}

export default AuditionPage;
