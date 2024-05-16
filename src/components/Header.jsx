import React, { useState } from "react";
import { HEADER_CONTENT, NAVBAR } from "../constants/Language_de";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const displayDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const navbar = () => {
    return (
      <div className="dropdown" onMouseLeave={() => setShowDropdown(false)}>
        <button onClick={displayDropdown} className="dropbtn">
          &#x2263;
        </button>
        {showDropdown && (
          <div class="dropdown-content" onClick={() => setShowDropdown(false)}>
            <a href="#home">{NAVBAR.HOME}</a>
            <a href="#about-me">{NAVBAR.ABOUT_ME}</a>
            <a href="#my-works">{NAVBAR.MY_WORKS}</a>
            <a href="#contacts">{NAVBAR.CONTACTS}</a>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="header" id="home">
      <div className="header-photo">
        <div className="header-black">
          {navbar()}
          <div className="header-border">
            <div className="rot-line">
              <div className="header-content">
                {/* <div className="left-part">
                  <div className="design">{HEADER_CONTENT.PHOTO}</div>
                </div> */}
                <div>
                  <div className="right-part">
                    <div className="omar-aljaber">{HEADER_CONTENT.OMAR}</div>
                    <div className="web-developer">
                      {HEADER_CONTENT.DEVELOPER}
                    </div>
                    <div className="Front-Back-end">
                      {HEADER_CONTENT.FRONT_BACK_DEV}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
