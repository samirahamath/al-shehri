import { useLanguage } from '../i18n/LanguageContext';

export default function About() {
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
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-images">
            <div className="about-img main-img">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80"
                alt="Technician working"
              />
            </div>
            <div className="about-img secondary-img">
              <img
                src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=600&q=80"
                alt="Workshop"
              />
            </div>
            <div className="experience-badge">
              <span className="exp-number">{t.about.expNumber}</span>
              <span className="exp-text">{t.about.expText}</span>
            </div>
          </div>

          <div className="about-content">
            <div className="section-tag">{t.about.tag}</div>
            <h2 className="section-title">
              {t.about.title}<span className="accent">{t.about.titleAccent}</span>
            </h2>
            <p className="about-text lead">{t.about.lead}</p>
            <p className="about-text">{t.about.description}</p>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-certificate"></i></div>
                <div className="feature-content">
                  <h4>{t.about.feature1Title}</h4>
                  <p>{t.about.feature1Desc}</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-cogs"></i></div>
                <div className="feature-content">
                  <h4>{t.about.feature2Title}</h4>
                  <p>{t.about.feature2Desc}</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-shield-alt"></i></div>
                <div className="feature-content">
                  <h4>{t.about.feature3Title}</h4>
                  <p>{t.about.feature3Desc}</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary" onClick={(e) => handleClick(e, '#contact')}>
              <span>{t.about.cta}</span>
              <i className={`fas fa-arrow-${isRTL ? 'left' : 'right'}`}></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
