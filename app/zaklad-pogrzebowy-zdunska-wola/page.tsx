import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Phone, CheckCircle2, Award, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { BUSINESS_INFO, SITE_URL } from '@/lib/constants'
import FAQSchema from '@/components/structured-data/FAQSchema'
import ServiceSchema from '@/components/structured-data/ServiceSchema'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'

export const metadata: Metadata = {
    title: 'Zakład Pogrzebowy Zduńska Wola | Nekrolog Łódź',
    description: 'Profesjonalny zakład pogrzebowy w Zduńskiej Woli. Kompleksowe usługi pogrzebowe, kremacja, transport zmarłych. Dostępni 24/7. Tel: +48 602 274 661.',
    keywords: ['zakład pogrzebowy zduńska wola', 'usługi pogrzebowe zduńska wola', 'pogrzeb zduńska wola'],
    alternates: {
        canonical: `${SITE_URL}/zaklad-pogrzebowy-zdunska-wola`,
    },
    openGraph: {
        title: 'Zakład Pogrzebowy Zduńska Wola - Nekrolog Łódź',
        description: 'Kompleksowe usługi pogrzebowe w Zduńskiej Woli. Pogrzeb bez zaliczki.',
        url: `${SITE_URL}/zaklad-pogrzebowy-zdunska-wola`,
        type: 'website',
    },
}

const cityName = 'Zduńska Wola'
const citySlug = 'zdunska-wola'

export default function ZdunskaWolaPage() {
    const faqData = [
        {
            question: `Czy Nekrolog Łódź organizuje pogrzeby w Zduńskiej Woli?`,
            answer: `Tak, organizujemy kompleksowe pogrzeby w Zduńskiej Woli i okolicach. Nasza siedziba znajduje się przy ul. Legionów 48 w Łodzi.`
        },
        {
            question: 'Czy muszę płacić za pogrzeb z góry?',
            answer: 'Nie. Organizujemy pogrzeb i finansujemy wszystkie koszty. Rozliczenie następuje bezpośrednio z zasiłkiem pogrzebowym ZUS/KRUS.'
        },
        {
            question: `Jak szybko możecie dotrzeć do Zduńskiej Woli?`,
            answer: `Jesteśmy dostępni całodobowo. Zapewniamy szybki dojazd do Zduńskiej Woli w razie potrzeby.`
        },
        {
            question: 'Jakie usługi oferujecie?',
            answer: 'Oferujemy kompleksową organizację pogrzebów, kremację, transport zmarłych, przygotowanie ciała, załatwianie formalności oraz pełen asortyment pogrzebowy.'
        }
    ]

    const breadcrumbs = [
        { name: 'Strona Główna', url: '/' },
        { name: `Zakład Pogrzebowy ${cityName}`, url: `/zaklad-pogrzebowy-${citySlug}` }
    ]

    return (
        <div className="bg-black text-white min-h-screen">
            <FAQSchema faqs={faqData} />
            <ServiceSchema
                serviceName={`Zakład Pogrzebowy ${cityName}`}
                description={`Kompleksowe usługi pogrzebowe w ${cityName}. Organizacja ceremonii, kremacja, transport zmarłych.`}
                url={`/zaklad-pogrzebowy-${citySlug}`}
            />
            <BreadcrumbSchema items={breadcrumbs} />

            <section className="relative pt-20 pb-12 bg-gradient-to-b from-black via-black/95 to-black/90">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-playfair font-medium mb-6 text-white leading-tight">
                            Zakład Pogrzebowy {cityName}
                        </h1>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6" />
                        <p className="text-xl text-gray-300 mb-8">
                            Profesjonalne usługi pogrzebowe w {cityName} - {BUSINESS_INFO.name}
                        </p>
                        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
                            <p className="text-lg text-white mb-4">
                                <strong>Pogrzeb bez zaliczki - rozliczenie z ZUS/KRUS</strong>
                            </p>
                            <p className="text-gray-300 mb-4">
                                Organizujemy kompleksowe pogrzeby w {cityName}. Siedziba: Legionów 48, Łódź. Dostępni całodobowo.
                            </p>
                            <a
                                href="tel:+48602274661"
                                className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition"
                            >
                                <Phone className="w-5 h-5" />
                                Zadzwoń: +48 602 274 661
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-black/95">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-playfair font-medium text-white mb-8 text-center">
                            Usługi Pogrzebowe w {cityName}
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <Card className="bg-black/50 border-primary/20">
                                <CardContent className="p-6">
                                    <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">Organizacja Ceremonii</h3>
                                    <p className="text-gray-300">
                                        Kompleksowa organizacja pogrzebów katolickich, świeckich i innych wyznań w ${cityName}.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-black/50 border-primary/20">
                                <CardContent className="p-6">
                                    <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">Transport Zmarłych</h3>
                                    <p className="text-gray-300">
                                        Zapewniamy profesjonalny transport zmarłych z {cityName} oraz do {cityName}.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-black/50 border-primary/20">
                                <CardContent className="p-6">
                                    <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">Wsparcie Formalne</h3>
                                    <p className="text-gray-300">
                                        Załatwiamy wszystkie formalności: zasiłek pogrzebowy, akt zgonu, rezerwację miejsca.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <h2 className="text-2xl font-playfair font-medium text-white mb-4">
                                Profesjonalny Zakład Pogrzebowy obsługujący {cityName}
                            </h2>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                {BUSINESS_INFO.name} z siedzibą przy ul. Legionów 48 w Łodzi świadczy kompleksowe usługi pogrzebowe
                                dla mieszkańców {cityName} i okolic w województwie łódzkim.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-playfair font-medium text-white mb-8 text-center">
                            Najczęściej zadawane pytania
                        </h2>
                        <div className="space-y-6">
                            {faqData.map((faq, index) => (
                                <div key={index} className="bg-black/50 border border-primary/20 rounded-lg p-6">
                                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gradient-to-b from-black/95 to-black text-center">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-playfair font-medium text-white mb-4">
                            Potrzebujesz pomocy w {cityName}?
                        </h2>
                        <p className="text-gray-300 mb-6">
                            Jesteśmy dostępni całodobowo. Skontaktuj się z nami już teraz.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+48602274661"
                                className="inline-flex items-center justify-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition"
                            >
                                <Phone className="w-5 h-5" />
                                Zadzwoń: +48 602 274 661
                            </a>
                            <Link
                                href="/kontakt"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-white/20 transition"
                            >
                                Formularz kontaktowy
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
