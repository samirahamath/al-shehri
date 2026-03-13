import { useLanguage } from '../i18n/LanguageContext';

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="why-us">
      <div className="container">
        <div className="why-us-grid">
          <div className="why-us-content">
            <div className="section-tag">{t.whyUs.tag}</div>
            <h2 className="section-title">
              {t.whyUs.title}<span className="accent">{t.whyUs.titleAccent}</span>
            </h2>
            <p className="lead">{t.whyUs.lead}</p>

            <div className="why-us-list">
              {t.whyUs.items.map((item, idx) => (
                <div className="why-item" key={idx}>
                  <div className="why-number">{item.number}</div>
                  <div className="why-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="why-us-image">
            <img
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80"
              alt="Premium service"
            />
            <div className="floating-card">
              <div className="card-icon"><i className="fas fa-award"></i></div>
              <div className="card-content">
                <h5>{t.whyUs.floatingTitle}</h5>
                <p>{t.whyUs.floatingDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
