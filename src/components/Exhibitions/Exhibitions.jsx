import { useState } from "react";
import { useTranslation } from "react-i18next";

const EXHIBITION_DATA = {
  sections: [
    {
      id: 1,
      name: "NFT Factory",
      photos: [
        {
          id: 101,
          src: "/assets/images/IMG_2457.JPG",
          alt: "Modern Art Piece 1",
          description: "Выставка в Париже, Галерея NFT Factory.",
        },
        {
          id: 102,
          src: "/assets/images/IMG_2458.JPG",
          alt: "Modern Art Piece 2",
          description: "Галерея находится напротив Центра Помпиду 2023.",
        },
        {
          id: 103,
          src: "/assets/images/IMG_2459.JPG",
          alt: "Modern Art Piece 2",
          description: "Выставил свое одно цифровое искусство NFT на платформе SuperRare, созданное в первые месяцы жизни в Париже.",
        },
        {
          id: 104,
          src: "/assets/images/IMG_2460.JPG",
          alt: "Modern Art Piece 2",
          description: "Галерея NFT Factory",
        },
      ],
    },
    {
      id: 2,
      name: "Classical Art",
      photos: [
        {
          id: 201,
          src: "/images/classical-art-1.jpg",
          alt: "Classical Art Piece 1",
          description: "A 19th-century portrait of a noble family.",
        },
        {
          id: 202,
          src: "/images/classical-art-2.jpg",
          alt: "Classical Art Piece 2",
          description: "Romantic landscape from the Renaissance period.",
        },
      ],
    },
  ],
};

const Modal = ({ isOpen, onClose, photo }) => {
  if (!isOpen || !photo) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-3xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-2xl"
        >
          &times;
        </button>
        <img
          src={photo.src}
          alt={photo.alt}
          className="w-full h-auto max-h-[60vh] object-contain mb-4"
        />
        <p className="text-lg">{photo.description}</p>
      </div>
    </div>
  );
};

const Exhibitions = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex justify-center mb-12">
        <div className="bg-white border-6 border-black flex items-center justify-center">
          <h1 className="text-3xl font-regular uppercase text-center px-4 py-2">
            {t("header.exhibitions")}
          </h1>
        </div>
      </div>

      {EXHIBITION_DATA.sections.map((section) => (
        <div key={section.id} className="mb-12">
          <h3 className="text-xl font-medium text-center mb-6">
            {section.name}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {section.photos.map((photo) => (
              <div
                key={photo.id}
                className="cursor-pointer"
                onClick={() => openModal(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        photo={selectedPhoto}
      />
    </div>
  );
};

export default Exhibitions;