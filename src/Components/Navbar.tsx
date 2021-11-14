import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link> <br />
      <Link to="/About">About-us</Link> <br />
      <Link to="/Contact">Contact-us</Link> <br />
    </div>
  );
};

export default Navbar;
