import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Phone, CheckCircle2, Award, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { BUSINESS_INFO, SITE_URL } from '@/lib/constants'
import FAQSchema from '@/components/structured-data/FAQSchema'
import ServiceSchema from '@/components/structured-data/ServiceSchema'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'

export const metadata: Metadata = {
    title: 'Zakład Pogrzebowy Pabianice | Nekrolog Łódź',
    description: 'Profesjonalny zakład pogrzebowy w Pabianicach. Kompleksowe usługi pogrzebowe, kremacja, transport zmarłych. Dostępni 24/7. Tel: +48 602 274 661. Pogrzeb bez zaliczki.',
    keywords: ['zakład pogrzebowy pabianice', 'usługi pogrzebowe pabianice', 'pogrzeb pabianice', 'kremacja pabianice', 'transport zmarłych pabianice'],
    alternates: {
        canonical: `${SITE_URL}/zaklad-pogrzebowy-pabianice`,
    },
    openGraph: {
        title: 'Zakład Pogrzebowy Pabianice - Nekrolog Łódź',
        description: 'Kompleksowe usługi pogrzebowe w Pabianicach. Pogrzeb bez zaliczki. Dostępni całodobowo.',
        url: `${SITE_URL}/zaklad-pogrzebowy-pabianice`,
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
}

const cityName = 'Pabianice'
const citySlug = 'pabianice'

export default function PabianicePage() {
    const faqData = [
        {
            question: `Czy Nekrolog Łódź organizuje pogrzeby w ${cityName}?`,
            answer: `Tak, organizujemy kompleksowe pogrzeby w ${cityName} i okolicach. Oferujemy pełen zakres usług pogrzebowych, transport zmarłych oraz załatwiamy wszystkie formalności.`
        },
        {
            question: 'Czy muszę płacić za pogrzeb z góry?',
            answer: 'Nie. Organizujemy pogrzeb i finansujemy wszystkie koszty. Rozliczenie następuje bezpośrednio z zasiłkiem pogrzebowym ZUS/KRUS. Nie musisz martwić się o pieniądze w tym trudnym czasie.'
        },
        {
            question: `Jak szybko możecie dotrzeć do ${cityName}?`,
            answer: `Jesteśmy dostępni całodobowo i możemy dotrzeć do ${cityName} w ciągu godziny od zgłoszenia. Nasz zespół jest zawsze gotowy do natychmiastowej pomocy.`
        },
        {
            question: 'Jakie usługi oferujecie?',
            answer: 'Oferujemy kompleksową organizację pogrzebów, kremację, transport zmarłych, przygotowanie ciała, załatwianie formalności, wiązanki i wieńce, oprawę muzyczną oraz dostęp do szerokiego asortymentu trumien i urn.'
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
                                Organizujemy kompleksowe pogrzeby w {cityName}. Dostępni całodobowo, 7 dni w tygodniu.
                            </p>
                            <a
                                href="tel:+48602274661"
                                className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition"
                            >
                                <Phone className="w-5 h-5" />
                                Zadzwoń: +48 602 274 661
                            </a>
                            <p className="text-sm text-gray-400 mt-4">
                                Dostępni całodobowo, 7 dni w tygodniu
                            </p>
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
                                        Kompleksowa organizacja pogrzebów katolick ich, świeckich i innych wyznań w {cityName}.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-black/50 border-primary/20">
                                <CardContent className="p-6">
                                    <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">Transport Zmarłych</h3>
                                    <p className="text-gray-300">
                                        Zapewniamy profesjonalny transport zmarłych z {cityName} oraz do {cityName} z całej Polski i Europy.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-black/50 border-primary/20">
                                <CardContent className="p-6">
                                    <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">Wsparcie Formalne</h3>
                                    <p className="text-gray-300">
                                        Załatwiamy wszystkie formalności: zasiłek pogrzebowy, akt zgonu, rezerwację miejsca na cmentarzu.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="bg-primary/10 border border-primary/30 rounded-lg p-8 mb-12">
                            <h3 className="text-2xl font-playfair font-medium text-white mb-6">
                                Dlaczego warto wybrać nas w {cityName}?
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex items-start gap-3">
                                    <Award className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">20+ Lat Doświadczenia</h4>
                                        <p className="text-gray-300">Profesjonalna obsługa setek rodzin rocznie</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Heart className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">Empatia i Szacunek</h4>
                                        <p className="text-gray-300">Rozumiemy potrzeby rodzin w trudnych chwilach</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">Dostępność 24/7</h4>
                                        <p className="text-gray-300">Całodobowa gotowość do pomocy</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">Szybki Dojazd</h4>
                                        <p className="text-gray-300">Dotrzemy do {cityName} w ciągu godziny</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <h2 className="text-2xl font-playfair font-medium text-white mb-4">
                                Profesjonalny Zakład Pogrzebowy obsługujący {cityName}
                            </h2>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                {BUSINESS_INFO.name} to renomowany zakład pogrzebowy z siedzibą w Łodzi, który od wielu lat
                                świadczy kompleksowe usługi pogrzebowe dla mieszkańców {cityName} i okolic. Specjalizujemy
                                się w organizacji ceremonii pogrzebowych dostosowanych do indywidualnych potrzeb każdej rodziny.
                            </p>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Nasz zespół doświadczonych specjalistów zadba o każdy szczegół uroczystości pogrzebowej,
                                zapewniając godne pożegnanie bliskiej osoby. Oferujemy szeroki wybór trumien, urn,
                                dekoracji kwiatowych oraz oprawę muzyczną ceremonii.
                            </p>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Rozumiemy, jak trudne są chwile związane z utratą bliskiej osoby. Dlatego oferujemy nie tylko
                                profesjonalne usługi, ale przede wszystkim wsparcie emocjonalne i pomoc w każdym aspekcie
                                organizacji pogrzebu w {cityName}.
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
