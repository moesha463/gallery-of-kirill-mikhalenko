import React, { useEffect, useState } from "react";
import ArtworkCard from "./ArtworkCard";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import './Gallery.css';

const Gallery = () => {
    const { t, i18n } = useTranslation();
    const [artworks, setArtworks] = useState([]);
    const [staticImages, setStaticImages] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [galleryImages, setGalleryImages] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [imageCache, setImageCache] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const artworksSnap = await getDocs(collection(db, "galleryArtworks"));
                const artworksData = artworksSnap.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    title: i18n.language === "ru" ? doc.data().title_ru : doc.data().title_en,
                    medium: i18n.language === "ru" ? doc.data().medium_ru : doc.data().medium_en,
                }));
                setArtworks(artworksData);

                // Fetch static images
                const staticImagesSnap = await getDocs(collection(db, "galleryStaticImages"));
                const staticImagesData = staticImagesSnap.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setStaticImages(staticImagesData);

                // Preload images
                await preloadImages([...artworksData, ...staticImagesData]);
            } catch (err) {
                setError(t('petroleumPaintings.error.loadingData'));
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [t, i18n.language]);

    const preloadImages = async (data) => {
        const cache = {};
        await Promise.all(
            data.map(async (item) => {
                const urls = item.url
                    ? [item.url]
                    : [item.image_url, item.wall_image_url].filter(Boolean);
                for (const url of urls) {
                    const img = new Image();
                    img.src = url;
                    await new Promise((resolve) => {
                        img.onload = resolve;
                        img.onerror = resolve;
                    });
                    cache[item.id || `artwork_${url}`] = url;
                }
            })
        );
        setImageCache(cache);
    };

    const getAllImages = () => {
        const images = [];
        staticImages.forEach((img) => {
            images.push({ original: img.url, thumbnail: img.url });
        });
        artworks.forEach((artwork) => {
            images.push({ original: artwork.image_url, thumbnail: artwork.image_url });
            images.push({
                original: artwork.wall_image_url,
                thumbnail: artwork.wall_image_url,
            });
        });
        return images;
    };

    const openGallery = (imageId, isStatic = false) => {
        const allImages = getAllImages();
        let index = 0;
        if (isStatic) {
            index = staticImages.findIndex((img) => img.id === imageId);
        } else {
            const artworkIndex = artworks.findIndex((artwork) => artwork.id === imageId);
            index = staticImages.length + artworkIndex * 2;
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

    return (
        <motion.div
            className="mx-auto px-6 py-12"
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
                    {t("petroleumPaintings.header.title")}
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-8 w-full">
                {staticImages.slice(0, 2).map((img) => (
                    <img
                        key={img.id}
                        src={img.url}
                        alt={t(img.alt)}
                        className="w-full h-auto object-cover cursor-pointer"
                        onClick={() => openGallery(img.id, true)}
                    />
                ))}
            </div>

            <p className="font-bold text-2xl mb-4 w-full">
                {t("petroleumPaintings.text.boldParagraph1")}
            </p>
            <p className="text-2xl mb-4 w-full">
                {t("petroleumPaintings.text.regularParagraph1")}
            </p>
            <p className="text-2xl mb-4 w-full">
                {t("petroleumPaintings.text.regularParagraph2")}
            </p>
            <p className="font-bold text-2xl mb-4 w-full">
                {t("petroleumPaintings.text.boldParagraph2")}
            </p>

            <ul className="list-disc list-inside mb-8 w-full">
                <li className="text-2xl">{t("petroleumPaintings.list.item1")}</li>
                <li className="text-2xl">{t("petroleumPaintings.list.item2")}</li>
            </ul>

            {staticImages[2] && (
                <img
                    src={staticImages[2].url}
                    alt={t(staticImages[2].alt)}
                    className="w-full h-auto object-cover mb-8 cursor-pointer"
                    onClick={() => openGallery(staticImages[2].id, true)}
                />
            )}

            <p className="font-bold text-2xl mb-4 w-full">
                {t("petroleumPaintings.text.boldParagraph3")}
            </p>
            <p className="text-2xl mb-8 w-full">
                {t("petroleumPaintings.text.regularParagraph3")}
            </p>

            {staticImages[3] && (
                <img
                    src={staticImages[3].url}
                    alt={t(staticImages[3].alt)}
                    className="w-full h-auto object-cover mb-8 cursor-pointer"
                    onClick={() => openGallery(staticImages[3].id, true)}
                />
            )}

            <p className="text-2xl mb-4 w-full">
                {t("petroleumPaintings.text.regularParagraph4")}
            </p>
            <p className="text-2xl mb-8 w-full">
                {t("petroleumPaintings.text.regularParagraph5")}
            </p>

            <div className="gallery-container">
                {error && <p className="text-red-500 text-center">{error}</p>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {artworks.map((artwork) => (
                        <div
                            key={artwork.id}
                            className="w-full cursor-pointer"
                            onClick={() => openGallery(artwork.id)}
                        >
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
                    <div
                        class="relative w-full h-screen max-w-6xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
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