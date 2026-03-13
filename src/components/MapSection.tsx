import { useLanguage } from '../i18n/LanguageContext';

export default function MapSection() {
  const { t } = useLanguage();

  return (
    <section className="map-section">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.5!2d46.7523625!3d24.6363316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM4JzEwLjgiTiA0NsKwNDUnMDguNSJF!5e0!3m2!1sar!2ssa!4v1620000000000!5m2!1sar!2ssa"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Al-Shehri Location"
        ></iframe>
        <div className="map-overlay-card">
          <div className="map-card-content">
            <h4><i className="fas fa-map-marker-alt"></i> {t.contact.mapTitle}</h4>
            <p>{t.contact.mapAddress.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}</p>
            <a
              href="https://maps.app.goo.gl/3xi2EeWtpsUFAAm57"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-small"
            >
              <i className="fas fa-directions"></i> {t.contact.directions}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
