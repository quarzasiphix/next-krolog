import { Metadata } from 'next'
import Link from 'next/link'
import ServiceLayout from '@/components/ServiceLayout'
import type { FAQItem } from '@/components/structured-data/FAQSchema'
import { IMAGES } from '@/assets/images'
import { Flame, CheckCircle, FileText, Heart, Clock, Box } from 'lucide-react'
import { buildLocalMetadata, buildMetaDescription } from '@/lib/local-seo'

const faqData: FAQItem[] = [
  {
    question: 'Jakie dokumenty są potrzebne do kremacji?',
    answer:
      'Najczęściej wymagane są: akt zgonu, karta zgonu do kremacji oraz zgoda osoby uprawnionej do pochówku. Pomagamy skompletować dokumenty.',
  },
  {
    question: 'Czy pomagacie w wyborze urny po kremacji?',
    answer:
      'Tak. Doradzamy w wyborze urny i organizujemy dalszą ceremonię, w tym pochówek urnowy na cmentarzu lub w kolumbarium.',
  },
  {
    question: 'Czy kremację można zorganizować bez kosztów z góry?',
    answer:
      'Tak. Organizujemy pogrzeb kremacyjny bez zaliczki i rozliczamy się z zasiłku pogrzebowego ZUS/KRUS, który od 1 stycznia 2026 r. wynosi 7000 zł (dla zgonów od tej daty). Wycenę podajemy przed podpisaniem umowy.',
  },
  {
    question: 'Ile trwa kremacja i kiedy odbywa się pochówek urny?',
    answer:
      'Sam proces spopielenia trwa kilka godzin. Termin kremacji zależy od dostępności krematorium i kompletu dokumentów – zwykle jest to kilka dni od zgonu. Pochówek urny ustalamy z rodziną i kancelarią cmentarza.',
  },
  {
    question: 'Czy Kościół katolicki dopuszcza kremację?',
    answer:
      'Tak. Kościół katolicki dopuszcza kremację, zaleca jednak, aby urnę pochować na cmentarzu lub w kolumbarium. Msza żałobna może odbyć się z trumną przed kremacją albo z urną po kremacji – ustalamy to z parafią.',
  },
  {
    question: 'Czy mogę trzymać urnę w domu albo rozsypać prochy?',
    answer:
      'Według obecnych przepisów nie – prochy chowa się na cmentarzu, w grobie lub w kolumbarium. Szczegóły i planowane zmiany prawa opisujemy w poradniku o urnie z prochami.',
  },
  {
    question: 'Czy rodzina może pożegnać zmarłego przed kremacją?',
    answer:
      'Tak. Można zorganizować ceremonię pożegnalną z trumną (w kościele lub kaplicy) przed kremacją, a następnie uroczystość z urną na cmentarzu. Możliwości zależą od wybranego krematorium i parafii – omawiamy je przy pierwszej rozmowie.',
  },
]

export const metadata: Metadata = buildLocalMetadata({
  title: 'Kremacja Łódź – Pogrzeb Kremacyjny bez Zaliczki 24/7',
  path: '/uslugi/krematorium-lodz',
  description: buildMetaDescription([
    'Kremacja w Łodzi – organizacja pogrzebu kremacyjnego bez zaliczki',
    'wybór urny, dokumenty, transport do krematorium, ceremonia 24/7',
    'rodzinna firma pogrzebowa z 30-letnim doświadczeniem',
  ]),
  keywords: ['kremacja łódź', 'krematorium łódź', 'pogrzeb kremacyjny łódź', 'usługi kremacyjne łódź', 'spopielenie zwłok łódź', 'pochówek urnowy łódź', 'organizacja kremacji łódź', 'cena kremacji łódź'],
})

