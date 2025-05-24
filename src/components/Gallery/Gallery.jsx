import React, { useEffect, useState } from "react";
import ArtworkCard from "./ArtworkCard";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import './Gallery.css';

const STATIC_ARTWORKS = [
    {
        id: "1",
        title_en: "Petroleum 1",
        title_ru: "Petroleum 1",
        image_url: "/assets/images/petroleum/pet1_1.PNG",
        wall_image_url: "/assets/images/petroleum/pet1_2.JPG",
        dimensions: "100x100x4",
        medium_en: "Flax, Petroleum",
        medium_ru: "Лён, Нефть",
        year: "2025",
    },
    {
        id: "2",
        title_en: "Petroleum 2",
        title_ru: "Petroleum 2",
        image_url: "/assets/images/petroleum/pet2_1.JPG",
        wall_image_url: "/assets/images/petroleum/pet2_2.JPG",
        dimensions: "100x100x4",
        medium_en: "Flax, Petroleum",
        medium_ru: "Лён, Нефть",
        year: "2025",
    },
    {
        id: "3",
        title_en: "Petroleum 3",
        title_ru: "Petroleum 3",
        image_url: "/assets/images/petroleum/pet3_1.JPG",
        wall_image_url: "/assets/images/petroleum/pet3_2.JPG",
        dimensions: "100x100x4",
        medium_en: "Flax, Petroleum",
        medium_ru: "Лён, Нефть",
        year: "2025",
    },
    {
        id: "4",
        title_en: "Petroleum 4",
        title_ru: "Petroleum 4",
        image_url: "/assets/images/petroleum/pet4_1.PNG",
        wall_image_url: "/assets/images/petroleum/pet4_2.JPG",
        dimensions: "100x100x4",
        medium_en: "Flax, Petroleum",
        medium_ru: "Лён, Нефть",
        year: "2025",
    },
    {
        id: "5",
        title_en: "Petroleum 5",
        title_ru: "Petroleum 5",
        image_url: "/assets/images/petroleum/pet5_1.PNG",
        wall_image_url: "/assets/images/petroleum/pet5_2.JPG",
        dimensions: "100x100x4",
        medium_en: "Flax, Petroleum",
        medium_ru: "Лён, Нефть",
        year: "2025",
    },
    {
        id: "6",
        title_en: "Petroleum 6",
        title_ru: "Petroleum 6",
        image_url: "/assets/images/petroleum/pet6_1.PNG",
        wall_image_url: "/assets/images/petroleum/pet6_2.JPG",
        dimensions: "100x100x4",
        medium_en: "Flax, Petroleum",
        medium_ru: "Лён, Нефть",
        year: "2025",
    },
    {
        id: "7",
        title_en: "Petroleum 7",
        title_ru: "Petroleum 7",
        image_url: "/assets/images/petroleum/pet7_1.JPG",
        wall_image_url: "/assets/images/petroleum/pet7_2.JPG",
        dimensions: "100x100x4",
        medium_en: "Flax, Petroleum",
        medium_ru: "Лён, Нефть",
        year: "2025",
    },
    {
        id: "8",
        title_en: "Petroleum 8",
        title_ru: "Petroleum 8",
        image_url: "/assets/images/petroleum/pet8_1.JPG",
        wall_image_url: "/assets/images/petroleum/pet8_2.JPG",
        dimensions: "100x100x4",
        medium_en: "Flax, Petroleum",
        medium_ru: "Лён, Нефть",
        year: "2025",
    },
    {
        id: "9",
        title_en: "Petroleum 9",
        title_ru: "Petroleum 9",
        image_url: "/assets/images/petroleum/pet9_1.JPG",
        wall_image_url: "/assets/images/petroleum/pet9_2.JPG",
        dimensions: "100x100x4",
        medium_en: "Flax, Petroleum",
        medium_ru: "Лён, Нефть",
        year: "2025",
    },
    {
        id: "10",
        title_en: "Petroleum 10",
        title_ru: "Petroleum 10",
        image_url: "/assets/images/petroleum/pet10_1.JPG",
        wall_image_url: "/assets/images/petroleum/pet10_2.JPG",
        dimensions: "100x100x4",
        medium_en: "Flax, Petroleum",
        medium_ru: "Лён, Нефть",
        year: "2025",
    },
    {
        id: "11",
        title_en: "Petroleum 11",
        title_ru: "Petroleum 11",
        image_url: "/assets/images/petroleum/pet11_1.PNG",
        wall_image_url: "/assets/images/petroleum/pet11_2.jpg",
        dimensions: "100x100x4",
        medium_en: "Flax, Petroleum",
        medium_ru: "Лён, Нефть",
        year: "2025",
    },
    {
        id: "12",
        title_en: "Petroleum 12",
        title_ru: "Petroleum 12",
        image_url: "/assets/images/petroleum/pet12_1.PNG",
        wall_image_url: "/assets/images/petroleum/pet12_2.JPG",
        dimensions: "100x100x4",
        medium_en: "Flax, Petroleum",
        medium_ru: "Лён, Нефть",
        year: "2025",
    },
    {
        id: "13",
        title_en: "Petroleum 13",
        title_ru: "Petroleum 13",
        image_url: "/assets/images/petroleum/pet13_1.PNG",
        wall_image_url: "/assets/images/petroleum/pet13_2.JPG",
        dimensions: "100x100x4",
        medium_en: "Flax, Petroleum",
        medium_ru: "Лён, Нефть",
        year: "2025",
    },
    {
        id: "14",
        title_en: "Petroleum 14",
        title_ru: "Petroleum 14",
        image_url: "/assets/images/petroleum/pet14_1.JPG",
        wall_image_url: "/assets/images/petroleum/pet14_2.JPG",
        dimensions: "100x100x4",
        medium_en: "Flax, Petroleum",
        medium_ru: "Лён, Нефть",
        year: "2025",
    },
    {
        id: "15",
        title_en: "Petroleum 15",
        title_ru: "Petroleum 15",
        image_url: "/assets/images/petroleum/pet15_1.PNG",
        wall_image_url: "/assets/images/petroleum/pet15_2.JPG",
        dimensions: "100x100x4",
        medium_en: "Flax, Petroleum",
        medium_ru: "Лён, Нефть",
        year: "2025",
    },
    {
        id: "16",
        title_en: "Petroleum 16",
        title_ru: "Petroleum 16",
        image_url: "/assets/images/petroleum/pet16_1.JPG",
        wall_image_url: "/assets/images/petroleum/pet16_2.JPG",
        dimensions: "100x100x4",
        medium_en: "Flax, Petroleum",
        medium_ru: "Лён, Нефть",
        year: "2025",
    },
    {
        id: "17",
        title_en: "Petroleum 17",
        title_ru: "Petroleum 17",
        image_url: "/assets/images/petroleum/pet17_1.PNG",
        wall_image_url: "/assets/images/petroleum/pet17_2.JPG",
        dimensions: "100x100x4",
        medium_en: "Flax, Petroleum",
        medium_ru: "Лён, Нефть",
        year: "2025",
    },
    {
        id: "18",
        title_en: "Petroleum 18",
        title_ru: "Petroleum 18",
        image_url: "/assets/images/petroleum/pet18_1.PNG",
        wall_image_url: "/assets/images/petroleum/pet18_2.JPG",
        dimensions: "100x100x4",
        medium_en: "Flax, Petroleum",
        medium_ru: "Лён, Нефть",
        year: "2025",
    },
    {
        id: "19",
        title_en: "Petroleum 19",
        title_ru: "Petroleum 19",
        image_url: "/assets/images/petroleum/pet19_1.JPG",
        wall_image_url: "/assets/images/petroleum/pet19_2.JPG",
        dimensions: "100x100x4",
        medium_en: "Flax, Petroleum",
        medium_ru: "Лён, Нефть",
        year: "2025",
    },
    {
        id: "20",
        title_en: "Petroleum 20",
        title_ru: "Petroleum 20",
        image_url: "/assets/images/petroleum/pet20_1.PNG",
        wall_image_url: "/assets/images/petroleum/pet20_2.JPG",
        dimensions: "100x100x4",
        medium_en: "Flax, Petroleum",
        medium_ru: "Лён, Нефть",
        year: "2025",
    },
];

