import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import RedFooter from "../components/RedFooter";

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
    <div className="fade-in-content">
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
      <NavBar />
    </div>
  );
}

export default TestPage;
