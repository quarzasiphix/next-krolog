"use client";

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { normalizeForUrl } from '@/lib/utils';
import { useBreadcrumbContext } from '@/components/breadcrumb-context';

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

const Breadcrumb = () => {
  const pathname = usePathname();
  const { overrides, hide } = useBreadcrumbContext();

  const crumbs = useMemo(() => {
    if (!pathname) return [];

    const segments = pathname.split('/').filter(Boolean);
    const overrideMap = new Map<string, string>();

    overrides.forEach((override) => {
      const key = override.href
        ? normalizeForUrl(override.href)
        : override.segment
        ? normalizeForUrl(override.segment)
        : '';

      if (key) {
        overrideMap.set(key, override.label);
      }
    });

    let pathAccumulator = '';

    return segments.map((segment) => {
      pathAccumulator += `/${segment}`;
      const normalizedHref = normalizeForUrl(pathAccumulator);
      const normalizedSegment = normalizeForUrl(segment);

      const label =
        overrideMap.get(normalizedHref) ||
        overrideMap.get(normalizedSegment) ||
        formatLabel(segment);

      return {
        href: pathAccumulator,
        label,
      };
    });
  }, [pathname, overrides]);

  if (hide || crumbs.length === 0) {
    return null;
  }

  return (
    <nav className="container mx-auto px-4 py-4 text-sm" aria-label="Nawigacja okruszkowa">
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
