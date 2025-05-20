import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import './Collaborations.css'

const COLLABORATION_DATA = {
  sections: [
    {
      id: 1,
      name: "NFT Factory",
      photos: [
        { id: 101, original: "/assets/images/col1.jpg", thumbnail: "/assets/images/col1.jpg" },
        { id: 102, original: "/assets/images/col2.jpg", thumbnail: "/assets/images/col2.jpg" },
        { id: 103, original: "/assets/images/col3.jpg", thumbnail: "/assets/images/col3.jpg" },
        { id: 104, original: "/assets/images/col4.jpg", thumbnail: "/assets/images/col4.jpg" },
      ],
    },
  ],
};

const Collaborations = () => {
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
    <div className="container mx-auto px-6 py-12">
      <div className="flex justify-center mb-12">
        <div className="bg-white border-6 border-black flex items-center justify-center">
          <h1 className="text-3xl font-regular uppercase text-center px-4 py-2">
            {t("header.collaboration")}
          </h1>
        </div>
      </div>

      {COLLABORATION_DATA.sections.map((section) => (
        <div key={section.id} className="mb-12">
          <h3 className="text-2xl font-medium text-center mb-6">{t('collaboration.paragraph')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {section.photos.map((photo, index) => (
              <div
                key={photo.id}
                className="cursor-pointer"
                onClick={() => openGallery(section, index)}
              >
                <img
                  src={photo.thumbnail}
                  alt="Collaboration Image"
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
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
    </div>
  );
};

export default Collaborations;
