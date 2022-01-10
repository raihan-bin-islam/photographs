import React from "react";
import { animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <div className="footer-container">
      <img
        src=".\images\logo\upward.png"
        alt=""
        onClick={() => {
          scroll.scrollToTop();
        }}
      />

      <div className="footer">
        <p>
          <span>&copy;</span> Raihan Bin Islam
        </p>
      </div>
    </div>
  );
}

export default Footer;
