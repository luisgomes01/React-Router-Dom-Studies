import React from "react";
import { Link, Route, Routes } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li>
            <Link id="len1" className="hoverable" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link id="len2" className="hoverable" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link id="len3" className="hoverable" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link id="len4" className="hoverable" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
