import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import './Nft.css'

const Nft = () => {
  const { t } = useTranslation();

  return (
    <motion.div className="container mx-auto px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center mb-12">
        <img
          src="/assets/images/icon.PNG"
          alt="Logo"
          className="w-36 mb-4"
        />
        <div className="bg-white border-6 border-black flex items-center justify-center max-w-md">
          <h1 className="text-3xl font-regular uppercase text-center px-4 py-2">
            {t("header.nft")}
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="nft-image-wrapper">
          <img
            src="/assets/images/SuperRare.PNG"
            alt="NFT SuperRare"
            className="w-full max-w-md  nft-image"
          />
        </div>
        <p className="mt-4 text-lg font-semibold">NFT SuperRare</p>
        <a
          href="https://superrare.com/profile/miokirill"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-blue-600 hover:underline"
        >
          {t("nft.link")}
        </a>
      </div>
    </motion.div>
  );
};

export default Nft;