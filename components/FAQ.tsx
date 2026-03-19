import Link from 'next/link'
import { FAQ_ENTRIES, SITE_URL } from '@/lib/constants'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/#faq`,
  mainEntity: FAQ_ENTRIES.map((entry, index) => ({
    '@type': 'Question',
    name: entry.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: entry.answer,
    },
  })),
}

const FAQ = () => {
  return (
    <section id="faq" className="py-10 bg-black/85 text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-4">Najczęściej zadawane pytania</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Zebraliśmy odpowiedzi na najczęstsze pytania dotyczące formalności pogrzebowych i wsparcia, jakie
            oferujemy rodzinom w Łodzi.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            <Link
              href="/kontakt"
              className="rounded-full border border-primary/60 px-4 py-2 text-primary hover:bg-primary/10 transition-colors"
            >
              Skontaktuj się z nami
            </Link>
            <Link
              href="/uslugi-pogrzebowe-lodz"
              className="rounded-full border border-white/20 px-4 py-2 text-gray-200 hover:border-primary/40 hover:text-white transition-colors"
            >
              Usługi pogrzebowe Łódź
            </Link>
            <Link
              href="/poradnik/zasilek-pogrzebowy-zus"
              className="rounded-full border border-white/20 px-4 py-2 text-gray-200 hover:border-primary/40 hover:text-white transition-colors"
            >
              Zasiłek pogrzebowy ZUS
            </Link>
          </div>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

        <div className="space-y-6">
          {FAQ_ENTRIES.map((entry, index) => (
            <div
              key={entry.question}
              className="bg-white/5 border border-white/10 rounded-lg p-6 shadow-sm hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                <span className="mr-2 text-primary/70">{index + 1}.</span>
                {entry.question}
              </h3>
              <p className="text-gray-200 leading-relaxed">{entry.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
