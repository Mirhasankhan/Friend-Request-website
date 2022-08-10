import React from "react";
import logo from "../Images/Facebook-logo.png";
import profile from "../Images/Mir-Hasan.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <input placeholder="search"></input>
      <img id="images" src={profile} alt="" />
    </div>
  );
};

export default Header;