import { useLanguage } from '../i18n/LanguageContext';

export default function Preloader() {
  const { t } = useLanguage();

  return (
    <div id="preloader">
      <div className="loader">
        <div className="loader-ring"></div>
        <span className="loader-text">{t.preloader}</span>
      </div>
    </div>
  );
}
