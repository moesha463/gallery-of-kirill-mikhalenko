import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

function Contact() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>{t('contact')} - {t('title')}</title>
        <meta name="description" content={t('description')} />
        <html lang={i18n.language} />
      </Helmet>
      <h1>Контакты</h1>
      <p>Свяжитесь с нами: example@email.com</p>
    </div>
  );
}

export default Contact;