import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <html lang={i18n.language} />
      </Helmet>
      <h1>Кирилл Михаленко</h1>
      <p>Белорусский художник, создающий уникальные монохромные работы.</p>
    </div>
  );
}

export default Home;