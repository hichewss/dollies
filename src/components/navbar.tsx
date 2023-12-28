import React, { useState } from "react";
import MenuBar from "./MenuBar";

function NavBar() {
  const YEARS = [
    "1950s",
    "1960s",
    "1970s",
    "1980s",
    "1990s",
    "2000s",
    "2010s",
    "Reunions",
  ];
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <div className="center-box side-margin">
        <div className="spaced-box mininavbar">
          <a href="/home">
            <p className="color-white">DOLLIES</p>
          </a>
          <div className="center-box">
            {YEARS.map((year) => {
              return <p className="color-white small-right-margin">{year}</p>;
            })}
          </div>
          <p
            className="color-white"
            onClick={() => {
              setMenu(true);
            }}
          >
            MENU
          </p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
