import React from "react";
import { QuoteIcon } from "../components/images";
import NavBar from "../components/NavBar";
import WhiteFooter from "../components/WhiteFooter";
import ArnPhoto from "../images/archive/archive_a.png";

export function DolliesNeverDie() {
  return (
    <div className="vertical-box archive small-center-margin">
      <div className="horizontal-box">
        <div className="mini-right-margin">{QuoteIcon()}</div>
        <div className="archive-title-header">DOLLIES NEVER DIE</div>
        <div className="archive-main-header">,</div>
      </div>
      <div className="archive-main-header">OUR KICKS JUST GET</div>
      <div className="archive-main-header">LOWER</div>
    </div>
  );
}

function ArchivePage() {
  return (
    <div>
      <NavBar />
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
      <div className="small-bottom-margin" />
      <div className="medium-side-margin">
        <div className="archive-photo-box">
          <img src={ArnPhoto} />
          <div className="mini-top-margin" />
          <div className="archive-photo-header-box">
            <div className="archive-photo-header">Homecoming Game</div>
            <div className="archive-photo-subheader">1985</div>
          </div>
          <div className="archive-photo-subheader">Football</div>
        </div>
      </div>
      <div className="medium-bottom-margin" />
      <WhiteFooter />
    </div>
  );
}

export default ArchivePage;
