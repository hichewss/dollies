import React, { useReducer, useState } from "react";
import { increments } from "../data/archive";

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

  const yearsDropdown = {
    yr1950s: false,
    yr1960s: false,
    yr1970s: false,
    yr1980s: false,
    yr1990s: false,
    yr2000s: false,
    yr2010s: false,
    yr2020s: false,
  };

  const yearReducer = (state: any, action: any) => {
    switch (action.type) {
      case "CLICK_YEAR":
        return {
          ...state,
          [action.variable]: !state[action.variable],
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(yearReducer, yearsDropdown);
  const handleToggle = (variable: any) => {
    dispatch({ type: "CLICK_YEAR", variable });
    console.log(state.yr1950s);
  };

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
            const cur_year = "yr" + year;
            return (
              <p
                className="color-white small-right-margin"
                onClick={() => handleToggle(cur_year)}
              >
                {year}
              </p>
            );
          })}
        </div>
      </div>
      {
        <div className="absolute archive-dropdowns dropdown-box">
          <div className="center-box side-margin">
            <div className="center-box archive-dropdowns">
              {YEARS.map((year: any, index: any) => {
                const cur_year = "yr" + year;
                return (
                  <div>
                    {year !== "Reunions" && state[cur_year] && (
                      <ul className="color-white dropdown">
                        {increments[index].map((increment: any) => {
                          return <li>{increment}</li>;
                        })}
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
