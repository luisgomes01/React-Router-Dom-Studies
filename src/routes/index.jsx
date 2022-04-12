import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
