import { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import { BreadcrumbController } from '@/components/breadcrumb-context'

export const metadata: Metadata = {
  title: { absolute: 'Polityka Prywatności | Nekrolog Łódź' },
  description: 'Polityka prywatności serwisu nekrolog-lodz.com – informacje o przetwarzaniu danych osobowych, cookies oraz prawach użytkownika zgodnie z RODO.',
  alternates: {
    canonical: `${SITE_URL}/polityka-prywatnosci`,
  },
  robots: { index: true, follow: true },
}

export default function PolitykaPrywatnosciPage() {
  return (
    <>
      <BreadcrumbController
        overrides={[{ segment: 'polityka-prywatnosci', label: 'Polityka Prywatności' }]}
      />
      <div className="bg-black text-white min-h-screen">
        <div className="container mx-auto px-4 py-16 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-playfair font-medium mb-2 text-white">
            Polityka Prywatności
          </h1>
          <p className="text-gray-400 text-sm mb-10">Ostatnia aktualizacja: 4 czerwca 2026</p>

          <div className="space-y-10 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-xl font-playfair font-medium text-white mb-3">1. Administrator danych osobowych</h2>
              <p>
                Administratorem danych osobowych zbieranych za pośrednictwem serwisu{' '}
                <strong className="text-white">nekrolog-lodz.com</strong> jest:
              </p>
              <address className="not-italic mt-3 pl-4 border-l border-white/10 space-y-1">
                <p className="text-white font-medium">Nekrolog Łódź – Usługi Pogrzebowe Jolanta Kostowska</p>
                <p>ul. Legionów 48, 90-702 Łódź</p>
                <p>NIP: 7271089145</p>
                <p>Tel.: <a href="tel:+48602274661" className="text-primary hover:underline">+48 602 274 661</a></p>
                <p>E-mail: <a href="mailto:kontakt@nekrolog-lodz.com" className="text-primary hover:underline">kontakt@nekrolog-lodz.com</a></p>
              </address>
            </section>

            <section>
              <h2 className="text-xl font-playfair font-medium text-white mb-3">2. Jakie dane zbieramy i w jakim celu</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-white font-medium mb-1">Formularz kontaktowy</h3>
                  <p>
                    Gdy wypełniasz formularz kontaktowy, zbieramy imię, numer telefonu i/lub adres e-mail oraz treść wiadomości.
                    Dane te przetwarzamy w celu udzielenia odpowiedzi na Twoje zapytanie (art. 6 ust. 1 lit. b i f RODO).
                    Przechowujemy je przez czas niezbędny do obsługi sprawy, nie dłużej niż 3 lata.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Połączenia telefoniczne</h3>
                  <p>
                    W przypadku kontaktu telefonicznego przetwarzamy dane podane w rozmowie (imię, dane dotyczące
                    organizowanego pogrzebu) w celu realizacji usługi (art. 6 ust. 1 lit. b RODO).
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Dane analityczne</h3>
                  <p>
                    Serwis może korzystać z narzędzi analitycznych (np. PostHog) zbierających anonimowe dane
                    o sposobie korzystania ze strony (odwiedzane podstrony, czas wizyty). Dane te nie pozwalają
                    na bezpośrednią identyfikację użytkownika i służą poprawie jakości serwisu (art. 6 ust. 1 lit. f RODO).
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-playfair font-medium text-white mb-3">3. Podstawy prawne przetwarzania</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Art. 6 ust. 1 lit. <strong className="text-white">b</strong> RODO – wykonanie umowy lub podjęcie działań przed jej zawarciem</li>
                <li>Art. 6 ust. 1 lit. <strong className="text-white">c</strong> RODO – wypełnienie obowiązku prawnego ciążącego na administratorze</li>
                <li>Art. 6 ust. 1 lit. <strong className="text-white">f</strong> RODO – prawnie uzasadniony interes administratora (analityka, bezpieczeństwo)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-playfair font-medium text-white mb-3">4. Odbiorcy danych</h2>
              <p>
                Dane osobowe mogą być przekazywane podmiotom świadczącym usługi na rzecz administratora:
                hostingodawcy, dostawcy narzędzi analitycznych oraz, w zakresie organizacji pogrzebu,
                podmiotom współpracującym (cmentarze, krematorium, kościoły). Dane nie są przekazywane
                do państw trzecich poza Europejskim Obszarem Gospodarczym bez odpowiednich zabezpieczeń.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-playfair font-medium text-white mb-3">5. Twoje prawa</h2>
              <p className="mb-3">Zgodnie z RODO przysługuje Ci prawo do:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-white">dostępu</strong> do swoich danych oraz otrzymania ich kopii</li>
                <li><strong className="text-white">sprostowania</strong> (poprawienia) danych</li>
                <li><strong className="text-white">usunięcia</strong> danych („prawo do bycia zapomnianym")</li>
                <li><strong className="text-white">ograniczenia</strong> przetwarzania danych</li>
                <li><strong className="text-white">przenoszenia</strong> danych</li>
                <li><strong className="text-white">wniesienia sprzeciwu</strong> wobec przetwarzania danych</li>
                <li>wniesienia skargi do <strong className="text-white">Prezesa UODO</strong> (ul. Stawki 2, 00-193 Warszawa)</li>
              </ul>
              <p className="mt-3">
                Aby skorzystać z powyższych praw, skontaktuj się z nami pod adresem{' '}
                <a href="mailto:kontakt@nekrolog-lodz.com" className="text-primary hover:underline">
                  kontakt@nekrolog-lodz.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-playfair font-medium text-white mb-3">6. Pliki cookies</h2>
              <p className="mb-3">
                Serwis korzysta z plików cookies – małych plików tekstowych zapisywanych na urządzeniu użytkownika.
                Wyróżniamy:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-white">Cookies niezbędne</strong> – zapewniające podstawowe funkcjonowanie serwisu</li>
                <li><strong className="text-white">Cookies analityczne</strong> – zbierające anonimowe dane o ruchu w serwisie</li>
              </ul>
              <p className="mt-3">
                Możesz zarządzać ustawieniami cookies w swojej przeglądarce. Wyłączenie cookies niezbędnych
                może wpłynąć na działanie serwisu.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-playfair font-medium text-white mb-3">7. Bezpieczeństwo danych</h2>
              <p>
                Stosujemy odpowiednie środki techniczne i organizacyjne chroniące dane osobowe przed
                nieuprawnionym dostępem, utratą lub zniszczeniem, w tym szyfrowanie transmisji danych (HTTPS).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-playfair font-medium text-white mb-3">8. Zmiany polityki prywatności</h2>
              <p>
                Zastrzegamy sobie prawo do aktualizacji niniejszej polityki. Aktualna wersja jest zawsze dostępna
                pod adresem{' '}
                <a href={`${SITE_URL}/polityka-prywatnosci`} className="text-primary hover:underline">
                  nekrolog-lodz.com/polityka-prywatnosci
                </a>
                . Data ostatniej aktualizacji widnieje na początku dokumentu.
              </p>
            </section>

          </div>
        </div>
      </div>
    </>
  )
}
