import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Gallery.css';

function Gallery() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    axios.get('https://script.google.com/macros/s/AKfycbyoGrZ4Ke29I-ODleArUysUlqPRCHu0Fpex4d4BOPxyNJNuu9ICRFWkLG-3y-Ie2iw/exec')
      .then(response => {
        console.log('Fetched artworks:', response.data);
        setArtworks(Array.isArray(response.data) ? response.data : []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        console.error('Response:', error.response);
        console.error('Request:', error.request);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Загрузка работ...</div>;
  }

  if (error) {
    return <div>Ошибка загрузки: {error}</div>;
  }

  if (artworks.length === 0) {
    return <div>Работы отсутствуют</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="gallery"
    >
      {artworks.map(artwork => (
        <motion.div
          key={artwork.id}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="artwork-card"
        >
          <Link to={`/artworks/${artwork.id}`}>
            <img
              src={artwork.image_url}
              alt={artwork[`title_${i18n.language}`] || 'Artwork'}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/150'; // Запасное изображение
                console.error('Image load error:', artwork.image_url);
              }}
            />
            <h3>{artwork[`title_${i18n.language}`] || 'Без названия'}</h3>
            <p>{artwork.year || 'Не указан'}</p>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Gallery;