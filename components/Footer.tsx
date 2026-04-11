'use client'

import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { BUSINESS_INFO } from '@/lib/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white border-t border-white/10" data-nosnippet>
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                <h2 className="text-xl md:text-2xl font-playfair font-bold text-white">
                  <span className="text-primary">Nekrolog</span> Łódź
                </h2>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Kompleksowe usługi pogrzebowe z pełnym wsparciem dla rodziny w trudnych chwilach. Zapewniamy profesjonalną
              i godną oprawę ceremonii, transport krajowy i międzynarodowy oraz pomoc przy sprowadzeniu zmarłych z zagranicy.
            </p>
            <div className="flex space-x-4">
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/80 transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href={BUSINESS_INFO.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/80 transition-colors"
                aria-label="Profil Google"
              >
                <MapPin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-medium mb-6 text-white">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-300">Legionów 48, 90-702 Łódź, Polska</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-1" />
                <a href="tel:+48602274661" data-phone-location="footer_primary" className="text-gray-300 hover:text-primary transition-colors">+48 602 274 661 (calodobowo)</a>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-primary/70 flex-shrink-0 mt-1" />
                <a href="tel:+48602270050" data-phone-location="footer_international" className="text-gray-300 hover:text-primary transition-colors">+48 602 270 050 (transport miedzynarodowy 24/7)</a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-1" />
                <a href="mailto:kontakt@nekrolog-lodz.com" className="text-gray-300 hover:text-primary transition-colors">kontakt@nekrolog-lodz.com</a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-300">Pon-Pt: 8:00-16:00, Sob: 9:00-13:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-medium mb-6 text-white">Nawigacja</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="inline-block text-gray-300 hover:text-primary transition-colors">
                  Strona Główna
                </Link>
              </li>
              <li>
                <Link href="/zaklad-pogrzebowy-lodz" className="inline-block text-gray-300 hover:text-primary transition-colors">
                  Zakład Pogrzebowy
                </Link>
              </li>
              <li>
                <Link href="/nekrolog-lodz" className="inline-block text-gray-300 hover:text-primary transition-colors">
                  Nekrolog Łódź
                </Link>
              </li>
              <li>
                <Link href="/uslugi-pogrzebowe-lodz" className="inline-block text-gray-300 hover:text-primary transition-colors">
                  Usługi Pogrzebowe
                </Link>
              </li>
              <li>
                <Link href="/uslugi/sprowadzenie-zwlok-z-zagranicy" className="inline-block text-gray-300 hover:text-primary transition-colors">
                  Sprowadzenie zwłok z zagranicy
                </Link>
              </li>
              <li>
                <Link href="/pl/uslugi/sprowadzenie-zmarlego-do-polski" className="inline-block text-gray-300 hover:text-primary transition-colors">
                  Sprowadzenie zmarłego do Polski
                </Link>
              </li>
              <li>
                <Link href="/pl/uslugi/miedzynarodowy-transport-zwlok" className="inline-block text-gray-300 hover:text-primary transition-colors">
                  Międzynarodowy transport do Polski
                </Link>
              </li>
              <li>
                <Link href="/pl/kraje/niemcy" className="inline-block text-gray-300 hover:text-primary transition-colors">
                  Niemcy - Polska
                </Link>
              </li>
              <li>
                <Link href="/pl/trasy/transport-zwlok-z-monachium-do-polski" className="inline-block text-gray-300 hover:text-primary transition-colors">
                  Monachium - Polska
                </Link>
              </li>
              <li>
                <Link href="/asortyment" className="inline-block text-gray-300 hover:text-primary transition-colors">
                  Asortyment
                </Link>
              </li>
              <li>
                <Link href="/poradnik" className="inline-block text-gray-300 hover:text-primary transition-colors">
                  Poradnik Pogrzebowy
                </Link>
              </li>
              <li>
                <Link href="/cmentarze-lodz" className="inline-block text-gray-300 hover:text-primary transition-colors">
                  Cmentarze w Łodzi
                </Link>
              </li>
              <li>
                <Link href="/cmentarze-lodz/radogoszcz" className="inline-block text-gray-300 hover:text-primary transition-colors">
                  Cmentarz Radogoszcz
                </Link>
              </li>
              <li>
                <Link href="/o-nas" className="inline-block text-gray-300 hover:text-primary transition-colors">
                  O nas
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="inline-block text-gray-300 hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-sm text-gray-400">
                <span className="font-medium text-primary">Całodobowy kontakt:</span><br />
                +48 602 274 661<br />
                +48 602 270 050
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center">
            &copy; {currentYear} Nekrolog Łódź - Usługi Pogrzebowe Jolanta Kostowska. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer



