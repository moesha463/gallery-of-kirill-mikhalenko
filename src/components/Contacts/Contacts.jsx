import React from "react";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col items-center mb-12">
        <img
          src="/assets/images/icon.PNG"
          alt="Logo"
          className="w-36 mb-4"
        />
        <div className="bg-white border-6 border-black flex items-center justify-center max-w-md">
          <h1 className="text-3xl font-regular uppercase text-center px-4 py-2">
            {t("header.contacts")}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contacts;