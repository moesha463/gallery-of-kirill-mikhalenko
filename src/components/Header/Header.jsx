import React, { useState } from "react";

import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-4xl font-bold">MIO</div>

        <button
          onClick={toggleMenu}
          className="text-3xl focus:outline-none md:hidden"
        >
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>

        <nav
          className={`${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } fixed top-0 left-0 w-full h-screen bg-white transition-transform duration-300 ease-in-out md:hidden z-50`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-3xl focus:outline-none"
          >
            ✕
          </button>
          <div className="header-burger1 flex flex-col items-end justify-center h-full space-y-6 pr-8">
            <a href="/" className="text-black text-2xl hover:text-gray-700" onClick={toggleMenu}>
              Home
            </a>
            <a href="/gallery" className="text-black text-2xl hover:text-gray-700" onClick={toggleMenu}>
              Gallery
            </a>
            <a href="/contacts" className="text-black text-2xl hover:text-gray-700" onClick={toggleMenu}>
              Contacts
            </a>
            <a href="/about" className="text-black text-2xl hover:text-gray-700" onClick={toggleMenu}>
              About Me
            </a>
          </div>
        </nav>

        <nav className="header-burger2 hidden md:flex md:space-x-6">
          <a href="/" className="text-black hover:text-gray-700">
            Home
          </a>
          <a href="/gallery" className="text-black hover:text-gray-700">
            Gallery
          </a>
          <a href="/contacts" className="text-black hover:text-gray-700">
            Contacts
          </a>
          <a href="/about" className="text-black hover:text-gray-700">
            About Me
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;