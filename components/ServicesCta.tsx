'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, Music, Truck, Flame, Archive, Package } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-10');
            }, delay * 0.1);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="opacity-0 translate-y-10 transition-all duration-200 group"
    >
      <div className="glass-card h-full flex flex-col overflow-hidden rounded-xl">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-black/40 to-black/60 flex items-center justify-center">
          {/* Subtle texture background */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-primary/10"></div>
          </div>
          
          {/* Professional icon */}
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="text-primary">
                {icon}
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
            <h3 className="text-xl font-playfair text-white">{title}</h3>
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <p className="text-gray-300 mb-6 flex-1">{description}</p>
          <Link
            href={link}
            className="flex items-center text-primary hover:text-primary/80 transition-colors justify-end mt-auto"
          >
            <span className="mr-2">Więcej informacji</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ServicesCta = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  
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
      { threshold: 0.1 }
    );
    
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    
    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <section className="py-12 bg-gradient-to-b from-black/90 to-black/80">
      <div className="section-container">
        <div 
          ref={headingRef}
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-200"
        >
          <h2 className="section-title">Specjalistyczne Usługi Pogrzebowe</h2>
          <p className="section-subtitle">
            Pełen zakres profesjonalnych usług dla godnego pożegnania bliskiej osoby
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Organizacja Pogrzebów"
            description="Kompleksowa organizacja ceremonii pogrzebowej, przejęcie wszystkich formalności oraz profesjonalna obsługa w trudnych chwilach."
            icon={<FileText className="w-8 h-8" />}
            link="/uslugi/organizacja-pogrzebow-lodz"
            delay={100}
          />
          
          <ServiceCard 
            title="Oprawa Muzyczna"
            description="Profesjonalna oprawa muzyczna ceremonii pogrzebowej, w tym śpiew, organy, trąbka oraz inne instrumenty, dostosowane do charakteru uroczystości."
            icon={<Music className="w-8 h-8" />}
            link="/uslugi/oprawa-muzyczna-lodz"
            delay={200}
          />
          
          <ServiceCard 
            title="Transport Zmarłych"
            description="Specjalistyczny transport zmarłych na terenie kraju i za granicą, zapewniający godne przewiezienie ciała z zachowaniem wszelkich procedur."
            icon={<Truck className="w-8 h-8" />}
            link="/uslugi/transport-zmarlych-lodz"
            delay={300}
          />
          
          <ServiceCard 
            title="Kremacja"
            description="Organizacja kremacji w profesjonalnych krematoriach, wraz z kompleksową pomocą w przygotowaniu urny i ceremonii pogrzebowej po kremacji."
            icon={<Flame className="w-8 h-8" />}
            link="/uslugi/krematorium-lodz"
            delay={400}
          />
          
          <ServiceCard 
            title="Ekshumacja"
            description="Profesjonalne przeprowadzenie ekshumacji zgodnie z przepisami, wraz z załatwieniem wszelkich formalności i dokumentów urzędowych."
            icon={<Archive className="w-8 h-8" />}
            link="/uslugi/ekshumacja-lodz"
            delay={500}
          />
          
          <ServiceCard 
            title="Pełen Asortyment"
            description="Bogaty wybór trumien, urn, wieńców, wiązanek oraz odzieży pogrzebowej, dostosowany do indywidualnych preferencji i potrzeb klienta."
            icon={<Package className="w-8 h-8" />}
            link="/asortyment"
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesCta;
