import React, { useEffect, useState } from "react";
import ArtworkCard from "./ArtworkCard";

const apiUrl = "https://script.google.com/macros/s/AKfycbzSKjkpbkqSph1sEpZwR2EzdbY7c88pvIauK_FlOdMDQTDJQZURzP1s47vPpIq4tCZH/exec";

const Artworks = () => {
    const [artworks, setArtworks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                } else {
                    setArtworks(data);
                }
                setLoading(false);
            })
            .catch(() => {
                setError("Ошибка загрузки данных");
                setLoading(false);
            });
    }, []);

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
    );
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

export default Artworks;