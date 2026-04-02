import Link from 'next/link'
import { Phone, Globe, FileText, Clock, ShieldCheck } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'
import FAQSchema from '@/components/structured-data/FAQSchema'
import ServiceSchema from '@/components/structured-data/ServiceSchema'
import LanguageSwitcher from '@/components/international/LanguageSwitcher'
import StickyContactBar from '@/components/international/StickyContactBar'
import UrgentTransportForm from '@/components/international/UrgentTransportForm'
import {
  buildInternationalOrganizationSchema,
  buildInternationalWhatsappLink,
  type InternationalResolvedPage,
} from '@/lib/international-seo'
import { BUSINESS_INFO } from '@/lib/constants'

export default function InternationalPageTemplate({ page }: { page: InternationalResolvedPage }) {
  const whatsappUrl = buildInternationalWhatsappLink(page)
  const organizationSchema = buildInternationalOrganizationSchema(page.locale, page.url)

  return (
    <>
      <BreadcrumbSchema items={page.breadcrumbs} />
      <FAQSchema faqs={page.faqItems} name={page.title} />
      <ServiceSchema serviceName={page.schemaServiceName} description={page.metaDescription} url={page.url} />
      {(page.kind === 'home' || page.slugSegments[0]?.includes('contact')) && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      )}

      <div className="min-h-screen bg-gradient-to-b from-[#101214] via-[#171a1d] to-[#0e1012] pb-24 md:pb-12">
        <section className="border-b border-white/10 bg-white/[0.02]">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-primary/80">{page.heroEyebrow}</p>
              <p className="mt-2 max-w-3xl text-sm text-gray-300">{page.lead}</p>
            </div>
            <LanguageSwitcher currentLocale={page.locale} alternates={page.languageAlternates} />
          </div>
        </section>

        <section className="container mx-auto px-4 py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
              <div>
                <h1 className="max-w-4xl text-4xl font-playfair text-white md:text-6xl">{page.heroTitle}</h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">{page.heroSummary}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {page.trustSignals.map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-gray-200">
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="tel:+48602274661" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 font-semibold text-black">
                  <Phone className="h-4 w-4" />
                  +48 602 274 661
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-6 py-4 font-semibold text-white"
                >
                  <Globe className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <UrgentTransportForm
                title={page.formTitle}
                summary={page.formSummary}
                whatsappUrl={whatsappUrl}
                locale={page.locale}
                pageType={page.kind === 'home' ? 'home' : page.kind === 'service' ? 'service' : 'city'}
                internationalPhone={BUSINESS_INFO.phone}
              />

              <Card className="border-white/10 bg-black/30">
                <CardContent className="space-y-4 p-6">
                  <h2 className="text-2xl font-playfair text-white">{page.ctaTitle}</h2>
                  <p className="text-sm leading-relaxed text-gray-300">{page.ctaSummary}</p>
                  <div className="space-y-3">
                    {page.quickFacts.map((item) => (
                      <div key={item} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200">
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="container mx-auto grid gap-6 px-4 pb-14 md:grid-cols-4">
          {[
            { icon: ShieldCheck, label: page.trustSignals[0] },
            { icon: FileText, label: page.trustSignals[1] },
            { icon: Globe, label: page.trustSignals[2] },
            { icon: Clock, label: page.trustSignals[3] },
          ].map((item) => (
            <Card key={item.label} className="border-white/10 bg-black/30">
              <CardContent className="space-y-3 p-6">
                <item.icon className="h-7 w-7 text-primary" />
                <p className="text-sm leading-relaxed text-gray-300">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="container mx-auto space-y-8 px-4 pb-14">
          {page.sections.map((section) => (
            <Card key={section.title} className="border-white/10 bg-black/30">
              <CardContent className="p-8">
                <h2 className="text-3xl font-playfair text-white">{section.title}</h2>
                <div className="mt-5 space-y-4 text-gray-300">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.list && (
                  <ul className="mt-6 grid gap-3 md:grid-cols-2">
                    {section.list.map((item) => (
                      <li key={item} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="container mx-auto px-4 pb-14">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/10 to-white/[0.02]">
            <CardContent className="p-8 md:p-10">
              <h2 className="text-3xl font-playfair text-white">{page.ctaTitle}</h2>
              <p className="mt-4 max-w-3xl text-gray-300">{page.ctaSummary}</p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <a href="tel:+48602274661" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 font-semibold text-black">
                  <Phone className="h-4 w-4" />
                  +48 602 274 661
                </a>
                <Link
                  href={page.relatedLinks[page.relatedLinks.length - 1]?.href || '/kontakt'}
                  className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-6 py-4 font-semibold text-white"
                >
                  {page.relatedLinks[page.relatedLinks.length - 1]?.label || 'Contact'}
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="container mx-auto px-4 pb-14">
          <h2 className="text-3xl font-playfair text-white">FAQ</h2>
          <div className="mt-6 grid gap-4">
            {page.faqItems.map((faq) => (
              <Card key={faq.question} className="border-white/10 bg-black/30">
                <CardContent className="p-6">
                  <h3 className="text-xl text-white">{faq.question}</h3>
                  <p className="mt-3 text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 pb-10">
          <h2 className="text-3xl font-playfair text-white">Internal links</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {page.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-white/10 bg-white/5 p-5 text-sm text-gray-200 transition hover:border-primary/30 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </div>

      <StickyContactBar
        phoneHref={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
        callLabel="+48 602 274 661"
        whatsappLabel="WhatsApp"
        whatsappUrl={whatsappUrl}
        locale={page.locale}
        pageType={page.kind === 'home' ? 'home' : page.kind === 'service' ? 'service' : 'city'}
        routeSlug={page.slugSegments.join('/') || undefined}
        formLabel={page.locale === 'pl' ? 'Formularz' : 'Form'}
      />
    </>
  )
}
