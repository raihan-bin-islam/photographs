import React, { useState } from "react";
import { animateScroll as Link } from "react-scroll";
export const Nav = () => {
  //State Variables
  const iconClass = ["mobile-icon", "mobile-icon open"];
  const [menuIndex, setMenuIndex] = useState(0); //toggles between mobile-icon as well as mobile-menu
  const [topValue, setTopValue] = useState(-100);
  const [navBg, setNavBg] = useState(false);
  //Variables
  const changeBg = () => {
    if (window.scrollY >= 64) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };
  const toggleMobileMenu = () => {
    //if mobile menu is not openned and the menu button is clicked, open the menu
    if (menuIndex === 0) {
      setMenuIndex(1);
      setTopValue(0);
    } else {
      setMenuIndex(0);
      setTopValue(-100);
    }
  };
  window.addEventListener("scroll", changeBg);
  return (
    <nav className={navBg ? "navigation scroll" : "navigation"}>
      {/* <img src="images\logo\logo2.jpg" alt="" /> */}
      <h2>Photographs</h2>
      <div className="navigation-menu" style={{ top: topValue + "%" }}>
        <ul>
          <li>
            <Link to="home" smooth={true} duration={800} spy={true} offset={-64} onClick={() => toggleMobileMenu()}>
              Home
            </Link>
            <Link
              to="overview"
              smooth={true}
              duration={800}
              spy={true}
              offset={-64}
              activeClass="link-active"
              onClick={() => toggleMobileMenu()}
            >
              Overview
            </Link>

            <Link
              to="abstract"
              smooth={true}
              duration={800}
              spy={true}
              offset={-64}
              activeClass="link-active"
              onClick={() => toggleMobileMenu()}
            >
              Abstract
            </Link>
            <Link
              to="landscape"
              smooth={true}
              duration={800}
              spy={true}
              offset={-64}
              activeClass="link-active"
              onClick={() => toggleMobileMenu()}
            >
              Landscape
            </Link>
          </li>
        </ul>
      </div>
      <div className={iconClass[menuIndex]} onClick={() => toggleMobileMenu()}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};
