import React from "react";
import logo from "../../logo.svg";
import "./Navbar.css";

const Navbar = ({ setSearchTerm }) => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <input
        type="search"
        placeholder="Search User . . ."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
    </div>
  );
};

export default Navbar;
