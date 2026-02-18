 import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

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
      {/* Auto scroll on route change */}
      <RouteScrollTop />

      {/* Header */}
      <Header />

      {/* Routes */}
      <Routes>

        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
 
        {/* Career Page (ApplyNurse) */}
 
        {/* Service Pages */}
       
<Route path="/services" element={<Services />} />
        {/* Client Form */}
 
      </Routes>

      {/* Footer */}
      <Footer />

      {/* Scroll Button */}
      <ScrollToTop />
    </>
  );
}
