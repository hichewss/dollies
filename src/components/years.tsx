import React from "react";

const old = ["1950", "1960", "1970", "1980", "1990", "2000", "2010", "2020"];
const future = ["2030", "2040", "2050", "2060", "2070", "2080", "2090", "..."];

function PastYears() {
  return (
    <div className="center-box">
      <div className="black-background bottom center-box home">
        <div className="year-side-margin year-container spaced-and-center-box">
          {old.map((year) => {
            return <div className="year-font color-white">{year}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export function RedPastYears() {
  return (
    <div className="center-box">
      <div className="red-background bottom center-box home">
        <div className="year-side-margin year-container spaced-and-center-box">
          {old.map((year) => {
            return <div className="year-font color-white">{year}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export function FutureYears() {
  return (
    <div className="center-box">
      <div className="black-background year-top center-box small-rotate home">
        <div className="year-side-margin year-container spaced-and-center-box">
          {future.map((year) => {
            return <div className="year-font color-white">{year}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export function RedFutureYears() {
  return (
    <div className="center-box">
      <div className="red-background year-top center-box small-rotate home">
        <div className="year-side-margin year-container spaced-and-center-box">
          {future.map((year) => {
            return <div className="year-font color-white">{year}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default PastYears;
