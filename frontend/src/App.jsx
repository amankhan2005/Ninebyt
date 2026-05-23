import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Cursor from "./components/Cursor";

// Scroll
import RouteScrollTop from "./components/RouteScrollTop";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

export default function App() {
  return (
    <>
      <Cursor />
      <RouteScrollTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
      <ScrollToTop />
    </>
  );
}
