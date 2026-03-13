import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t, lang } = useLanguage();

  const navItems = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="footer-logo" onClick={(e) => handleClick(e, '#home')}>
              <span className="logo-icon"><i className="fas fa-car"></i></span>
              <span className="logo-text">{lang === 'ar' ? 'الشهري' : 'AL-SHEHRI'}</span>
            </a>
            <p>{t.footer.description}</p>
            <div className="footer-social">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>{t.footer.quickLinks}</h4>
            <ul>
              {navItems.map(item => (
                <li key={item.href}>
                  <a href={item.href} onClick={(e) => handleClick(e, item.href)}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4>{t.footer.ourServices}</h4>
            <ul>
              {t.footer.serviceLinks.map((s, i) => (
                <li key={i}><a href="#services" onClick={(e) => handleClick(e, '#services')}>{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>{t.footer.contactInfo}</h4>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> Al Sina'iyah, Riyadh 12872</li>
              <li><i className="fas fa-phone"></i> <a href="tel:+966500522561" dir="ltr">+966 50 052 2561</a></li>
              <li><i className="fas fa-envelope"></i> <a href="mailto:ahmedalshehrigroup@mail.com">ahmedalshehrigroup@mail.com</a></li>
              <li><i className="fas fa-clock"></i> {lang === 'ar' ? 'السبت-الخميس: ٨ص - ٨م' : 'Sat-Thu: 8AM - 8PM'}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t.footer.copyright}</p>
          <div className="footer-bottom-links">
            <a href="#">{t.footer.privacy}</a>
            <a href="#">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
