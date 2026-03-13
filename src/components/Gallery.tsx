import { useLanguage } from '../i18n/LanguageContext';
import { useState } from 'react';

export default function Gallery() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const filters = [
    { key: 'all', label: t.gallery.filterAll },
    { key: 'service', label: t.gallery.filterService },
    { key: 'restoration', label: t.gallery.filterRestoration },
    { key: 'performance', label: t.gallery.filterPerformance },
  ];

  const filteredItems = filter === 'all'
    ? t.gallery.items
    : t.gallery.items.filter(item => item.category === filter);

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header center">
          <div className="section-tag">{t.gallery.tag}</div>
          <h2 className="section-title">
            {t.gallery.title}<span className="accent">{t.gallery.titleAccent}</span>
          </h2>
          <p className="section-subtitle">{t.gallery.subtitle}</p>
        </div>

        <div className="gallery-filter">
          {filters.map(f => (
            <button
              key={f.key}
              className={`filter-btn ${filter === f.key ? 'active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item, idx) => (
            <div className={`gallery-item ${item.category}`} key={idx}>
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <span className="gallery-category">{item.categoryLabel}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
