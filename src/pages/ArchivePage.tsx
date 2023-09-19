import React from "react";
import { QuoteIcon } from "../components/images";

export function DolliesNeverDie() {
  return (
    <div className="vertical-box archive small-center-margin">
      <div className="horizontal-box">
        <div className="mini-right-margin">{QuoteIcon()}</div>
        <div className="archive-title-header">DOLLIES NEVER DIE</div>
        <div className="archive-main-header">,</div>
      </div>
      <div className="small-left-margin">
        <div className="archive-main-header">OUR KICKS JUST GET</div>
      </div>
      <div className="small-left-margin">
        <div className="archive-main-header">LOWER</div>
      </div>
    </div>
  );
}

function ArchivePage() {
  return (
    <div>
      <DolliesNeverDie />
      <div className="color-white large-center-margin">
        <p>
          Although they may no longer put on the red dress, their elegant kicks
          and Honky Tonk grinds have left an indelible mark on generations of
          Stanford fans. They have added charm, grace, and good looks to
          LSJUMB's already impressive repertoire.
        </p>
        <p>
          Explore the full photo albums on the top of the page to learn more
          about a specific year of dollies! Or, explore reunion photos below to
          learn more about their growing history.
        </p>
      </div>
    </div>
  );
}

export default ArchivePage;
