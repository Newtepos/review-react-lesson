import React from "react";
import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <NavLink to="/">Logo</NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/counter">Counter</NavLink>
          </li>
          <li>
            <NavLink to="/form">Form</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
