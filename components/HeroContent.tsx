const HeroContent = () => {
  return (
    <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center text-white">
      <div className="hero-copy max-w-[62rem] mx-auto">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          <span>Kontakt 24/7</span>
          <span className="h-1 w-1 rounded-full bg-primary/70" />
          <span>Transport w Polsce, Europie i poza nia</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-4 leading-tight">
          Zaklad Pogrzebowy Lodz i
          <span className="mt-2 block text-primary">miedzynarodowy transport zwlok do Polski</span>
        </h1>

        <div className="w-16 h-[1px] bg-primary/40 mx-auto mb-6"></div>

        <h2 className="mx-auto max-w-[54rem] text-xl md:text-2xl mb-8 leading-relaxed text-gray-300/90 font-normal">
          Calodobowa organizacja pogrzebow, krajowego i miedzynarodowego transportu zmarlych oraz sprowadzania zmarlych do Polski z Europy i z zagranicy.
        </h2>

        <p className="mx-auto max-w-[58rem] text-[16px] md:text-[17px] mb-10 text-gray-300/85 leading-loose mt-6">
          Jako ponad 30-letnia firma rodzinna wspieramy rodziny z empatia, dyskrecja i spokojnym prowadzeniem kazdego etapu. Organizujemy pochowki w Lodzi i okolicach, ale rowniez specjalizujemy sie w ekspresowym transporcie zwlok oraz sprowadzaniu ciala do Polski bez kosztow z gory dla rodziny.
        </p>

        <div className="mx-auto mb-10 grid max-w-5xl gap-3 text-left md:grid-cols-4">
          <div className="glass-card rounded-lg p-4">
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-primary/80">Specjalizacja</p>
            <p className="text-sm leading-6 text-gray-200">Miedzynarodowy transport zwlok i sprowadzanie zmarlych do Polski.</p>
          </div>
          <div className="glass-card rounded-lg p-4">
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-primary/80">Zasieg</p>
            <p className="text-sm leading-6 text-gray-200">Polska, Europa oraz kierunki poza UE wymagajace indywidualnej organizacji.</p>
          </div>
          <div className="glass-card rounded-lg p-4">
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-primary/80">Dostepnosc</p>
            <p className="text-sm leading-6 text-gray-200">Telefon i szybka reakcja 24/7 w sprawach pilnych.</p>
          </div>
          <div className="glass-card rounded-lg p-4">
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-primary/80">Wsparcie</p>
            <p className="text-sm leading-6 text-gray-200">Formalnosci, odbior z placowki, transport i przygotowanie do pochowku w Polsce.</p>
          </div>
        </div>

        <div className="mb-16 flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <a href="tel:+48602274661" className="button-primary flex items-center justify-center gap-3" data-phone-location="hero">
              <span>+48 602 274 661</span>
            </a>
            <a
              href="/pl/uslugi/miedzynarodowy-transport-zwlok"
              className="inline-flex items-center justify-center rounded-md border border-primary/40 bg-black/35 px-6 py-4 font-medium text-white transition-all duration-200 hover:border-primary hover:bg-primary/10"
            >
              Miedzynarodowy transport zwlok
            </a>
            <a
              href="/pl/uslugi/sprowadzenie-zmarlego-do-polski"
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-black/20 px-6 py-4 font-medium text-gray-100 transition-all duration-200 hover:border-primary/40 hover:text-white"
            >
              Trasy i kraje - Polska
            </a>
          </div>
          <p className="text-sm font-medium text-white">Dostepni calodobowo dla rodzin w Polsce i za granica</p>
        </div>

        <div className="glass-card p-8 rounded-lg mx-auto max-w-sm text-center">
          <address className="not-italic text-gray-400 text-sm mb-4">Legionow 48, 90-702 Lodz</address>
          <a
            href="https://maps.app.goo.gl/96nCspWXwt5VYqkp6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary/10 border border-primary/30 text-primary px-6 py-3 rounded-md font-medium hover:bg-primary/20 transition-all duration-200 hover:scale-105"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Zobacz na mapie
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
