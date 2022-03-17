import React from "react";
import logo from "../../logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <input type="text" placeholder="Search User . . ." />
    </div>
  );
};

export default Navbar;
