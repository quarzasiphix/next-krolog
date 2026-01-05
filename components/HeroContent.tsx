import { Phone } from 'lucide-react';

const HeroContent = () => {
  return (
    <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center text-white">
      <div className="hero-copy max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-10 leading-tight">
          Zakład Pogrzebowy w Łodzi
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-300/90">
          Nekrolog Łódź – Jolanta Kostowska
        </p>
        <p className="text-[17.5px] md:text-base mb-12 text-gray-400 leading-relaxed">
          Od ponad 20 lat prowadzimy rodziny przez organizację ceremonii pogrzebowych — spokojnie, z dyskrecją i doświadczeniem.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 mb-20">
          <a
            href="tel:+48602274661"
            className="button-primary flex items-center justify-center gap-3"
          >
            <Phone className="h-5 w-5 hidden md:inline" aria-hidden />
            <span>+48 602 274 661</span>
          </a>
          <p className="text-sm text-gray-500">Dostępni całodobowo</p>
        </div>

        <div className="glass-card p-8 rounded-lg mx-auto max-w-sm text-center">
          <address className="not-italic text-gray-400 text-sm mb-3">
            Legionów 48, 90-702 Łódź
          </address>
          <a
            href="https://maps.app.goo.gl/96nCspWXwt5VYqkp6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-400 transition-colors duration-180"
          >
            Zobacz na mapie
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
