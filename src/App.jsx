import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Biography from "./components/Biography/Biography";
import Exhibitions from "./components/Exhibitions/Exhibitions";
import Collaborations from "./components/Collaborations/Collaborations";
import Nft from "./components/Nft/Nft";
import Publications from "./components/Publications/Publications";

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
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/nft" element={<Nft />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/publications" element={<Publications />} />
      </Routes>
      <Footer />
      <Analytics />
    </Router>
  );
};

export default App;