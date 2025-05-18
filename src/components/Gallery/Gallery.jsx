import React, { useEffect, useState } from "react";
import ArtworkCard from "./ArtworkCard";
import './Gallery.css';

const apiUrl = "https://script.google.com/macros/s/AKfycbzSKjkpbkqSph1sEpZwR2EzdbY7c88pvIauK_FlOdMDQTDJQZURzP1s47vPpIq4tCZH/exec";

const Gallery = () => {
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
    );
};

export default Gallery;
