import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

function About() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>{t('about')} - {t('title')}</title>
        <meta name="description" content={t('description')} />
        <html lang={i18n.language} />
      </Helmet>
      <h1>О Кирилле Михаленко</h1>
      <p>Белорусский художник, известный своими монохромными работами...</p>
    </div>
  );
}

export default About;