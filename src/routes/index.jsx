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
            <Route path="/about/luis" element={<h1>About Luís</h1>} />
            <Route path="/about/clarice" element={<h1>About Clarice</h1>} />
            <Route path="/about/thaynam" element={<h1>About Thaynam</h1>} />
            <Route path="/about/jair" element={<h1>About Jair</h1>} />
            <Route path="/about/be" element={<h1>About Bê</h1>} />
            <Route path="/about/jao" element={<h1>About Jão</h1>} />
            <Route path="/about/caio" element={<h1>About Caio</h1>} />
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
