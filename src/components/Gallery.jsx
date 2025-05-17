import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Gallery.css';

function Gallery() {
  const [artworks, setArtworks] = useState([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    axios.get('https://script.google.com/macros/s/AKfycbwy-FvF8MkP-oeJ75OkLbfFan2Ch1JWUkjEV23QFTvycCl3LbK-opjXB7JOYc50dVQQ/exec')
      .then(response => setArtworks(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

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
            <img src={artwork.image_url} alt={artwork[`title_${i18n.language}`]} />
            <h3>{artwork[`title_${i18n.language}`]}</h3>
            <p>{artwork.year}</p>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Gallery;