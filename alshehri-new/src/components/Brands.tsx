export default function Brands() {
  const brandLogos = [
    { src: 'https://www.carlogos.org/car-logos/ferrari-logo.png', alt: 'Ferrari' },
    { src: 'https://www.carlogos.org/car-logos/lamborghini-logo.png', alt: 'Lamborghini' },
    { src: 'https://www.carlogos.org/car-logos/porsche-logo.png', alt: 'Porsche' },
    { src: 'https://www.carlogos.org/car-logos/mercedes-benz-logo.png', alt: 'Mercedes' },
    { src: 'https://www.carlogos.org/car-logos/bmw-logo.png', alt: 'BMW' },
    { src: 'https://www.carlogos.org/car-logos/audi-logo.png', alt: 'Audi' },
    { src: 'https://www.carlogos.org/car-logos/bentley-logo.png', alt: 'Bentley' },
    { src: 'https://www.carlogos.org/car-logos/rolls-royce-logo.png', alt: 'Rolls Royce' },
  ];

  return (
    <section className="brands">
      <div className="container">
        <div className="brands-slider">
          {[...brandLogos, ...brandLogos].map((brand, idx) => (
            <div className="brand-item" key={idx}>
              <img src={brand.src} alt={brand.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
