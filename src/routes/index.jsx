import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../layout/Main/Main";
import Navbar from "../layout/Menu/Navbar";
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
          <Route path="/about" element={<About />}>
            <Route path="/about/luis" element={<About />} />
            <Route path="/about/clarice" element={<About />} />
            <Route path="/about/thaynam" element={<About />} />
            <Route path="/about/jair" element={<About />} />
            <Route path="/about/be" element={<About />} />
            <Route path="/about/jao" element={<About />} />
            <Route path="/about/caio" element={<About />} />
          </Route>
          <Route path="/portfolio/:id" element={<Portfolio />} />
          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </Main>
    </>
  );
}
