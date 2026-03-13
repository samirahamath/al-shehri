import { useLanguage } from '../i18n/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header center">
          <div className="section-tag">{t.testimonials.tag}</div>
          <h2 className="section-title">
            {t.testimonials.title}<span className="accent">{t.testimonials.titleAccent}</span>
          </h2>
        </div>

        <div className="testimonials-slider">
          {t.testimonials.cards.map((card, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="testimonial-rating">
                {[1, 2, 3, 4, 5].map(s => (
                  <i className="fas fa-star" key={s}></i>
                ))}
              </div>
              <p className="testimonial-text">{card.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src={card.avatar} alt={card.name} />
                </div>
                <div className="author-info">
                  <h5>{card.name}</h5>
                  <span>{card.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
