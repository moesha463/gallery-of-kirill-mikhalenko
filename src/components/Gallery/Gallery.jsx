import React, { useEffect, useState } from "react";
import ArtworkCard from "./ArtworkCard";

import './Artworks.css'

const apiUrl = "https://script.google.com/macros/s/AKfycbzSKjkpbkqSph1sEpZwR2EzdbY7c88pvIauK_FlOdMDQTDJQZURzP1s47vPpIq4tCZH/exec";

const Gallery = () => {
    const [artworks, setArtworks] = useState([]);
    const [error, setError] = useState(null);
    const [imageCache, setImageCache] = useState({});

    useEffect(() => {
        const preloadImages = async (data) => {
            const cache = {};
            await Promise.all(data.map(async (artwork) => {
                if (artwork.image_url) {
                    const img = new Image();
                    img.src = artwork.image_url;
                    await new Promise((resolve) => {
                        img.onload = resolve;
                        img.onerror = resolve; // Resolve even on error to avoid hanging
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
                    preloadImages(data); // Start preloading images
                }
            })
            .catch(() => {
                setError("Ошибка загрузки данных");
            });
    }, []);

    if (error) return <p className="text-center text-red-500">Ошибка: {error}</p>;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {artworks.map((artwork) => (
                    <ArtworkCard key={artwork.id} artwork={artwork} />
                ))}
            </div>
        </div>
    );
};

export default Gallery;