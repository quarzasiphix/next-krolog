import { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { IMAGES } from '@/assets/images'
import { Card, CardContent } from '@/components/ui/card'
import { Check, Calendar, FileText, Users, Flower, Phone } from 'lucide-react'

const offers = [
  'Transport zwłok z miejsca zgonu do domu pogrzebowego',
  'Przygotowanie i przechowanie ciała zmarłego',
  'Pomoc w wyborze trumny lub urny oraz akcesoriów pogrzebowych',
  'Uzyskanie aktu zgonu i innych dokumentów urzędowych',
  'Rezerwacja terminów w kościele, krematorium lub na cmentarzu',
  'Przygotowanie nekrologów, klepsydr i oprawy drukowanej',
  'Muzyczna oprawa ceremonii oraz dekoracje kwiatowe',
  'Kompleksowa obsługa ceremonii w dniu pogrzebu',
  'Pomoc w uzyskaniu zasiłku pogrzebowego z ZUS/KRUS',
]

const processSteps = [
  {
    icon: Calendar,
    title: 'Umówienie spotkania',
    description:
      'Jesteśmy dostępni całodobowo. Po kontakcie telefonicznym lub osobistym umawiamy spotkanie i natychmiast rozpoczynamy przygotowania.',
  },
  {
    icon: FileText,
    title: 'Omówienie szczegółów',
    description:
      'Wspólnie planujemy charakter uroczystości, wybieramy trumnę lub urnę oraz ustalamy wszystkie elementy ceremonii.',
  },
  {
    icon: Users,
    title: 'Przejęcie formalności',
    description:
      'Załatwiamy wszelkie formalności urzędowe, rezerwacje terminów i kwestie związane z zasiłkiem pogrzebowym.',
  },
  {
    icon: Flower,
    title: 'Realizacja ceremonii',
    description:
      'Koordynujemy całą uroczystość, dbając o odpowiednią oprawę i wsparcie dla rodziny w tym trudnym dniu.',
  },
]

const ceremonyTypes = [
  {
    title: 'Pogrzeb katolicki',
    description:
      'Tradycyjna ceremonia z mszą żałobną oraz pochówkiem zgodnym z obrządkiem katolickim, wraz z oprawą liturgiczną.',
  },
  {
    title: 'Pogrzeb świecki',
    description:
      'Uroczystość bez elementów religijnych, koncentrująca się na wspomnieniach o zmarłym i osobistych pożegnaniach.',
  },
  {
    title: 'Pogrzeby innych wyznań',
    description:
      'Organizujemy ceremonie zgodne z tradycjami i rytuałami różnych wyznań, dbając o właściwą oprawę.',
  },
  {
    title: 'Pogrzeb z kremacją',
    description:
      'Kompleksowa organizacja kremacji oraz ceremonii pożegnalnej przed lub po procesie spopielenia.',
  },
]

export const metadata: Metadata = {
  title: 'Organizacja Pogrzebów Łódź',
  description:
    'Kompleksowa organizacja pogrzebów w Łodzi – formalności, oprawa ceremonii, pomoc w uzyskaniu zasiłku pogrzebowego.',
  keywords: ['organizacja pogrzebów łódź', 'formalności pogrzebowe', 'planowanie pogrzebu'],
}

export default function OrganizacjaPogrzebowPage() {
  return (
    <ServiceLayout
      title="Organizacja Pogrzebów w Łodzi"
      description="Zajmujemy się każdym elementem ceremonii pogrzebowej, od formalności po oprawę uroczystości."
      backgroundImage={IMAGES.subpages.organizacja}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-playfair font-medium text-white">
              Kompleksowa organizacja pogrzebów w Łodzi
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p>
                Dom Pogrzebowy Nekrolog Łódź przejmuje wszystkie obowiązki związane z przygotowaniem ceremonii, aby bliscy
                mogli skupić się na przeżywaniu żałoby. Zapewniamy wsparcie od pierwszego kontaktu aż do zakończenia uroczystości.
              </p>
              <p>
                Organizujemy pogrzeby katolickie, świeckie oraz wyznaniowe, dbając o szczegóły zgodne z życzeniami rodziny i
                osobowością zmarłej osoby. Tworzymy uroczystości w duchu tradycji lub z elementami indywidualnymi.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-playfair font-medium text-white">W ramach usługi zapewniamy:</h3>
            <ul className="space-y-3">
              {offers.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-6">
            <h3 className="text-xl font-playfair font-medium text-white">
              Jak przebiega proces organizacji pogrzebu?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {processSteps.map((step) => (
                <Card key={step.title} className="bg-black/30 border border-white/10">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-medium text-white">{step.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-playfair font-medium text-white">Rodzaje ceremonii pogrzebowych</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ceremonyTypes.map((ceremony) => (
                <Card key={ceremony.title} className="bg-black/30 border border-white/10">
                  <CardContent className="p-6 space-y-3">
                    <h4 className="text-lg font-medium text-white">{ceremony.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{ceremony.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <Card className="bg-black/30 border border-white/10">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-playfair font-medium text-white">Dlaczego warto nas wybrać?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <span>Profesjonalne wsparcie i empatia wobec rodziny.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <span>Ponad 20 lat doświadczenia w branży pogrzebowej.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <span>Całodobowa dostępność i szybka reakcja.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1" />
                  <span>Indywidualne podejście i przejrzyste warunki współpracy.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-black/30 border border-white/10">
            <CardContent className="p-6 space-y-3 text-gray-300">
              <h3 className="text-xl font-playfair font-medium text-white">Całodobowe wsparcie</h3>
              <p>Skontaktuj się z nami o każdej porze dnia i nocy. Jesteśmy gotowi, aby natychmiast pomóc.</p>
              <a
                href="tel:+48602274661"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 font-medium text-black transition hover:bg-primary/90"
              >
                <Phone className="h-5 w-5" /> +48 602 274 661
              </a>
              <p className="text-sm text-gray-400">Dom pogrzebowy Nekrolog Łódź – pewność dyskrecji i troski.</p>
            </CardContent>
          </Card>
        </aside>
      </div>
    </ServiceLayout>
  )
}
