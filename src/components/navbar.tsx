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
    "2020s",
    "Reunions",
  ];
  const [fiftiesDropdown, setFiftiesDropDown] = useState(false);
  const [sixtiesDropdown, setSixtiesDropDown] = useState(false);
  const [seventiesDropdown, setSeventiesDropDown] = useState(false);
  const [eightiesDropdown, setEightiesDropDown] = useState(false);
  const [nintiesDropdown, setNinetiesDropDown] = useState(false);
  const [thousandsDropdown, setThousandsDropDown] = useState(false);
  const [tensDropdown, setTensDropDown] = useState(false);
  const yearDropdowns = [];
  const initialState = {};

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
      {
        <div className="absolute archive-dropdowns">
          <div className="center-box side-margin">
            <div className="center-box archive-dropdowns">
              {YEARS.map((year) => {
                return (
                  <div>
                    {year !== "Reunions" && (
                      <ul className="color-white dropdown">
                        <li>1950-1951</li>
                        <li>1950-1951</li>
                        <li>1950-1951</li>
                        <li>1950-1951</li>
                        <li>1950-1951</li>
                        <li>1950-1951</li>
                        <li>1950-1951</li>
                        <li>1950-1951</li>
                        <li>1950-1951</li>
                        <li>1950-1951</li>
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default NavBar;
