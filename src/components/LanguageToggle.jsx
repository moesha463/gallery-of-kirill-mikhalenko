import { useTranslation } from 'react-i18next';

function LanguageToggle() {
  const { i18n } = useTranslation();
  return (
    <div className="language-toggle">
      <button onClick={() => i18n.changeLanguage('en')} disabled={i18n.language === 'en'}>EN</button>
      <button onClick={() => i18n.changeLanguage('ru')} disabled={i18n.language === 'ru'}>RU</button>
    </div>
  );
}

export default LanguageToggle;