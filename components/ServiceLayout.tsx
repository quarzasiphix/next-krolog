'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import ServiceSchema from '@/components/structured-data/ServiceSchema';
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema';
import FAQSchema, { FAQItem } from '@/components/structured-data/FAQSchema';

type ServiceLayoutProps = {
  children?: ReactNode;
  title: string;
  description: string;
  backgroundImage?: string;
};

const formatSegment = (segment: string) =>
  segment
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

const ServiceLayout = ({ children, title, description, backgroundImage }: ServiceLayoutProps) => {
  const pathname = usePathname() || '/';

  const pathParts = pathname.split('/').filter(Boolean);

  let parentPath = '/';
  let parentLabel = 'Strona Główna';

  if (pathParts.length > 1) {
    parentPath = `/${pathParts[0]}`;
    parentLabel = formatSegment(pathParts[0]);
  }

  const breadcrumbs = [
    { name: 'Strona Główna', url: '/' },
    ...(pathParts.length > 1 ? [{ name: parentLabel, url: parentPath }] : []),
    { name: title }
  ];

  const faqItems: FAQItem[] = [
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

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        serviceName={title}
        description={description}
        url={pathname}
      />
      <FAQSchema faqs={faqItems} />
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
            {pathParts.length > 1 && (
              <>
                <Link href={parentPath} className="hover:text-primary transition-colors">
                  {parentLabel}
                </Link>
                <ArrowRight className="mx-2 h-3 w-3" />
              </>
            )}
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
              {faqItems.map((faq) => (
                <div key={faq.question} className="bg-black/40 border border-white/10 rounded-lg p-5">
                  <h3 className="text-lg text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
      </>
  );
};

export default ServiceLayout;