const STATIC_IMAGES = [
    { id: "static1", url: "/assets/images/petroleum/pet1.JPG", alt: "petroleumPaintings.image.firstAlt" },
    { id: "static2", url: "/assets/images/petroleum/pet2.JPG", alt: "petroleumPaintings.image.secondAlt" },
    { id: "static3", url: "/assets/images/petroleum/pet3.JPG", alt: "petroleumPaintings.image.fullWidth1Alt" },
    { id: "static4", url: "/assets/images/petroleum/pet4.JPG", alt: "petroleumPaintings.image.fullWidth2Alt" },
];

const Gallery = () => {
    const { t, i18n } = useTranslation();
    const [artworks, setArtworks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [galleryImages, setGalleryImages] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [imageCache, setImageCache] = useState({});

    const fetchArtworksFromConstant = async () => {
        try {
            setArtworks(STATIC_ARTWORKS);
            await preloadImages(STATIC_ARTWORKS.concat(STATIC_IMAGES));
        } catch {
            setError(t('petroleumPaintings.error.loadingData'));
        } finally {
            setLoading(false);
        }
    };

    const preloadImages = async (data) => {
        const cache = {};
        await Promise.all(
            data.map(async (item) => {
                const urls = item.url ? [item.url] : [item.image_url, item.wall_image_url];
                for (const url of urls) {
                    if (url) {
                        const img = new Image();
                        img.src = url;
                        await new Promise((resolve) => {
                            img.onload = resolve;
                            img.onerror = resolve;
                        });
                        cache[item.id || `artwork_${item.image_url}`] = url;
                    }
                }
            })
        );
        setImageCache(cache);
    };

    const getAllImages = () => {
        const images = [];
        STATIC_IMAGES.forEach((img) => {
            images.push({ original: img.url, thumbnail: img.url });
        });
        STATIC_ARTWORKS.forEach((artwork) => {
            images.push({ original: artwork.image_url, thumbnail: artwork.image_url });
            images.push({ original: artwork.wall_image_url, thumbnail: artwork.wall_image_url });
        });
        return images;
    };

    const openGallery = (imageId, isStatic = false) => {
        const allImages = getAllImages();
        let index = 0;
        if (isStatic) {
            index = STATIC_IMAGES.findIndex((img) => img.id === imageId);
        } else {
            const artworkIndex = STATIC_ARTWORKS.findIndex((artwork) => artwork.id === imageId);
            index = STATIC_IMAGES.length + artworkIndex * 2; // Each artwork contributes 2 images
        }
        setGalleryImages(allImages);
        setStartIndex(index);
        setGalleryOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeGallery = () => {
        setGalleryOpen(false);
        document.body.style.overflow = "auto";
    };

    useEffect(() => {
        fetchArtworksFromConstant();
    }, [t]);

    return (
        <motion.div className="mx-auto px-6 py-12"
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
                <div className="bg-white border-6 border-black flex items-center justify-center">
                    <h1 className="text-3xl font-regular uppercase text-center px-4 py-2 w-full">
                        {t("header.petroleumPaintings")}
                    </h1>
                </div>
            </div>

            <div className="text-left mb-8 w-full">
                <h1 className="text-3xl font-regular uppercase w-full">
                    {t('petroleumPaintings.header.title')}
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-8 w-full">
                {STATIC_IMAGES.slice(0, 2).map((img) => (
                    <img
                        key={img.id}
                        src={img.url}
                        alt={t(img.alt)}
                        className="w-full h-auto object-cover cursor-pointer"
                        onClick={() => openGallery(img.id, true)}
                    />
                ))}
            </div>

            <p className="font-bold text-2xl mb-4 w-full">{t('petroleumPaintings.text.boldParagraph1')}</p>
            <p className="text-2xl mb-4 w-full">{t('petroleumPaintings.text.regularParagraph1')}</p>
            <p className="text-2xl mb-4 w-full">{t('petroleumPaintings.text.regularParagraph2')}</p>
            <p className="font-bold text-2xl mb-4 w-full">{t('petroleumPaintings.text.boldParagraph2')}</p>

            <ul className="list-disc list-inside mb-8 w-full">
                <li className="text-2xl">{t('petroleumPaintings.list.item1')}</li>
                <li className="text-2xl">{t('petroleumPaintings.list.item2')}</li>
            </ul>

            <img
                src={STATIC_IMAGES[2].url}
                alt={t(STATIC_IMAGES[2].alt)}
                className="w-full h-auto object-cover mb-8 cursor-pointer"
                onClick={() => openGallery(STATIC_IMAGES[2].id, true)}
            />

            <p className="font-bold text-2xl mb-4 w-full">{t('petroleumPaintings.text.boldParagraph3')}</p>
            <p className="text-2xl mb-8 w-full">{t('petroleumPaintings.text.regularParagraph3')}</p>

            <img
                src={STATIC_IMAGES[3].url}
                alt={t(STATIC_IMAGES[3].alt)}
                className="w-full h-auto object-cover mb-8 cursor-pointer"
                onClick={() => openGallery(STATIC_IMAGES[3].id, true)}
            />

            <p className="text-2xl mb-4 w-full">{t('petroleumPaintings.text.regularParagraph4')}</p>
            <p className="text-2xl mb-8 w-full">{t('petroleumPaintings.text.regularParagraph5')}</p>

            <div className="gallery-container">
                {error && <p className="text-red-500 text-center">{error}</p>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {artworks.map((artwork) => (
                        <div key={artwork.id} className="w-full cursor-pointer" onClick={() => openGallery(artwork.id)}>
                            <ArtworkCard artwork={artwork} />
                        </div>
                    ))}
                </div>
            </div>

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
                            ×
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

export default Gallery;