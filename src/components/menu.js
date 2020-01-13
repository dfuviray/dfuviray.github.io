import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <ul className="menu">
      <li>
        <Link to="/">ABOUT</Link>
      </li>
      <li>
        <Link to="/skills">SKILLS</Link>
      </li>
      <li>
        <a href="#">PORTFOLIO</a>
      </li>
      <li>
        <Link to="/contact">CONTACT</Link>
      </li>
    </ul>
  );
};

export default Menu;
