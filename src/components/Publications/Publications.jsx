import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import './Publications.css'

const PUBLICATIONS_DATA = {
  sections: [
    {
      id: 1,
      name: "publications.title1",
      photos: [
        { id: 101, original: "/assets/images/pub1.JPG", thumbnail: "/assets/images/pub1.JPG" },
        { id: 102, original: "/assets/images/pub2.JPG", thumbnail: "/assets/images/pub2.JPG" },
      ],
    },
    {
      id: 2,
      name: "publications.title2",
      photos: [
        { id: 103, original: "/assets/images/pub5.JPG", thumbnail: "/assets/images/pub5.JPG" },
        { id: 101, original: "/assets/images/pub3.JPG", thumbnail: "/assets/images/pub3.JPG" },
        { id: 102, original: "/assets/images/pub4.JPG", thumbnail: "/assets/images/pub4.JPG" },
      ],
    },
  ],
};

const Publications = () => {
  const { t } = useTranslation();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const openGallery = (section, index) => {
    setGalleryImages(section.photos);
    setStartIndex(index);
    setGalleryOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    document.body.style.overflow = "auto";
  };

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
            {t("header.publications")}
          </h1>
        </div>
      </div>

      {PUBLICATIONS_DATA.sections.map((section) => (
        <div key={section.id} className="mb-24">
          <h3 className="text-2xl font-medium text-center mb-6">{t(section.name)}</h3>
          <div
            className={`grid gap-6 ${section.photos.length === 3 ? "grid-cols-3 max-md:grid-cols-1" :
                section.photos.length === 4 ? "grid-cols-4 max-md:grid-cols-1" :
                  section.photos.length === 6 ? "grid-cols-3 max-md:grid-cols-1" :
                    "grid-cols-2 max-md:grid-cols-1"
              }`}
          >

            {section.photos.map((photo, index) => (
              <div
                key={photo.id}
                className="cursor-pointer"
                onClick={() => openGallery(section, index)}
              >
                <img
                  src={photo.thumbnail}
                  alt="Collaboration Image"
                  className="w-full h-full max-h-[400px] object-contain  hover:opacity-80 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      ))}



      {galleryOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 h-screen"
          onClick={closeGallery}
        >
          <div className="relative w-full h-screen max-w-6xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeGallery}
              className="absolute top-4 right-6 text-white text-4xl cursor-pointer z-10"
            >
              &times;
            </button>
            <ImageGallery
              items={galleryImages}
              startIndex={startIndex}
              showFullscreenButton={false}
              showThumbnails={false}
              showPlayButton={false}
              showBullets={false}
              additionalClass="w-full h-full"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Publications;
