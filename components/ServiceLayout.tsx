'use client';

import { Fragment, ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Phone } from 'lucide-react';
import { RATING } from '@/lib/reputation';
import { BUSINESS_INFO } from '@/lib/constants';
import ServiceSchema from '@/components/structured-data/ServiceSchema';
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema';
import FAQSchema, { FAQItem } from '@/components/structured-data/FAQSchema';
import OrganizationSchema from '@/components/structured-data/OrganizationSchema';
import RelatedLinks from '@/components/RelatedLinks';
import { getBreadcrumbItems } from '@/lib/site-navigation';

type ServiceLayoutProps = {
  children?: ReactNode;
  title: string;
  description: string;
  backgroundImage?: string;
  faqItems?: FAQItem[];
};

const ServiceLayout = ({ children, title, description, backgroundImage, faqItems }: ServiceLayoutProps) => {
  const pathname = usePathname() || '/';
  const breadcrumbs = getBreadcrumbItems(pathname, title);

  const defaultFaqItems: FAQItem[] = [
    {
      question: `Czy ${title.toLowerCase()} obejmuje pełną organizację formalności?`,
      answer:
        'Tak. Pomagamy w formalnościach urzędowych, organizacji ceremonii i koordynacji wszystkich etapów.',
    },
    {
      question: 'Czy muszę opłacić usługę z góry?',
      answer:
        'Nie. W wielu przypadkach organizujemy usługę bez kosztów z góry i pomagamy w rozliczeniu zasiłku pogrzebowego ZUS/KRUS.',
    },
    {
      question: 'Jak szybko mogę uzyskać pomoc?',
      answer:
        'Jesteśmy dostępni całodobowo. Zadzwoń pod +48 602 274 661, a od razu przeprowadzimy Cię przez kolejne kroki.',
    },
  ];
  const pageFaqItems = faqItems && faqItems.length > 0 ? faqItems : defaultFaqItems;

  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        serviceName={title}
        description={description}
        url={pathname}
      />
      <FAQSchema faqs={pageFaqItems} />
      <div className="bg-black text-white">
      <section className="relative pt-20 pb-16 md:pb-20 min-h-[40vh] flex items-center">
        {backgroundImage ? (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{ backgroundImage: `url(${backgroundImage})`, filter: 'brightness(0.2)' }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90 z-0">
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-primary/10"></div>
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 relative z-10 pt-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-medium mb-6 text-white">{title}</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">{description}</p>
            {/* Primary call action + trust line in the first screen of every service page */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
              <a
                href="tel:+48602274661"
                data-phone-location="service_hero"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 text-lg font-semibold text-black hover:bg-primary/90"
              >
                <Phone className="h-5 w-5" aria-hidden />
                <span>Zadzwoń 24/7: 602 274 661</span>
              </a>
              <Link
                href="/pogrzeb-bez-zaliczki"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-md border border-primary/30 bg-black/50 px-6 py-4 text-white hover:bg-black/70"
              >
                Pogrzeb bez zaliczki – jak to działa
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              Odbieramy całą dobę · rodzinna firma od {BUSINESS_INFO.foundedYear} r. ·{' '}
              {RATING.ratingValue.toFixed(1).replace('.', ',')}/5 z {RATING.reviewCount} opinii w Google
            </p>
          </div>
        </div>
      </section>

      <div className="breadcrumb-bar sticky top-12 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">
              Strona Główna
            </Link>
            <ArrowRight className="mx-2 h-3 w-3" />
            {breadcrumbs.slice(1, -1).map((item) => (
              <Fragment key={item.url || item.name}>
                <Link href={item.url || '/'} className="hover:text-primary transition-colors">
                  {item.name}
                </Link>
                <ArrowRight className="mx-2 h-3 w-3" />
              </Fragment>
            ))}
            <span className="text-gray-300">{title}</span>
          </div>
        </div>
      </div>

      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          {children}

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-playfair text-white mb-6 text-center">
              Najczęściej Zadawane Pytania
            </h2>
            <div className="grid gap-4">
              {pageFaqItems.map((faq) => (
                <div key={faq.question} className="bg-black/40 border border-white/10 rounded-lg p-5">
                  <h3 className="text-lg text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-xl border border-primary/30 bg-primary/5 p-6 md:p-8 text-center">
            <h2 className="text-2xl font-playfair text-white mb-2">Potrzebujesz pomocy teraz?</h2>
            <p className="text-gray-300 mb-5 max-w-2xl mx-auto">
              Zadzwoń o każdej porze. Spokojnie powiemy, co zrobić w pierwszej kolejności, i podamy koszt –
              bez zobowiązań i bez płatności z góry.
            </p>
            <a
              href="tel:+48602274661"
              data-phone-location="service_bottom"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-semibold text-black hover:bg-primary/90"
            >
              <Phone className="h-5 w-5" aria-hidden />
              <span>+48 602 274 661</span>
            </a>
          </div>

          <RelatedLinks
            pathname={pathname}
            heading="Powiązane usługi i poradniki"
            intro="Te strony pomagają rodzinie przejść od informacji do działania: formalności, kontakt i usługi realizowane przez zakład pogrzebowy w Łodzi."
          />
        </div>
      </section>
    </div>
      </>
  );
};

export default ServiceLayout;
