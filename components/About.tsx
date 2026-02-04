'use client';

import React, { useEffect, useRef } from 'react';
import { Clock, Award, Heart, Building, MapPin } from 'lucide-react';

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
    <section id="about" className="py-12 bg-gradient-to-b from-black/95 to-black/90">
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
            <div className="relative bg-gradient-to-br from-black/40 to-black/60 rounded-lg border border-primary/20 p-8 h-full min-h-[300px] flex flex-col items-center justify-center">
              {/* Subtle texture background */}
              <div className="absolute inset-0 opacity-[0.03]">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-primary/10"></div>
              </div>
              
              {/* Professional icon system */}
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Building className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="text-xl font-playfair font-medium text-white mb-3">
                  Zakład Pogrzebowy Nekrolog Łódź
                </h3>
                
                <div className="flex items-center justify-center gap-2 text-gray-300 mb-4">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">Legionów 48, 90-702 Łódź</span>
                </div>
                
                <div className="w-16 h-[1px] bg-primary/30 mx-auto mb-4"></div>
                
                <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto">
                  Profesjonalny zakład pogrzebowy z ponad 20-letnim doświadczeniem
                </p>
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
