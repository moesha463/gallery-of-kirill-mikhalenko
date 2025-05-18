import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import Contacts from "./components/Contacts/Contacts";
import About from "./components/About/About";
import { Analytics } from "@vercel/analytics/react"
import './locales'

import './App.css'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <Analytics />
    </Router>
  );
};

export default App;