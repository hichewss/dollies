import React from "react";
import { TempDolliePhoto } from "../components/images";

function HomePage() {
  /* this is a work in progress, need the photos from karina/new dollies*/
  return (
    <div className="vertical-box">
      <div className="">
        <div className="home-page-image">
          <div className="home-page-image-filter">{TempDolliePhoto()}</div>
          <img width="100%" src={require("./images/temp_pic.jpg")}></img>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
