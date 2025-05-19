import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    const newLang = isEnglish ? "ru" : "en";
    i18n.changeLanguage(newLang);
    setIsEnglish(!isEnglish);
  };

  return (
    <header className="w-full">
      <div className="container mx-auto px-8 py-4 relative">
        <button
          onClick={toggleMenu}
          className="text-3xl focus:outline-none md:hidden absolute top-7 right-8"
        >
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>

        <div className="flex flex-col items-start md:min-h-[8rem]">
          <Link to="/" className="text-4xl font-bold uppercase mb-4">
            Kiryl Mikhalenka
          </Link>
          <nav className="header-burger2 hidden md:flex md:flex-col md:space-y-2">
            <Link to="/" className="text-black hover:text-gray-700">
              {t("header.biography")}
            </Link>
            <Link to="/gallery" className="text-black hover:text-gray-700">
              {t("header.petroleumPaintings")}
            </Link>
            <Link to="/exhibitions" className="text-black hover:text-gray-700">
              {t("header.exhibitions")}
            </Link>
            <Link to="/collaboration" className="text-black hover:text-gray-700">
              {t("header.collaboration")}
            </Link>
            <Link to="/nft" className="text-black hover:text-gray-700">
              {t("header.nft")}
            </Link>
            <Link to="/publications" className="text-black hover:text-gray-700">
              {t("header.publications")}
            </Link>
            <Link to="/contacts" className="text-black hover:text-gray-700">
              {t("header.contacts")}
            </Link>
            <div className="mt-4">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isEnglish}
                  onChange={toggleLanguage}
                  className="sr-only"
                />
                <div className="w-14 h-7 bg-gray-200 rounded-full transition-colors duration-300 ease-in-out">
                  <div
                    className={`w-6 h-6 bg-black rounded-full absolute top-0.5 left-0.5 transition-transform duration-300 ease-in-out flex items-center justify-center text-white text-xs font-bold ${
                      isEnglish ? "translate-x-7" : "translate-x-0"
                    }`}
                  >
                    {isEnglish ? "EN" : "RU"}
                  </div>
                </div>
              </label>
            </div>
          </nav>
        </div>

        <nav
          className={`fixed top-0 left-0 w-full h-screen bg-white transition-transform duration-300 ease-in-out md:hidden z-50 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-3xl focus:outline-none"
          >
            ✕
          </button>
          <div className="header-burger1 flex flex-col items-end justify-center h-full space-y-6 pr-8">
            <Link
              to="/"
              className="text-black text-2xl hover:text-gray-700"
              onClick={toggleMenu}
            >
              {t("header.biography")}
            </Link>
            <Link
              to="/gallery"
              className="text-black text-2xl hover:text-gray-700"
              onClick={toggleMenu}
            >
              {t("header.petroleumPaintings")}
            </Link>
            <Link
              to="/exhibitions"
              className="text-black text-2xl hover:text-gray-700"
              onClick={toggleMenu}
            >
              {t("header.exhibitions")}
            </Link>
            <Link
              to="/collaboration"
              className="text-black text-2xl hover:text-gray-700"
              onClick={toggleMenu}
            >
              {t("header.collaboration")}
            </Link>
            <Link
              to="/nft"
              className="text-black text-2xl hover:text-gray-700"
              onClick={toggleMenu}
            >
              {t("header.nft")}
            </Link>
            <Link
              to="/publications"
              className="text-black text-2xl hover:text-gray-700"
              onClick={toggleMenu}
            >
              {t("header.publications")}
            </Link>
            <Link
              to="/contacts"
              className="text-black text-2xl hover:text-gray-700"
              onClick={toggleMenu}
            >
              {t("header.contacts")}
            </Link>
            <div className="pt-6">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isEnglish}
                  onChange={toggleLanguage}
                  className="sr-only"
                />
                <div className="w-14 h-7 bg-gray-200 rounded-full transition-colors duration-300 ease-in-out">
                  <div
                    className={`w-6 h-6 bg-black rounded-full absolute top-0.5 left-0.5 transition-transform duration-300 ease-in-out flex items-center justify-center text-white text-xs font-bold ${
                      isEnglish ? "translate-x-7" : "translate-x-0"
                    }`}
                  >
                    {isEnglish ? "EN" : "RU"}
                  </div>
                </div>
              </label>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;