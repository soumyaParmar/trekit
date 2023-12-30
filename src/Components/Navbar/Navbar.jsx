import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="nav_body">
      <div className="nav_head">TrekIt Himalayas</div>
      <div className="nav_service">
        <label>Treks</label>
        <label>Camping</label>
        <label>Gallery</label>
        <label>About Us</label>
        <label>Connect With Us</label>
      </div>
    </div>
  );
}

export default Navbar;
