import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t, i18n } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo uppercase">Kiryl Mikhalenko</div>

                <div className="footer-socials">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                </div>

                <div className="footer-email">
                    <a href="mailto:info@mio.com">info@mio.com</a>
                </div>

                <p className="footer-text">© 2025 MIO. {t("copyright")}</p>
            </div>
        </footer>
    );
};

export default Footer;
