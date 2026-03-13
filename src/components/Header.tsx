import { useLanguage } from '../i18n/LanguageContext';
import './Header.css';
import { useState, useEffect } from 'react';

export default function Header() {
  const { t, toggleLanguage, lang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header id="header" className={scrolled ? 'scrolled' : ''}>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
            <span className="logo-icon"><i className="fas fa-car"></i></span>
            <span className="logo-text">{lang === 'ar' ? 'الشهري' : 'AL-SHEHRI'}</span>
          </a>

          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`} id="navMenu">
            {navItems.map(item => (
              <li key={item.href}>
                <a href={item.href} className="nav-link" onClick={(e) => handleNavClick(e, item.href)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle Language">
              <i className="fas fa-globe"></i>
              <span>{lang === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            <a href="tel:+966500522561" className="nav-cta">
              <i className="fas fa-phone"></i>
              <span>{t.nav.callNow}</span>
            </a>
          </div>

          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            id="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
