import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <MenuItem component={Link} to={"/"}>
          <h1>Home</h1>
        </MenuItem>
        <MenuItem component={Link} to={"/about"}>
          About
        </MenuItem>
        <MenuItem component={Link} to={"/projects"}>
          Projects
        </MenuItem>
        <MenuItem component={Link} to={"/contact-me"}>
          Contact Me
        </MenuItem>
      </ul>
    </nav>
  );
}

export default Nav;
