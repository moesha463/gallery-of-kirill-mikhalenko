import React, { useEffect, useState } from "react";
import ArtworkCard from "./ArtworkCard";
import { useTranslation } from "react-i18next";
import './Gallery.css';

const apiUrl = "https://script.google.com/macros/s/AKfycbzSKjkpbkqSph1sEpZwR2EzdbY7c88pvIauK_FlOdMDQTDJQZURzP1s47vPpIq4tCZH/exec";

const STATIC_ARTWORKS = [
    {
        id: "1",
        title_en: "Petroleum 1",
        title_ru: "Petroleum 1",
        image_url: "/assets/images/petroleum/pet1_1.PNG",
        wall_image_url: "/assets/images/petroleum/pet1_2.JPG",
        dimensions: "100x100x4",
        medium: "Oil on canvas",
        year: "2025",
    },
    {
        id: "2",
        title_en: "Petroleum 2",
        title_ru: "Petroleum 2",
        image_url: "/assets/images/petroleum/pet2_1.JPG",
        wall_image_url: "/assets/images/petroleum/pet2_2.JPG",
        dimensions: "100x100x4",
        medium: "Oil on canvas",
        year: "2025",
    },
    {
        id: "3",
        title_en: "Petroleum 3",
        title_ru: "Petroleum 3",
        image_url: "/assets/images/petroleum/pet3_1.JPG",
        wall_image_url: "/assets/images/petroleum/pet3_2.JPG",
        dimensions: "100x100x4",
        medium: "Oil on canvas",
        year: "2025",
    },
    {
        id: "4",
        title_en: "Petroleum 4",
        title_ru: "Petroleum 4",
        image_url: "/assets/images/petroleum/pet4_1.PNG",
        wall_image_url: "/assets/images/petroleum/pet4_2.JPG",
        dimensions: "100x100x4",
        medium: "Oil on canvas",
        year: "2025",
    },
    {
        id: "5",
        title_en: "Petroleum 5",
        title_ru: "Petroleum 5",
        image_url: "/assets/images/petroleum/pet5_1.JPG",
        wall_image_url: "/assets/images/petroleum/pet5_2.JPG",
        dimensions: "100x100x4",
        medium: "Oil on canvas",
        year: "2025",
    },
    {
        id: "6",
        title_en: "Petroleum 6",
        title_ru: "Petroleum 6",
        image_url: "/assets/images/petroleum/pet6_1.PNG",
        wall_image_url: "/assets/images/petroleum/pet6_2.JPG",
        dimensions: "100x100x4",
        medium: "Oil on canvas",
        year: "2025",
    },
    {
        id: "7",
        title_en: "Petroleum 7",
        title_ru: "Petroleum 7",
        image_url: "/assets/images/petroleum/pet7_1.JPG",
        wall_image_url: "/assets/images/petroleum/pet7_2.JPG",
        dimensions: "100x100x4",
        medium: "Oil on canvas",
        year: "2025",
    },
    {
        id: "8",
        title_en: "Petroleum 8",
        title_ru: "Petroleum 8",
        image_url: "/assets/images/petroleum/pet8_1.JPG",
        wall_image_url: "/assets/images/petroleum/pet8_2.JPG",
        dimensions: "100x100x4",
        medium: "Oil on canvas",
        year: "2025",
    },
    {
        id: "9",
        title_en: "Petroleum 9",
        title_ru: "Petroleum 9",
        image_url: "/assets/images/petroleum/pet9_1.JPG",
        wall_image_url: "/assets/images/petroleum/pet9_2.JPG",
        dimensions: "100x100x4",
        medium: "Oil on canvas",
        year: "2025",
    },
    {
        id: "10",
        title_en: "Petroleum 10",
        title_ru: "Petroleum 10",
        image_url: "/assets/images/petroleum/pet10_1.JPG",
        wall_image_url: "/assets/images/petroleum/pet10_2.JPG",
        dimensions: "100x100x4",
        medium: "Oil on canvas",
        year: "2025",
    },
    {
        id: "11",
        title_en: "Petroleum 11",
        title_ru: "Petroleum 11",
        image_url: "/assets/images/petroleum/pet11_1.PNG",
        wall_image_url: "/assets/images/petroleum/pet11_2.jpg",
        dimensions: "100x100x4",
        medium: "Oil on canvas",
        year: "2025",
    },
    {
        id: "12",
        title_en: "Petroleum 12",
        title_ru: "Petroleum 12",
        image_url: "/assets/images/petroleum/pet12_1.PNG",
        wall_image_url: "/assets/images/petroleum/pet12_2.JPG",
        dimensions: "100x100x4",
        medium: "Oil on canvas",
        year: "2025",
    },
    {
        id: "13",
        title_en: "Petroleum 13",
        title_ru: "Petroleum 13",
        image_url: "/assets/images/petroleum/pet13_1.PNG",
        wall_image_url: "/assets/images/petroleum/pet13_2.JPG",
        dimensions: "100x100x4",
        medium: "Oil on canvas",
        year: "2025",
    },
    {
        id: "14",
        title_en: "Petroleum 14",
        title_ru: "Petroleum 14",
        image_url: "/assets/images/petroleum/pet14_1.JPG",
        wall_image_url: "/assets/images/petroleum/pet14_2.JPG",
        dimensions: "100x100x4",
        medium: "Oil on canvas",
        year: "2025",
    },
    {
        id: "15",
        title_en: "Petroleum 15",
        title_ru: "Petroleum 15",
        image_url: "/assets/images/petroleum/pet15_1.PNG",
        wall_image_url: "/assets/images/petroleum/pet15_2.JPG",
        dimensions: "100x100x4",
        medium: "Oil on canvas",
        year: "2025",
    },
    {
        id: "16",
        title_en: "Petroleum 16",
        title_ru: "Petroleum 16",
        image_url: "/assets/images/petroleum/pet16_1.JPG",
        wall_image_url: "/assets/images/petroleum/pet16_2.JPG",
        dimensions: "100x100x4",
        medium: "Oil on canvas",
        year: "2025",
    },
    {
        id: "17",
        title_en: "Petroleum 17",
        title_ru: "Petroleum 17",
        image_url: "/assets/images/petroleum/pet17_1.PNG",
        wall_image_url: "/assets/images/petroleum/pet17_2.JPG",
        dimensions: "100x100x4",
        medium: "Oil on canvas",
        year: "2025",
    },
    {
        id: "18",
        title_en: "Petroleum 18",
        title_ru: "Petroleum 18",
        image_url: "/assets/images/petroleum/pet18_1.PNG",
        wall_image_url: "/assets/images/petroleum/pet18_2.JPG",
        dimensions: "100x100x4",
        medium: "Oil on canvas",
        year: "2025",
    },
    {
        id: "19",
        title_en: "Petroleum 19",
        title_ru: "Petroleum 19",
        image_url: "/assets/images/petroleum/pet19_1.JPG",
        wall_image_url: "/assets/images/petroleum/pet19_2.JPG",
        dimensions: "100x100x4",
        medium: "Oil on canvas",
        year: "2025",
    },
    {
        id: "20",
        title_en: "Petroleum 20",
        title_ru: "Petroleum 20",
        image_url: "/assets/images/petroleum/pet20_1.PNG",
        wall_image_url: "/assets/images/petroleum/pet20_2.JPG",
        dimensions: "100x100x4",
        medium: "Oil on canvas",
        year: "2025",
    },
];

