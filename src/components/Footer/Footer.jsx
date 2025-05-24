import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebookF, FaTelegram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t, i18n } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo uppercase">Kiryl Mikhalenka</div>

                <div className="footer-socials">
                    <a href="https://instagram.com/mikhalenkakiryl" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://t.me/artistmio" target="_blank" rel="noopener noreferrer">
                        <FaTelegram />
                    </a>
                    <a href="https://www.facebook.com/kiryl.mikhalenka" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                </div>

                <div className="footer-email">
                    <a href="mailto:miokirillartist@gmail.com">miokirillartist@gmail.com</a>
                </div>

                <p className="footer-text">© 2025</p>
            </div>
        </footer>
    );
};

export default Footer;
