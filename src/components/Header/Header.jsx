import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaTelegram, FaFacebook } from "react-icons/fa";
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");

  const toggleLanguage = () => {
    const newLang = isEnglish ? "ru" : "en";
    i18n.changeLanguage(newLang);
    setIsEnglish(!isEnglish);
  };

  return (
    <header className="w-full">
      <div className="container mx-auto px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between md:min-h-[8rem]">
          <div className="flex flex-col items-start">
            <Link to="/" className="text-4xl font-bold uppercase mb-4">
              Kiryl Mikhalenka
            </Link>
            <nav className="header-burger2 flex flex-col space-y-2">
              <Link to="/" className="text-black hover:text-gray-700">
                {t("header.biography")}
              </Link>
              <Link to="/gallery" className="text-black hover:text-gray-700">
                {t("header.petroleumPaintings")}
              </Link>
              <Link to="/exhibitions" className="text-black hover:text-gray-700">
                {t("header.exhibitions")}
              </Link>
              <Link to="/collaborations" className="text-black hover:text-gray-700">
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
          <div className="social-links flex space-x-4 mt-4 md:mt-0 md:items-center">
            <a
              href="https://instagram.com/mikhalenkakiryl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://t.me/artistmio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700"
            >
              <FaTelegram size={24} />
            </a>
            <a
              href="https://www.facebook.com/kiryl.mikhalenka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;