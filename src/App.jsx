import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Biography from "./components/Biography/Biography";
import Exhibitions from "./components/Exhibitions/Exhibitions";

import Gallery from "./components/Gallery/Gallery";
import Contacts from "./components/Contacts/Contacts";
import { Analytics } from "@vercel/analytics/react"
import './locales'

import './App.css'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Biography />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/exhibitions" element={<Exhibitions />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
      <Analytics />
    </Router>
  );
};

export default App;