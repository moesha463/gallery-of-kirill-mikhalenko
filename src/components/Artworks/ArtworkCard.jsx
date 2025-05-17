import React, { useState } from "react";

const ArtworkCard = ({ artwork }) => {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className="rounded-lg overflow-hidden bg-transparent">
            <div className="w-full flex justify-start items-center">
                <img
                    src={imageError ? "https://via.placeholder.com/400x300?text=Image+Not+Found" : artwork.image_url}
                    alt={artwork.title_en}
                    className="w-full max-h-100 object-contain"
                    onError={handleImageError}
                />
            </div>
            <div className="w-full flex items-end pb-4">
                <div className="text-black text-left">
                    <h2 className="text-lg font-semibold">
                        {artwork.title_ru}
                    </h2>
                    <p className="text-sm mt-1">{artwork.description_ru}</p>
                    <p className="text-sm mt-1">{artwork.mediums}</p>
                    <p className="text-sm mt-1">{artwork.dimensions}</p>
                </div>
            </div>
        </div>
    );
};

export default ArtworkCard;