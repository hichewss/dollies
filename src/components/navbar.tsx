import React, { useState } from "react";

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

  return (
    <div>
      <div className="side-button side-margin">
        <a href="/home">
          <p className="color-white">DOLLIES</p>
        </a>
      </div>
      <div className="center-box side-margin">
        <div className="center-box">
          {YEARS.map((year) => {
            return <p className="color-white small-right-margin">{year}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
