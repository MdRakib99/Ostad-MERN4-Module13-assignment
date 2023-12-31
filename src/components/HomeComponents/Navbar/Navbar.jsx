import React from "react";
import { NavLink } from "react-router-dom";
import "./navbarStyle.css";

const Navbar = () => {
  return (
    <nav className='navigation'>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/service'>Service</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/project'>Project</NavLink>
        </li>
        <li>
          <NavLink to='/blog'>Blog</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