const Gallery = () => {
    const { t } = useTranslation();
    const [artworks, setArtworks] = useState([]);
    const [error, setError] = useState(null);
    const [imageCache, setImageCache] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchArtworksFromApi = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            if (data.error) {
                setError(data.error);
            } else {
                setArtworks(data);
                await preloadImages(data);
            }
        } catch {
            setError(t('petroleumPaintings.error.loadingData'));
        } finally {
            setLoading(false);
        }
    };

    const fetchArtworksFromConstant = async () => {
        try {
            setArtworks(STATIC_ARTWORKS);
            await preloadImages(STATIC_ARTWORKS);
        } catch {
            setError(t('petroleumPaintings.error.loadingData'));
        } finally {
            setLoading(false);
        }
    };

    const preloadImages = async (data) => {
        const cache = {};
        await Promise.all(data.map(async (artwork) => {
            if (artwork.image_url) {
                const img = new Image();
                img.src = artwork.image_url;
                await new Promise((resolve) => {
                    img.onload = resolve;
                    img.onerror = resolve;
                });
                cache[artwork.id] = artwork.image_url;
            }
            if (artwork.wall_image_url) {
                const wallImg = new Image();
                wallImg.src = artwork.wall_image_url;
                await new Promise((resolve) => {
                    wallImg.onload = resolve;
                    wallImg.onerror = resolve;
                });
                cache[`wall_${artwork.id}`] = artwork.wall_image_url;
            }
        }));
        setImageCache(cache);
    };

    useEffect(() => {
        //fetchArtworksFromApi();
        fetchArtworksFromConstant();
    }, [t]);

    return (
        <div className="mx-auto px-6 py-12">
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
                <img
                    src="/assets/images/petroleum/pet1.JPG"
                    alt={t('petroleumPaintings.image.firstAlt')}
                    className="w-full h-auto object-cover"
                />
                <img
                    src="/assets/images/petroleum/pet2.JPG"
                    alt={t('petroleumPaintings.image.secondAlt')}
                    className="w-full h-auto object-cover"
                />
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
                src="/assets/images/petroleum/pet3.JPG"
                alt={t('petroleumPaintings.image.fullWidth1Alt')}
                className="w-full h-auto object-cover mb-8"
            />

            <p className="font-bold text-2xl mb-4 w-full">{t('petroleumPaintings.text.boldParagraph3')}</p>
            <p className="text-2xl mb-8 w-full">{t('petroleumPaintings.text.regularParagraph3')}</p>

            <img
                src="/assets/images/petroleum/pet4.JPG"
                alt={t('petroleumPaintings.image.fullWidth2Alt')}
                className="w-full h-auto object-cover  mb-8"
            />

            <p className="text-2xl mb-4 w-full">{t('petroleumPaintings.text.regularParagraph4')}</p>
            <p className="text-2xl mb-8 w-full">{t('petroleumPaintings.text.regularParagraph5')}</p>

            <div className="gallery-container">
                {loading ? (
                    <div className="page-loader">
                        <div className="progress-bar"></div>
                    </div>
                ) : error ? (
                    <p className="text-red-500 text-center">{error}</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {artworks.map((artwork) => (
                            <div key={artwork.id} className="w-full">
                                <ArtworkCard artwork={artwork} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );

};

export default Gallery;