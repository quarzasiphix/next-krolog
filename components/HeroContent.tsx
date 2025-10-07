import { Phone } from 'lucide-react';

const HeroContent = () => {
  return (
    <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center text-white">
      <div className="hero-copy max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium mb-6 leading-tight capitalize">
          Jolanta Usługi Pogrzebowe
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-8 hero-divider" />
        <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed text-gray-200">
          Profesjonalne wsparcie dla rodziny w trudnych chwilach dostępne 24 godziny na dobę.
        </p>
        <p className="text-lg mb-10 font-medium text-gray-300">
          Dom pogrzebowy prowadzony przez Jolantę Kostowską
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+48602274661"
            className="button-primary flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Phone className="h-5 w-5" aria-hidden />
            <span>Całodobowa pomoc</span>
          </a>
          <a
            href="#services"
            className="button-secondary w-full sm:w-auto"
          >
            Nasze usługi
          </a>
        </div>

        <div className="mt-16 glass-card p-6 rounded-lg mx-auto max-w-md text-left hero-location-card">
          <h3 className="text-primary font-medium text-lg mb-2">Dom pogrzebowy w centrum Łodzi</h3>
          <address className="not-italic text-gray-300">
            Legionów 48, 90-702 Łódź, Poland
          </address>
          <div className="mt-4 flex flex-col gap-2 text-sm text-gray-400">
            <span>Zapraszamy do odwiedzenia nas w sercu miasta.</span>
            <a
              href="https://maps.app.goo.gl/1o7b6Xxw3XjQ6Xb46"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
            >
              Otwórz lokalizację w Mapach Google
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
