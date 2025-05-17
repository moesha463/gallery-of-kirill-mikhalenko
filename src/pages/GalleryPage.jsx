import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Gallery from '../components/Gallery';

function GalleryPage() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>{t('gallery')} - {t('title')}</title>
        <meta name="description" content={t('description')} />
        <html lang={i18n.language} />
      </Helmet>
      <Gallery />
    </div>
  );
}

export default GalleryPage;