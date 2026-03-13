import { useLanguage } from '../i18n/LanguageContext';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const { t, isRTL } = useLanguage();
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [statValues, setStatValues] = useState([0, 0, 0]);

  const targets = [
    parseInt(t.hero.stat1Number),
    parseInt(t.hero.stat2Number),
    parseInt(t.hero.stat3Number),
  ];

  useEffect(() => {
    if (!statsRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsAnimated) {
          setStatsAnimated(true);
          const duration = 2000;
          const steps = 60;
          const interval = duration / steps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setStatValues(targets.map((target) => Math.floor(target * progress)));
            if (step >= steps) {
              setStatValues(targets);
              clearInterval(timer);
            }
          }, interval);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, [statsAnimated, targets]);

  const formatNumber = (num: number) => {
    if (isRTL) {
      const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
      return num.toString().replace(/[0-9]/g, (d) => arabicNumerals[parseInt(d)]);
    }
    return num.toLocaleString();
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury car"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span>{t.hero.badge}</span>
        </div>
        <h1 className="hero-title">
          <span className="title-line">{t.hero.title1}</span>
          <span className="title-line">{t.hero.title2}</span>
          <span className="title-line accent">{t.hero.title3}</span>
        </h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary" onClick={(e) => handleClick(e, '#contact')}>
            <span>{t.hero.bookBtn}</span>
            <i className={`fas fa-arrow-${isRTL ? 'left' : 'right'}`}></i>
          </a>
          <a href="#services" className="btn btn-outline" onClick={(e) => handleClick(e, '#services')}>
            <span>{t.hero.servicesBtn}</span>
          </a>
        </div>

        <div className="hero-stats" ref={statsRef}>
          <div className="stat-item">
            <span className="stat-number">{formatNumber(statValues[0])}</span>
            <span className="stat-label">{t.hero.stat1Label}</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">{formatNumber(statValues[1])}</span>
            <span className="stat-suffix">+</span>
            <span className="stat-label">{t.hero.stat2Label}</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">{formatNumber(statValues[2])}</span>
            <span className="stat-suffix">%</span>
            <span className="stat-label">{t.hero.stat3Label}</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>{t.hero.scroll}</span>
        <div className="scroll-arrow">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
}
