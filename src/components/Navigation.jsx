import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';
import '../styles/Navigation.css';

function Navigation() {
  const { t } = useTranslation();
  return (
    <header className="navigation">
      <nav>
        <ul>
          <li><Link to="/">{t('home')}</Link></li>
          <li><Link to="/gallery">{t('gallery')}</Link></li>
          <li><Link to="/about">{t('about')}</Link></li>
          <li><Link to="/contact">{t('contact')}</Link></li>
        </ul>
        <LanguageToggle />
      </nav>
    </header>
  );
}

export default Navigation;