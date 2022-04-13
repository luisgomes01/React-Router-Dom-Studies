import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";

export default function MainRoutes() {
  return (
    <>
      <Navbar />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio/:id" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </Main>
    </>
  );
}
