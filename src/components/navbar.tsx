import React from "react";

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
    <div className="center-box side-margin">
      <div className="spaced-box mininavbar">
        <p className="color-white">DOLLIES</p>
        <div className="center-box">
          {YEARS.map((year) => {
            return <p className="color-white small-right-margin">{year}</p>;
          })}
        </div>
        <p className="color-white">MENU</p>
      </div>
    </div>
  );
}

export default NavBar;
