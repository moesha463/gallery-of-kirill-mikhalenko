import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import './BackToTop.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="back-to-top bg-white border-2 border-black text-black p-3 hover:bg-gray-200 transition-colors"
        aria-label="Back to top"
      >
        <FaArrowUp size={24} />
      </button>
    </div>
  );
};

export default BackToTop;