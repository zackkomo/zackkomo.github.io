import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <li className="Nav-link">
          <Link to="/">
            <h1>Home</h1>
          </Link>
        </li>
        <li className="Nav-link">
          <Link to="/about">
            <h5>About</h5>
          </Link>
        </li>
        <li className="Nav-link">
          <Link to="/projects">
            <h5> Projects</h5>
          </Link>
        </li>
        <li className="Nav-link">
          <Link to="/contact-me">
            <h5>Contact Me</h5>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
