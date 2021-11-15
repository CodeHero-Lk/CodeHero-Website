import React from "react";
import { Link } from "react-router-dom";
import { FaRegBell, FaUserAlt } from "react-icons/fa";
import logo from "./logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="image">
          <img className="logo" src={logo} alt="logo" />
        </div>

        <div className="menu-items">
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>

            <li>
              <Link className="link" to="/About">
                About-us
              </Link>
            </li>

            <li>
              <Link className="link" to="/Contact">
                Contact-us
              </Link>
            </li>
          </ul>
        </div>

        <div className="search">
          <input
            className="searchBox"
            type="text"
            placeholder="What's your question ?"
          />
        </div>

        <div className="notification">
          <FaRegBell />
        </div>

        <div className="user">
          <FaUserAlt className="user-logo" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
