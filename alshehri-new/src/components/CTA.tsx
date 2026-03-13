import { useLanguage } from '../i18n/LanguageContext';

export default function CTA() {
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
    <section className="cta">
      <div className="cta-bg">
        <img
          src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury car"
        />
        <div className="cta-overlay"></div>
      </div>
      <div className="container">
        <div className="cta-content">
          <h2>{t.cta.title}<span className="accent">{t.cta.titleAccent}</span></h2>
          <p>{t.cta.description}</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary btn-large" onClick={(e) => handleClick(e, '#contact')}>
              <span>{t.cta.bookBtn}</span>
              <i className={`fas fa-arrow-${isRTL ? 'left' : 'right'}`}></i>
            </a>
            <a href="tel:+966500522561" className="btn btn-outline-light btn-large">
              <i className="fas fa-phone"></i>
              <span>{t.cta.callBtn}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
