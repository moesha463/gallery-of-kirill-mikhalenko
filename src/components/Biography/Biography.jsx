import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import './Biography.css';

const Biography = () => {
  const { t } = useTranslation();
  const [fullscreenDoc, setFullscreenDoc] = useState(null);

  const documents = [
    {
      title: t("documents.award.title"),
      description: t("documents.award.description"),
      image: "https://lh3.google.com/u/0/d/1V9jKG4YSjwybI1H3814qwsHCr4X3SGE9=w2880-h1282-iv1?auditContext=prefetch",
      imageAlt: t("documents.award.imageAlt"),
      id: 1,
    },
    {
      title: t("documents.thanks.title"),
      description: t("documents.thanks.description"),
      image: "https://lh3.google.com/u/0/d/15eAJQUdRs5-lpuUGY1r4QmwvO4JX8D3i=w2880-h1282-iv1?auditContext=prefetch",
      imageAlt: t("documents.thanks.imageAlt"),
      id: 2,
    },
    {
      title: t("documents.membership.title"),
      description: t("documents.membership.description"),
      image: "https://lh3.google.com/u/0/d/16fUVp89LkqpXWbJta4y-HOZ-35lh7LaM=w2880-h1282-iv1?auditContext=prefetch",
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

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <img
              src="https://lh3.google.com/u/0/d/1KSYDGy7ap3uDT_7fSKzcCbguUfRnLoLK=w2378-h1282-iv1?auditContext=prefetch"
              alt={t("biography.photoAlt")}
              className="w-full h-full object-contain p-5"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-5xl font-semibold w-full">{t("biography.artistName")}</h2>
              <div className="w-24 h-0.5 bg-black my-4"></div>
              <p className="text-3xl italic font-bold w-full">{t("biography.artistTitle")}</p>
            </div>
            <div>
              <p className="text-2xl font-bold mt-4 mb-4 w-full text-justify">{t("biography.boldParagraph1")}</p>         
              <p className="text-2xl mb-4 w-full text-justify">{t("biography.regularParagraph1")}</p>
            </div>
          </div>
        </div>
        <div className="mt-6 leading-relaxed">
          <p className="text-2xl mb-4 text-justify">{t("biography.regularParagraph2")}</p>
          <p className="text-2xl mb-4 text-justify">{t("biography.regularParagraph3")}</p>
          <p className="text-2xl mb-4 font-bold text-justify">{t("biography.boldParagraph2")}</p>
          <p className="text-2xl mb-4 text-justify">{t("biography.regularParagraph4")}</p>
          <p className="text-2xl mb-4 text-justify">{t("biography.regularParagraph5")}</p>
          <p className="text-2xl mb-4 text-justify">{t("biography.regularParagraph6")}</p>
          <p className="text-2xl mb-4 text-justify">{t("biography.regularParagraph7")}</p>
        </div>
      </div>

      <div className="mt-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">
          {t("biography.eventsTitle", { defaultValue: "Key Events" })}
        </h2>
        <div className="relative">
          {t("biography.events", { returnObjects: true }).map((event, index) => (
            <div key={index} className="mb-6 flex flex-col items-center relative">
              <div className="w-full bg-gray-100 p-4 rounded-lg shadow-none hover:bg-gray-200 transition cursor-pointer">
                <h3 className="text-lg font-medium text-gray-800">{event.year}</h3>
                <p className="text-lg text-gray-600 mt-2">{event.event}</p>
              </div>
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
              className="bg-gray-100 p-4 shadow-none cursor-pointer rounded-lg hover:bg-gray-200 transition"
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