import React from "react";

import "./App.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navitem = styled.nav`
  height: 5vh;
  width: 100%;
  background: #313131;
  color: white;
  display: flex;
`;
const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:after {
    color: red;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    opacity: 0.5;
    color: black;
  }
`;

const Nav = () => {
  return (
    <Navitem>
      <NavLink to="/" activeStyle>
        <h1>Home</h1>
      </NavLink>
      <NavLink to="/about" activeStyle>
        <h5>About</h5>
      </NavLink>
      <NavLink to="/projects" activeStyle>
        <h5>Projects</h5>
      </NavLink>
      <NavLink to="/contact-me" activeStyle>
        <h5>Contact Me</h5>
      </NavLink>
    </Navitem>
  );
};

export default Nav;
