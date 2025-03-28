import React, { useEffect, useReducer, useRef, useState } from "react";
import { increments } from "../data/archive";

function NavBar() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1679);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1679);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    "Memorial",
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
          ...Object.keys(state).reduce((acc: any, key) => {
            acc[key] = false;
            return acc;
          }, {}),
          [action.variable]: !state[action.variable], // Toggle the clicked dropdown
        };
      case "CLOSE_ALL":
        return Object.keys(state).reduce((acc: any, key) => {
          acc[key] = false; // Close all dropdowns
          return acc;
        }, {});
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(yearReducer, yearsDropdown);

  const navBarRef = useRef<HTMLDivElement>(null);

  const handleToggle = (variable: string) => {
    dispatch({ type: "CLICK_YEAR", variable });
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navBarRef.current &&
      !navBarRef.current.contains(event.target as Node) // Check if click outside
    ) {
      dispatch({ type: "CLOSE_ALL" });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={navBarRef}>
      <button className="side-button small-left-margin">
        <a href="/home">
          <p className="color-white">DOLLIES</p>
        </a>
      </button>
      <div className="center-box">
        <div
          className={
            isWideScreen
              ? "center-box dropdown-top-margin"
              : "center-box small-top-margin dropdown-options-container header-options"
          }
        >
          {YEARS.map((year, index) => {
            const cur_year = "yr" + year;
            if (year === "Reunions") {
              return (
                <div
                  key={year}
                  className="dropdown-top-margin small-right-margin"
                  style={{ position: "relative" }}
                >
                  <a
                    href={`${window.location.pathname}?year=Reunions`}
                    className="color-white dropdown-text"
                  >
                    <p className="color-white dropdown-text">{year}</p>
                  </a>
                </div>
              );
            }
            if (year === "Memorial") {
              return (
                <div
                  key={year}
                  className="dropdown-top-margin small-right-margin"
                  style={{ position: "relative" }}
                >
                  <a
                    href="https://docs.google.com/document/d/1B8KEUU28b4Ntpfpz5nt5owcWeTL-u1FKIPyU1dSy3dE/edit?usp=sharing"
                    className="color-white dropdown-text"
                  >
                    <p className="color-white dropdown-text">{year}</p>
                  </a>
                </div>
              );
            }
            return (
              <div
                key={year}
                className="small-right-margin dropdown-top-margin"
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
    </div>
  );
}

export default NavBar;
