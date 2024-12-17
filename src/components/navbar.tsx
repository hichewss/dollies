import React, { useEffect, useReducer, useState } from "react";
import { increments } from "../data/archive";
import TestPage from "../pages/YearPage";

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
          [action.variable]: !state[action.variable], // Toggle the clicked dropdown
          ...Object.keys(state).reduce((acc: any, key) => {
            if (key !== action.variable) acc[key] = false; // Close other dropdowns
            return acc;
          }, {}),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(yearReducer, yearsDropdown);
  const handleToggle = (variable: any) => {
    dispatch({ type: "CLICK_YEAR", variable });
  };

  return (
    <div>
      <div className="side-button side-margin">
        <a href="/home">
          <p className="color-white">DOLLIES</p>
        </a>
      </div>
      <div className="center-box side-margin">
        {YEARS.map((year, index) => {
          const cur_year = "yr" + year;
          return (
            <div
              key={year}
              className="mini-right-margin dropdown-top-margin"
              style={{ position: "relative" }}
            >
              <p
                className="color-white dropdown-text"
                onClick={() => handleToggle(cur_year)}
              >
                {year}
              </p>
              {state[cur_year] && (
                <div className="archive-dropdowns">
                  <ul className="dropdown">
                    {increments[index].map((increment) => {
                      const url = `${window.location.pathname}?year=${increment}`;
                      return (
                        <a
                          href={url}
                          key={increment}
                          className="color-white center-box"
                        >
                          <li>{increment}</li>
                        </a>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NavBar;
