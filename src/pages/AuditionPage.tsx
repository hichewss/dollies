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
  return (
    <div className="vertical-box">
      <AuditionNavBar />
      <div>
        <div className="medium-center-margin">
          <h1 className="color-white">AUDITION INFO</h1>
        </div>
        <div className="small-bottom-margin" />
      </div>
      <div>
        <div className="vertical-box">
          {auditionInfo.audition.map((item) => {
            return (
              <div className="right-box">
                <div className="line" />
                <div className="audition-box">
                  <h1 className="color-white title-box small-left-margin">
                    {item.title}
                  </h1>
                  <h5 className="color-white detail-box">{item.detail}</h5>
                  <div className="center-box small-right-margin">
                    {DrawBoot(item.boot)}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="right-box">
            <div className="line" />
          </div>
          <div className="small-bottom-margin" />
        </div>
      </div>
    </div>
  );
}

export default AuditionPage;
