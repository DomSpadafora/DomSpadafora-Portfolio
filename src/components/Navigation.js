import * as React from "react";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {

  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <nav>
      <ul>
        <li><NavLink to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Home</NavLink>
        </li>
        <li><NavLink to="about-me"
            style={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>About Me</NavLink>
        </li>
        <li><NavLink to="resume"
            style={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>Resume</NavLink>
        </li>
        <li><NavLink to="portfolio"
            style={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>Portfolio</NavLink>
        </li>
        <li><NavLink to="contact"
            style={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation