'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

type ServiceLayoutProps = {
  children?: ReactNode;
  title: string;
  description: string;
  backgroundImage: string;
};

const formatSegment = (segment: string) =>
  segment
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

const ServiceLayout = ({ children, title, description, backgroundImage }: ServiceLayoutProps) => {
  const pathname = usePathname();

  const pathParts = pathname.split('/').filter(Boolean);

  let parentPath = '/';
  let parentLabel = 'Strona Główna';

  if (pathParts.length > 1) {
    parentPath = `/${pathParts[0]}`;
    parentLabel = formatSegment(pathParts[0]);
  }

  return (
    <div className="bg-black text-white">
      <section className="relative pt-20 pb-16 md:pb-20 min-h-[40vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${backgroundImage})`, filter: 'brightness(0.2)' }}
        />

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
        </div>
      </section>
    </div>
  );
};

export default ServiceLayout;
