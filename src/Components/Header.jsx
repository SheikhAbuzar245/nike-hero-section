import React from "react";
import Logo from "../assets/brand_logo.png";

function Header() {
  return (
    <>
      <div className="container">
        <div className="header">
          <img src={Logo} alt="" />

          <ul className="nav-links">
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <button className="primary-btn">Login</button>
        </div>
      </div>
    </>
  );
}

export default Header;
