import { useTranslation } from 'react-i18next';
import '../styles/Artwork.css';

function Artwork({ artwork }) {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  return (
    <div className="artwork">
      <img src={artwork.image_url} alt={artwork[`title_${lang}`]} />
      <h2>{artwork[`title_${lang}`]}</h2>
      <p>{artwork[`description_${lang}`]}</p>
      <p><strong>Год:</strong> {artwork.year}</p>
      <p><strong>Техника:</strong> {artwork.technique}</p>
      <p><strong>Размеры:</strong> {artwork.dimensions}</p>
    </div>
  );
}

export default Artwork;