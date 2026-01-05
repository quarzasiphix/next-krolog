'use client';

import React, { useEffect, useRef } from 'react';
import { IMAGES } from '../assets/images';
import { Clock, Award, Heart } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black/95 to-black/90">
      <div className="section-container">
        <div 
          ref={sectionRef}
          className="opacity-0 translate-y-10 transition-all duration-300 text-center mb-16"
        >
          <h2 className="section-title">O Naszym Zakładzie Pogrzebowym</h2>
          <p className="section-subtitle">
            Zakład Pogrzebowy Nekrolog Łódź to miejsce, gdzie znajdziesz profesjonalną i godną obsługę
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef}
            className="opacity-0 translate-y-10 transition-all duration-300 delay-50"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-tr-3xl rounded-bl-3xl -z-10"></div>
              <img 
                src={IMAGES.interior} 
                alt="Wnętrze domu pogrzebowego Nekrolog Łódź" 
                className="w-full h-auto rounded-md shadow-lg object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-md"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-playfair font-medium text-primary">Zakład Pogrzebowy Nekrolog Łódź</h3>
                <p className="text-sm text-gray-300">Legionów 48, 90-702 Łódź</p>
              </div>
            </div>
          </div>
          
          <div 
            ref={contentRef}
            className="opacity-0 translate-y-10 transition-all duration-200 delay-50 flex flex-col space-y-6"
          >
            <h3 className="text-2xl font-playfair text-white mb-8">
              Prowadzimy rodziny przez najtrudniejsze chwile
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Przejmujemy na siebie wszystkie obowiązki związane z organizacją ceremonii pogrzebowej.
              Zajmujemy się formalnościami, koordynacją i oprawą, aby rodzina mogła skupić się na pożegnaniu.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Działamy od ponad 20 lat. Znamy procedury, rozumiemy emocje, szanujemy tradycję.
              Każda rodzina otrzymuje pełną uwagę i indywidualne podejście.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm">
              Jesteśmy dostępni całodobowo. Nie spieszymy, nie naciskamy, nie sprzedajemy.
              Prowadzimy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
