import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import './Biography.css';

const Biography = () => {
  const { t } = useTranslation();
  const [fullscreenDoc, setFullscreenDoc] = useState(null);

  const documents = [
    {
      title: t("documents.award.title"),
      description: t("documents.award.description"),
      image: "/assets/images/docsAward.JPG",
      imageAlt: t("documents.award.imageAlt"),
      id: 1,
    },
    {
      title: t("documents.thanks.title"),
      description: t("documents.thanks.description"),
      image: "/assets/images/docsThanks.JPG",
      imageAlt: t("documents.thanks.imageAlt"),
      id: 2,
    },
    {
      title: t("documents.membership.title"),
      description: t("documents.membership.description"),
      image: "/assets/images/docsMembership.JPG",
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

  const events = Object.entries(
    t("biography.events", { returnObjects: true }).reduce((acc, event) => {
      if (!acc[event.year]) {
        acc[event.year] = [];
      }
      acc[event.year].push(event.event);
      return acc;
    }, {})
  ).sort(([yearA], [yearB]) => {
    const priority = {
      "С 2025": 1,
      "2018-2021": 2,
      "Образование": 3,
      "Since 2025": 1,
      "Education": 3,
    };

    const priorityA = priority[yearA] || 4;
    const priorityB = priority[yearB] || 4;

    if (priorityA !== 4 || priorityB !== 4) {
      return priorityA - priorityB;
    }

    return parseInt(yearB) - parseInt(yearA);
  });

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
            {t("biography.title")}
          </h1>
        </div>
      </div>


      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <img
              src="/assets/images/authorPhoto.jpg"
              alt={t("biography.photoAlt")}
              className="w-full h-full object-contain p-5"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-5xl font-semibold w-full">{t("biography.artistName")}</h2>
              <div className="w-24 h-0.5 bg-black my-4"></div>
              <p className="text-3xl font-bold w-full">{t("biography.artistTitle")}</p>
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
          <p className="text-2xl mb-4 text-justify">{t("biography.regularParagraph8")}</p>
          <p className="text-2xl mb-4 text-justify">{t("biography.regularParagraph9")}</p>
        </div>
      </div>

      <div className="mt-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">
          {t("biography.eventsTitle", { defaultValue: "Key Events" })}
        </h2>
        <div className="relative timeline-container">
          {events.length > 1 && (
            <div
              style={{
                left: '8.4rem',
                top: '50%',
                height: `calc(100% - 3rem)`,
                transform: 'translateY(-50%)',
              }}
              className="absolute w-1 bg-gray-300"
            ></div>
          )}

          {events.map(([year, events], index) => (
            <div key={year} className="mb-8 flex items-center relative timeline-item">
              <div className="pr-4 w-32 text-right overflow-hidden text-ellipsis whitespace-nowrap timeline-date">
                <h3 className="text-lg font-medium text-gray-800">{year}</h3>
              </div>

              <div
                style={{ left: '8rem', top: '50%', transform: 'translateY(-50%)' }}
                className="absolute w-4 h-4 bg-gray-600 rounded-full z-10"
              ></div>

              <div className="pl-20 flex-1 timeline-card">
                <div className="bg-gray-100 p-4 shadow-none hover:bg-gray-200 transition">
                  {events.map((event, eventIndex) => (
                    <p key={eventIndex} className="text-lg text-gray-600 mb-2 last:mb-0">
                      {event}
                    </p>
                  ))}
                </div>
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
              key={doc.id}
              className="bg-gray-100 p-4 shadow-none cursor-pointer  hover:bg-gray-200 transition"
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
    </motion.div>
  );
};

export default Biography;