export default function KrematoriumPage() {
  return (
    <ServiceLayout
      title="Kremacja w Łodzi – pogrzeb kremacyjny bez zaliczki"
      description="Organizujemy kremację i pochówek urny w Łodzi: dokumenty, transport do krematorium, urna, ceremonia – całodobowo"
      backgroundImage={IMAGES.services.cremation}
      faqItems={faqData}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-playfair font-medium text-white mb-6">
            Kremacja - nowoczesna forma pochówku
          </h2>
          
          <div className="prose prose-lg dark:prose-invert">
            <p className="mb-6">
              Zakład Pogrzebowy Nekrolog Łódź organizuje pogrzeby z kremacją w Łodzi i okolicach – od
              odebrania zmarłego, przez dokumenty i kremację w jednym z łódzkich krematoriów, po pochówek urny
              na wybranym cmentarzu. Rodzina nie płaci z góry: rozliczamy się z zasiłku pogrzebowego.
              Kremacja (spopielenie) to forma pochówku wybierana ze względów osobistych, praktycznych
              lub ekonomicznych.
            </p>
            
            <p>
              Nasza firma pogrzebowa oferuje kompleksową organizację kremacji wraz z wszystkimi 
              towarzyszącymi usługami. Zapewniamy transport do krematorium, szeroki wybór urn 
              oraz pomoc w organizacji ceremonii pożegnalnej przed lub po kremacji.
            </p>
          </div>
          
          <div className="mt-8 space-y-6">
            <h3 className="text-xl font-playfair text-white mb-4">Dlaczego coraz więcej osób wybiera kremację?</h3>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Niższe koszty pochówku w porównaniu do tradycyjnego</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Możliwość pochowania urny w istniejącym grobie rodzinnym lub w kolumbarium</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Względy ekologiczne i mniejsze zapotrzebowanie na przestrzeń</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Indywidualne życzenie osoby zmarłej</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Możliwość organizacji ceremonii w dowolnym terminie</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="glass-card p-8 rounded-xl">
          
          <h3 className="text-xl font-playfair text-white mb-4">
            Kompleksowa usługa kremacji obejmuje:
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                <Flame className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Proces kremacji</h4>
                <p className="text-gray-300">
                  Profesjonalne przeprowadzenie procesu kremacji w nowoczesnym krematorium, 
                  z zachowaniem wszelkich procedur i pełnego szacunku dla osoby zmarłej.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Organizacja ceremonii</h4>
                <p className="text-gray-300">
                  Pomoc w organizacji ceremonii pożegnalnej przed kremacją lub uroczystości 
                  z urną. Pełna oprawa ceremonialna dostosowana do indywidualnych potrzeb.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                <Box className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Wybór urny</h4>
                <p className="text-gray-300">
                  Szeroki wybór urn różnego rodzaju - metalowych, drewnianych, biodegradowalnych, 
                  ceramicznych, dostosowanych do preferencji rodziny.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <div className="glass-card p-8 rounded-xl">
          <h3 className="text-2xl font-playfair text-white mb-6 text-center">
            Proces kremacji - informacje
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 md:items-start gap-8">
            <div>
              <h4 className="text-xl font-medium text-white mb-4">Przebieg procesu kremacji:</h4>
              <ol className="space-y-3 list-decimal pl-6">
                <li className="text-gray-300">
                  <span className="font-medium text-white">Przygotowanie</span> - ciało osoby zmarłej 
                  jest przygotowywane do kremacji, usuwane są przedmioty metalowe (rozruszniki serca, 
                  protezy metalowe) oraz biżuteria.
                </li>
                <li className="text-gray-300">
                  <span className="font-medium text-white">Trumna kremacyjna</span> - ciało umieszczane 
                  jest w specjalnej trumnie kremacyjnej, która wykonana jest z materiałów łatwopalnych.
                </li>
                <li className="text-gray-300">
                  <span className="font-medium text-white">Kremacja</span> - trumna z ciałem umieszczana 
                  jest w piecu kremacyjnym, gdzie w temperaturze 850-1100°C następuje proces spopielenia.
                </li>
                <li className="text-gray-300">
                  <span className="font-medium text-white">Przygotowanie prochów</span> - po zakończeniu 
                  procesu spalania, szczątki są chłodzone, usuwane są fragmenty metali, a prochy są 
                  mielone do konsystencji piasku.
                </li>
                <li className="text-gray-300">
                  <span className="font-medium text-white">Złożenie do urny</span> - prochy umieszczane 
                  są w wybranej przez rodzinę urnie i przekazywane rodzinie lub przygotowywane do pochówku.
                </li>
              </ol>
            </div>
            
            <div>
              <h4 className="text-xl font-medium text-white mb-4">Wymagane dokumenty:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Akt zgonu osoby zmarłej</span>
                </li>
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Karta zgonu przeznaczona do celów kremacji</span>
                </li>
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Pisemna zgoda członka rodziny na kremację (najczęściej osoby organizującej pogrzeb)</span>
                </li>
              </ul>
              
              <h4 className="text-xl font-medium text-white mt-8 mb-4">Co po kremacji?</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Złożenie urny w grobie ziemnym</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Umieszczenie urny w kolumbarium</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Złożenie urny w grobie rodzinnym</span>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-8 rounded-xl">
          <h2 className="text-2xl font-playfair text-white mb-4">Dwa warianty pogrzebu z kremacją</h2>
          <ol className="space-y-4 list-decimal pl-6 text-gray-300">
            <li>
              <span className="font-medium text-white">Ceremonia z trumną, potem kremacja</span> – msza lub
              pożegnanie w kaplicy z trumną, następnie kremacja i późniejszy pochówek urny.
            </li>
            <li>
              <span className="font-medium text-white">Kremacja, potem ceremonia z urną</span> – najpierw
              kremacja, a uroczystość (w kościele, kaplicy lub na cmentarzu) odbywa się z urną.
            </li>
          </ol>
          <p className="mt-4 text-gray-300">
            Porównanie z pochówkiem tradycyjnym: <Link href="/pogrzeb-lodz" className="text-primary underline">pogrzeb w Łodzi – organizacja i koszty</Link>.
          </p>
        </div>
        <div className="glass-card p-8 rounded-xl">
          <h2 className="text-2xl font-playfair text-white mb-4">Ile kosztuje kremacja w Łodzi?</h2>
          <p className="text-gray-300 mb-3">
            Koszt pogrzebu z kremacją składa się m.in. z opłaty za kremację w krematorium, trumny kremacyjnej, urny,
            przewozu, przygotowania zmarłego, ceremonii oraz opłat cmentarnych za pochówek urny. Zwykle jest
            niższy niż pochówek tradycyjny, bo urna wymaga mniejszego miejsca.
          </p>
          <p className="text-gray-300">
            Dokładną wycenę podajemy przed podpisaniem umowy. Pogrzeb organizujemy bez zaliczki i rozliczamy z
            zasiłku pogrzebowego (7000 zł od 2026 r.) – zadzwoń, a od razu powiemy, co obejmie kwota zasiłku.
          </p>
          <a href="tel:+48602274661" data-phone-location="kremacja_koszt" className="mt-5 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-black">
            Zapytaj o wycenę: 602 274 661
          </a>
        </div>
      </div>

      <div className="mt-10 text-gray-300 px-4 sm:px-0">
        <h2 className="text-2xl font-playfair text-white mb-3">Gdzie trafia urna? Przepisy w skrócie</h2>
        <p>
          Według obecnych przepisów prochy chowa się na cmentarzu – w grobie (także dochowując urnę do grobu
          rodzinnego) lub w kolumbarium. Przechowywanie urny w domu i rozsypywanie prochów nie są dopuszczone.
          Więcej: <Link href="/poradnik/czy-urne-z-prochami-mozna-trzymac-w-domu" className="text-primary underline">czy można trzymać urnę w domu</Link>,{' '}
          <Link href="/asortyment/urny-lodz" className="text-primary underline">urny</Link>,{' '}
          <Link href="/asortyment/trumny-lodz" className="text-primary underline">trumny kremacyjne</Link>,{' '}
          <Link href="/cmentarze-lodz" className="text-primary underline">cmentarze w Łodzi</Link>.
        </p>
      </div>
    </ServiceLayout>
  )
}
