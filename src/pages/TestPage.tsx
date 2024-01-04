import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import PinkFooter from "../components/PinkFooter";
import Dresses from "../components/dresses";

function TestPage() {
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
    <div>
      <div className="fade-in-content white">
        <div className="side-button menu-side-margin fade-in-content home-layer-up">
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
        <div className="archive-background dark-pink absolute" />
        <div className="vertical-box">
          <NavBar />
          <div className="vertical-box archive-white-background white"></div>
          <Dresses />
          <PinkFooter />
        </div>
      </div>
    </div>
  );
}

export default TestPage;
