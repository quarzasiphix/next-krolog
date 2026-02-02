import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { normalizeForUrl } from '@/lib/utils';
import { SITE_URL } from '@/lib/constants';

const labelOverrides: Record<string, string> = {
  'uslugi-pogrzebowe-lodz': 'Usługi Pogrzebowe',
  'uslugi': 'Usługi',
  'asortyment': 'Asortyment',
  'odziez-lodz': 'Odzież',
  'trumny-lodz': 'Trumny',
  'urny-lodz': 'Urny',
  'wiazanki-lodz': 'Wiązanki',
  'wience-lodz': 'Wieńce',
  'blog': 'Blog',
  'o-nas': 'O nas',
  'kontakt': 'Kontakt',
};

const formatLabel = (segment: string) => {
  const normalized = segment.toLowerCase();
  if (labelOverrides[normalized]) {
    return labelOverrides[normalized];
  }

  return normalized
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Static breadcrumb component for static export
const Breadcrumb = ({ pathname }: { pathname?: string } = {}) => {
  const currentPath = pathname || '/';

  if (currentPath === '/') {
    return null; // No breadcrumb on homepage
  }

  const segments = currentPath.split('/').filter(Boolean);
  
  const crumbs = segments.map((segment, index) => {
    const pathAccumulator = '/' + segments.slice(0, index + 1).join('/');
    const label = formatLabel(segment);

    return {
      href: pathAccumulator,
      label,
    };
  });

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Strona główna',
        item: SITE_URL,
      },
      ...crumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: crumb.label,
        item: `${SITE_URL}${crumb.href}`,
      })),
    ],
  };

  return (
    <nav className="container mx-auto px-4 py-4 text-sm mt-20" aria-label="Nawigacja okruszkowa">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ol className="flex flex-wrap items-center text-muted-foreground">
        <li className="flex items-center">
          <Link href="/" className="text-primary hover:underline">
            Strona główna
          </Link>
          <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
        </li>
        {crumbs.map((crumb, index) => {
          const last = index === crumbs.length - 1;

          return (
            <li key={crumb.href} className="flex items-center">
              {last ? (
                <span className="text-foreground">{crumb.label}</span>
              ) : (
                <>
                  <Link href={crumb.href} className="text-primary hover:underline">
                    {crumb.label}
                  </Link>
                  <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
