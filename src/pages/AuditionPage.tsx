import React, { useEffect, useState } from "react";
import AuditionNavBar from "../components/AuditionNavBar";
import auditionInfo from "../data/audition.json";
import DownBoot from "../images/audition/down.png";
import UpBoot from "../images/audition/up.png";
import RightBoot from "../images/audition/right.png";

function DrawBoot(boot: string) {
  const [orientation, setOrientation] = useState(DownBoot);

  useEffect(() => {
    if (boot === "up") {
      setOrientation(UpBoot);
    } else if (boot === "right") {
      setOrientation(RightBoot);
    }
  });

  return <img src={orientation} />;
}

function AuditionPage() {
  /* this is a work in progress, need the photos from karina/new dollies*/
  return (
    <div className="vertical-box">
      <AuditionNavBar />
      <div>
        <div className="medium-center-margin">
          <h1 className="right-box color-white">AUDITION INFO</h1>
        </div>
        <div className="small-bottom-margin" />
      </div>
      <div>
        <div className="vertical-box">
          {auditionInfo.audition.map((item) => {
            return (
              <div className="vertical-box">
                <div>
                  <div className="line" />
                  <div className="horizontal-box">
                    <h1 className="small-left-margin color-white title-box">
                      {item.title}
                    </h1>
                    <h5 className="color-white detail-box small-right-margin">
                      {item.detail}
                    </h5>
                    <div className="center-box">{DrawBoot(item.boot)}</div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="line" />
          <div className="small-bottom-margin" />
        </div>
      </div>
    </div>
  );
}

export default AuditionPage;
