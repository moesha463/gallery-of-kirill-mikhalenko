import React, { useState } from "react";

const ArtworkCard = ({ artwork }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const isLoading = !artwork || !artwork.title_ru || !artwork.image_url;

  return (
    <div className="overflow-hidden bg-transparent">
      <div className="w-full flex justify-start items-center">
        {isLoading ? (
          <div className="w-full max-h-100 bg-gray-200 animate-shimmer rounded"></div>
        ) : (
          <img
            src={imageError ? "https://via.placeholder.com/400x300?text=Image+Not+Found" : artwork.image_url}
            alt={artwork.title_en}
            className="w-full max-h-100 object-contain"
            onError={handleImageError}
          />
        )}
      </div>
      <div className="w-full flex items-end pb-4">
        <div className="text-black text-left">
          {isLoading ? (
            <div className="space-y-2">
              <div className="h-6 bg-gray-200 animate-shimmer rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 animate-shimmer rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 animate-gray-200 animate-shimmer rounded w-2/3"></div>
              <div className="h-4 bg-gray-200 animate-shimmer rounded w-1/2"></div>
            </div>
          ) : (
            <>
              <h2 className="text-lg font-semibold">{artwork.title_ru}</h2>
              <p className="text-sm mt-1">{artwork.description_ru}</p>
              <p className="text-sm mt-1">{artwork.mediums}</p>
              <p className="text-sm mt-1">{artwork.dimensions}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;