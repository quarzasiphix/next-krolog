'use client'

import { TrackedPhoneLink } from './TrackedPhoneLink';

const HeroContent = () => {
  return (
    <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center text-white">
      <div className="hero-copy max-w-[48ch] mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-4 leading-tight">
          Zakład Pogrzebowy Łódź
        </h1>
        
        <div className="w-16 h-[1px] bg-primary/40 mx-auto mb-6"></div>
        
        <h2 className="text-xl md:text-2xl mb-12 leading-relaxed text-gray-300/90 font-normal">
          Nekrolog Jolanta Kostowska – całodobowa pomoc bez kosztów z góry
        </h2>
        
        <p className="text-[16px] md:text-[17px] mb-12 text-gray-400/80 leading-loose mt-8">
          Od ponad 20 lat wspieramy rodziny w organizacji pogrzebu – z empatią, dyskrecją i pełnym zaangażowaniem.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 mb-20">
          <TrackedPhoneLink location="hero" />
          <p className="text-sm text-white font-medium">Dostępni całodobowo</p>
        </div>

        <div className="glass-card p-8 rounded-lg mx-auto max-w-sm text-center">
          <address className="not-italic text-gray-400 text-sm mb-4">
            Legionów 48, 90-702 Łódź
          </address>
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
