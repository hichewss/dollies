import React from "react";
import footerData from "../data/footer.json";
import { RedirectArrow } from "./images";

function BlackFooter() {
  return (
    <div className="black-footer">
      <div className="vertical-box">
        {footerData.footer.map((item) => {
          return (
            <div className="spaced-box">
              <div className="footer-box">
                <a href={item.href}>
                  <h4 className="color-white">{item.page}</h4>
                </a>
              </div>
              <div className="footer-box">
                <a href={item.link} className="horizontal-box">
                  <h4 className="color-white">{item.social}</h4>
                  <div className="small-left-margin redirect center-box">
                    {RedirectArrow()}
                  </div>
                </a>
              </div>
            </div>
          );
        })}
        <div className="footer-box">
          <a href="/acknowledgements">
            <h4 className="color-white">Acknowledgements</h4>
          </a>
        </div>
        <div className="small-bottom-margin" />
        <h3 className="color-white">Stanford Dollies 2023-2024</h3>
      </div>
    </div>
  );
}

export default BlackFooter;
