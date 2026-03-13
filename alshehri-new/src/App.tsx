import { useEffect, useState } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function AppContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <Header />
      <main>
        <Hero />
        <Brands />
        <About />
        <Services />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <CTA />
        <Contact />
        <MapSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
