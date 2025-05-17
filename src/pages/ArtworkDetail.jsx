import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Artwork from '../components/Artwork';

function ArtworkDetail() {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    axios.get('https://script.google.com/macros/s/AKfycbyoGrZ4Ke29I-ODleArUysUlqPRCHu0Fpex4d4BOPxyNJNuu9ICRFWkLG-3y-Ie2iw/exec')
      .then(response => {
        const found = response.data.find(a => a.id === id);
        setArtwork(found);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!artwork) return <div>Картина не найдена</div>;

  return (
    <div>
      <Helmet>
        <title>{artwork[`title_${i18n.language}`]} - Кирилл Михаленко</title>
        <meta name="description" content={artwork[`description_${i18n.language}`]} />
        <html lang={i18n.language} />
      </Helmet>
      <Artwork artwork={artwork} />
    </div>
  );
}

export default ArtworkDetail;