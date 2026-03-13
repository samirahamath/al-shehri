import { useLanguage } from '../i18n/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="section-tag">{t.contact.tag}</div>
            <h2 className="section-title">
              {t.contact.title}<span className="accent">{t.contact.titleAccent}</span>
            </h2>
            <p className="lead">{t.contact.lead}</p>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="contact-details">
                  <h4>{t.contact.addressTitle}</h4>
                  <p>{t.contact.addressText.split('\n').map((line, i) => (
                    <span key={i}>{line}{i === 0 && <br />}</span>
                  ))}</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon"><i className="fas fa-phone-alt"></i></div>
                <div className="contact-details">
                  <h4>{t.contact.phoneTitle}</h4>
                  <p><a href="tel:+966500522561" dir="ltr">+966 50 052 2561</a></p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                <div className="contact-details">
                  <h4>{t.contact.emailTitle}</h4>
                  <p><a href="mailto:ahmedalshehrigroup@mail.com">ahmedalshehrigroup@mail.com</a></p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon"><i className="fas fa-clock"></i></div>
                <div className="contact-details">
                  <h4>{t.contact.hoursTitle}</h4>
                  <p>{t.contact.hoursText.split('\n').map((line, i) => (
                    <span key={i}>{line}{i === 0 && <br />}</span>
                  ))}</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
              <a href="#" className="social-link"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
