import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.Style.css';

export default function Navbar() {
  return (
    <div>
      <header className="header-container">
        <nav>
          <li
            className="logo-container"
            style={{ fontSize: 15, fontFamily: 'sans-serif' }}
          />
          <ul>
            <li>
              <NavLink activeclassname="active" to="/">
                Home
              </NavLink>
            </li>
            <li>|</li>
            <li>
              <NavLink activeclassname="active" to="/calculator">
                Calculator
              </NavLink>
            </li>
            <li>|</li>
            <li>
              <NavLink activenlassname="active" to="/quotes">
                Quotes
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
