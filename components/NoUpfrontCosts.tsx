'use client';

import { Shield, Heart, Clock, Phone, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const NoUpfrontCosts = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-black/95 to-black/90">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-medium text-white mb-4">
              Pogrzeb bez żadnych kosztów z góry
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Jako zakład pogrzebowy oferujemy pogrzeb bez zaliczki i organizację pogrzebu w Łodzi bez wpłaty z góry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-black/30 border border-white/10 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-playfair font-medium text-white mb-4">
                  Bez Zaliczki
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Nie wymagamy żadnych wpłat z góry. Organizujemy pogrzeb bez żadnych kosztów początkowych.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/30 border border-white/10 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-playfair font-medium text-white mb-4">
                  Pełne Wsparcie
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Przejmujemy wszystkie formalności i organizację, aby rodzina mogła skupić się na pożegnaniu.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/30 border border-white/10 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-playfair font-medium text-white mb-4">
                  Dostępność 24/7
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Jesteśmy dostępni całą dobę, aby pomóc w każdej sytuacji, gdy tylko nas potrzebujesz.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12">
            <p className="text-lg text-gray-300 mb-4">
              Masz pytania? Chętnie odpowiemy.
            </p>
            <a
              href="tel:+48602274661"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Zadzwoń i zapytaj — bez zobowiązań
            </a>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-playfair font-medium text-white mb-6">
                  Jak to działa?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <p className="text-gray-300">
                      <strong className="text-white">Zadzwoń do nas</strong> - dostępni całodobowo pod numerem +48 602 274 661
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <p className="text-gray-300">
                      <strong className="text-white">My organizujemy pogrzeb</strong> - finansujemy wszystkie koszty
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <p className="text-gray-300">
                      <strong className="text-white">Rozliczamy się z zasiłku</strong> - Ty nie płacisz nic z własnej kieszeni
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-black/20 rounded-lg p-6 mb-6">
                  <h4 className="text-xl font-medium text-white mb-4">
                    Zasiłek Pogrzebowy
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Pomagamy w uzyskaniu zasiłku pogrzebowego z ZUS/KRUS do 4000 zł
                  </p>
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-medium">Pełne wsparcie w formalnościach</span>
                  </div>
                </div>
                
                <a
                  href="tel:+48602274661"
                  className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition"
                >
                  <Phone className="w-5 h-5" />
                  Zadzwoń: +48 602 274 661
                </a>
                <p className="text-sm text-gray-400 mt-3">
                  Dostępni 24/7 • Bez zaliczki • Pełne wsparcie
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoUpfrontCosts;
