import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import './Biography.css'

const Biography = () => {
  const { t } = useTranslation();
  const [fullscreenDoc, setFullscreenDoc] = useState(null);

  const documents = [
    {
      title: t("documents.award.title"),
      description: t("documents.award.description"),
      image: "src/assets/images/docsAward.JPG",
      imageAlt: t("documents.award.imageAlt"),
      id: 1,
    },
    {
      title: t("documents.thanks.title"),
      description: t("documents.thanks.description"),
      image: "src/assets/images/docsThanks.JPG",
      imageAlt: t("documents.thanks.imageAlt"),
      id: 2,
    },
    {
      title: t("documents.membership.title"),
      description: t("documents.membership.description"),
      image: "src/assets/images/docsMembership.JPG",
      imageAlt: t("documents.membership.imageAlt"),
      id: 3,
    },
  ];

  const openFullscreen = (doc) => {
    setFullscreenDoc(doc);
  };

  const closeFullscreen = () => {
    setFullscreenDoc(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeFullscreen();
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex justify-center mb-12">
        <div className="bg-white border-6 border-black flex items-center justify-center">
          <h1 className="text-3xl font-regular uppercase text-center px-4 py-2">
            {t("biography.title")}
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 flex justify-center md:justify-center order-1 md:order-2 items-center md:items-start">
          <img
            src="src/assets/images/authorPhoto.jpg"
            alt={t("biography.photoAlt")}
            className="w-full max-w-xs h-auto object-contain"
          />
        </div>

        <div className="md:w-2/3 text-lg leading-relaxed order-2 md:order-1">
          <p className="mb-6">{t("biography.paragraph1")}</p>
          <p className="mb-6">{t("biography.paragraph2")}</p>
          <p className="mb-6">{t("biography.paragraph3")}</p>
        </div>
      </div>

      <div className="mt-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">
          {t("biography.eventsTitle", { defaultValue: "Key Events" })}
        </h2>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>
          {t("biography.events", { returnObjects: true }).map((event, index) => (
            <div
              key={index}
              className={`mb-6 ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } flex flex-col md:flex-row items-center relative`}
            >
              <div className="w-full md:w-5/12 bg-gray-100 p-4 rounded-lg shadow-none hover:bg-gray-200 transition cursor-pointer">
                <h3 className="text-lg font-medium text-gray-800">{event.year}</h3>
                <p className="text-sm text-gray-600 mt-2">{event.event}</p>
              </div>
              <div className="hidden md:flex md:w-2/12 justify-center">
                <div className="w-4 h-4 bg-black rounded-full z-10"></div>
              </div>
              <div className="hidden md:block md:w-5/12"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-center mb-8">
          {t("documents.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-gray-100 p-4 shadow-none cursor-pointer hover:bg-gray-200 transition"
              onClick={() => openFullscreen(doc)}
            >
              <img
                src={doc.image}
                alt={doc.imageAlt}
                className="w-full h-32 object-contain mb-4"
              />
              <h3 style={{ lineHeight: 1.2 }} className="text-lg font-medium">
                {doc.title}
              </h3>
              <p className="text-sm text-gray-600">{doc.description}</p>
            </div>
          ))}
        </div>
      </div>

      {fullscreenDoc && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 modal-overlay"
          onClick={handleOverlayClick}
        >
          <div className="relative w-full h-full">
            <button
              className="absolute top-4 right-4 text-4xl font-bold text-white z-10"
              onClick={closeFullscreen}
            >
              ×
            </button>
            <img
              src={fullscreenDoc.image}
              alt={fullscreenDoc.imageAlt}
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Biography;