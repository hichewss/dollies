import React from "react";
import BootOne from "../images/navbar/boot_one.png";
import BootTwo from "../images/navbar/boot_two.png";
import BootThree from "../images/navbar/boot_three.png";
import BootFour from "../images/navbar/boot_four.png";
import menuData from "../data/menu.json";

function MenuBar() {
  const loc = window.location.pathname;
  return (
    <div className="navbar vertical-box red">
      <img
        className="boots-background about-logos top boot-short-left"
        src={BootOne}
      />
      <img
        className="boots-background about-logos top boot-far-left"
        src={BootTwo}
      />
      <img
        className="boots-background about-logos bottom boot-left"
        src={BootThree}
      />
      <img
        className="boots-background about-logos bottom boot-right"
        src={BootFour}
      />
      <div className="medium-top-margin" />
      {menuData.menu.map((item) => {
        const cur = item.page.toLowerCase();
        console.log("CURRENT PATH", loc);
        return (
          <div>
            {cur === loc.substring(1) ||
            (!loc.substring(1) && cur === "home") ? (
              <div className="navbar-options">
                <a href={item.href} className="navbar-selected">
                  {item.page}
                </a>
              </div>
            ) : (
              <a href={item.href}>
                <div className="navbar-options navbar-unselected">
                  {item.page}
                </div>
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default MenuBar;
