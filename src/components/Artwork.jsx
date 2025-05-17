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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('YOUR_NEW_GOOGLE_APPS_SCRIPT_URL')
      .then(response => {
        console.log('Fetched artworks:', response.data);
        const found = response.data.find(a => a.id === id); // Сравнение строк
        setArtwork(found);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        console.error('Response:', error.response);
        console.error('Request:', error.request);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  if (!artwork) {
    return <div>Картина не найдена</div>;
  }

  return (
    <div>
      <Helmet>
        <title>{artwork[`title_${i18n.language}`] || 'Картина'} - Кирилл Михаленко</title>
        <meta name="description" content={artwork[`description_${i18n.language}`] || ''} />
        <html lang={i18n.language} />
      </Helmet>
      <Artwork artwork={artwork} />
    </div>
  );
}

export default ArtworkDetail;