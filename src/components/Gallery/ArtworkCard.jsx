import React from "react";
import { useTranslation } from "react-i18next";

const ArtworkCard = ({ artwork }) => {
  const { i18n } = useTranslation();

  // Check if artwork data is incomplete
  const isLoading = !artwork || !artwork.title_en || !artwork.title_ru || !artwork.image_url;


  // Select title based on current language
  const title = i18n.language === "en" ? artwork.title_en : artwork.title_ru;
  const medium = i18n.language === 'en' ? artwork.medium_en : artwork.medium_ru;

  if (isLoading) {
    return (
      <div className="overflow-hidden bg-transparent">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 w-1/2">
            <div className="w-full h-64 bg-gray-200 animate-shimmer rounded"></div>
            <div className="text-center mt-2 space-y-2">
              <div className="h-6 bg-gray-200 animate-shimmer rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-gray-200 animate-shimmer rounded w-2/3 mx-auto"></div>
            </div>
          </div>
          <div className="flex-1 w-1/2">
            <div className="w-full h-64 bg-gray-200 animate-shimmer rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden bg-transparent">
      <div className="flex flex-row gap-20">
        <div className="flex-1 w-1/2 flex flex-col">
          <img
            src={artwork.image_url}
            alt={title}
            className="w-full h-auto object-cover"
          />
          <div className="text-center mt-2">
            <p className="font-bold text-2xl">{title}</p>
            <p className="text-xl">{`${artwork.dimensions}`}</p>
            <p className="text-xl">{`${medium}`}</p>
            <p className="text-xl">{`${artwork.year}`}</p>
          </div>
        </div>
        <div className="flex-1 w-1/2">
          {artwork.wall_image_url ? (
            <img
              src={artwork.wall_image_url}
              alt={`${title} ${i18n.t('petroleumPaintings.image.onWall')}`}
              className="w-full h-auto object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <p className="text-gray-500">{i18n.t('petroleumPaintings.image.noWallImage')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;