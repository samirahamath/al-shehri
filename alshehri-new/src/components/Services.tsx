import { useLanguage } from '../i18n/LanguageContext';

export default function Services() {
  const { t, isRTL } = useLanguage();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="services">
      <div className="services-bg"></div>
      <div className="container">
        <div className="section-header center">
          <div className="section-tag">{t.services.tag}</div>
          <h2 className="section-title">
            {t.services.title}<span className="accent">{t.services.titleAccent}</span>
          </h2>
          <p className="section-subtitle">{t.services.subtitle}</p>
        </div>

        <div className="services-grid">
          {t.services.cards.map((card, idx) => (
            <div className={`service-card ${card.featured ? 'featured' : ''}`} key={idx}>
              {card.featured && <div className="featured-badge">{card.featuredLabel}</div>}
              <div className="service-icon">
                <i className={`fas ${card.icon}`}></i>
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <ul className="service-features">
                {card.features.map((f, i) => (
                  <li key={i}><i className="fas fa-check"></i> {f}</li>
                ))}
              </ul>
              <a href="#contact" className="service-link" onClick={(e) => handleClick(e, '#contact')}>
                {t.services.more} <i className={`fas fa-arrow-${isRTL ? 'left' : 'right'}`}></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
