import React from "react";
import { useTranslation } from "react-i18next";

const ArtworkCard = ({ artwork }) => {
  const { i18n } = useTranslation();

  const isLoading = !artwork || !artwork.title_ru || !artwork.title_en || !artwork.image_url;

  // Select title and description based on current language
  const title = i18n.language === "en" ? artwork.title_en : artwork.title_ru;
  const description = i18n.language === "en" ? artwork.description_en : artwork.description_ru;

  return (
    <div className="overflow-hidden bg-transparent">
      <div className="w-full flex justify-start items-center">
        {isLoading ? (
          <div className="w-full max-h-100 bg-gray-200 animate-shimmer rounded"></div>
        ) : (
          <img
            src={artwork.image_url}
            alt={i18n.language === "en" ? artwork.title_en : artwork.title_ru}
            className="w-full max-h-100 object-contain"
          />
        )}
      </div>
      <div className="w-full flex items-end pb-4">
        <div className="text-black text-left">
          {isLoading ? (
            <div className="space-y-2">
              <div className="h-6 bg-gray-200 animate-shimmer rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 animate-shimmer rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 animate-shimmer rounded w-2/3"></div>
              <div className="h-4 bg-gray-200 animate-shimmer rounded w-1/2"></div>
            </div>
          ) : (
            <>
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="text-sm mt-1">{description}</p>
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