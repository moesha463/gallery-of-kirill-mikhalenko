import React, { useEffect, useState } from "react";
import ArtworkCard from "./ArtworkCard";
import { useTranslation } from "react-i18next";
import './Gallery.css';

const apiUrl = "https://script.google.com/macros/s/AKfycbzSKjkpbkqSph1sEpZwR2EzdbY7c88pvIauK_FlOdMDQTDJQZURzP1s47vPpIq4tCZH/exec";

const Gallery = () => {
    const { t } = useTranslation();

    const [artworks, setArtworks] = useState([]);
    const [error, setError] = useState(null);
    const [imageCache, setImageCache] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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
            }));
            setImageCache(cache);
        };

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                } else {
                    setArtworks(data);
                    preloadImages(data);
                }
                setLoading(false);
            })
            .catch(() => {
                setError("Ошибка загрузки данных");
                setLoading(false);
            });
    }, []);

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="flex justify-center mb-12">
                <div className="bg-white border-6 border-black flex items-center justify-center">
                    <h1 className="text-3xl font-regular uppercase text-center px-4 py-2">
                        {t('header.petroleumPaintings')}
                    </h1>
                </div>
            </div>
            <div className="gallery-container">
                {loading ? (
                    <div className="page-loader">
                        <div className="progress-bar"></div>
                    </div>
                ) : (
                    <div className="grid-container">
                        {artworks.map((artwork) => (
                            <ArtworkCard key={artwork.id} artwork={artwork} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;
