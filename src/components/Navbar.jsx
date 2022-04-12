import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <ul className="flex-row my-3 nav navbar-nav">
          <li className="nav-item">
            <Link id="len1" className="hoverable" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link id="len2" className="hoverable" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link id="len3" className="hoverable" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link id="len4" className="hoverable" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
