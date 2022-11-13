import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css"

function MainNavigation() {
  return (
    <header className={classes.header}>
      <NavLink to="/">Logo</NavLink>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/counter" className={({isActive}) => (isActive ? classes.active : "") }>Counter</NavLink>
          </li>
          <li>
            <NavLink to="/form"  className={({isActive}) => (isActive ? classes.active : "") }>Form</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
